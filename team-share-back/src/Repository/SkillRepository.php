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
        $qb = $this->CreateQueryBuilder('t')
            ->where('t.id = :idOfSkill')
            ->setParameter('idOfSkill', $id)
            ->leftJoin('t.projects', 'p')
            ->addSelect('PARTIAL p.{id, title}')
            ->orderBy('p.title', 'ASC');

        return $qb->getQuery()->getArrayResult();
    }
}
