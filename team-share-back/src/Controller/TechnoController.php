<?php

namespace App\Controller;

use App\Repository\TechnoRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("/techno", name="techno")
 */
class TechnoController extends AbstractController
{
    /**
     * @Route("/index", name="_index", methods={"GET"})
     */
    public function index(TechnoRepository $technoRepository)
    {
        // On rajoute les clés key et value pour le front
        foreach ($technoRepository->findAllTechnos() as $techno){
            $techno['id'] = $techno['id'];
            $techno['value'] = $techno['name'];
            $techno['type'] = $techno['type'];
            $techno['key'] = $techno['id'];
            $techno['text'] = $techno['name'];
            $tab[] = $techno;
        }
 
        // Crée une response au format json avec la liste des tags par ordre alphabétique
        $response = new JsonResponse($tab);

        return $response;
    }

    /**
     * @Route("/{id}", name="_show", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function show($id, TechnoRepository $technoRepository)
    {
        // Crée une response au format json avec la liste des projets d'une techno
        $response = new JsonResponse($technoRepository->findProjectsByTechno($id));

        return $response;
    }
}
