<?php

namespace App\Controller;

use App\Entity\Project;
use App\Repository\TagRepository;
use App\Repository\UserRepository;
use App\Repository\SkillRepository;
use App\Repository\StatutRepository;
use App\Repository\TechnoRepository;
use App\Repository\ProjectRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Nelmio\CorsBundle\NelmioCorsBundle;

/**
 * @Route("/project", name="project")
 */
class ProjectController extends AbstractController
{
    /**
     * @Route("/index", name="_index", methods={"GET"})
     */
    public function index(ProjectRepository $projetcRepository)
    {
        // Récupére tous les projets du plus grand au plus petits nombres de likes
        $bestProjects = $projetcRepository->findBestProjects();

        // Crée une response au format json
        $response = new JsonResponse($bestProjects);

        return $response;
    }

    /**
     * @Route("/{id}", name="_show", methods={"GET"}, requirements={"id": "\d+"})
     */
    public function show(ProjectRepository $projetcRepository, $id)
    {
        // Récupére un projet en fonction de son id
        $oneProject = $projetcRepository->findOneProjectById($id);

        // Crée une response au format json
        $response = new JsonResponse($oneProject);

        return $response;
    }
    
    /**
     * @Route("/new", name="_new", methods={"POST"})
     */
    public function new(Request $request, EntityManagerInterface $entityManager, TagRepository $tagRepository, StatutRepository $statutRepository, UserRepository $userRepository, SkillRepository $skillRepository, TechnoRepository $technoRepository)
    {
        // Récupére le contenu du json reçu
        $jsonContent = $request->getContent();

        // Transforme le json en tableau
        $jsonContentArray = json_decode($jsonContent, true);

        // Crée un nouveau projet vide
        $newProjectObject = New Project;

        // Hydrate le nouveau projet en fonction du tableau
        $newProjectObject->setTitle($jsonContentArray['title']);
        $newProjectObject->setDescription($jsonContentArray['description']);
        $newProjectObject->setContent($jsonContentArray['content']);
        $newProjectObject->setImage($jsonContentArray['image']);
        $newProjectObject->setStartedAt($jsonContentArray['startedAt']);
        $newProjectObject->setNbCollaborator($jsonContentArray['nbCollaborator']);
        $newProjectObject->setFinishedAt($jsonContentArray['finishedAt']);
        $newProjectObject->setUrlFacebook($jsonContentArray['urlFacebook']);
        $newProjectObject->setUrlTwitter($jsonContentArray['urlTwitter']);
        $newProjectObject->setUrlGithub($jsonContentArray['urlGithub']);
        $newProjectObject->setUrlTipeee($jsonContentArray['urlTipeee']);

        // Ajout des tags
        foreach ($jsonContentArray['tags'] as $jsonTag) {
          $dbTag = $tagRepository->findOneBy(['name' => $jsonTag]);
          $newProjectObject->addTag($dbTag);
        }

        // Ajout des technos
        foreach ($jsonContentArray['technos'] as $jsonTechno) {
          $dbTechno = $technoRepository->findOneBy(['name' => $jsonTechno]);
          $newProjectObject->addTechno($dbTechno);
        }

        // Ajout des skills
        foreach ($jsonContentArray['skills'] as $jsonSkill) {
          $dbSkill = $skillRepository->findOneBy(['name' => $jsonSkill]);
          $newProjectObject->addSkill($dbSkill);
        }

        // Ajout de l'utilisateur
        $dbUser = $userRepository->findOneBy(['token' => $jsonContentArray['token']]);
        $newProjectObject->addUser($dbUser);

        // Récupère l'objet Statut "Not Start" et l'attribut par défaut au nouveau projet
        $jsonStatut = $statutRepository->findOneBy(['name' => 'Not Start']);
        $newProjectObject->setStatut($jsonStatut);

        // Enregistre le nouveau projet en bdd
        $entityManager->persist($newProjectObject);
        $entityManager->flush();

        // Réponse temporaire si l'ajout a été effectué
        return new Response(
          '<html><body>Le projet "' . $newProjectObject->getTitle() . '" a été ajouté avec succés !</body></html>'
        );
    }
}
