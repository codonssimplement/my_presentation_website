import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Target, Users, TrendingUp } from 'lucide-react';

const MicroactSection = () => {
  const achievements = [
    {
      icon: <Users className="text-[#6D6BCF]/70" size={24} />,
      title: "Connexion Producteurs-Consommateurs",
      description: "Plateforme innovante reliant directement les agriculteurs locaux aux consommateurs"
    },
    {
      icon: <TrendingUp className="text-green-600" size={24} />,
      title: "Réduction des Pertes",
      description: "Diminution significative des pertes post-récolte grâce à la vente directe"
    },
    {
      icon: <TrendingUp className="text-blue-600" size={24} />,
      title: "Valorisation Agriculture Locale",
      description: "Promotion et valorisation des produits agricoles sénégalais"
    }
  ];

  const responsibilities = [
    "Vision stratégique",
    "Développement web full-stack",
    "Branding & identité visuelle",
    "Logistique & gestion de points de relais",
   
  ];

  return (
    <section id="microact" className="section-padding bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1 border border-gray-200">
              <img 
                src="/logo_microact.png" 
                alt="Microact Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Microact</h2>
          </div>
          <p className="text-xl text-gray-600 mb-6">
            Cofondateur & Chef de Projet • Startup AgriTech
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Startup digitale qui connecte les producteurs de légumes locaux aux consommateurs en ligne, 
            via une plateforme moderne et des points de retrait stratégiques. 
            Notre mission : révolutionner la chaîne d'approvisionnement agricole au Sénégal.
          </p>
        </div>

        {/* Impact et réalisations */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Impact & Innovation</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-50 rounded-full">
                      {achievement.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {achievement.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Rôle et responsabilités */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mon Rôle & Responsabilités</h3>
              <div className="space-y-3">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#6D6BCF]/80 rounded-full"></div>
                    <span className="text-gray-700">{responsibility}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="text-[#6D6BCF]/80" size={24} />
                  Vision du Projet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Créer un écosystème digital qui autonomise les agriculteurs sénégalais, 
                  réduit le gaspillage alimentaire et offre aux consommateurs un accès direct 
                  à des produits frais et locaux. Notre approche combine technologie moderne 
                  et impact social positif.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

       

        {/* Liens vers le projet */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Découvrir le Projet</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-white bg-gradient-to-r from-[#6D6BCF] via-[#9E9BF2] to-[#6D6BCF] animate-gradient hover:opacity-90 transition-opacity px-8 py-3" asChild>
              <a href="https://microact.vercel.app" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2" size={20} />
                Visiter la Plateforme
              </a>
            </Button>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroactSection;
