document.addEventListener('DOMContentLoaded', function() {
    initPyramid();
    initAuditQuestions();
    initCharts();
    initScrollEffects();
    initNavigation();
    initBackToTop();
    initAuditForm();
});

// Données pour le portail
const layerData = {
    strategie: {
        title: "Stratégie IT 🏛️",
        description: "Vision, alignement avec objectifs métiers, plan directeur SI.",
        content: "<p>La couche stratégique définit la vision et la feuille de route du système d'information. Elle assure l'alignement entre les objectifs métiers et les capacités IT.</p><h5>Composants clés :</h5><ul><li>Plan directeur SI</li><li>Alignement stratégique</li><li>Feuille de route technologique</li><li>Gouvernance IT</li><li>Indicateurs de performance</li></ul>",
        apps: "<ul><li><strong>Outils de planification</strong> : SAP Portfolio Management, LeanIX</li><li><strong>Tableaux de bord</strong> : Power BI, Tableau</li><li><strong>Gouvernance</strong> : ServiceNow GRC, Archer</li></ul>",
        metrics: [85, 70, 90, 60, 75]
    },
    metier: {
        title: "Métiers & Processus 💼",
        description: "Processus de gestion (distribution eau/électricité, facturation, maintenance).",
        content: "<p>Cette couche représente les processus métiers et leurs besoins fonctionnels. Elle fait le lien entre les objectifs stratégiques et les applications supports.</p><h5>Processus clés :</h5><ul><li>Gestion des clients</li><li>Facturation et recouvrement</li><li>Maintenance des réseaux</li><li>Gestion des incidents</li><li>Planification des ressources</li></ul>",
        apps: "<ul><li><strong>CRM</strong> : Salesforce, Microsoft Dynamics</li><li><strong>ERP</strong> : SAP, Oracle</li><li><strong>Gestion des actifs</strong> : IBM Maximo, Infor EAM</li></ul>",
        metrics: [80, 85, 75, 90, 70]
    },
    application: {
        title: "Applications 📱",
        description: "ERP, CRM, Billing, IoT Hub, API Manager, etc.",
        content: "<p>La couche applicative regroupe l'ensemble des logiciels et applications qui supportent les processus métiers. Elle inclut aussi les interfaces et intégrations.</p><h5>Catégories d'applications :</h5><ul><li>Applications métier (ERP, CRM)</li><li>Applications techniques (middleware, API)</li><li>Applications décisionnelles (BI, reporting)</li><li>Applications collaboratives</li></ul>",
        apps: "<ul><li><strong>ERP</strong> : SAP S/4HANA, Oracle ERP Cloud</li><li><strong>CRM</strong> : Salesforce, Microsoft Dynamics 365</li><li><strong>Billing</strong> : SAP BRIM, Oracle BRM</li><li><strong>IoT</strong> : Azure IoT Hub, AWS IoT</li></ul>",
        metrics: [70, 65, 80, 75, 85]
    },
    donnees: {
        title: "Données & Information 📊",
        description: "MDM, DataLake, Reporting, qualité et gouvernance des données.",
        content: "<p>Cette couche gère les données comme actif stratégique. Elle inclut la modélisation, le stockage, l'intégration et la gouvernance des données.</p><h5>Composants :</h5><ul><li>Master Data Management (MDM)</li><li>Data Warehouse et Data Lake</li><li>Outils de BI et analytique</li><li>Gouvernance des données</li><li>Qualité et intégrité des données</li></ul>",
        apps: "<ul><li><strong>MDM</strong> : Informatica MDM, SAP Master Data Governance</li><li><strong>Data Lake</strong> : Azure Data Lake, AWS S3</li><li><strong>BI</strong> : Tableau, Power BI, Qlik</li><li><strong>Intégration</strong> : Informatica, Talend</li></ul>",
        metrics: [75, 80, 70, 85, 65]
    },
    infra: {
        title: "Infrastructure & Sécurité 🖥️🔒",
        description: "Réseaux, serveurs, cloud hybride, IAM, cybersécurité.",
        content: "<p>La couche infrastructure fournit les ressources matérielles et logicielles nécessaires au fonctionnement des applications. La sécurité assure la protection des actifs informationnels.</p><h5>Domaines :</h5><ul><li>Réseaux et télécoms</li><li>Serveurs et stockage</li><li>Cloud hybride</li><li>Sécurité et conformité</li><li>Gestion des identités</li></ul>",
        apps: "<ul><li><strong>Cloud</strong> : Azure, AWS, Google Cloud</li><li><strong>Sécurité</strong> : Palo Alto, CrowdStrike, Okta</li><li><strong>Réseau</strong> : Cisco, Juniper</li><li><strong>Monitoring</strong> : SolarWinds, Dynatrace</li></ul>",
        metrics: [90, 85, 80, 75, 95]
    }
};

