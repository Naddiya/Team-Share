<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\Tag;
use App\Entity\Role;
use App\Entity\User;
use App\Entity\Skill;
use App\Entity\Statut;
use App\Entity\Techno;
use App\Entity\Comment;
use App\Entity\Project;
use App\Entity\Request;
use Faker\ORM\Doctrine\Populator;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
//     private $encoder;

//     public function __construct(UserPasswordEncoderInterface $encoder)
//     {
//       $this->encoder = $encoder;
//     }

//     public function load(ObjectManager $manager)
//     {

//         //ROLES SPECIFIQUES
//         $roleAdmin = new Role();
//         $roleAdmin->setCode('ADMIN');
//         $roleAdmin->setName('Administrateur');
        
//         $roleUser = new Role();
//         $roleUser->setCode('USER');
//         $roleUser->setName('Utilisateur');

//         //USERS SPECIFIQUES     
//         $userAdmin = new User();
//         $userAdmin->setFirstname('admin');
//         $userAdmin->setLastname('admin');
//         $userAdmin->setMail('admin@test.local');
//         $userAdmin->setJobTitle('admin');
//         $userAdmin->setDescription('admin');
//         $userAdmin->setRole($roleAdmin);

//         $userUser = new User();
//         $userAdmin->setFirstname('user');
//         $userAdmin->setLastname('user');
//         $userUser->setMail('user@test.local');
//         $userUser->setJobTitle('user');
//         $userUser->setDescription('user');
//         $userUser->setJobTitle('user');
//         $userUser->setRole($roleUser);
                
//         //Encodage des mots de passe et stockage dans la propriété password
//         $encodedPassword = $this->encoder->encodePassword($userUser, 'user');
//         $userUser->setPassword($encodedPassword);
//         $encodedPassword = $this->encoder->encodePassword($userAdmin, 'admin');
//         $userAdmin->setPassword($encodedPassword);
        
//         // Enregistrement des données par Doctrine
//         $manager->persist($roleAdmin);
//         $manager->persist($roleUser);
//         $manager->persist($userAdmin);
//         $manager->persist($userUser);

