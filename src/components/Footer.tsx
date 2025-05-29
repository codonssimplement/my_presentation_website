import React from 'react';
import { Heart, Code, Briefcase } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl font-bold gradient-text">Elimane Ba</span>
          </div>
          
          <div className="flex items-center justify-center gap-6 mb-6 text-gray-400">
            <div className="flex items-center gap-2 group">
              <Code size={20} className="text-[#6D6BCF] group-hover:text-[#9E9BF2] transition-colors" />
              <span className="group-hover:text-white transition-colors">Développeur</span>
            </div>
            <div className="flex items-center gap-2 group">
              <Briefcase size={20} className="text-[#6D6BCF] group-hover:text-[#9E9BF2] transition-colors" />
              <span className="group-hover:text-white transition-colors">Gestionnaire</span>
            </div>
            <div className="flex items-center gap-2 group">
              <Heart size={20} className="text-[#6D6BCF] group-hover:text-[#9E9BF2] transition-colors" fill="#6D6BCF" fillOpacity="0.2" />
              <span className="group-hover:text-white transition-colors">Entrepreneur</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-3">Développement</h4>
              <div className="space-y-2 text-gray-400">
                <a href="https://github.com/codonssimplement" className="block hover:text-white transition-colors">
                  GitHub Principal
                </a>
                <a href="https://github.com/Elimaneba" className="block hover:text-white transition-colors">
                  GitHub Projets
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Entrepreneuriat</h4>
              <div className="space-y-2 text-gray-400">
                <a href="https://microact.vercel.app" className="block hover:text-white transition-colors">
                  Microact
                </a>
                <a href="https://www.micro-act.com" className="block hover:text-white transition-colors">
                  Présentation Microact
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <a href="mailto:elimaneba786328232@gmail.com" className="block hover:text-white transition-colors">
                  Email Principal
                </a>
                <a href="tel:+221786328232" className="block hover:text-white transition-colors">
                  +221 78 632 82 32
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400">
              2024 Elimane Ba. Développeur Full Stack, Gestionnaire et Entrepreneur au Sénégal.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Créé avec passion • Basé à Dakar, Sicap Foire
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
