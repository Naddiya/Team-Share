<?php

namespace App\Controller;

use App\Repository\TagRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("/tag", name="tag")
 */
class TagController extends AbstractController
{
    /**
     * @Route("/index", name="_index", methods={"GET"})
     */
    public function index(TagRepository $tagRepository)
    {
        // On rajoute les clés key et value pour le front
        foreach ($tagRepository->findAllTags() as $tag){
            $tag['id'] = $tag['id'];
            $tag['value'] = $tag['name'];
            $tag['key'] = $tag['id'];
            $tag['text'] = $tag['name'];
            $tab[] = $tag;
        }
 
        // Crée une response au format json avec la liste des tags par ordre alphabétique
        $response = new JsonResponse($tab);

        return $response;
    }

    /**
     * @Route("/{id}", name="_show", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function show($id, TagRepository $tagRepository)
    {
        // Crée une response au format json avec la liste des projets d'un tag
        $response = new JsonResponse($tagRepository->findProjectsByTag($id));

        return $response;
    }
}
