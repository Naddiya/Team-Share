# Routes

| URL | Titre | Description de la page | Méthode HTTP | Controller | Méthode | commentaire |
|--|--|--|--|--|--|--|
| `/` | Accueil | Page d'accueil | GET | HomeController | home |  |
| `/project/index` | Liste des projets | Page affichant les différents projets | GET | ProjectController | project_index |  |
| `/project/[id]` | Titre du projet | Affichage du détail d'un projet | GET | ProjectController | project_show |  |
| `/project/new` | Votre projet | Création d'un nouveau projet | POST | ProjectController | project_new |  |
| `/user/register` | Inscription | Page d'inscription | POST | UserController | user_register | A fournir: tous les champs du formulaire même vides |
| `/user/update` | Modifier son profil | Modification de mon profil utilisateur | POST | UserController | user_update | A fournir: tous les champs du formulaire même vides + token |
| `/user/myprofile` | Affichage de mon profil | Affichage de mon profil | GET | UserController | user_myprofile |  |
| `/user/[id]` | Profil de **** | Affichage du profil de **** | GET | UserController | user_show |  |
| `/login` | Connexion | Page de connexion | - | SecurityController | app_login | A fournir: username + password |
| `/logout` | Déconnexion | déconnexion | - | SecurityController | app_logout | A fournir: token |
| `/request/new` | Demande de participation | Demande de participation de l'utilisateur à un projet | POST | RequestController | request_new | A fournir: token + id du projet |
| `/request/index` | Affichage des demandes | Affichage des demandes concernant l'utilisateur connecté | GET | RequestController | request_index | A fournir: token  |
| `/request/response` | Affichage de la demande | Demande de participation | POST | RequestController | request_response | A fournir: token + id du projet + response (0 ou 1) |
| `/tag/index` | Tags | Liste des tags | GET | TagController | tag_index |  |
| `/tag/[id]` | Liste des projets du tag | Affichage de la liste des projets liés au tag | GET | TagController | tag_show_ |  |
| `/techno/index` | Technologies | Liste des technologies | GET | TechnoController | techno_index |  |
| `/techno/[id]` | Liste des projets d'une techno | Affichage de la liste des projets liés à la techno | GET | TechnoController | techno_show_ |  |
| `/skill/index` | Compétences | Liste des compétences | GET | SkillController | skill_index |  |
| `/skill/[id]` | Liste des projets d'une compétence | Liste des projets d'une compétence | GET | skillController | skill_show_ |  |
| `/follow/add` | Like/Dislike | Ajoute ou retire un like à chaque appel | POST | FollowController | follow_add | A fournir: token + id du projet |
| `/follow/state` | Etat du like | Renvoie true ou false en fonction du like du projet par l'utilisateur | GET | FollowController | follow_state | A fournir: token + id du projet |

# Routes optionnelles

| URL | Titre | Description de la page | Méthode HTTP | Controller | Méthode | commentaire |
|--|--|--|--|--|--|--|
| `/project/delete` | Supprimer mon projet | Supprimer mon projet | POST | ProjectController | project_delete |  |
| `/project/[id]/delete` | Supprimer un utilisateur | Supprimer un utilisateur | POST | ProjectController | project_user_delete |  |
| `/user/delete` | Supprimer mon compte | Supprimer mon compte | POST | UserController | user_delete |  |
| `/project/[id]` | Titre du projet | Modification de mon projet | POST | ProjectController | project_show |  |
| `/project/[id]/sleep` | Titre du projet | Modification de mon projet | POST | ProjectController | project_show |  |
| `/user/note` | Noter un utilisateur | Noter un utilisateur | POST | UserController | user_note |  |
| `/user/list` | Les utilisateurs | Liste des utilisateurs | GET | UserController | user_index |  |
| `/request/delete` | Demande de participation | Demande de participation | POST | RequestController | request_new |  |
| `/tag/new` | Nouveau tag | Création d'un nouveau tag | POST | TagController | tag_new |  |
| `/techno/new` | Nouvelle techno | Création d'une nouvelle techno | POST | TechnoController | techno_new |  |
| `/skill/new` | Nouvelle compétence | Création d'une nouvelle compétence | POST | SkillController | skill_new |  |
