# 📑 Cahier des Charges Détaillé – Portail Urbanisation SI & Audit

**Projet :** Portail Web interactif (HTML/CSS/JS/Bootstrap) pour la présentation de l’urbanisation du SI, la cartographie SI et l’audit de maturité d’un grand groupe de distribution d’eau et d’électricité.

---

## 1. 🎯 Contexte & Enjeux

Le groupe gère un **système d’information complexe**, composé de :

* Applications métiers critiques (CRM, Billing, ERP, HES-MDM pour compteurs intelligents, plateformes IoT).
* Infrastructures hybrides (Data Center local + Cloud public/privé).
* Multiples utilisateurs (clients, agents, techniciens, direction).
* Risques croissants (cyberattaques, dette technique, obsolescence, perte de compétences).

👉 **Enjeu :** Avoir une **vision claire, pédagogique et moderne** du SI via un **portail interactif** qui :

* Met en valeur la **stratégie et la gouvernance SI**.
* Montre les **relations entre métiers, applications, données et infrastructures**.
* Fournit un **outil d’audit et de recommandations**.
* Devienne une **référence interne** pour la DSI, les métiers et la direction générale.

---

## 2. 📌 Objectifs du Portail

1. **Centraliser** la présentation de l’urbanisation et de l’architecture SI.
2. **Faciliter la compréhension** grâce à la **pyramide interactive d’urbanisation**.
3. **Cartographier le SI** de manière visuelle et interactive.
4. **Évaluer la maturité SI** via un module d’audit structuré.
5. **Générer automatiquement des livrables** (rapports, feuilles de route, recommandations).
6. **Instaurer une gouvernance claire** (comités, référentiels, normes).
7. **Promouvoir les bonnes pratiques IT** (TOGAF, ITIL, COBIT, ISO, DevSecOps).

---

## 3. 🏗️ Page d’Accueil – Pyramide Urbanisation SI

### 3.1. Concept Général

La **pyramide interactive** est le cœur du portail. Elle représente les **couches d’urbanisation SI** :

1. **Stratégie IT** 🏛️ – Vision, alignement avec objectifs métiers, plan directeur SI.
2. **Métiers & Processus** 💼 – Processus de gestion (distribution eau/électricité, facturation, maintenance).
3. **Applications** 📱 – ERP, CRM, Billing, IoT Hub, API Manager, etc.
4. **Données & Information** 📊 – MDM, DataLake, Reporting, qualité et gouvernance des données.
5. **Infrastructure & Sécurité** 🖥️🔒 – Réseaux, serveurs, cloud hybride, IAM, cybersécurité.

👉 Chaque couche est **cliquable et interactive** :

* **Hover** : affiche une définition + exemples (tooltip).
* **Click** : redirige vers la page détaillée correspondante.
* **Zoom** : agrandit la couche sélectionnée (effet focus).
* **Légende dynamique** : rappel des couleurs, normes, liens vers glossaire.

### 3.2. Exemple d’Utilisation

* Un manager clique sur la **couche “Applications”** → il voit la cartographie applicative (ERP, CRM, IoT…).
* Un auditeur clique sur la **couche “Sécurité”** → il obtient un état des lieux + checklist d’audit ISO 27001.
* Un directeur métier clique sur la **couche “Métiers”** → il visualise ses processus et les applications associées.

### 3.3. Aspects Graphiques

* **Design pyramidal 3D** ou **flat design animé**.
* Couleurs par couche (ex. Stratégie = bleu, Métier = vert, Application = orange, Données = violet, Infra = gris).
* Utilisation de **Bootstrap 5 + CSS3 + SVG/D3.js** pour les animations.
* Mode **responsive** (mobile/tablette).

---

## 4. 📊 Modules du Portail

### 4.1. **Urbanisation SI**

* Définitions & principes (urbanisation, alignement stratégique, modularité).
* Présentation des 5 couches avec exemples.
* Illustration par **cartes interactives** (zoom par domaine).
* Référentiels open source : ArchiMate, Modelio, Draw\.io.

### 4.2. **Cartographie SI**

* Présentation visuelle du portefeuille applicatif.
* Regroupement par domaines métiers (facturation, distribution, RH, IoT, etc.).
* Diagrammes interactifs (avec filtres par processus, par BU, par technologie).
* Intégration avec API ou fichiers Excel pour mise à jour automatique.

