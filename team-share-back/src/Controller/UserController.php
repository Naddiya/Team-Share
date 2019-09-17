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
use Symfony\Component\Security\Core\User\User as SymfonyUser;

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

        // Transforme le json en tableau
        $jsonContentArray = json_decode($jsonContent, true);

        // Crée un nouveau projet vide
        $newUserObject = New User();

        // Hydrate le nouveau projet en fonction du tableau
        $newUserObject->setFirstname($jsonContentArray['firstname']);
        $newUserObject->setLastname($jsonContentArray['lastname']);
        $newUserObject->setJobTitle($jsonContentArray['jobTitle']);
        $newUserObject->setMail($jsonContentArray['mail']);
        $newUserObject->setPassword($jsonContentArray['password']);
        $newUserObject->setCity($jsonContentArray['city']);
        $newUserObject->setPhone($jsonContentArray['phone']);
        $newUserObject->setPhoto($jsonContentArray['photo']);
        $newUserObject->setDescription($jsonContentArray['description']);
        $newUserObject->setUrlFacebook($jsonContentArray['urlFacebook']);
        $newUserObject->setUrlTwitter($jsonContentArray['urlTwitter']);
        $newUserObject->setUrlGithub($jsonContentArray['urlGithub']);
        $newUserObject->setUrlLinkedin($jsonContentArray['urlLinkedin']);

        // Encode le password
        $encodedPassword = $encoder->encodePassword($newUserObject, $newUserObject->getMail());
        $newUserObject->setPassword($encodedPassword);

        // Set username = mail
        $newUserObject->setUsername($newUserObject->getMail());

        // Récupère l'objet Role "USER" et l'attribut par défaut
        $role = $roleRepository->findOneBy(['code' => 'USER']);
        $newUserObject->setRole($role);

        // // Déserialize le json et crée un objet User avec les propriétés du json reçu
        // $newUserObject = $serializer->deserialize($jsonContent, User::class, 'json');
        // // dd($newUserObject);
        // // Encode le password
        
        // $encodedPassword = $encoder->encodePassword($newUserObject, $newUserObject->getMail());
        // $newUserObject->setPassword($encodedPassword);
        
        // $newUserObject->setUsername($newUserObject->getMail());
        // // dd($newUserObject);
        // // Récupère l'objet Role "USER" et l'attribut par défaut
        // $role = $roleRepository->findOneBy(['code' => 'USER']);
        // $newUserObject->setRole($role);

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
    public function update(Request $request, UserPasswordEncoderInterface $encoder, EntityManagerInterface $entityManager, SerializerInterface $serializer, RoleRepository $roleRepository)
    {
        // Récupére le contenu du json reçu
        $jsonContent = $request->getContent();
        // Déserialize le json et crée un objet User avec les propriétés du json reçu
        $jsonContentArray = json_decode($jsonContent, true);

        $userToken = $userRepository->findOneBy(['token' => $jsonContent['token']]);

        $userToken->setFirstname($jsonContentArray['firstname']);
        $userToken->setLastname($jsonContentArray['lastname']);
        $userToken->setJobTitle($jsonContentArray['jobTitle']);
        $userToken->setMail($jsonContentArray['mail']);
        $userToken->setPassword($jsonContentArray['password']);
        $userToken->setCity($jsonContentArray['city']);
        $userToken->setPhone($jsonContentArray['phone']);
        $userToken->setPhoto($jsonContentArray['photo']);
        $userToken->setDescription($jsonContentArray['description']);
        $userToken->setUrlFacebook($jsonContentArray['urlFacebook']);
        $userToken->setUrlTwitter($jsonContentArray['urlTwitter']);
        $userToken->setUrlGithub($jsonContentArray['urlGithub']);
        $userToken->setUrlLinkedin($jsonContentArray['urlLinkedin']);

        $encodedPassword = $encoder->encodePassword($userToken, $userToken->getMail());
        $userToken->setPassword($encodedPassword);

        $userToken->setUsername($userToken->getMail());

        $entityManager->persist($userToken);
        $entityManager->flush();

        return new Response(
          '<html><body>L\'utilisateur "' . $userToken->getUsername() . '" a été modifié avec succés !</body></html>'
        );
    }
}
