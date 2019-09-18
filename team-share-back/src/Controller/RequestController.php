<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Repository\ProjectRepository;
use App\Repository\RequestRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class RequestController extends AbstractController
{
    /**
     * @Route("/request/new", name="request_new", methods={"POST"})
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
        $newRequest->setTitle($jsonContentArray['title']);
        $newRequest->setContent($jsonContentArray['content']);
        $newRequest->setUser($user);
        $newRequest->setProject($project);

        // Enregistre la nouvelle requête en BDD
        $entityManager->persist($newRequest);
        $entityManager->flush();

        // Réponse temporaire si l'ajout a été effectué
        return new Response(
            '<html><body>Lea requête été ajouté avec succés !</body></html>'
          );
    }

    /**
     * @Route("/request/index", name="request_index", methods={"GET"})
     */
    public function index(Request $request, RequestRepository $requestRepository, UserRepository $userRepository)
    {
        // Récupére le contenu du json reçu
        $jsonContent = $request->getContent();

        // Transforme le json en tableau
        $jsonContentArray = json_decode($jsonContent, true);

        // Récupère le destinataire de la requête
        $user = $userRepository->findOneBy(['token' => $jsonContentArray['token']]);

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

        return new JsonResponse($requestsForUser);
    }

    /**
     * @Route("/request/response", name="request_response", methods={"POST"})
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
            return new Response("Requête mise a jour");
        }
        return new Response("Utilisateur non authorisé");
    }
}