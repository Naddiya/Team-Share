<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Repository\ProjectRepository;
use App\Repository\RequestRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

class RequestController extends AbstractController
{
    /**
     * @Route("/request/new", name="request_new", methods={"POST"})
     */
    public function new(Request $request, UserRepository $userRepository, ProjectRepository $projectRepository, EntityManagerInterface $entityManager)
    {

         // Récupére le contenu du json reçu
         $jsonContent = $request->getContent();

         // Transforme le json en tableau
         $jsonContentArray = json_decode($jsonContent, true);
        
         $newRequest = new \App\Entity\Request;

        $user = $userRepository->findOneBy(['token' => $jsonContentArray['token']]); 
        // dd($user);
        $project = $projectRepository->findOneBy(['id' => $jsonContentArray['project']]);
        //dd($project);

         // Hydrate la requête en fonction du tableau
        $newRequest->setTitle($jsonContentArray['title']);
        $newRequest->setContent($jsonContentArray['content']);
        $newRequest->setUser($user);
        $newRequest->setProject($project);

        $entityManager->persist($newRequest);
        $entityManager->flush();

        // Réponse temporaire si l'ajout a été effectué
        return new Response(
            '<html><body>Lea requête été ajouté avec succés !</body></html>'
          );
    }

    /**
     * @Route("/request/index", name="_index", methods={"GET"})
     */
    public function index(Request $request, RequestRepository $requestRepository, UserRepository $userRepository)
    {
        // Récupére le contenu du json reçu
        $jsonContent = $request->getContent();

        // Transforme le json en tableau
        $jsonContentArray = json_decode($jsonContent, true);

        $user = $userRepository->findOneBy(['token' => $jsonContentArray['token']]);
      
        $userProjects = $user->getProjects();
        foreach ($userProjects as $project){
            //dd($project);
            $author = $project->getUsers()[0];
            //dd($author);
            if ($author = $user){
                $requests = [];
                foreach($project->getRequests() as $request){
                    array_push($requests, $request);
                    dd($request);
                }
            }
        }
        return new JsonResponse($requests);
    }
}
