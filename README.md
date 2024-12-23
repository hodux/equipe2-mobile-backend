# equipe2-mobile-backend
Épreuve Finale - Développement d'une Application Android

Lien Frontend | [https://github.com/hodux/equipe2-mobile-frontend](https://github.com/hodux/equipe2-mobile-frontend)

---

## Howah | Backend
Application native pour l'affichage de films sur mobile 

### Étudiants
* Yves-Shaheem Shedid - GitHub : Yves-Shaheem
* Mathieu G. Sousa - GitHub : hodux

## Getting started
Voici comment démarrer le serveur backend de Howah

### Prérequis
Assurez-vous d'avoir ces versions installées
- node.js v22.12.0
- npm 10.9.0
- mysql 8.4.3

### Installation
1. Un exemple de fichier .env est fourni, voici son contenu, assurez vous qu'il correspond avec votre environnement, sinon modifiez-le
```
MYSQL_HOST = 127.0.0.1
MYSQL_PORT = 3306
MYSQL_USER = root
MYSQL_PASSWORD = abc-123
MYSQL_DATABASE = howah
PORT = 8080
JWT_SECRET = tpmobile
```
2. Créez la BD 
```sh 
mysql -u root -p < src/data/makeBD.sql
```
3. Installez les dépendances
```sh
npm install
```
4. Lancer le serveur
```sh
npm run start
npm run dev # avec nodemon
```
