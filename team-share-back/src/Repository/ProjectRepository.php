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

    /**
     * @return Project[] Returns an array of Project objects
     */
    public function findBestProjects($tri = 'nbLike')
    {
        $qb = $this->CreateQueryBuilder('p')
          ->leftJoin('p.statut', 'st')
          ->leftJoin('p.tags', 't')
          ->leftJoin('p.technos', 'te')
          ->leftJoin('p.skills', 's')
          ->leftJoin('p.users', 'u')
          ->addSelect('t', 'te', 's', 'PARTIAL u.{id, username}', 'st')
          ->orderBy('p.'. $tri . '', 'DESC');

        return $qb->getQuery()->getArrayResult();
    }

    /**
     * @return Project[] Returns an array of Project objects
     */
    public function findProjectsByTitle()
    {
        $qb = $this->CreateQueryBuilder('p')
          ->leftJoin('p.statut', 'st')
          ->leftJoin('p.tags', 't')
          ->leftJoin('p.technos', 'te')
          ->leftJoin('p.skills', 's')
          ->leftJoin('p.users', 'u')
          ->addSelect('t', 'te', 's', 'PARTIAL u.{id, username}', 'st')
          ->orderBy('p.title' . '', 'ASC');

        return $qb->getQuery()->getArrayResult();
    }

    /**
     * @return Project[] Returns an array of Project objects
     */
    public function findProjectsByCreatedAt()
    {
        $qb = $this->CreateQueryBuilder('p')
          ->leftJoin('p.statut', 'st')
          ->leftJoin('p.tags', 't')
          ->leftJoin('p.technos', 'te')
          ->leftJoin('p.skills', 's')
          ->leftJoin('p.users', 'u')
          ->addSelect('t', 'te', 's', 'PARTIAL u.{id, username}', 'st')
          ->orderBy('p.createdAt', 'DESC');

        return $qb->getQuery()->getArrayResult();
    }

    /**
     * @return Project[] Returns an array of Project objects
     */
    public function findOneProjectById($id)
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
          ->leftJoin('p.requests', 'r')
          ->addSelect('t', 'th', 's', 'PARTIAL u.{id, username}', 'st', 'c', 'r');

        return $qb->getQuery()->getArrayResult();
    }

 /**
     * @return Project[] Returns an array of Project objects
     */
    public function findProjectsBySearchTitle($title)
    {
        $qb = $this->CreateQueryBuilder('p')
          ->where('p.title LIKE :titleOfProject')
          ->setParameter('titleOfProject', '%' . $title . '%')
          ->leftJoin('p.tags', 't')
          ->leftJoin('p.technos', 'th')
          ->leftJoin('p.skills', 's')
          ->leftJoin('p.statut', 'st')
          ->leftJoin('p.comments', 'c')
          ->leftJoin('p.users', 'u')
          ->leftJoin('p.requests', 'r')
          ->addSelect('p', 't', 'th', 's', 'PARTIAL u.{id, username}', 'st', 'c', 'r');

        return $qb->getQuery()->getArrayResult();
    }
}
