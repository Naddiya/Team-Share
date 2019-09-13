<?php

namespace App\Controller;

use App\Entity\Tag;
use App\Repository\TagRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
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
        // Crée une response au format json avec la liste des tags par ordre alphabétique
        $response = new JsonResponse($tagRepository->findAllTags());

        return $response;
    }

    /**
     * @Route("/{name}", name="_show", methods={"GET"}, requirements={"name"="\w+"})
     */
    public function show($name, TagRepository $tagRepository)
    {
        // Crée une response au format json avec la liste des projets d'un tag
        $response = new JsonResponse($tagRepository->findProjectsByTag($name));

        return $response;
    }
}
