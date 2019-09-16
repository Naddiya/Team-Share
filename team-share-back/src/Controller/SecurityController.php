<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="app_login")
     */
    public function login(Request $request, UserPasswordEncoderInterface $encoder, SerializerInterface $serializer, UserRepository $userRepository, EntityManagerInterface $entityManager): Response
    {
        $jsonContent = $request->getContent();
        
        $checkUser = $serializer->deserialize($jsonContent, User::class, 'json');

        $user = $userRepository->findOneBy(['username' => $checkUser->getUsername()]);

        if(!$user) {
            return new Response("L'utilisatteur n'existe pas !");
        }
        if ($encoder->isPasswordValid($user, $checkUser->getPassword())){
            $tokenBrut = rtrim(strtr(base64_encode(random_bytes(50)), '+/', '-_'), '=');
            $user->setToken($tokenBrut);
            $token = ["token" => $tokenBrut];
            $entityManager->flush();
            return new JsonResponse($token);
        }

        return new Response("Mot de passe invalide");
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        
        throw new \Exception('This method can be blank - it will be intercepted by the logout key on your firewall');
    }
}
