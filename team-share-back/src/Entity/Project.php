<?php

namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProjectRepository")
 */
class Project
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\Column(type="text")
     */
    private $content;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $image;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="string", length=25, nullable=true)
     */
    private $startedAt;

    /**
     * @ORM\Column(type="string", length=25, nullable=true)
     */
    private $finishedAt;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbCollaborator;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isActive;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isSleep;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $nbLike;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $urlFacebook;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $urlTwitter;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $urlGithub;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $urlTipeee;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Statut", inversedBy="projects")
     * @ORM\JoinColumn(nullable=false)
     */
    private $statut;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Techno", inversedBy="projects", cascade={"persist"})
     */
    private $technos;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Skill", inversedBy="projects", cascade={"persist"})
     */
    private $skills;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Tag", inversedBy="projects", cascade={"persist"})
     */
    private $tags;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\User", inversedBy="projects", cascade={"persist"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $users;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Comment", mappedBy="project", orphanRemoval=true)
     */
    private $comments;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Request", mappedBy="project", orphanRemoval=true)
     */
    private $requests;

    public function __construct()
    {
        $this->createdAt = new DateTime();
        $this->isActive = true;
        $this->isSleep = false;
        $this->technos = new ArrayCollection();
        $this->skills = new ArrayCollection();
        $this->tags = new ArrayCollection();
        $this->users = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->requests = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getStartedAt(): ?string
    {
        return $this->startedAt;
    }

    public function setStartedAt(string $startedAt): self
    {
        $this->startedAt = $startedAt;

        return $this;
    }

    public function getFinishedAt(): ?string
    {
        return $this->finishedAt;
    }

    public function setFinishedAt(string $finishedAt): self
    {
        $this->finishedAt = $finishedAt;

        return $this;
    }

    public function getNbCollaborator(): ?int
    {
        return $this->nbCollaborator;
    }

    public function setNbCollaborator(int $nbCollaborator): self
    {
        $this->nbCollaborator = $nbCollaborator;

        return $this;
    }

    public function getIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;

        return $this;
    }

    public function getIsSleep(): ?bool
    {
        return $this->isSleep;
    }

    public function setIsSleep(bool $isSleep): self
    {
        $this->isSleep = $isSleep;

        return $this;
    }

    public function getNbLike(): ?int
    {
        return $this->nbLike;
    }

    public function setNbLike(?int $nbLike): self
    {
        $this->nbLike = $nbLike;

        return $this;
    }

    public function getUrlFacebook(): ?string
    {
        return $this->urlFacebook;
    }

    public function setUrlFacebook(?string $urlFacebook): self
    {
        $this->urlFacebook = $urlFacebook;

        return $this;
    }

    public function getUrlTwitter(): ?string
    {
        return $this->urlTwitter;
    }

    public function setUrlTwitter(?string $urlTwitter): self
    {
        $this->urlTwitter = $urlTwitter;

        return $this;
    }

    public function getUrlGithub(): ?string
    {
        return $this->urlGithub;
    }

    public function setUrlGithub(?string $urlGithub): self
    {
        $this->urlGithub = $urlGithub;

        return $this;
    }

    public function getUrlTipeee(): ?string
    {
        return $this->urlTipeee;
    }

    public function setUrlTipeee(?string $urlTipeee): self
    {
        $this->urlTipeee = $urlTipeee;

        return $this;
    }

    public function getStatut(): ?Statut
    {
        return $this->statut;
    }

    public function setStatut(?Statut $statut): self
    {
        $this->statut = $statut;

        return $this;
    }

    /**
     * @return Collection|Techno[]
     */
    public function getTechnos(): Collection
    {
        return $this->technos;
    }

    public function addTechno(Techno $techno): self
    {
        // if (!$this->technos->contains($techno)) {
            $this->technos[] = $techno;
        // }

        return $this;
    }

    public function removeTechno(Techno $techno): self
    {
        if ($this->technos->contains($techno)) {
            $this->technos->removeElement($techno);
        }

        return $this;
    }

    /**
     * @return Collection|Skill[]
     */
    public function getSkills(): Collection
    {
        return $this->skills;
    }

    public function addSkill(Skill $skill): self
    {
        // if (!$this->skills->contains($skill)) {
            $this->skills[] = $skill;
        // }

        return $this;
    }

    public function removeSkill(Skill $skill): self
    {
        if ($this->skills->contains($skill)) {
            $this->skills->removeElement($skill);
        }

        return $this;
    }

    /**
     * @return Collection|Tag[]
     */
    public function getTags(): Collection
    {
        return $this->tags;
    }

    public function addTag(Tag $tag): self
    {
        //genere un bug avec faker
        // if (!$this->tags->contains($tag)) {
            $this->tags[] = $tag;
        // }

        return $this;
    }

    public function removeTag(Tag $tag): self
    {
        if ($this->tags->contains($tag)) {
            $this->tags->removeElement($tag);
        }

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        // if (!$this->users->contains($user)) {
            $this->users[] = $user;
        // }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->contains($user)) {
            $this->users->removeElement($user);
        }

        return $this;
    }

    /**
     * @return Collection|Comment[]
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setProject($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comments->contains($comment)) {
            $this->comments->removeElement($comment);
            // set the owning side to null (unless already changed)
            if ($comment->getProject() === $this) {
                $comment->setProject(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Request[]
     */
    public function getRequests(): Collection
    {
        return $this->requests;
    }

    public function addRequest(Request $request): self
    {
        if (!$this->requests->contains($request)) {
            $this->requests[] = $request;
            $request->setProject($this);
        }

        return $this;
    }

    public function removeRequest(Request $request): self
    {
        if ($this->requests->contains($request)) {
            $this->requests->removeElement($request);
            // set the owning side to null (unless already changed)
            if ($request->getProject() === $this) {
                $request->setProject(null);
            }
        }

        return $this;
    }
}