//         $manager->flush();
//     }
// }
private $encoder;
    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }
    
    public function load(ObjectManager $manager)
    {
        $generator = Factory::create('fr_FR');
        //ajout provider custom QuestionProvider 
        //Note : $generator est attendu dans le constructeur de la classe Base de faker
        
        $populator = new Populator($generator, $manager);
        $populator->addEntity(Role::class, 2, [
            'code' => function() use ($generator) { return $generator->unique()->randomElement(['ADMIN','USER']);},
        ],
        [
            // Fonction de callbacks custom appelée sur l'objet en cours de création
            function($currentRole) {
                // Le nom du rôle sera égal à son code pour simplifier
                $code = $currentRole->getCode();
                $currentRole->setName($code);
            }
        ]);
        // fixtures pour les users
        $populator->addEntity(User::class, 10, [
            'username' => function() use ($generator) { return ($generator->userName());},
            'firstname' => function() use ($generator) { return ($generator->firstNameMale());},
            'lastname' => function() use ($generator) { return ($generator->lastName());},
            'mail' => function() use ($generator) { return $generator->email();},
            'jobTitle' => function() use ($generator) { return $generator->jobTitle();},
            'description' => function() use ($generator) { return $generator->realText($maxNbChars = 200, $indexSize = 2);},
            'city' => function() use ($generator) { return $generator->city();},
            'phone' => function() use ($generator) { return $generator->e164PhoneNumber();},
            'score' => function() use ($generator) { return $generator->numberBetween($min = 0, $max = 5);},
            'photo' => function() use ($generator) { return $generator->imageUrl($width = 400, $height = 400, 'people');},
            'urlFacebook' => function() use ($generator) { return $generator->url();},
            'urlGithub' => function() use ($generator) { return $generator->url();},
            'urlLinkedin' => function() use ($generator) { return $generator->url();},
            'urlTwitter' => function() use ($generator) { return $generator->url();},
            'isActive' => 1,
            
        ],

        
        [
            // Fonction de callbacks custom appelée sur l'objet en cours de création
            function($currentUser) {
                // Je récupère le username de l'objet qui servira aussi de mot de passe
                $encodedPassword = $this->encoder->encodePassword($currentUser, $currentUser->getUsername());
                $currentUser->setPassword($encodedPassword);
            }
        ]);
        $populator->addEntity(Statut::class, 3, [
            'name' => function() use ($generator) { return $generator->randomElement(['Not Start','In Progress','Finished']);},
        ]);

        $populator->addEntity(Project::class, 10, [
            'title' => function() use ($generator) { return ($generator->catchPhrase());},
            'description' => function() use ($generator) { return ($generator->realText($maxNbChars = 100, $indexSize = 2));},
            'content' => function() use ($generator) { return ($generator->realText($maxNbChars = 700, $indexSize = 2));},
            'image' => function() use ($generator) { return $generator->imageUrl($width = 600, $height = 600, 'business');},
            //'startedAt' => function() use ($generator) { return $generator->dateTime($max = 'now', $timezone = 'Europe/Paris');},
            //'finishedAt' => function() use ($generator) { return $generator->dateTime($max = 'now', $timezone = 'Europe/Paris');},
            'nbCollaborator' => function() use ($generator) { return $generator->numberBetween($min = 1, $max = 10);},
            'isActive' => 1,
            'isSleep' => 0,
            'updatedAt' => null,
            'nbLike' => function() use ($generator) { return $generator->numberBetween($min = 0, $max = 1000);},
            'urlFacebook' => function() use ($generator) { return $generator->url();},
            'urlGithub' => function() use ($generator) { return $generator->url();},
            'urlTipeee' => function() use ($generator) { return $generator->url();},
            'urlTwitter' => function() use ($generator) { return $generator->url();},
            
        ]);

        $populator->addEntity(Techno::class, 20, [
            'name' => function() use ($generator) { return $generator->unique()->word();},
        ]);

        $populator->addEntity(Skill::class, 20, [
            'name' => function() use ($generator) { return $generator->unique()->word();},
        ]);

        $populator->addEntity(Tag::class, 10, [
            'name' => function() use ($generator) { return $generator->unique()->word();},
        ]);

        $populator->addEntity(Comment::class, 30, [
            'content' => function() use ($generator) { return ($generator->realText($maxNbChars = 100, $indexSize = 2));},
            'isActive' => 1,   
        ]);

        $populator->addEntity(Request::class, 10, [
            'title' => function() use ($generator) { return ($generator->catchPhrase());},
            'content' => function() use ($generator) { return ($generator->realText($maxNbChars = 100, $indexSize = 2));},
            'statut' => function() use ($generator) { return $generator->randomElement([null,'In Progress','Validate']);},   
        ]);


        $inserted = $populator->execute();

        //generated lists
        $projects = $inserted[Project::class];
        $tags = $inserted[Tag::class];

        foreach ($projects as $project) {

            shuffle($tags);

            // tableau rand en amont => recuperation des 3 premiers donne une valeur unique par rapport a mt rand

            $tagCount = mt_rand(1, 3);
            for ($i = 1; $i <= $tagCount; $i++) {
                $project->addTag($tags[$i]);
            }
            
            $manager->persist($project);
            
        }

        // Table project_techno

        $technos = $inserted[Techno::class];
        
        foreach ($projects as $project) {

            shuffle($technos);

            
            $technoCount = mt_rand(1, 5);
            for ($i = 1; $i <= $technoCount; $i++) {
                $project->addTechno($technos[$i]);
            }

            $manager->persist($project);
        }
        
        // Table project_skill

        $skills = $inserted[Skill::class];
        
        foreach ($projects as $project) {

            shuffle($skills);

            
            $skillCount = mt_rand(1, 5);
            for ($i = 1; $i <= $skillCount; $i++) {
                $project->addSkill($skills[$i]);
            }

            $manager->persist($project);
        }

        // tableau project_user


        $users = $inserted[User::class];
        
        foreach ($projects as $project) {

            shuffle($users);

            
            $userCount = mt_rand(1, 3);
            for ($i = 1; $i <= $userCount; $i++) {
                $project->addUser($users[$i]);
            }

            $manager->persist($project);
        }        

        $manager->flush();
        

        // tableau user_skill

        $users = $inserted[User::class];
        $skills = $inserted[Skill::class];
        
        foreach ($users as $user) {

            shuffle($skills);

            $skillCount = mt_rand(1, 2);
            for ($i = 1; $i <= $skillCount; $i++) {
                $user->addSkill($skills[$i]);
            }

            $manager->persist($user);
        }

        $manager->flush();
        
        
        // Table user_techno

        $technos = $inserted[Techno::class];
        
        foreach ($users as $user) {

            shuffle($technos);

            
            $technoCount = mt_rand(1, 5);
            for ($i = 1; $i <= $technoCount; $i++) {
                $user->addTechno($technos[$i]);
            }

            $manager->persist($user);

            $manager->flush();
        }
    }
}