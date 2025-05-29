import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen mt-5 flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center space-y-8">
          {/* Photo professionnelle */}
          <div className="w-46 h-46 rounded-full overflow-hidden shadow-2xl border-4" style={{ borderColor: '#6D6BCF' }}>
            <img 
              src="/pic-pro3.png" 
              alt="Elimane Ba - Portrait professionnel"
              className="w-48 h-48 object-cover scale-118 "
              style={{ objectPosition: 'center 50%' }}
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D6BCF] via-[#9E9BF2] to-[#6D6BCF] animate-gradient">Elimane Ba</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              Développeur Full Stack | Gestionnaire | Entrepreneur engagé
            </p>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Je conçois des solutions digitales utiles, performantes et humaines, 
              au croisement de la technologie, du business et de l'impact local.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="px-8 py-3 text-white bg-gradient-to-r from-[#6D6BCF] via-[#9E9BF2] to-[#6D6BCF] animate-gradient hover:opacity-90 transition-opacity"
              >
                <Download className="mr-2" size={20} />
                CV COMPLET
              </Button>
            </div>

            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Basé à Dakar, Sénégal • 27 ans</p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                <a 
                  href="mailto:elimaneba786328232@gmail.com"
                  className="text-gray-700 hover:text-[#6D6BCF] transition-colors flex items-center"
                >
                  <svg className="w-4 h-4 mr-2 text-[#6D6BCF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  elimaneba786328232@gmail.com
                </a>
                <a 
                  href="tel:+221786328232"
                  className="text-gray-700 hover:text-[#6D6BCF] transition-colors flex items-center"
                >
                  <svg className="w-4 h-4 mr-2 text-[#6D6BCF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  +221 78 632 82 32
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
