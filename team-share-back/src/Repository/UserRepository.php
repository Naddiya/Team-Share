<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    /**
     * @return User Return one User objects
     */
    public function findOneUserById($id)
    {
        $qb = $this->CreateQueryBuilder('u')
            ->where('u.id = :idOfUser')
            ->setParameter('idOfUser', $id)
            ->leftJoin('u.projects', 'p')
            ->leftJoin('u.technos', 't')
            ->leftJoin('u.skills', 's')
            ->leftJoin('u.role', 'r')
            ->leftJoin('u.comments', 'c')
            ->leftJoin('u.requests', 're')
            ->addSelect('r', 't', 's', 're', 'c', 'p');
            //pour enlever password...
            //->select('u.id', 'u.username', 'u.firstname', 'u.lastname', 'u.jobTitle', 'u.mail', 'u.city', 'u.phone', 'u.score', 'u.photo', 'u.description', 'u.isActive', 'u.urlFacebook', 'u.urlGithub', 'u.urlTwitter', 'u.urlLinkedin');

        return $qb->getQuery()->getArrayResult();
    }
    // public function findRequestByUSer($id)
    // {
    //     $qb = $this->CreateQueryBuilder('u')
    //         ->where('u.id = :idOfUser')
    //         ->setParameter('idOfUser', $id)
    //         ->leftJoin('u.requests', 're')
    //         ->addSelect('r', 't', 's', 're', 'c', 'p');
    //         //pour enlever password...
    //         //->select('u.id', 'u.username', 'u.firstname', 'u.lastname', 'u.jobTitle', 'u.mail', 'u.city', 'u.phone', 'u.score', 'u.photo', 'u.description', 'u.isActive', 'u.urlFacebook', 'u.urlGithub', 'u.urlTwitter', 'u.urlLinkedin');

    //     return $qb->getQuery()->getArrayResult();
    // }

}
