<?php

namespace App\Controller;

use App\Repository\SkillRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Nelmio\CorsBundle\NelmioCorsBundle;

/**
 * @Route("/skill", name="skill")
 */
class SkillController extends AbstractController
{
    /**
     * @Route("/index", name="_index", methods={"GET"})
     */
    public function index(SkillRepository $skillRepository)
    {
        // Crée une response au format json avec la liste des skills par ordre alphabétique
        $response = new JsonResponse($skillRepository->findAllSkills());

        return $response;
    }

    /**
     * @Route("/{name}", name="_show", methods={"GET"}, requirements={"name"="\w+"})
     */
    public function show($name, SkillRepository $skillRepository)
    {
        // Crée une response au format json avec la liste des projets d'un skill
        $response = new JsonResponse($skillRepository->findProjectsBySkill($name));

        return $response;
    }
}
