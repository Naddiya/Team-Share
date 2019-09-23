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
    public function findProjectsByTechno($id)
    {
        $qb = $this->CreateQueryBuilder('te')
            ->where('te.id = :idOfTechno')
            ->setParameter('idOfTechno', $id)
            ->leftJoin('te.projects', 'p')
            ->leftJoin('p.skills', 's')
            ->leftJoin('p.tags', 't')
            ->leftJoin('p.statut', 'st')
            ->addSelect('p', 's', 't', 'st')
            ->orderBy('p.title', 'ASC');

        return $qb->getQuery()->getArrayResult();
    }
}
