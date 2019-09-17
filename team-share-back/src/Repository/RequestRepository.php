<?php

namespace App\Repository;

use App\Entity\Request;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Request|null find($id, $lockMode = null, $lockVersion = null)
 * @method Request|null findOneBy(array $criteria, array $orderBy = null)
 * @method Request[]    findAll()
 * @method Request[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RequestRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Request::class);
    }

    /**
     * @return Request[] Returns an array of Request objects
     */
    public function findByProjectId($idProject)
    {
        $qb = $this->CreateQueryBuilder('r')
            ->where('r.project = :idOfProject')
            ->setParameter('idOfProject', $idProject)
            ->leftJoin('r.project', 'p')
            ->leftJoin('r.user', 'u')
            ->addSelect('PARTIAL p.{id, title}', 'PARTIAL u.{id, username, firstname, lastname}');

        return $qb->getQuery()->getArrayResult();
    }
}
