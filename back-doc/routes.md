# Routes

| URL | Titre | Description de la page | Méthode HTTP | Controller | Méthode | commentaire |
|--|--|--|--|--|--|--|
| `/` | Accueil | Page d'accueil | GET | HomeController | home |  |
| `/project/index` | Liste des projets | Page affichant les différents projets | GET | ProjectController | project_index |  |
| `/project/[id]` | Titre du projet | Affichage du détail d'un projet | GET | ProjectController | project_show |  |
| `/project/new` | Votre projet | Création d'un nouveau projet | POST | ProjectController | project_new |  |
| `/project/delete` | Supprimer mon projet | Supprimer mon projet | POST | ProjectController | project_delete |  |
| `/project/[id]/delete` | Supprimer un utilisateur | Supprimer un utilisateur | POST | ProjectController | project_user_delete |  |
| `/project/like` | Liker une page | Ajouter ou supprimer son like | POST | ProjectController | project_like |  |
| `/user/[id]` | Profil de **** | Affichage du profil de l'utilisateur | GET | UserController | user_show |  |
| `/user/edit` | Mon profil | Affichage/modification de mon profil utilisateur | GET POST | UserController | user_edit |  |
| `/user/delete` | Supprimer mon compte | Supprimer mon compte | POST | UserController | user_delete |  |
| `/user/register` | Inscription | Page d'inscription | POST | UserController | user_register |  |
| `/login` | Connexion | Page de connexion | POST | SecurityController | login |  |
| `/logout` | Déconnexion | déonnexion | - | SecurityController | logout |  |
| `/request/new` | Demande de participation | Demande de participation | POST | RequestController | request_new |  |
| `/request/[id]` | Affichage de la demande | Demande de participation | GET | RequestController | request_show |  |
| `/tag` | Tags | Liste des tags | GET POST | TagController | tag_index |  |
| `/tag/[id]` | Nom du tag | Affichage de la liste des projets liées au tag | GET | TagController | tag_project_index |  |
| `/techno` | Technos | Liste des technos | GET POST | TechnoController | techno_index |  |
| `/techno/[id]` | Nom d'une techno | Affichage de la liste des projets liées à la techno | GET | TechnoController | techno_project_index |  |
| `/skill/index` | Liste des compétences | Liste des compétences | GET | SkillController | skill_index |  |
| `/skill/[id]` | Liste des projets recherchant cette compétence | Liste des projets recherchant cette compétence | GET | skillController | skill_project_index |  |

# Routes optionnelles

| URL | Titre | Description de la page | Méthode HTTP | Controller | Méthode | commentaire |
|--|--|--|--|--|--|--|
| `/project/[id]` | Titre du projet | Modification de mon projet | POST | ProjectController | project_show |  |
| `/project/[id]/sleep` | Titre du projet | Modification de mon projet | POST | ProjectController | project_show |  |
| `/project/follow` | Suivre un projet | Suivre un projet | POST | ProjectController | user_follow |  |
| `/user/note` | Noter un utilisateur | Noter un utilisateur | POST | UserController | user_note |  |
| `/user/list` | Les utilisateurs | Liste des utilisateurs | GET | UserController | user_index |  |
| `/request/delete` | Demande de participation | Demande de participation | POST | RequestController | request_new |  |
| `/tag/new` | Nouveau tag | Création d'un nouveau tag | POST | TagController | tag_new |  |
| `/techno/new` | Nouvelle techno | Création d'une nouvelle techno | POST | TechnoController | techno_new |  |
| `/skill/new` | Nouvelle compétence | Création d'une nouvelle compétence | POST | SkillController | skill_new |  |
