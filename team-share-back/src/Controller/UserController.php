<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\RoleRepository;
use App\Repository\UserRepository;
use Nelmio\CorsBundle\NelmioCorsBundle;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
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
        // dd($newUserObject);
        // Encode le password
        
        $encodedPassword = $encoder->encodePassword($newUserObject, $newUserObject->getMail());
        $newUserObject->setPassword($encodedPassword);
        
        $newUserObject->setUsername($newUserObject->getMail());
        // dd($newUserObject);
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
        $user = $userRepository->findOneUserById($id);

        // Crée une response au format json
        $response = new JsonResponse($user);

        return $response;
    }

     /**
     * @Route("/update", name="_update", methods={"POST"})
     */
    // public function update(Request $request, UserPasswordEncoderInterface $encoder, EntityManagerInterface $entityManager, SerializerInterface $serializer, RoleRepository $roleRepository)
    // {
    //     $random = random_bytes(40);
    //     dd($random);

    //     // // Récupére le contenu du json reçu
    //     // $jsonContent = $request->getContent();
    //     // // Déserialize le json et crée un objet User avec les propriétés du json reçu
    //     // $newUserObjectUpdated = $serializer->deserialize($jsonContent, User::class, 'json');
    //     // // dd($newUserObject);
    //     // // Encode le password
    //     // $encodedPassword = $encoder->encodePassword($newUserObjectUpdated, $newUserObjectUpdated->getPassword());
    //     // $newUserObjectUpdated->setPassword($encodedPassword);
        
    //     // $newUserObjectUpdated->setUsername($newUserObjectUpdated->getMail());
    //     // // dd($newUserObject);
    //     // // Récupère l'objet Role "USER" et l'attribut par défaut
    //     // $role = $roleRepository->findOneBy(['code' => 'USER']);
    //     // $newUserObjectUpdated->setRole($role);

    //     // // Enregistre le nouvel utilisateur en bdd
    //     // $entityManager->persist($newUserObjectUpdated);
    //     // $entityManager->flush();

    //     // // Réponse temporaire si l'ajout a été effectué
    //     return new Response(
    //       '<html><body>L\'utilisateur "' . $newUserObjectUpdated->getUsername() . '" a été modifié avec succés !</body></html>'
    //     );
    // }
}
