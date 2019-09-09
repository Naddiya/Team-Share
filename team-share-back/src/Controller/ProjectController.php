<?php

namespace App\Controller;

use App\Entity\Project;
use App\Repository\ProjectRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class ProjectController extends AbstractController
{
  /**
   * @Route("/", name="home", methods={"GET"})
   */
  public function home(ProjectRepository $projetcRepository, SerializerInterface $serializer)
  {
      // Récupére les 4 projets ayant le plus de "likes" (dans l'ordre)
      $bestProjects = $projetcRepository->bestProjects();

      // Crée une response au format json
       $response = new JsonResponse($bestProjects);
       // dd($response);
       return $response;
  }
  
    /**
   * @Route("/project/index", name="project_index", methods={"GET"})
   */
  public function index(ProjectRepository $projetcRepository, SerializerInterface $serializer)
  {
      // Récupére les 4 projets ayant le plus de "likes" (dans l'ordre)
      $bestProjects = $projetcRepository->bestProjects();

      // Crée une response au format json
       $response = new JsonResponse($bestProjects);
       // dd($response);
       return $response;
  }

  /**
   * @Route("/project/{id}", name="project_show", methods={"GET"})
   */
   public function show(ProjectRepository $projetcRepository, SerializerInterface $serializer, $id)
   {
       // Récupére les 4 projets ayant le plus de "likes" (dans l'ordre)
       $oneProject = $projetcRepository->viewOneProjectById($id);

       // Crée une response au format json
        $response = new JsonResponse($oneProject);
        // dd($response);
        return $response;
   }

}