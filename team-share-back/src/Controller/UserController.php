<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class UserController extends AbstractController
{
    /**
     * @Route("/user/{id}", name="user_show", methods={"GET"})
     */
    public function show(UserRepository $userRepository, $id)
    {
      // Récupére les 4 projets ayant le plus de "likes" (dans l'ordre)
      $user = $userRepository->viewOneUserById($id);

      // Crée une response au format json
       $response = new JsonResponse($user);
       // dd($response);
       return $response;
    }
}
