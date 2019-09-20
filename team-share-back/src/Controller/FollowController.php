<?php

namespace App\Controller;

use App\Entity\Follow;
use App\Repository\UserRepository;
use App\Repository\FollowRepository;
use App\Repository\ProjectRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("/follow", name="follow")
 */
class FollowController extends AbstractController
{
    /**
     * @Route("/add", name="_add", methods={"POST"})
     */
    public function add(Request $request, UserRepository $userRepository, ProjectRepository $projectRepository, EntityManagerInterface $entityManager, FollowRepository $followRepository)
    {
        // Récupére le contenu du json reçu
        $jsonContent = $request->getContent();

        // Transforme le json en tableau
        $jsonContentArray = json_decode($jsonContent, true);

        // Récupère le user qui crée la requête
        $user = $userRepository->findOneBy(['token' => $jsonContentArray['token']]);

        // On renvoie un message d'erreur si l'utilisateur n'existe pas ou que le token n'a pas été trouvé dans la BDD
        if (!$user){
            return new JsonResponse(["type" => "error", "message" => "L'utilisateur n'existe pas ou le token n'est plus valide"]);
        }

        // Récupère le projet concerné par la requête
        $project = $projectRepository->findOneBy(['id' => $jsonContentArray['project']]);

        // Pour chaques follows de l'utilisateur
        foreach ($user->getFollows() as $follow){
            // On vérifie si il y en a un qui correspond au projet
            if ($follow->getProject() === $project){
                // Si oui on inverse le follow
                $follow->setFollow(!$follow->getFollow());
                // On flush le nouveau follow en base
                $entityManager->flush();
                // On met à jour le champ nbLike du projet + flush
                $nbLike = $followRepository->nbLikesByProjectId($project->getId())[0]['nbLike'];
                $project->setNbLike($nbLike);
                $entityManager->flush();

                if ($follow->getFollow()){
                    $state = "Un nouveau like a été ajouté au projet";
                } else {
                    $state = "Le projet a été disliké";
                }
                return new JsonResponse(["type" => "success", "message" => $state]);
            }
        }

        // Si aucune correspondance on crée un nouvel enregistrement pour le follow
        $newFollow = new Follow;
        $newFollow->setUser($user);
        $newFollow->setProject($project);
        $newFollow->setFollow(true);
        $entityManager->persist($newFollow);
        $entityManager->flush();
        $nbLike = $followRepository->nbLikesByProjectId($project->getId())[0]['nbLike'];
        $project->setNbLike($nbLike);
        $entityManager->flush();

        return new JsonResponse(["type" => "success", "message" => "Un nouveau like a été ajouté au projet"]);
    }

    /**
     * @Route("/state", name="_state", methods={"GET", "POST"})
     */
    public function showState(Request $request, UserRepository $userRepository, ProjectRepository $projectRepository, EntityManagerInterface $entityManager, FollowRepository $followRepository)
    {
        // Récupére le contenu du json reçu
        $jsonContent = $request->getContent();

        // Transforme le json en tableau
        $jsonContentArray = json_decode($jsonContent, true);

        // Récupère le user qui crée la requête
        $user = $userRepository->findOneBy(['token' => $jsonContentArray['token']]);

        // Récupère le projet concerné par la requête
        $project = $projectRepository->findOneBy(['id' => $jsonContentArray['project']]);

        // Pour chaques follows de l'utilisateur
        foreach ($user->getFollows() as $follow){
            // On vérifie si il y en a un qui correspond au projet
            if ($follow->getProject() === $project){
                // Si oui on renvoie la valeur du follow (0 ou 1)
                return new JsonResponse(["follow" => $follow->getFollow()]);
            }
        }

        // Si aucune correspondance on renvoie false
        return new JsonResponse(["follow" => "false"]);
    }
}
