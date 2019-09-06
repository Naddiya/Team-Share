<?php

namespace App\Controller;


use App\Entity\Tag;
use App\Entity\Project;
use App\Entity\Request;
use App\Repository\ProjectRepository;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home", methods={"GET"})
     */
    public function index(ProjectRepository $projetcRepository)
    {
     
        $bestProjects = $projetcRepository->ProjetcWithTags();
        
        dd($bestProjects);

        return $this->render('home/index.html.twig', [
            'bestProjects' => $bestProjects,
            
            ]);
    }
}
