# Table des matières

1. Introduction
2. Objectifs du site Internet
3. Arborescence
4. En-tête commune à toutes les pages
5. Pied de page commune à toutes les pages
6. Page d'accueil
7. Page liste des projets
8. Fiche projet
9. Page d'inscription
10. Page de connexion
11. Mentions légales
12. Espace utilisateur connecté  
12.1 Mon compte  
12.2 Créer un projet
13. Avancement du projet
14. Qui sommes-nous ?
15. Outils utilisés 


# 1. Introduction 

O’Boulot est une plateforme qui permet  de présenter un projet de développement web. 
Une personne ayant une idée d'un projet web qu'il voudrait réaliser et pour lequel il aurait besoin d'un ou plusieurs collaborateurs car il ne se sent pas en capacité de réaliser le projet seul (complexité, charge de travail...) ou qu'il n'a pas toutes les compétences techniques requises.
 

# 2. Objectifs du site Internet

Permettre aux développeurs de se mettre en relation autour d’un projet web
Rechercher des personnes ayant d’autres compétences / technos utilisées
Accélérer la conception d’un projet grâce au travail en équipe
Promouvoir son projet auprès d’un public ciblé 


# 3. Arborescence 

                                   +----------+
                                   |   Home   |
                                   +----+-----+
                                        |
                                        |
                   +--------------------+----------------------+--------------+
                   |                    |                      |              |
                   |                    |                      |              |
                   |                    |                      |              |
            +------+-----+              |               +------+------+       |
            |            |              |               |             |       |
            | Connexion  |              |               |  Subscribe  |       |
            |            |              |               |             |       |
            +-----+------+              |               +-------------+       |
                  |      \              |              /                      |
                  |       \             |             /                       |
                  |        \            |            /                 +------+------+
             +---------+    \           |           /                  |             |
             |         |     \          |          /                   |   Legal     |
             | Account |      \         |         /                    |   Mentions  |
             |         |       \        |        /                     |             |
             +---------+        \       |       /                      +-------------+
                                 \      |      /
                                  +-----+-----+          +------------------+
                                  |           |          |                  |
                                  |  Projects |----------+  Detail Project  |
                                  |           |          |                  |
                                  +-----------+          +------------------+
                                        |
                                        |
                                 /------+-----\    
                                ( if connected )------------------+------------------------+
                                 \-----+------/                   |                        |
                                       |                          |                        |
                                       |                          |                        |
                                +------+-------+            +-----+------+         +-------+---------+
                                |              |            |            |         |                 | 
                                |    Create    |            | My Profil  |         |   Other profil  |
                                |    Project   |            |            |         |                 | 
                                |              |            +------------+         +-----------------+ 
                                +--------------+
                                
# 4. En-tête commune à toutes les pages
 
	Ajouter le wireframe
	Décrire le wireframe

- Navbar = Accueil (logo) / Connexion / Inscription / Projets


# 5. Pied de page commun à toutes les pages
 
	Ajouter le wireframe
	Décrire le wireframe

- Liens de navigation / A propos … 


# 6. Page d'accueil
	
Version desktop :
<img src="../Specs fonctionnelles/Wireframes/Accueil - Desktop.png">
Version mobile :
<img src="../Specs fonctionnelles/Wireframes/Accueil - Mobile.png">

- Landing container > Présentation du site (nom)
- A propos (du site / de l’équipe)
- Projets mis en avant (2-3)


# 7. Page liste des projets

Version desktop :
<img src="../Specs fonctionnelles/Wireframes/Liste des projets - Desktop.png">
Version mobile :
<img src="../Specs fonctionnelles/Wireframes/Liste des projets - Mobile.png">

- Filtre des projets (par catégorie / par nom / par date de publication)
- Liste des projets proposés


# 8. Fiche projet

Version desktop :
<img src="../Specs fonctionnelles/Wireframes/Fiche Projet - Desktop.png">
Version mobile :
<img src="../Specs fonctionnelles/Wireframes/Fiche projet - Mobile.png">

- Infos sur le projet
- L'équipe
- Description complète
- Rejoindre le projet / liens de contatc
- Commentaires


# 9. Page d'inscription

<img src="../Specs fonctionnelles/Wireframes/Modal - Inscription.png">

- Formulaire d’inscription type modal


# 10. Page de connexion

<img src="../Specs fonctionnelles/Wireframes/Modal - Connexion.png">

- Formulaire de connexion type modal


## 11. Mentions légales

Version desktop :
<img src="../Specs fonctionnelles/Wireframes/Mentions légales - Desktop.png">
Version mobile :
<img src="../Specs fonctionnelles/Wireframes/Mentions légales - Mobile.png">


# 12. Espace utilisateur connecté

## 12.1 Mon compte

Version desktop :
<img src="../Specs fonctionnelles/Wireframes/Mon Profil - Desktop.png">
Version Mobile :
<img src="../Specs fonctionnelles/Wireframes/Mon Profil - Mobile.png">

- Profil de l'utilisateur
- Projets en cours
- Projets réalisés


## 12.2 Créer un projet

Version desktop :
<img src="../Specs fonctionnelles/Wireframes/Création d'un projet - Desktop.png">
Version Mobile :
<img src="../Specs fonctionnelles/Wireframes/Création d'un projet - Mobile.png">

- Infos sur le projet
- Les technos et compétences recherchées
- Description complète
- Ajout de documents

# 13. Avancement du projet



# 14. Qui sommes-nous ?



# 15. Outils utilisés 

## Front 

ESLint

React-modal : https://www.npmjs.com/package/react-modal

React-dates : https://www.npmjs.com/package/react-dates

React-accordion : https://github.com/springload/react-accessible-accordion

Webpack / Babel

Lighthouse : https://developers.google.com/web/tools/lighthouse/

Librairie UI : Semantic-ui

CSS : React-css / Semantic-ui-css / Custom CSS

Animations changement page : Swup.js