<?php

namespace App\Controller;

use App\Entity\Project;
use App\Repository\UserRepository;
use App\Repository\StatutRepository;
use App\Repository\ProjectRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class ProjectController extends AbstractController
{
    /**
     * @Route("/project/index", name="project_index", methods={"GET"})
     */
    public function index(ProjectRepository $projetcRepository)
    {
        // Récupére tous les projets du plus grand au plus petits nombres de likes
        $bestProjects = $projetcRepository->bestProjects();

        // Crée une response au format json
        $response = new JsonResponse($bestProjects);

        return $response;
    }

    /**
     * @Route("/project/{id}", name="project_show", methods={"GET"})
     */
    public function show(ProjectRepository $projetcRepository, $id)
    {
        // Récupére un projet en fonction de son id
        $oneProject = $projetcRepository->viewOneProjectById($id);

        // Crée une response au format json
        $response = new JsonResponse($oneProject);

        return $response;
    }
    
    /**
     * @Route("/project/new", name="project_new", methods={"POST"})
     */
    public function new(Request $request, EntityManagerInterface $entityManager, SerializerInterface $serializer, StatutRepository $statutRepository, UserRepository $userRepository)
    {
        // Récupére le contenu du json reçu
        $jsonContent = $request->getContent();
        //dd($jsonContent->request->get('tags'));
        //dd($jsonContent);
        // Déserialize le json et crée un objet Project avec les propriétés du json reçu
        $newProjectObject = $serializer->deserialize($jsonContent, Project::class, 'json');
        //dd($newProjectObject->getTags());

        // Récupère l'objet Statut "Not Start" et l'attribut par défaut
        $statut = $statutRepository->findOneBy(['name' => 'Not Start']);
        $newProjectObject->setStatut($statut);

        // User : pour le moment, allons chercher un user issue de notre liste
        $user = $userRepository->findOneBy(['username' => $newProjectObject->getUsers()->getUsername()]);
        // On associe<
        dd($user);
        $newProjectObject->addUser($user);

        // Enregistre le nouvel utilisateur en bdd
        $entityManager->persist($newProjectObject);
        $entityManager->flush();

        // Réponse temporaire si l'ajout a été effectué
        return new Response(
          '<html><body>Le projet "' . $newProjectObject->getTitle() . '" a été ajouté avec succés !</body></html>'
        );
    }
}
