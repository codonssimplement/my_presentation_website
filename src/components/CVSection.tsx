import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Trophy, Award, Code, Briefcase, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assurez-vous d'avoir ce composant

const CVSection = () => {
  const formations = [
    {
      id: 1,
      title: 'Développement Web/Mobile Full Stack',
      institution: 'Xarala - Dakar',
      period: 'Mars 2024 - Août 2024',
      icon: Code,
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-50'
    },
    {
      id: 2,
      title: 'Innovation Créatrice de Nouveau Marché',
      institution: 'Centre Legatum pour le Développement et l\'Entrepreneuriat au MIT',
      period: 'Mars 2022',
      icon: Trophy,
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-50'
    },
    {
      id: 3,
      title: 'Développement des Affaires',
      institution: 'Yeessal Agri Up - Dakar',
      period: 'Novembre 2022',
      icon: Briefcase,
      iconColor: 'text-green-500',
      iconBg: 'bg-green-50'
    },
    {
      id: 4,
      title: 'Développement Web Full Stack',
      institution: 'Upgrade-code - Metz',
      period: '2020 - 2021',
      icon: Code,
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-50'
    },
    {
      id: 5,
      title: 'Licence en Gestion Financière & Comptabilité',
      institution: 'École d\'Enseignement Supérieur de la Gestion des Finances et de l\'Administration - Dakar',
      period: '2017 - 2019',
      icon: BookOpen,
      iconColor: 'text-yellow-500',
      iconBg: 'bg-yellow-50'
    },
    {
      id: 6,
      title: 'Baccalauréat S2',
      institution: 'Lycée Mouhamadou M. Mbacké - Diourbel',
      period: '2015 - 2016',
      icon: Award,
      iconColor: 'text-red-500',
      iconBg: 'bg-red-50'
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Formation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D6BCF] to-[#9E9BF2]">Qualifications</span>
          </h2>
          <p className="text-xl text-gray-600">
            Parcours académique et compétences complémentaires
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formations.map((formation) => {
            const Icon = formation.icon;
            return (
              <motion.div
                key={formation.id}
                className="group flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-[#6D6BCF]/20">
                  <div className={`w-12 h-12 ${formation.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${formation.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {formation.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm">{formation.institution}</p>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700">
                    {formation.period}
                  </span>
                </div>
                
               
              </motion.div>
              
            );
          })}
        </div>
        
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            DIPLÔMES & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D6BCF] to-[#9E9BF2]">CERTIFICATIONS</span>
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Consultez l'ensemble de mes diplômes et certifications professionnelles
          </p>
          <Button 
            variant="outline" 
            className="w-full max-w-md mx-auto py-6 text-lg font-medium hover:bg-[#6D6BCF]/10 transition-colors" 
            asChild
          >
            <a
              href="https://drive.google.com/drive/folders/1kSPlZytSuThXCs8ObUIHUNanVE69zLAG?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white bg-gradient-to-r from-[#6D6BCF] via-[#9E9BF2] to-[#6D6BCF] animate-gradient hover:opacity-90 transition-opacity justify-center"
            >
              <ExternalLink className="mr-3" size={18} />
              Voir toutes mes certifications
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CVSection;