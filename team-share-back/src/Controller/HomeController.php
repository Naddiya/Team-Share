<?php

namespace App\Controller;

use App\Repository\ProjectRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Nelmio\CorsBundle\NelmioCorsBundle;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home", methods={"GET"})
     */
    public function home(ProjectRepository $projetcRepository)
    {
        // Récupére les 4 projets ayant le plus de "likes" (dans l'ordre)
        $bestProjects = $projetcRepository->findBestProjects();

        // Crée une response au format json
        $response = new JsonResponse($bestProjects);

        return $response;
    }
}
