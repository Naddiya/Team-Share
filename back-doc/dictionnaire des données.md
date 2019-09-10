# Dictionnaire de données

## Projets (`Project`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du projet|
|title|VARCHAR(255)|NOT NULL, UNIQUE|Le titre du projet|
|description|TEXT|NOT NULL|La description du projet|
|content|TEXT|NOT NULL|Le contenu détaillé du projet|
|image|TEXT|NULL|L'image d'illustration du projet|
|created_at|DATETIME|NOT NULL|La date de création du projet|
|updated_at|DATETIME|NULL|La date de modification du projet|
|started_at|VARCHAR(25)|NULL|La date souhaitée de début de projet|
|finished_at|VARCHAR(25)|NULL|La date souhaitée de fin de projet|
|nbCollaborattor|INT|NOT NULL|Le nombre de personnes souhaitées sur le projet|
|isActive|BOOLEAN|NOT NULL|Est-ce que le projet est visible ou censuré|
|isSleep|BOOLEAN|NOT NULL|Est-ce que le projet est en pause|
|nbLike|INT|NULL|Le nombre de personnes qui aiment le projet|
|urlFacebook|TEXT(500)|NULL|Lien vers la page Facebook du projet|
|urlTwitter|TEXT(500)|NULL|Lien vers la page Twitter du projet|
|urlGithub|TEXT(500)|NULL|Lien vers le repo Github du projet|
|urlTipee|TEXT(500)|NULL|Lien vers le compte Tipee du projet|
|statut|entity|NOT NULL|Le statut du projet|
|users|entity|NOT NULL|Les utilisateurs qui participent au projet|
|technos|entity|NULL|Les technos recherchées pour le projet|
|skills|entity|NULL|Les compétences recherchées pour le projet|
|comments|entity|NULL|Commentaires du projet|
|tags|entity|NULL|Les tags correspondants au projet|
|requests|entity|NULL|Les demandes de participation au projet|

## Utilisateurs (`User`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de l'utilisateur|
|firstname|VARCHAR(100)|NULL|Le prénom de l'utilisateur|
|lastname|VARCHAR(100)|NULL|Le nom de l'utilisateur|
|jobTitle|VARCHAR(255)|NULL|L'intitulé du poste de l'utilisateur|
|mail|VARCHAR(255)|NOT NULL|L'adresse mail de l'utilisateur|
|password|VARCHAR(255)|NOT NULL|Le mot de passe de l'utilisateur|
|city|VARCHAR(100)|NULL|La ville l'utilisateur|
|phone|VARCHAR(15)|NULL|Le numéro de téléphone de l'utilisateur|
|score|INT|NULL|Le score de l'utilisateur|
|photo|TEXT|NULL|La photo de l'utilisateur|
|description|TEXT|NULL|La description de l'utilisateur|
|isActive|BOOLEAN|NOT NULL|Est-ce que l'utilisateur n'a pas été bloqué par un administrateur|
|urlFacebook|TEXT|NULL|Lien facebook de l'utilisateur|
|urlGithub|TEXT|NULL|Lien Github de l'utilisateur|
|urlTwitter|TEXT|NULL|Lien Twitter de l'utilisateur|
|urlLinkedin|TEXT|NULL|Lien Linkedin de l'utilisateur|
|username|VARCHAR(100)|NOT NULL, UNIQUE|L'identifiant de l'utilisateur|
|role|entity|NOT NULL|Le role en fonction des droits de l'utilisateur|
|projects|entity|NULL|Les projets crées ou auxquels participent l'utilisateur|
|technos|entity|NULL|La ou les technos de l'utilisateur|
|comments|entity|NULL|Le commentaire de l'utilisateur|
|skills|entity|NULL|Le ou les skills de l'utilisateur|
|requests|entity|NULL|Les demandes de l'utilisateur|


## Rôles des utilisateurs (`Role`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du rôle|
|name|VARCHAR(100)|NOT NULL, UNIQUE|Le nom du rôle|
|code|VARCHAR(100)|NOT NULL, UNIQUE|Le code du rôle|
|users|entity|NULL|Les utilisateurs qui possédent ce rôle|

## Demandes de participation et leurs réponses (`Request`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de la requete|
|title|VARCHAR(255)|NOT NULL|Le nom du projet|
|content|TEXT|NOT NULL|Contenu du projet|
|statut|VARCHAR(20)|NULL|Statut de la demande ou de la réponse : NULL / In Progress / Checked|
|response|BOOLEAN|NULL|Est-ce que la demande a été accepté par le createur|
|created_at|DATETIME|NOT NULL|La date de création de la question|
|user|entity|NOT NULL|L'utilisateur qui a fait la demande|
|project|entity|NOT NULL|Le projet relatif a la demande|

## Commentaires (`Comment`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du commentaire|
|content|TEXT|NOT NULL|Contenu du commentaire|
|isActive|BOOLEAN|NOT NULL|Est-ce que le commentaire n'a pas été bloquée par un administrateur|
|created_at|DATETIME|NOT NULL|La date de création du commentaire|
|project|entity|NOT NULL|Le projet relatif au commentaire|
|user|entity|NOT NULL|L'utilisateur qui a posté le commentaire|

## Tags (`tag`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du tag|
|name|VARCHAR(100)|NOT NULL, UNIQUE|Le nom du tag|
|projects|entity|NULL|Les projets reliés au tag|

## Technologies (`techno`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de la techno|
|name|VARCHAR(100)|NOT NULL, UNIQUE|Le nom de la techno|
|projects|entity|NULL|Les projets qui recherchent cette techno|
|users|entity|NULL|Les utilisateurs qui possédent cette techno|

## Statuts (`statut`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du statut|
|name|VARCHAR(100)|NOT NULL, UNIQUE|Le statut de progression du projet : Not Start / In Progress / Finished|
|projects|entity|NULL|Les projets reliés au statut|

## Compétences (`skill`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du skill|
|name|VARCHAR(100)|NOT NULL, UNIQUE|Le nom de la compétence|
|users|entity|NULL|Les utilisateurs qui ont cette compétence|
|projects|entity|NULL|Les projets qui recherchent cette compétence|

