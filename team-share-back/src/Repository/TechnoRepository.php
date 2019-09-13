<?php

namespace App\Repository;

use App\Entity\Techno;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Techno|null find($id, $lockMode = null, $lockVersion = null)
 * @method Techno|null findOneBy(array $criteria, array $orderBy = null)
 * @method Techno[]    findAll()
 * @method Techno[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TechnoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Techno::class);
    }

    /**
     * @return Techno[] Returns an array of Techno objects
     */
    public function findAllTechnos()
    {
        $qb = $this->CreateQueryBuilder('t')
            ->select('t.id', 't.name', 't.type')
            ->orderBy('t.type', 'ASC')
            ->orderBy('t.name', 'ASC');

        return $qb->getQuery()->getArrayResult();
    }

    /**
     * @return Projects[] Returns an array of Projects objects
     */
    public function findProjectsByTechno($name)
    {
        $qb = $this->CreateQueryBuilder('t')
            ->where('t.name = :nameOfTechno')
            ->setParameter('nameOfTechno', $name)
            ->leftJoin('t.projects', 'p')
            ->addSelect('PARTIAL p.{id, title}')
            ->orderBy('p.title', 'ASC');

        return $qb->getQuery()->getArrayResult();
    }
}
