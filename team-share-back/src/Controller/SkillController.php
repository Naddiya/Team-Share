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
        foreach ($skillRepository->findAllSkills() as $skill){
            $skill['id'] = $skill['id'];
            $skill['name'] = $skill['name'];
            $skill['key'] = $skill['id'];
            $tab[] = $skill;
        }
 
        // Crée une response au format json avec la liste des tags par ordre alphabétique
        $response = new JsonResponse($tab);

        return $response;
    }

    /**
     * @Route("/{id}", name="_show", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function show($id, SkillRepository $skillRepository)
    {
        // Crée une response au format json avec la liste des projets d'un skill
        $response = new JsonResponse($skillRepository->findProjectsBySkill($id));

        return $response;
    }
}
