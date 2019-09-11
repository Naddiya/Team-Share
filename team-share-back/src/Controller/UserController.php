<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\RoleRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/user", name="user",)
 */
class UserController extends AbstractController
{
    /**
     * @Route("/register", name="_register", methods={"POST"})
     */
    public function register(Request $request, UserPasswordEncoderInterface $encoder, EntityManagerInterface $entityManager, SerializerInterface $serializer, RoleRepository $roleRepository)
    {
        // Récupére le contenu du json reçu
        $jsonContent = $request->getContent();
        // Déserialize le json et crée un objet User avec les propriétés du json reçu
        $newUserObject = $serializer->deserialize($jsonContent, User::class, 'json');

        // Encode le password
        $encodedPassword = $encoder->encodePassword($newUserObject, $newUserObject->getUsername());
        $newUserObject->setPassword($encodedPassword);

        // Récupère l'objet Role "USER" et l'attribut par défaut
        $role = $roleRepository->findOneBy(['code' => 'USER']);
        $newUserObject->setRole($role);

        // Enregistre le nouvel utilisateur en bdd
        $entityManager->persist($newUserObject);
        $entityManager->flush();

        // Réponse temporaire si l'ajout a été effectué
        return new Response(
          '<html><body>L\'utilisateur "' . $newUserObject->getUsername() . '" a été ajouté avec succés !</body></html>'
        );
    }

    /**
     * @Route("/{id}", name="_show", methods={"GET"}, requirements={"id": "\d+"})
     */
    public function show(UserRepository $userRepository, $id)
    {
        // Récupére un Utilisateur en fonction de son id
        $user = $userRepository->viewOneUserById($id);

        // Crée une response au format json
        $response = new JsonResponse($user);

        return $response;
    }
}
