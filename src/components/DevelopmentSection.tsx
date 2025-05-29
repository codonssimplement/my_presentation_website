import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code, X } from 'lucide-react';

const CodePopup = ({ onClose }: { onClose: (e: React.MouseEvent) => void }) => (
  <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-6">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-medium text-gray-900">Code source</h3>
      <button 
        onClick={onClose} 
        className="text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Fermer"
      >
        <X size={20} />
      </button>
    </div>
    <p className="text-gray-700">
      Ce code est privé, mais on vous le partage volontiers sur demande :
      <br />
      <a 
        href="mailto:codons.simplement@gmail.com" 
        className="text-blue-600 hover:underline font-medium mt-2 inline-block"
      >
        codons.simplement@gmail.com
      </a>
    </p>
  </div>
);

const DevelopmentSection = () => {
  const [showCodePopup, setShowCodePopup] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState<Record<number, boolean>>({});

  const toggleFeatures = (index: number) => {
    setShowAllFeatures(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  const handleCodeClick = (e: React.MouseEvent, githubUrl: string) => {
    e.preventDefault();
    if (githubUrl && githubUrl !== '#') {
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    } else {
      setShowCodePopup(true);
    }
  };
  
  const closePopup = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowCodePopup(false);
  };
  
  // Fermer le popup avec la touche Échap
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowCodePopup(false);
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);
  const skills = [
    // Frontend
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript',
    'React', 'Next.js', 
    'Tailwind CSS', 'Shadcn UI', 'Material UI',
    
    // Backend
    'Node.js', 'Express.js', 'NestJS', 'GraphQL',
    'PostgreSQL', 'MongoDB', 'MySQL', 'TypeORM', 'Prisma',
    
    // Mobile
    'React Native', 'Expo',
    
    // Outils & DevOps
    'Git', 'GitHub', 'Firebase Admin', 'Nodemailer',
      'JWT', 'OAuth', 'Vercel',
  ];

  const projects = [
   
    {
      title: "Microact",
      description: "Plateforme e-commerce complète développée avec WordPress/WooCommerce, connectant producteurs locaux et consommateurs avec des fonctionnalités avancées de gestion et d'analyse.",
      tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "Elementor", "Hosting", "Google Analytics", "MailChimp", "Google Tag Manager"],
      demo: "https://micro-act.com/",
      github: "#",
      features: [
        "Boutique en ligne complète avec gestion des produits et des commandes",
        "Personnalisation avancée avec Elementor et thème personnalisé",
        "Gestion des stocks et des fournisseurs",
        "Intégration de paiement sécurisée",
        "Tableau de bord analytique avec Google Analytics",
        "Newsletter et campagnes email avec MailChimp",
        "Optimisation des performances avec cache et CDN",
        "Référencement SEO avancé",
        "Interface responsive et adaptée mobile"
      ]
    }, 
    {
      title: "YessalGI",
      description: "Site vitrine d'entreprise B2B spécialisée dans la traçabilité intelligente (RFID, QR codes, RTLS), mettant en valeur leurs services et secteurs d'intervention.",
      tech: ["Next.js", "Tailwind CSS", "Vercel", "Responsive Design", "SEO"],
      demo: "https://www.yessalgi.com/",
      github: "#",
      features: [
        "Conception et développement d'un site vitrine moderne et professionnel",
        "Design responsive optimisé pour tous les appareils",
        "Référencement naturel (SEO) optimisé",
        "Mise en avant des secteurs d'intervention (hôpitaux, administrations, défense, hôtellerie)",
        "Présentation claire de l'expertise technologique",
        "Optimisation des performances et du temps de chargement",
        "Déploiement continu avec Vercel"
      ]
    },
    {
      title: "3F-GS - Gestion des sinistres",
      description: "MVP fonctionnel pour la gestion numérique des sinistres dans le secteur de l'habitat, permettant de centraliser les déclarations et d'automatiser le traitement des dossiers.",
      tech: ["React.js", "Tailwind CSS", "NestJS", "PostgreSQL", "Vercel"],
      demo: "https://gestion-des-sinistres-3f.vercel.app/",
      github: "#",
      features: [
        "Digitalisation complète du processus de gestion des sinistres",
        "Interface intuitive pour la déclaration et le suivi des dossiers",
        "Tableau de bord de gestion en temps réel",
        "Gestion des rôles (gestionnaires/assurés)",
        "Système de notifications automatisées",
        "Base de données sécurisée pour le stockage des dossiers",
        "Déploiement continu avec Vercel"
      ]
    },
    {
      title: "Gestion de rendez-vous",
      description: "Application web complète pour la gestion de rendez-vous médicaux avec authentification, gestion des utilisateurs et planification intelligente des créneaux.",
      tech: ["React", "Next.js", "NestJS", "PostgreSQL", "TypeORM", "JWT", "Tailwind CSS", "Vercel"],
      demo: "https://www.figma.com/proto/iww8P1IPfdGpgBgXwmOPTK/Application-web-RV?node-id=50-14&starting-point-node-id=1%3A2&t=PBU1Gctz044iCrHp-1",
      github: "https://github.com/codonssimplement/appointement-app/tree/main/src",
      features: [
        "Authentification sécurisée avec rôles (admin, médecin, patient)",
        "Gestion complète des utilisateurs et des profils",
        "Planification et suivi des rendez-vous avec gestion des conflits",
        "Interface administrateur complète pour la gestion des praticiens",
        "Tableau de bord avec statistiques et analyses",
        "Architecture modulaire et scalable"
      ]
    },
    {
      title: "Gestion des plaintes",
      description: "Outil digital pour la gestion structurée des plaintes dans les organisations hiérarchisées, facilitant la coordination et le suivi des affaires policières.",
      tech: ["React.js", "Node.js", "NestJS", "PostgreSQL", "JWT", "Tailwind CSS"],
      demo: "https://justsen.vercel.app",
      github: "https://github.com/codonssimplement/justisen",
      features: [
        "Gestion hiérarchique des utilisateurs (admin, régional, station, enquêteur)",
        "Création, attribution et suivi des dossiers de police",
        "Suivi de l'état des cas par statut et unité",
        "Historique des actions et notifications",
        "Interface sécurisée avec authentification",
        "Expérience utilisateur adaptée à chaque rôle",
        "Tableau de bord personnalisé selon le rôle hiérarchique"
      ],
      note: "Mot de passe pour tous les utilisateurs : 123456",
      accessCredentials: [
        {
          role: "Directeur Général",
          matricule: "CRPN00123",
          email: "directeur@police-nationale.sn",
          name: "Abdoulaye Diallo",
          roleCode: "admin"
        },
        {
          role: "Commissaire Régional",
          matricule: "CRPN001",
          email: "commissaire.regional@police-nationale.sn",
          name: "Malick Faye",
          roleCode: "regional-admin"
        },
        {
          role: "Commissaire de Station",
          matricule: "CSPN001",
          email: "commissaire.station@police-nationale.sn",
          name: "Cheikh Mbacké",
          roleCode: "station-admin"
        },
        {
          role: "Agent de Réception",
          matricule: "ROPN001",
          email: "officer@police-nationale.sn",
          name: "Sophie Ndiaye",
          roleCode: "reception-officer"
        },
        {
          role: "Enquêteur",
          matricule: "INPN001",
          email: "investigator@police-nationale.sn",
          name: "Jean Dominique Tall",
          roleCode: "investigator"
        }
      ]
    },
    {
      title: "SesamAPI Backend",
      description: "API backend pour une plateforme de santé connectée, gérant médecins, patients, pharmacies, assurances et dossiers médicaux.",
      tech: ["NestJS", "Firebase", "JWT", "Nodemailer", "QR Code", "Swagger"],
      demo: "https://drive.google.com/file/d/190kifT-KfWFO5KVXd8gSxi-B4Hw4kfQi/view?usp=sharing",
      github: "#",
      features: [
        "API backend complète pour une plateforme de santé",
        "Gestion des utilisateurs (médecins, patients, pharmacies, assurances)",
        "Système de dossiers médicaux sécurisé",
        "Intégration Firebase pour la gestion des utilisateurs",
        "Génération de QR Codes pour l'authentification",
        "Documentation API complète avec Swagger",
        "Envoi d'emails avec Nodemailer"
      ]
    },
    
    {
      title: "BACKEND_API",
      description: "API backend robuste avec une architecture modulaire et une gestion sécurisée des utilisateurs.",
      tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Joi"],
      demo: "#",
      github: "https://github.com/petit-boudha/BACKEND_API/tree/main",
      features: [
        "Architecture modulaire avec séparation claire des responsabilités",
        "Authentification sécurisée avec JWT",
        "Validation robuste des données avec Joi",
        "Gestion des utilisateurs complète",
        "API RESTful bien structurée",
        "Documentation des routes et des modèles",
        "Configuration centralisée"
      ]
    },
    {
      title: "Agri-Food - Produits naturels",
      description: "Application web monopage (SPA) mettant en valeur les produits locaux naturels (bissap, bouye, thiakry, gingembre) avec un design soigné et une interface responsive.",
      tech: ["HTML5", "CSS3", "Responsive Design", "Vercel"],
      demo: "https://agri-food.vercel.app/",
      github: "https://github.com/codonssimplement/Agri-food-compagny-website",
      features: [
        "Design moderne et attrayant mettant en valeur les produits locaux",
        "Interface utilisateur intuitive et entièrement responsive",
        "Optimisation pour une expérience utilisateur fluide",
        "Mise en avant des produits du terroir avec une identité visuelle forte",
        "Déploiement continu avec Vercel"
      ]
    },
    {
      title: "Application de Caisse",
      description: "Une solution de caisse web moderne et baique permettant aux commerçants et responsables de point de vente de gérer efficacement leurs transactions financières.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      demo: "https://app-application-de-caisse.vercel.app/",
      github: "https://github.com/petit-boudha/Application-De-Caisse/tree/main",
      features: [
        "Enregistrement de transactions (montant, bénéficiaire, motif)",
        "Suivi des soldes et de l'état de la caisse",
        "Filtres par personnel et génération de rapports",
        "Interface intuitive et 100% responsive",
        "Tableau de bord avec indicateurs clés",
        "Gestion centralisée des opérations de crédit et débit"
      ]
    },
   
  ];

  return (
    <section id="development" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Développement & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D6BCF] to-[#9E9BF2]">Projets Tech</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Créer des solutions digitales modernes, efficaces et bien pensées est bien plus qu'un métier pour moi, c'est une passion concrétisée par des projets ambitieux développés avec des stacks technologiques de pointe.
          </p>
        </div>

        {/* Compétences techniques */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Stack Technique</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Projets */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Projets Récents</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code size={20} className="text-[#6D6BCF]" />
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-700">Fonctionnalités :</h4>
                      <ul className="text-xs text-gray-600 space-y-1 list-disc pl-5">
                        {project.features.slice(0, showAllFeatures[index] ? project.features.length : 3).map((feature, i) => (
                          <li key={i} className="leading-tight">{feature}</li>
                        ))}
                        {project.features.length > 3 && (
                          <li key={`more-${index}`}>
                            <button 
                              onClick={() => toggleFeatures(index)}
                              className="text-xs text-blue-600 hover:underline focus:outline-none"
                            >
                              {showAllFeatures[index] ? 'Voir moins' : `+${project.features.length - 3} autres fonctionnalités`}
                            </button>
                          </li>
                        )}
                      </ul>
                    </div>
                    {project.note && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-700">Informations de connexion :</h4>
                        <p className="text-xs text-gray-600">{project.note}</p>
                      </div>
                    )}
                    {project.accessCredentials && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-700">Identifiants d'accès :</h4>
                        <ul className="text-xs text-gray-600 space-y-1 list-disc pl-5">
                          {project.accessCredentials.map((credential, i) => (
                            <li key={i} className="leading-tight">
                              <span className="font-medium">{credential.role} :</span> {credential.matricule} - {credential.email} - {credential.name} - {credential.roleCode}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="flex gap-2 pt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(project.demo, '_blank', 'noopener,noreferrer')}
                        disabled={project.demo === '#'}
                      >
                        <ExternalLink size={16} className="mr-1" />
                        {project.demo === '#' ? 'Pas de démo disponible' : 'Démo'}
                      </Button>
                      <div className="relative flex-1">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                          onClick={(e) => handleCodeClick(e, project.github)}
                        >
                          <Code size={16} className="mr-1" />
                          Code
                        </Button>
                        {showCodePopup && (
                          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40" onClick={closePopup}>
                            <div onClick={(e) => e.stopPropagation()}>
                              <CodePopup onClose={closePopup} />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Liens GitHub */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mon Code sur GitHub</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/Elimaneba" target="_blank" rel="noopener noreferrer">
                <Code className="mr-2" size={20} />
                github.com/Elimaneba
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/codonssimplement" target="_blank" rel="noopener noreferrer">
                <Code className="mr-2" size={20} />
                github.com/codonssimplement
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSection;
