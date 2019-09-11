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
use App\DataFixtures\Provider;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{

    private $encoder;
    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $generator = Factory::create('fr_FR');

        // Ajout provider custom Provider 
        $generator->addProvider(new Provider($generator));

        $populator = new Populator($generator, $manager);


        // REMPLIT LES TABLES SIMPLES

        // table "role"
        $populator->addEntity(
            Role::class,
            2,
            [
                'code' => function () use ($generator) {
                    return $generator->unique()->randomElement(['ADMIN', 'USER']);
                }
            ],
            [
                // Fonction de callbacks custom appelée sur l'objet en cours de création
                function ($currentRole) {
                    // Le nom du rôle sera égal à son code pour simplifier
                    $codeRole = $currentRole->getCode();
                    if ($codeRole === 'ADMIN') {
                        $currentRole->setName('Administrateur');
                    } else {
                        $currentRole->setName('Utilisateur');
                    };
                }
            ]
        );

        // table "user"
        $populator->addEntity(
            User::class,
            10,
            [
                'username' => function () use ($generator) {
                    return ($generator->userName());
                },
                'firstname' => function () use ($generator) {
                    return ($generator->firstName());
                },
                'lastname' => function () use ($generator) {
                    return ($generator->lastName());
                },
                'mail' => function () use ($generator) {
                    return $generator->email();
                },
                'jobTitle' => function () use ($generator) {
                    return $generator->jobTitle();
                },
                'description' => function () use ($generator) {
                    return $generator->realText($maxNbChars = 200, $indexSize = 2);
                },
                'city' => function () use ($generator) {
                    return $generator->city();
                },
                'phone' => function () use ($generator) {
                    return $generator->e164PhoneNumber();
                },
                'score' => function () use ($generator) {
                    return $generator->numberBetween($min = 0, $max = 5);
                },
                'photo' => function () use ($generator) {
                    return $generator->imageUrl($width = 400, $height = 400, 'people');
                },
                'urlFacebook' => function () use ($generator) {
                    return $generator->url();
                },
                'urlGithub' => function () use ($generator) {
                    return $generator->url();
                },
                'urlLinkedin' => function () use ($generator) {
                    return $generator->url();
                },
                'urlTwitter' => function () use ($generator) {
                    return $generator->url();
                },
                'isActive' => 1,
            ],
            [
                // Fonction de callbacks custom appelée sur l'objet en cours de création
                function ($currentUser) {
                    // Je récupère le username de l'objet qui servira aussi de mot de passe
                    $encodedPassword = $this->encoder->encodePassword($currentUser, $currentUser->getUsername());
                    $currentUser->setPassword($encodedPassword);
                }
            ]
        );

        // table "statut"
        $populator->addEntity(Statut::class, 3, [
            'name' => function () use ($generator) {
                return $generator->unique()->randomElement(['Not Start', 'In Progress', 'Finished']);
            },
        ]);

        // table "project"
        $populator->addEntity(Project::class, 10, [
            'title' => function () use ($generator) {
                return ($generator->unique()->projectTitle());
            },
            'description' => function () use ($generator) {
                return ($generator->realText($maxNbChars = 100, $indexSize = 2));
            },
            'content' => function () use ($generator) {
                return ($generator->realText($maxNbChars = 700, $indexSize = 2));
            },
            'image' => function () use ($generator) {
                return $generator->imageUrl($width = 600, $height = 600, 'business');
            },
            'nbCollaborator' => function () use ($generator) {
                return $generator->numberBetween($min = 1, $max = 10);
            },
            'isActive' => 1,
            'isSleep' => 0,
            'updatedAt' => null,
            'startedAt' => 'Le plus vite possible',
            'finishedAt' => 'Fin 2020',
            'nbLike' => function () use ($generator) {
                return $generator->numberBetween($min = 0, $max = 1000);
            },
            'urlFacebook' => function () use ($generator) {
                return $generator->url();
            },
            'urlGithub' => function () use ($generator) {
                return $generator->url();
            },
            'urlTipeee' => function () use ($generator) {
                return $generator->url();
            },
            'urlTwitter' => function () use ($generator) {
                return $generator->url();
            },

        ]);

        // table "techno"
        $populator->addEntity(Techno::class, 16, [
            'name' => function () use ($generator) {
                return $generator->unique()->technoName();
            },
            // 'type' => function () use ($generator) {
            //     return $generator->randomElement(['front', 'back']);
            // },
        ],
        [
            function ($currentTechno) {
                $technoName = $currentTechno->getName();
                if ($technoName === 'HTML' ||
                    $technoName === 'CSS' ||
                    $technoName === 'Bootstrap' ||
                    $technoName === 'Javascript' ||
                    $technoName === 'Angular' ||
                    $technoName === 'Bulma' ||
                    $technoName === 'React' ||
                    $technoName === 'jQuery') {
                    $currentTechno->setType('front');
                } else {
                    $currentTechno->setType('back');
                };
            }
        ]);
       
        // table "skill"
        $populator->addEntity(Skill::class, 10, [
            'name' => function () use ($generator) {
                return $generator->unique()->skillName();
            },
        ]);

        // table "tag"
        $populator->addEntity(Tag::class, 10, [
            'name' => function () use ($generator) {
                return $generator->unique()->tagName();
            },
        ]);

        // table "comment"
        $populator->addEntity(Comment::class, 30, [
            'content' => function () use ($generator) {
                return ($generator->realText($maxNbChars = 100, $indexSize = 2));
            },
            'isActive' => 1,
        ]);

        // table "request"
        $populator->addEntity(Request::class, 10, [
            'title' => function () use ($generator) {
                return ($generator->catchPhrase());
            },
            'content' => function () use ($generator) {
                return ($generator->realText($maxNbChars = 100, $indexSize = 2));
            },
            'statut' => function () use ($generator) {
                return $generator->randomElement([null, 'In Progress', 'Checked']);
            },
        ]);

        $inserted = $populator->execute();


        // REMPLIT LES TABLES DE RELATIONS "MANY TO MANY"

        // table "project_tag"
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

        // table "project_techno"
        $technos = $inserted[Techno::class];

        foreach ($projects as $project){
            shuffle($technos);
            $technoCount = mt_rand(1, 5);
            for ($i = 1; $i <= $technoCount; $i++) {
                $project->addTechno($technos[$i]);
            }
            $manager->persist($project);
        }

        // table "project_skill"
        $skills = $inserted[Skill::class];

        foreach ($projects as $project) {
            shuffle($skills);
            $skillCount = mt_rand(1, 5);
            for ($i = 1; $i <= $skillCount; $i++) {
                $project->addSkill($skills[$i]);
            }
            $manager->persist($project);
        }

        // table "project_user"
        $users = $inserted[User::class];

        foreach ($projects as $project) {
            shuffle($users);
            $userCount = mt_rand(1, 3);
            for ($i = 1; $i <= $userCount; $i++) {
                $project->addUser($users[$i]);
            }
            $manager->persist($project);
        }

        // table "user_skill"
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

        // table "user_techno"
        $technos = $inserted[Techno::class];

        foreach ($users as $user) {
            shuffle($technos);
            $technoCount = mt_rand(1, 5);
            for ($i = 1; $i <= $technoCount; $i++) {
                $user->addTechno($technos[$i]);
            }
            $manager->persist($user);
        }
        $manager->flush();
    }
}
