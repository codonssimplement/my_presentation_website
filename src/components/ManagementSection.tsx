
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, TrendingUp, Users } from 'lucide-react';

const ManagementSection = () => {
  const experiences = [
    {
      title: "Assistant Comptable",
      company: "BPO Group",
      period: "Juin – Juillet 2024",
      missions: [
        "Traitement et saisie des factures dans le système comptable -",
        " Réconciliation des états de rapprochement bancaire pour garantir l'exactitude des comptes"
      ]
    },
    {
      title: "Assistant Administratif",
      company: "Clinique Sokhna Nene",
      period: "Janvier 2023 – Mai 2024",
      missions: [
        "Création de rapports administratifs périodiques -",
        " Réalisation et suivi de la facturation des actes médicaux"
      ]
    },
    {
      title: "Commercial",
      company: "Natango SARL",
      period: "Juin 2020 – Janvier 2021",
      missions: [
        "Prospection active et présentation des services aux clients potentiels -",
        " Proposition de solutions personnalisées adaptées aux besoins du client -",
        " Communication claire et suivis commerciaux pour renforcer la fidélisation"
      ]
    },  
    {
      title: "Assistant Administratif & Financier",
      company: "Centre Hospitalier Henriche Lubke",
      period: "Janvier - Février 2018",
      missions: [
        "Saisie comptable, facturation, gestion des opérations administratives -",
        " Suivi budgétaire et appui au service administratif et financier"
      ]
    }
  ];

  const skills = [
    "Sage 100", "Excel", "PowerPoint", "Access", "Facturation", 
    "Rapprochement bancaire", "Gestion de portefeuille", "Prospection", 
    " CRM", "Relation client", "Analyse financière"
  ];

  return (
    <section id="management" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Gestion & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D6BCF] to-[#9E9BF2]">Développement Commercial</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertise en gestion financière, comptabilité et développement commercial
          </p>
        </div>

        {/* Expériences professionnelles */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Expériences Professionnelles</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Briefcase className="text-[#6D6BCF]" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-[#6D6BCF]/90">
                          {exp.company}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-sm">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{exp.missions}</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Compétences en gestion */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Compétences en gestion</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline" className="px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Points forts */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="text-blue-600" size={32} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Analyse & Reporting Financier</h4>
            <p className="text-gray-600">Expertise en analyse et reporting financier</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="text-green-600" size={32} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Développement Commercial & Prospection

</h4>
            <p className="text-gray-600">Mise en œuvre de stratégies de croissance et prospection ciblée pour convertir les opportunités en clients</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Briefcase className="text-purple-600" size={32} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Gestion de la Relation Client</h4>
            <p className="text-gray-600">Suivi actif des portefeuilles, fidélisation et amélioration continue de l’expérience client.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;
