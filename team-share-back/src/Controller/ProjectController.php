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
    public function new(Request $request, EntityManagerInterface $entityManager, SerializerInterface $serializer, TagRepository $tagRepository, StatutRepository $statutRepository, UserRepository $userRepository, SkillRepository $skillRepository, TechnoRepository $technoRepository)
    {
        // Récupére le contenu du json reçu
        $jsonContent = $request->getContent();
        // dd($jsonContent);
        // Déserialize le json et crée un objet Project avec les propriétés du json reçu
        $newProjectObject = $serializer->deserialize($jsonContent, Project::class, 'json');
        // dd($newProjectObject);
        // Ajout des tags
        // boucle sur la liste des tags récupérés du fichier json
        foreach ($newProjectObject->getTags() as $jsonTag) {
          // récupère en bdd le tag courant via son "name" à partir du tag fourni dans le json
          $dbTag = $tagRepository->findOneBy(['name' => $jsonTag->getName()]);
          // ajoute ce tag dans la liste des tags qui référencent le nouveau projet
          $newProjectObject->addTag($dbTag);
          // supprime le tag fournit par le json pour ne pas qu'il soit "persisté" en bdd une 2ème fois
          $newProjectObject->removeTag($jsonTag);
        }

        // Ajout du user
        // récupère le user du fichier json dans le tableau (le 1er car il n'y a qu'un user qui puisse créer un projet)
        foreach ($newProjectObject->getUsers() as $jsonUser) {
        // dd($newProjectObject->getUsers());
        // récupère en bdd le user qui a crée le projet via son "username" à partir du user fourni dans le json
        $dbUser = $userRepository->findOneBy(['mail' => $jsonUser->getUsername()]);
        // dd($dbUser);
        // ajoute cet user comme créateur du projet (1er user faisant partit de la liste des users du projet)
        $newProjectObject->addUser($dbUser);
        // supprime le user fournit par le json pour ne pas qu'il soit "persisté" en bdd une 2ème fois
        $newProjectObject->removeUser($jsonUser);
        }

        // Ajout des technos
        foreach ($newProjectObject->getTechnos() as $jsonTechno) {
          $dbTechno = $technoRepository->findOneBy(['name' => $jsonTechno->getName()]);
          $newProjectObject->addTechno($dbTechno);
          $newProjectObject->removeTechno($jsonTechno);
        }

        // Ajout des skills
        foreach ($newProjectObject->getSkills() as $jsonSkill) {
          $dbSkill = $skillRepository->findOneBy(['name' => $jsonSkill->getName()]);
          $newProjectObject->addSkill($dbSkill);
          $newProjectObject->removeSkill($jsonSkill);
        }
        

        // Récupère l'objet Statut "Not Start" et l'attribut par défaut au nouveau projet
        $jsonStatut = $statutRepository->findOneBy(['name' => 'Not Start']);
        $newProjectObject->setStatut($jsonStatut);

        // Enregistre le nouvel utilisateur en bdd
        $entityManager->persist($newProjectObject);
        $entityManager->flush();

        // Réponse temporaire si l'ajout a été effectué
        return new Response(
          '<html><body>Le projet "' . $newProjectObject->getTitle() . '" a été ajouté avec succés !</body></html>'
        );
    }
}