### 4.3. **Architecture SI**

* Déclinaison en architectures :

  * **Métier** (processus clés).
  * **Applicative** (CRM, Billing, ERP, API Manager).
  * **Données** (MDM, Data Lake, IA).
  * **Technique & Infra** (réseaux, cloud, IoT Hub).
  * **Sécurité** (IAM, SOC, ISO 27001).
* Normes : TOGAF, Zachman, ISO/IEC 42010.

### 4.4. **Audit & Recommandations**

* **Formulaire structuré** avec :

  * Nom de l’entité.
  * 15 critères d’évaluation (ex. nombre d’applications, intégration, sécurité, cloud, gouvernance, DevSecOps).
* **Échelle de maturité** (1 = faible → 5 = optimisé).
* **Résultats automatiques** :

  * Score global.
  * Forces / faiblesses.
  * Recommandations (par couche SI).
  * Feuille de route (court terme, moyen terme, long terme).
* Export en **PDF / Excel** pour usage comité.

### 4.5. **Glossaire & Normes**

* Définitions (urbanisation, API, IAM, DevOps, gouvernance…).
* Normes SI (TOGAF, ITIL, COBIT, ISO 27001, RGPD).
* Exemples concrets adaptés au secteur eau/électricité.

---

## 5. 🔍 Critères d’Audit (15 Indicateurs Structurants)

1. Nombre d’applications.
2. Niveau d’intégration (API, ESB, orchestration).
3. Gouvernance SI & comités.
4. Sécurité & conformité (ISO 27001, RGPD).
5. Interopérabilité (legacy vs. nouvelles applis).
6. Performance & disponibilité.
7. Couverture fonctionnelle vs besoins métiers.
8. Agilité & DevSecOps.
9. Cloud & hybridation.
10. IoT & Smart Metering.
11. Données & MDM.
12. UX & accessibilité.
13. Innovation & IA.
14. Gouvernance budgétaire.
15. Pilotage & tableaux de bord.

👉 Pondération possible par priorité stratégique.

---

## 6. 🎨 Spécifications Techniques

* **Langages** : HTML5, CSS3, Bootstrap 5, JavaScript (Vanilla, ou React.js pour évolutivité).
* **Visualisation** : Chart.js / ApexCharts / D3.js.
* **Pyramide interactive** : SVG/Canvas avec animations CSS.
* **Exports** : jsPDF (PDF), SheetJS (Excel).
* **Sécurité** : authentification SSO (Keycloak), HTTPS.
* **Accessibilité** : WCAG 2.1 / RGAA.
* **Responsive** : PC, tablette, mobile.

---

## 7. 🗂 Gouvernance

### 7.1. Acteurs

* **Sponsor** : Direction Générale.
* **MOA** : DSI.
* **MOE** : équipe technique (architectes, devs).
* **Utilisateurs** : architectes SI, urbanistes, métiers, auditeurs.

### 7.2. Comités

* **Comité de Pilotage** : arbitrage stratégique.
* **Comité Technique** : suivi développement et intégration.
* **Comité d’Audit** : validation des recommandations.

---

## 8. 📅 Planning Indicatif

1. **Analyse & Design** – 4 à 6 semaines.
2. **Développement** – 8 à 10 semaines.
3. **Tests & Recette** – 3 semaines.
4. **Déploiement & Formation** – 2 semaines.

---

## 9. 📖 Glossaire (extrait enrichi)

* **Urbanisation SI** : organisation du SI en couches cohérentes et modulaires.
* **Cartographie SI** : représentation visuelle du SI.
* **Architecture SI** : modèles décrivant la structure et les interactions du SI.
* **Gouvernance SI** : cadre décisionnel pour aligner le SI avec les objectifs stratégiques.
* **Maturité SI** : capacité du SI à être agile, sécurisé et évolutif.

---

👉 Résultat final : un **portail vitrine, pédagogique et interactif**, avec la **pyramide comme porte d’entrée**, permettant à la DSI de **piloter son SI**, d’**auditer sa maturité** et de **présenter sa stratégie aux dirigeants**.

---


