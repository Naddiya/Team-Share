<?php

namespace App\Controller;

use App\Repository\ProjectRepository;
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
}
