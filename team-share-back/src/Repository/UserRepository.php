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

    // /**
    //  * @return User[] Returns an array of User objects
    //  */
    public function viewOneUserById($id)
    {
     $qb = $this->CreateQueryBuilder('u')
                ->where('u.id = :idOfUser')
                ->setParameter('idOfUser', $id)
                ->leftJoin('u.projects', 'p')
                ->leftJoin('u.technos', 'th')
                ->leftJoin('u.skills', 's')
                ->leftJoin('u.role', 'r')
                ->leftJoin('u.comments', 'c')
                ->leftJoin('u.requests', 're')
                ->addSelect('r', 'th', 's', 're', 'c', 'p');
                
  
      return $qb->getQuery()->getArrayResult();
                
    }

    /*
    public function findOneBySomeField($value): ?User
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