// 15 critères d'audit demandés
const auditCriteria = [
    "La vision du SI est-elle clairement alignée avec la stratégie globale de l'entreprise ?",
    "Existe-t-il une cartographie complète et à jour du système d'information ?",
    "Les processus métier sont-ils modélisés et documentés ?",
    "Le portefeuille d'applications est-il régulièrement rationalisé (modernisation, suppression) ?",
    "Le niveau d'intégration entre les applications est-il suffisant (via des APIs ou un ESB) ?",
    "Existe-t-il une gouvernance des données (MDM, qualité, sécurité) ?",
    "La sécurité du SI est-elle gérée de manière proactive (SOC, veille) ?",
    "Le SI est-il capable de s'adapter rapidement aux nouvelles exigences du marché (agilité) ?",
    "Le niveau d'utilisation des technologies cloud est-il suffisant ?",
    "La disponibilité et la performance des applications critiques sont-elles mesurées ?",
    "Y a-t-il un plan de continuité d'activité (PCA) testé et à jour ?",
    "Les compétences du personnel IT sont-elles en adéquation avec les technologies utilisées ?",
    "Le budget SI est-il géré et optimisé de manière transparente ?",
    "La DSI est-elle perçue comme un partenaire stratégique par les métiers ?",
    "Existe-t-il un pilotage par des indicateurs (KPI) sur l'ensemble du SI ?"
];

// Données pour les graphiques
const applicationsData = {
    labels: ['Facturation', 'Distribution', 'RH', 'IoT', 'Maintenance', 'CRM', 'ERP'],
    datasets: [{
        label: 'Nombre d\'applications',
        data: [12, 8, 6, 10, 7, 5, 3],
        backgroundColor: [
            'rgba(52, 152, 219, 0.7)',
            'rgba(46, 204, 113, 0.7)',
            'rgba(155, 89, 182, 0.7)',
            'rgba(241, 196, 15, 0.7)',
            'rgba(230, 126, 34, 0.7)',
            'rgba(231, 76, 60, 0.7)',
            'rgba(52, 73, 94, 0.7)'
        ],
        borderColor: [
            'rgb(52, 152, 219)',
            'rgb(46, 204, 113)',
            'rgb(155, 89, 182)',
            'rgb(241, 196, 15)',
            'rgb(230, 126, 34)',
            'rgb(231, 76, 60)',
            'rgb(52, 73, 94)'
        ],
        borderWidth: 1
    }]
};

const statusData = {
    labels: ['En production', 'En développement', 'En maintenance', 'À moderniser', 'À remplacer'],
    datasets: [{
        data: [45, 20, 15, 12, 8],
        backgroundColor: [
            'rgba(46, 204, 113, 0.7)',
            'rgba(52, 152, 219, 0.7)',
            'rgba(241, 196, 15, 0.7)',
            'rgba(230, 126, 34, 0.7)',
            'rgba(231, 76, 60, 0.7)'
        ],
        borderWidth: 1
    }]
};

// Initialisation de la pyramide interactive
function initPyramid() {
    const pyramidLayers = document.querySelectorAll('.pyramid-layer');
    
    pyramidLayers.forEach(layer => {
        layer.addEventListener('click', function() {
            const layerType = this.getAttribute('data-layer');
            
            pyramidLayers.forEach(l => l.classList.remove('layer-active'));
            this.classList.add('layer-active');
            
            showLayerDetails(layerType);
            document.getElementById('layer-details').classList.add('visible');
        });
    });
    
    // Afficher la première couche par défaut
    pyramidLayers[0].classList.add('layer-active');
    showLayerDetails('strategie');
    document.getElementById('layer-details').classList.add('visible');
}

