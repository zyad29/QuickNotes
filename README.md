## Bienvenue sur QuickNotes - Application de Notes avec Catégories

QuickNotes est une application web moderne permettant de créer, organiser et gérer vos notes avec un système de catégorisation simple et efficace. L'application utilise Java/Spring Boot pour le backend et React pour le frontend.

# Fonctionnalités

• Création de notes avec titre, contenu et catégorie
• Marquage des notes importantes
• Filtrage par catégorie
• Affichage des notes importantes uniquement
• Interface utilisateur moderne et responsive

# Prérequis
Pour installer et exécuter ce projet, vous aurez besoin de :

Java JDK 17+
Maven
Node.js (version 16+)
npm ou yarn
Git

# Installation

1. Cloner le dépôt
bashCopiergit clone https://github.com/votre-username/quicknotes.git
cd quicknotes

2. Démarrer le backend (Spring Boot)
cd backend
mvn spring-boot:run
Le serveur backend démarrera sur http://localhost:8082 (ou le port configuré dans application.properties).

3. Démarrer le frontend (React)
Dans un nouveau terminal :
cd frontend
npm install
npm run dev
L'application frontend démarrera sur http://localhost:3000.

# Structure du projet

backend/ - Projet Spring Boot

src/main/java/com/quicknotes/ - Code source Java

controller/ - Contrôleurs REST
model/ - Entités JPA
repository/ - Couche d'accès aux données
service/ - Logique métier
config/ - Configuration de l'application


src/main/resources/ - Ressources et configuration

application.properties - Configuration de Spring Boot




frontend/ - Projet React (Vite)

src/ - Code source React

components/ - Composants React
App.jsx - Composant principal
main.jsx - Point d'entrée
styles.css - Styles globaux



# Configuration

Backend
Vous pouvez modifier les paramètres du backend dans le fichier backend/src/main/resources/application.properties :
propertiesCopier# Changer le port du serveur
server.port=8082

# Configuration de la base de données
# Par défaut, une base de données H2 en mémoire est utilisée
Frontend
La configuration du frontend se trouve dans le fichier frontend/vite.config.js.
Utilisation

Ouvrez votre navigateur et accédez à http://localhost:3000
Consultez les notes existantes sur la page d'accueil
Filtrez les notes par catégorie en cliquant sur les boutons de catégorie
Affichez uniquement les notes importantes en cliquant sur le bouton "⭐ Important uniquement"
Créez une nouvelle note en cliquant sur "Nouvelle Note"
Supprimez une note en cliquant sur l'icône de corbeille

# Base de données

L'application utilise une base de données H2 en mémoire par défaut, ce qui signifie que les données sont réinitialisées à chaque redémarrage. Pour une utilisation en production, vous devriez configurer une base de données persistante comme MySQL ou PostgreSQL.
Développement
Backend
Pour ajouter de nouvelles fonctionnalités au backend :

Créez/modifiez les entités dans le dossier model/
Ajoutez/modifiez les interfaces repository dans repository/
Implémentez la logique métier dans les services
Exposez les nouveaux endpoints dans les contrôleurs REST

# Frontend

Pour étendre le frontend :

Ajoutez de nouveaux composants dans le dossier components/
Modifiez les routes dans App.jsx pour inclure de nouvelles pages
Ajoutez de nouveaux appels API selon les besoins

# Contraintes

- Les données sont réinitialisées à chaque redémarrage du serveur (normal avec H2 en mémoire).
- Aucun système d'authentification n'est implémenté.

# Contribution
Les contributions sont les bienvenues ! N'hésitez pas à soumettre des pull requests ou à ouvrir des issues pour proposer des améliorations ou signaler des bugs.


                                --------------------------------------------------------------------


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.