<?php

namespace App\Controller;

use App\Repository\ProjectRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class HomeController extends AbstractController
{
   /**
    * @Route("/", name="home", methods={"GET"})
    */
   public function index(ProjectRepository $projetcRepository, SerializerInterface $serializer)
   {
       // Récupére les 4 projets ayant le plus de "likes" (dans l'ordre)
       $bestProjects = $projetcRepository->bestProjects();

       // Encode le résultat en json
       //$jsonContent = $serializer->serialize($bestProjects, 'json');

       // Crée une response au format json
        $response = new JsonResponse($bestProjects);
        // dd($response);
        return $response;
   }
}