// Afficher les détails d'une couche
function showLayerDetails(layerType) {
    const data = layerData[layerType];
    document.getElementById('layer-title').textContent = data.title;
    document.getElementById('layer-description').textContent = data.description;
    document.getElementById('layer-content').innerHTML = data.content;
    document.getElementById('layer-apps').innerHTML = data.apps;
    updateMetricsChart(data.metrics, data.title);
}

// Mettre à jour le graphique des métriques
function updateMetricsChart(metrics, title) {
    const ctx = document.getElementById('metricsChart').getContext('2d');
    
    if (window.metricsChartInstance) {
        window.metricsChartInstance.destroy();
    }
    
    window.metricsChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Alignement', 'Performance', 'Sécurité', 'Évolutivité', 'Disponibilité'],
            datasets: [{
                label: title,
                data: metrics,
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderColor: 'rgb(52, 152, 219)',
                pointBackgroundColor: 'rgb(52, 152, 219)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(52, 152, 219)'
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { display: true },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

// Initialiser les 15 critères d'audit
function initAuditQuestions() {
    const container = document.getElementById('audit-questions-list');
    const formContainer = document.getElementById('dynamic-audit-form');
    
    auditCriteria.forEach((criterion, index) => {
        // Liste des questions
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `<span class="criteria-number">${index + 1}</span> <strong>${criterion}</strong>`;
        container.appendChild(li);
        
        // Formulaire
        const div = document.createElement('div');
        div.className = 'mb-3';
        div.innerHTML = `
            <label class="form-label">${index + 1}. ${criterion}</label>
            <select class="form-select audit-input" data-index="${index}" required>
                <option value="" disabled selected>-- Évaluer --</option>
                <option value="1">1 - Faible</option>
                <option value="2">2 - Émergent</option>
                <option value="3">3 - Standardisé</option>
                <option value="4">4 - Géré</option>
                <option value="5">5 - Optimisé</option>
            </select>
        `;
        formContainer.appendChild(div);
    });
}

// Initialiser les graphiques
function initCharts() {
    const appsCtx = document.getElementById('applicationsChart').getContext('2d');
    window.appsChart = new Chart(appsCtx, {
        type: 'bar',
        data: applicationsData,
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Répartition des applications par domaine métier' }
            }
        }
    });
    
    const statusCtx = document.getElementById('statusChart').getContext('2d');
    window.statusChart = new Chart(statusCtx, {
        type: 'doughnut',
        data: statusData,
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
}

// Effets de défilement et visibilité
function initScrollEffects() {
    const faders = document.querySelectorAll('.fade-in');
    
    const appearOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
    
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);
    
    faders.forEach(fader => appearOnScroll.observe(fader));
    
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Navigation fluide
function initNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Bouton retour en haut
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Gestion du formulaire d'audit
function initAuditForm() {
    document.getElementById('audit-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const inputs = document.querySelectorAll('.audit-input');
        let totalScore = 0;
        let answeredCount = 0;
        inputs.forEach(input => {
            const value = parseInt(input.value);
            if (!isNaN(value)) {
                totalScore += value;
                answeredCount++;
            }
        });
        const averageScore = answeredCount > 0 ? Math.round(totalScore / answeredCount) : 0;
        showAuditResults(averageScore, inputs);
    });
}

// Afficher les résultats de l'audit
function showAuditResults(score, inputs) {
    const resultsSection = document.getElementById('audit-results');
    const globalScore = document.getElementById('global-score');
    const scoreProgress = document.getElementById('score-progress');
    const strengthsList = document.getElementById('strengths-list');
    const recommendationsDiv = document.getElementById('recommendations');
    
    globalScore.textContent = `${score}/5`;
    scoreProgress.style.width = `${score * 20}%`;
    
    strengthsList.innerHTML = '';
    recommendationsDiv.innerHTML = '';
    
    const strengths = [];
    const weaknesses = [];
    
    inputs.forEach((input, index) => {
        const value = parseInt(input.value);
        if (value >= 4) {
            strengths.push(auditCriteria[index]);
        } else if (value <= 2) {
            weaknesses.push(auditCriteria[index]);
        }
    });
    
    if (strengths.length > 0) {
        strengths.forEach(strength => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `<i class="fas fa-check-circle text-success me-2"></i> ${strength}`;
            strengthsList.appendChild(li);
        });
    } else {
        strengthsList.innerHTML = '<li class="list-group-item text-muted">Aucune force identifiée à ce niveau de maturité</li>';
    }
    
    if (weaknesses.length > 0) {
        recommendationsDiv.innerHTML = '<h5>Points à améliorer :</h5>';
        weaknesses.forEach(weakness => {
            const p = document.createElement('p');
            p.innerHTML = `<i class="fas fa-exclamation-triangle text-warning me-2"></i> ${weakness}`;
            recommendationsDiv.appendChild(p);
        });
    } else {
        recommendationsDiv.innerHTML = '<p class="text-success"><i class="fas fa-check-circle me-2"></i>Votre SI est très mature, concentrez-vous sur l\'innovation continue.</p>';
    }

    updateRoadmap(score);
    
    resultsSection.style.display = 'block';
    window.scrollTo({ top: resultsSection.offsetTop - 100, behavior: 'smooth' });
}

// Mettre à jour la feuille de route
function updateRoadmap(score) {
    const shortTerm = document.getElementById('short-term');
    const mediumTerm = document.getElementById('medium-term');
    const longTerm = document.getElementById('long-term');
    
    shortTerm.innerHTML = '';
    mediumTerm.innerHTML = '';
    longTerm.innerHTML = '';
    
    if (score <= 2) {
        shortTerm.innerHTML = '<li><i class="fas fa-circle me-2 text-primary"></i> Établir un comité de gouvernance SI</li>';
        shortTerm.innerHTML += '<li><i class="fas fa-circle me-2 text-primary"></i> Réaliser un inventaire complet des applications</li>';
        mediumTerm.innerHTML = '<li><i class="fas fa-circle me-2 text-success"></i> Mettre en place un framework d\'intégration</li>';
        mediumTerm.innerHTML += '<li><i class="fas fa-circle me-2 text-success"></i> Définir une stratégie de modernisation</li>';
        longTerm.innerHTML = '<li><i class="fas fa-circle me-2 text-warning"></i> Atteindre un niveau d\'intégration avancé</li>';
        longTerm.innerHTML += '<li><i class="fas fa-circle me-2 text-warning"></i> Implémenter une stratégie cloud hybride</li>';
    } else if (score <= 4) {
        shortTerm.innerHTML = '<li><i class="fas fa-circle me-2 text-primary"></i> Optimiser les processus de gouvernance</li>';
        shortTerm.innerHTML += '<li><i class="fas fa-circle me-2 text-primary"></i> Renforcer la sécurité des applications critiques</li>';
        mediumTerm.innerHTML = '<li><i class="fas fa-circle me-2 text-success"></i> Étendre l\'intégration aux applications legacy</li>';
        mediumTerm.innerHTML += '<li><i class="fas fa-circle me-2 text-success"></i> Améliorer la qualité des données</li>';
        longTerm.innerHTML = '<li><i class="fas fa-circle me-2 text-warning"></i> Implémenter l\'IA pour l\'optimisation des processus</li>';
        longTerm.innerHTML += '<li><i class="fas fa-circle me-2 text-warning"></i> Atteindre un niveau d\'excellence opérationnelle</li>';
    } else {
        shortTerm.innerHTML = '<li><i class="fas fa-circle me-2 text-primary"></i> Maintenir et optimiser les processus existants</li>';
        mediumTerm.innerHTML = '<li><i class="fas fa-circle me-2 text-success"></i> Innover avec les nouvelles technologies</li>';
        longTerm.innerHTML = '<li><i class="fas fa-circle me-2 text-warning"></i> Devenir une référence en matière de transformation digitale</li>';
    }
}