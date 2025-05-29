import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Générer un tableau de designs aléatoires
const partners = [
  { id: 1, name: 'Design 1', logo: '/partner/design1.png' },
  { id: 2, name: 'Design 2', logo: '/partner/design2.jpeg' },
  { id: 3, name: 'Design 3', logo: '/partner/design3.jpeg' },
  { id: 4, name: 'Design 4', logo: '/partner/design4.jpeg' },
  { id: 5, name: 'Design 5', logo: '/partner/design5.jpeg' },
  { id: 6, name: 'Design 6', logo: '/partner/design6.png' },
  { id: 7, name: 'Design 7', logo: '/partner/design7.png' },
  { id: 8, name: 'Design 8', logo: '/partner/design8.png' },
  { id: 9, name: 'Design 9', logo: '/partner/design9.jpg' },
  { id: 10, name: 'Design 10', logo: '/partner/design10.png' },
  { id: 11, name: 'Design 11', logo: '/partner/design11.mp4' },
  { id: 12, name: 'Design 12', logo: '/partner/design12.png' },
  { id: 13, name: 'Design 13', logo: '/partner/design13.jpeg' },
  { id: 14, name: 'Design 14', logo: '/partner/design14.jpg' },
  { id: 15, name: 'Design 15', logo: '/partner/design15.png' },
  { id: 16, name: 'Design 16', logo: '/partner/design16.png' },
  { id: 17, name: 'Design 17', logo: '/partner/design17.gif' },
  { id: 18, name: 'Design 18', logo: '/partner/design18.png' },
  { id: 19, name: 'Design 19', logo: '/partner/design19.png' },
  { id: 20, name: 'Design 20', logo: '/partner/design20.png' },
  { id: 21, name: 'Design 21', logo: '/partner/design21.png' },
  { id: 22, name: 'Design 22', logo: '/partner/design22.png' },
  { id: 23, name: 'Design 23', logo: '/partner/design23.png' },
  // { id: 24, name: 'Design 24', logo: '/partner/design24.png' },
  { id: 25, name: 'Design 25', logo: '/partner/design25.mp4' },
  { id: 26, name: 'Design 26', logo: '/partner/design26.png' },
  // { id: 27, name: 'Design 27', logo: '/partner/design27.png' },
  { id: 28, name: 'Design 28', logo: '/partner/design28.png' },
  { id: 29, name: 'Design 29', logo: '/partner/design29.png' },
  { id: 30, name: 'Design 30', logo: '/partner/design30.png' },
  { id: 31, name: 'Design 31', logo: '/partner/design31.png' },
  { id: 32, name: 'Design 32', logo: '/partner/design32.png' },
  { id: 34, name: 'Design 34', logo: '/partner/design34.jpg' },
  { id: 35, name: 'Design 35', logo: '/partner/design35.png' },
  { id: 36, name: 'Design 36', logo: '/partner/design36.jpeg' },
  { id: 37, name: 'Design 37', logo: '/partner/design37.jpeg' },
  { id: 38, name: 'Design 38', logo: '/partner/design38.jpeg' },
  { id: 39, name: 'Design 39', logo: '/partner/design39.jpeg' },
  { id: 40, name: 'Design 40', logo: '/partner/design40.jpeg' },
  { id: 41, name: 'Design 41', logo: '/partner/design41.jpeg' },
  { id: 42, name: 'Design 42', logo: '/partner/design42.jpeg' },
  { id: 43, name: 'Design 43', logo: '/partner/design43.jpeg' },
  { id: 44, name: 'Design 44', logo: '/partner/design44.jpeg' },
  { id: 45, name: 'Design 45', logo: '/partner/design45.jpeg' },
  { id: 46, name: 'Design 46', logo: '/partner/design46.jpeg' },
  { id: 47, name: 'Design 47', logo: '/partner/design47.mp4' }
];

// Dupliquer pour le défilement infini
const duplicatedPartners = [...partners, ...partners];

const PartnersSection = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      const container = containerRef.current;
      if (!container) return;

      const scrollContainer = container.querySelector('.scroll-container');
      if (!scrollContainer) return;

      // Animation de défilement
      const animation = () => {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
        requestAnimationFrame(animation);
      };

      const animationId = requestAnimationFrame(animation);
      return () => cancelAnimationFrame(animationId);
    }
  }, [isInView]);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            MES RÉALISATIONS VISUELLES
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            mes créations visuelles
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full overflow-hidden py-8"
        >
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />
          
          <motion.div 
            className="scroll-container flex items-center space-x-12"
            style={{
              display: 'flex',
              width: 'max-content',
              willChange: 'transform',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="flex items-center"
              style={{
                display: 'flex',
                width: 'max-content',
                willChange: 'transform',
              }}
              initial={{ x: 0 }}
              animate={{ x: '-100%' }}
              transition={{
                duration: 150, // Double la durée pour un défilement plus lent
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              {partners.map((partner, index) => (
                <motion.div 
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-160 h-120 flex items-center justify-center p-20 transition-all duration-300"
                  whileHover={{ 
                    y: -12,
                    transition: { duration: 0.3 }
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.1
                    }
                  }}
                  initial={{ scale: 0.95, opacity: 0 }}
                >
                  {(() => {
                  const extension = partner.logo.split('.').pop()?.toLowerCase();
                  
                  // Effet de zoom-in spécifique pour chaque design
                  const zoomScale = 1.2 + (partner.id % 5) * 0.05; // Zoom entre 1.1 et 1.3
                  const transitionDuration = 1 + (partner.id % 3); // Durée de transition entre 1 et 3 secondes
                  
                  if (extension === 'mp4' || extension === 'webm') {
                    return (
                      <video 
                        src={partner.logo} 
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="max-h-36 max-w-full object-contain transition-all duration-300"
                        style={{
                          transform: `scale(${zoomScale})`,
                          transition: `transform ${transitionDuration}s ease-in-out`
                        }}
                      />
                    );
                  }

                  if (extension === 'gif') {
                    return (
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="max-h-36 max-w-full object-contain transition-all duration-300"
                        loading="lazy"
                        style={{
                          transform: `scale(${zoomScale})`,
                          transition: `transform ${transitionDuration}s ease-in-out`
                        }}
                      />
                    );
                  }

                  return (
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-36 max-w-full object-contain transition-all duration-300"
                      loading="lazy"
                      style={{
                        transform: `scale(${zoomScale})`,
                        transition: `transform ${transitionDuration}s ease-in-out`
                      }}
                    />
                  );
                })()}  
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
