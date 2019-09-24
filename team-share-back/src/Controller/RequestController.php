<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Repository\ProjectRepository;
use App\Repository\RequestRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("/request", name="request")
 */
class RequestController extends AbstractController
{
    /**
     * @Route("/new", name="_new", methods={"POST"})
     */
    public function new(Request $request, UserRepository $userRepository, ProjectRepository $projectRepository, EntityManagerInterface $entityManager)
    {
        // Récupére le contenu du json reçu
        $jsonContent = $request->getContent();

        // Transforme le json en tableau
        $jsonContentArray = json_decode($jsonContent, true);
    
        // Crée une nouvelle requête
        $newRequest = new \App\Entity\Request;

        // Récupère le user qui crée la requête
        $user = $userRepository->findOneBy(['token' => $jsonContentArray['token']]); 

        // Récupère le projet concerné par la requête
        $project = $projectRepository->findOneBy(['id' => $jsonContentArray['project']]);

         // Hydrate la requête en fonction du tableau
        //$newRequest->setTitle($jsonContentArray['title']);
        //$newRequest->setContent($jsonContentArray['content']);
        $newRequest->setUser($user);
        $newRequest->setProject($project);

        // Enregistre la nouvelle requête en BDD
        $entityManager->persist($newRequest);
        $entityManager->flush();

        // Réponse temporaire si l'ajout a été effectué
        return new JsonResponse(["type" => "success", "message" => "La requête a été ajouté avec succés"]);
    }

    /**
     * @Route("/index", name="_index", methods={"GET", "POST"})
     */
    public function index(Request $request, RequestRepository $requestRepository, UserRepository $userRepository)
    {
        // Récupére le contenu du json reçu
        $jsonContent = $request->getContent();

        // Transforme le json en tableau
        $jsonContentArray = json_decode($jsonContent, true);

        // On renvoie un message d'erreur si le token est à null
        // if ($jsonContentArray['token'] === null){
        //     return new JsonResponse(["type" => "error", "message" => "Votre token est à null ou n'a pas été renseigné"]);
        // }
        
        // Récupère le destinataire de la requête
        $user = $userRepository->findOneBy(['token' => $jsonContentArray['token']]);

        // On renvoie un message d'erreur si l'utilisateur n'existe pas ou que le token n'a pas été trouvé dans la BDD
        if (!$user){
            return new JsonResponse(["type" => "error", "message" => "L'utilisateur n'existe pas ou le token n'est plus valide"]);
        }

        // Récupère les projets du destinataire
        $userProjects = $user->getProjects();


        // Boucle sur les projets du destinataire
        foreach ($userProjects as $project){
            //récupère l'auteur du projet en question
            $author = $project->getUsers()[0];
            //si l'auteur du projet est bien le destinataire de la requête
            if ($author === $user){
                //on ajoute dans un tableau les requêtes qui correspondent au projet en cours
                foreach($requestRepository->findByProjectId($project->getId()) as $request){
                    $requestsForUser[] = $request;
                }
            }
        }

        if (!empty($requestsForUser)){

            return new JsonResponse($requestsForUser);
        } else {
            return new JsonResponse(["type" => "info", "message" => "Aucune requête pour cet utilisateur"]);
        }
    }

    /**
     * @Route("/response", name="_response", methods={"POST"})
     */
    public function response(Request $request, RequestRepository $requestRepository, ProjectRepository $projectRepository, UserRepository $userRepository, EntityManagerInterface $entityManager)
    {
        // Récupére le contenu du json reçu
        $jsonContent = $request->getContent();
        
        // Transforme le json en tableau
        $jsonContentArray = json_decode($jsonContent, true);
        
        // Récupère la requête à mettre à jour
        $request = $requestRepository->findOneBy(['id' => $jsonContentArray['id']]);
        
        // Met à jour la réponse sur la requête
        $request->setResponse($jsonContentArray['response']);

        // Récupère l'utilisateur qui a répondu à la requête
        $user = $userRepository->findOneBy(['token' => $jsonContentArray['token']]);

        // Récupère le projet concerné
        $requestProject = $projectRepository->findOneBy(['id' => $jsonContentArray['project']['id']]);

        // Récupère l'auteur du projet
        $author = $requestProject->getUsers()[0];
        //si l'auteur du projet est l'utilisateur qui a répondu à la requête
        if ($author === $user){
            //on flush la requête avec la réponse mise à jour et si la réponse est oui on ajoute l'utilisateur au projet
            if ($jsonContentArray['response'] == true){
                $requestProject->addUser($userRepository->findOneBy(['id' => $jsonContentArray['user']['id']]));
            }
            $entityManager->flush();
            return new JsonResponse(["type" => "success", "message" => "La réponse a été enregistrée"]);
        }
        return new JsonResponse(["type" => "error", "message" => "L'utilisateur n'est pas autorisé à répondre"]);
    }
}