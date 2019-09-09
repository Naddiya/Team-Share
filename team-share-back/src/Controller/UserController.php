<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\RoleRepository;


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

   /**
  * @Route("/signin", name="signin")
  */
 public function signin(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, RoleRepository $roleRepository)
 {
    $user = new User();
    //dd($request->getContent());
    $test = $request->getContent();
    //$test = json_decode($test);
    $testObjet = $serializer->deserialize($test, User::class, 'json');
    // Crée une response au format json
    //dd($testObjet);
    $role = $roleRepository->findOneByCode('ADMIN');
    $user->setRole($role);
    
    
    $em = $this->getDoctrine()->getManager();
    $em->persist($testObjet);
    $em->flush();

    // dd($response);
    //return $response;
 }
}
