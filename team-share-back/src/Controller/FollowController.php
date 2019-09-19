<?php

namespace App\Controller;

use App\Entity\Follow;
use App\Repository\UserRepository;
use App\Repository\FollowRepository;
use App\Repository\ProjectRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class FollowController extends AbstractController
{
    /**
     * @Route("/follow", name="follow")
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
            return new Response("L'utilisateur n'existe pas ou le token n'est plus valide...");
        }

        // Récupère le projet concerné par la requête
        $project = $projectRepository->findOneBy(['id' => $jsonContentArray['project']]);

        // Pour chaques follows de l'utilisateur
        foreach ($user->getFollows() as $follow){
            // On vérifie si il y en a un qui correspond au projet
            if ($follow->getProject() === $project){
                // Si oui on inverse le follow
                $follow->setFollow(!$follow->getFollow());
                $entityManager->flush();
                $nbLike = $followRepository->nbLikesByProjectId($project->getId())[0]['nbLikes'];
                $project->setNbLike($nbLike);
                $entityManager->flush();

                return new Response("Le follow a été modifié");
            }
        }

        // Si aucune correspondance on crée un nouvel enregistrement pour le follow
        $newFollow = new Follow;
        $newFollow->setUser($user);
        $newFollow->setProject($project);
        $newFollow->setFollow(true);
        $entityManager->persist($newFollow);
        $entityManager->flush();

        return new Response("Nouveau follow");
    }
}
