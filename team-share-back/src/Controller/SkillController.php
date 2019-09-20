<?php

namespace App\Controller;

use App\Repository\SkillRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


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

        // On rajoute les clés key et value pour le front
        foreach ($skillRepository->findAllSkills() as $skill){
            $skill['id'] = $skill['id'];
            $skill['value'] = $skill['name'];
            $skill['key'] = $skill['id'];
            $skill['text'] = $skill['name'];
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
