<?php

namespace App\Repository;

use App\Entity\Tag;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Tag|null find($id, $lockMode = null, $lockVersion = null)
 * @method Tag|null findOneBy(array $criteria, array $orderBy = null)
 * @method Tag[]    findAll()
 * @method Tag[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TagRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Tag::class);
    }

    /**
     * @return Tag[] Returns an array of Tag objects
     */
    public function findAllTags()
    {
        $qb = $this->CreateQueryBuilder('t')
            ->select('t.id', 't.name')
            ->orderBy('t.name', 'ASC');

        return $qb->getQuery()->getArrayResult();
    }

    /**
     * @return Projects[] Returns an array of Projects objects
     */
    public function findProjectsByTag($id) 
    {
        $qb = $this->CreateQueryBuilder('t')
            ->where('t.id = :idOfTag')
            ->setParameter('idOfTag', $id)
            ->leftJoin('t.projects', 'p')
            ->leftJoin('p.skills', 's')
            ->leftJoin('p.technos', 'te')
            ->leftJoin('p.statut', 'st')
            ->addSelect('p', 's', 'te', 'st')
            ->orderBy('p.title', 'ASC');

        return $qb->getQuery()->getArrayResult();
    }
    
    /*
    public function findOneBySomeField($value): ?Tag
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
