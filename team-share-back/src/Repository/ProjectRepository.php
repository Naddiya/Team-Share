<?php

namespace App\Repository;

use App\Entity\Project;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Project|null find($id, $lockMode = null, $lockVersion = null)
 * @method Project|null findOneBy(array $criteria, array $orderBy = null)
 * @method Project[]    findAll()
 * @method Project[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProjectRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Project::class);
    }

    // /**
    //  * @return Project[] Returns an array of Project objects
    //  */
    public function bestProjects()
    {
        return $this->getEntityManager()
            ->createQuery('
                SELECT p
                FROM App\Entity\Project p 
                ORDER BY p.nbLike DESC
            ')
            ->setMaxResults(4)
            ->getResult();
            
    }

    public function ProjetcWithTags()
    {
     $qb = $this->CreateQueryBuilder('p')
                ->innerJoin('p.tags', 't')
                ->addSelect('t.name');
      return $qb->getQuery()->getResult();
                
    }
}
