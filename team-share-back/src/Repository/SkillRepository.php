<?php

namespace App\Repository;

use App\Entity\Skill;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Skill|null find($id, $lockMode = null, $lockVersion = null)
 * @method Skill|null findOneBy(array $criteria, array $orderBy = null)
 * @method Skill[]    findAll()
 * @method Skill[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SkillRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Skill::class);
    }

    /**
     * @return Skill[] Returns an array of Skill objects
     */
    public function findAllSkills()
    {
        $qb = $this->CreateQueryBuilder('t')
            ->select('t.id', 't.name')
            ->orderBy('t.name', 'ASC');

        return $qb->getQuery()->getArrayResult();
    }

    /**
     * @return Projects[] Returns an array of Projects objects
     */
    public function findProjectsBySkill($id)
    {
        $qb = $this->CreateQueryBuilder('s')
        ->where('s.id = :idOfSkill')
        ->setParameter('idOfSkill', $id)
        ->leftJoin('s.projects', 'p')
        ->leftJoin('p.tags', 't')
        ->leftJoin('p.technos', 'te')
        ->leftJoin('p.statut', 'st')
        ->addSelect('p', 't', 'te', 'st')
        ->orderBy('p.title', 'ASC');

    return $qb->getQuery()->getArrayResult();
    }
}
