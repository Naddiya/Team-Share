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
    // public function bestProjects()
    // {
    //     return $this->getEntityManager()
    //         ->createQuery('
    //             SELECT p
    //             FROM App\Entity\Project p 
    //             ORDER BY p.nbLike DESC
    //         ')
    //         ->setMaxResults(4)
    //         ->getResult();
            
    // }

    public function bestProjects()
    {
     $qb = $this->CreateQueryBuilder('p')
                ->leftJoin('p.statut', 'st')
                ->leftJoin('p.tags', 't')
                ->leftJoin('p.technos', 'th')
                ->leftJoin('p.skills', 's')
                ->leftJoin('p.users', 'u')
                ->addSelect('t', 'th', 's', 'u.username', 'st.name')
                ->orderBy('p.nbLike', 'DESC');
                //->select('p.id', 't.name', 'u.firstname')
 
      return $qb->getQuery()->getArrayResult();
                
    }
    public function viewOneProjectById($id)
    {
     $qb = $this->CreateQueryBuilder('p')
                ->where('p.id = :idOfProject')
                ->setParameter('idOfProject', $id)
                ->leftJoin('p.tags', 't')
                ->leftJoin('p.technos', 'th')
                ->leftJoin('p.skills', 's')
                ->leftJoin('p.statut', 'st')
                ->leftJoin('p.comments', 'c')
                ->leftJoin('p.users', 'u')
                ->addSelect('t', 'th', 's', 'u', 'st', 'c');
                
  
      return $qb->getQuery()->getArrayResult();
                
    }

       
}


