 # Apothéose

- 4 sprints d'une semaine
- Les horaires 9h - 15h + 2h libres (obligatoire mais horaires au choix)
- 1 RDV avec le référent projet (Loris) par semaine
- 1 point "retrospective" hebdo tous les jeudi dans le cockpit
  - Présentation du sprint passé face à un autre groupe
  - 15 min par groupe (max)
  - **Tout le monde** doit présenter au moins une fois
  
  # Outils
  
  ## Production informative
  - Gestion des tâches : Trello / Git Glo / Github Projects
  - Google Docs (collaboratif)
  - Les documents au format Markdown (typiquement un résumé du projet dans le repo)
  
  ## SOS
  - Un problème -> une issue sur [Projects](https://github.com/O-clock-Sirius/Projects) !
  - Points projet réguliers avec @galenskap / @Pierre-Oclock / @LorisOclock -> on pourra évoquer les problématiques
  
  # Livrables
  
  - Journal de bord : journal d'équipe
    - 1 entrée / jour
    - permet de communiquer sur votre projet
    - permet de garder une trace de la progression de votre projet
    
```
## 19/04
Jerome :
- hier : inté header av. bootstrap
  aujourd'hui : inté footer
  problèmes questions ? est ce que je mets un men vers tructruc dans le footer ? pas clair dans le wireframe
Maxime :
- hier : ....
- aujourd'hui : ...
- pb quest? ...
```

  - Journal perso : journal individuel
    - à remplir au fur & à mesure de la journée avec les actions menées
    - est un vrai plus (voir un élément indispensable) pour préparer le dossier du Titre Pro
    
  - Doc de projet
    - décrire l'équipe
    - répartition des responsabilités
    - organisation du travail
    
  - Cahier des charges
    - description du projet
    - objectifs
    - contraintes
    
  - Specs fonctionnelles
    - Arbo
    - Fonctionnalités
    - User stories
    - Wireframes (bien commentés et légendés)
    
  - Specs techniques (sont produites à partir des contraintes)
    - L'architecture
    - Les technos
    - Les librairies
    - L'orga du code
    - Les conventions
    - Les outils
    - etc...
    
  - Description des données, dico de données, MCD, ...
  
  # Répartition des rôles
  
  **Tout le monde doit intervenir sur tous les aspects du travail de conception**
  
  - Specs fonctionnelles
  - La conception de la BDD
  - Le maquettage
  - ...
  
  **Les reponsables -> mettent en place les outils / "supervisent", mais ne font pas nécessairement le travail**
  
  - Product Owner : représentant des utilisateurs
  - Project Manager : mettre en place des outils de gestion de projet, créer les livrables, s'assurer que l'équipe a toutes les infos pour travailler sur le projet (infos de connexion, config, docs...).
  - Responsable Front : vérifier la cohérence / valider les maquettes, choisir des lib front (responsive...), s'assurer que l'équipe a ce qu'il faut pour dev le front.
  - Responsable Back : vérifier la cohérence / valider MCD, MLD..., monter la BDD, mettre en place l'archi, s'assurer que l'équipe a ce qu'il faut pour dev le back.
  - Référent(s) technique(s) : pour chaque "techno" "outil" : BDD, API, lib, git...
  
# Prochaines étapes

## Feuille de route des prochains jours

- J1 : Réunion de lancement en groupe
  - Création du doc de projet
  - Création du cahier des charges
  - Description succinte -> tout le monde est OK sur l'objectif
  - Identifier les typologies d'utilisateurs
  - Identifier les grands domaines fonctionnels
  - Equipe et répartition des rôles
  - Réfléchir à un premier jet d'arbo
  - Répartition du travail de specs fonctionnelles
  - Contraintes et choix techniques (liste des outils, contraintes : responsive, qualité, bonnes pratiques, conventions, etc...) -> peut évoluer plus tard dans le projet
  
- J1 : Travail perso / "pair programming" par domaine fonctionnel
  - précision des specs fonctionnelles: liste des stories, wireframe,...
  
- J1 : Travail perso / "pair programming" par domaine technique
  - Project manager : créer les documents
  - Resp Back : premier jet d'archi
  - Resp Front : immaginer une première charte graphique, commencer à choisir des librairies (documentation, charger, etc...)
  
- J2 : Coordination - 1er Daily meeting (réunion quotidienne)
  - Coordination fonctionnelle :
    - Chacun explique le résultat de son travail exploratoire -> on prend les décisions en team
    - Priorisation du Backlog (liste des stories) -> Identifier le MVP (Minimum Viable Product)
  - Coordination technique :
    - Chacun explique ce qu'il a trouvé, mis en place, partage ses connaissances, donne ses instructions
    
- J2 : Travail perso
  - En fonction des décisions prises en réu
  - Préciser les fonctionnalités et stories
  - Préciser les wireframes
  -> Finaliser les specs fonctionnelles (en lien avec votre MVP)
  - Chacun fait en sorte d'avoir un setup fonctionnel (environnement de dev...)
  
  ==> On a des specs fonctionnelles les plus précises possible, un ordre de prio, des docs de projet complets (ou quasi) et une bonne idée de l'architecture.
  
- J3
  - On complète le sprint planning (Trello, Glo... que le PM a préparé)
    - La base des tâches : user stories et le backlog
    - Chaque resp. technique / tout le monde va ajouter des tâches non fonctionnelles à réaliser (compléter les docs, mettre en place des modules, des libs, s'occuper de la conception de la BDD, ...)
    - On identifie les tâches et stories réalisables pendant le **1er sprint**
      -> On priorise
      -> On assigne
      
## Chaque jour (plus globalement)

- Réu quotidienne pour **toute l'équipe** -> journal d'équipe
- Mise à jour du Trello, Glo, Github projet...et communication
- Répartition du travail de la journée (en pair programming / équipe / seul)
- On dev !
