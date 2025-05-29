
import React, { Suspense, lazy } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DevelopmentSection from '@/components/DevelopmentSection';
import ManagementSection from '@/components/ManagementSection';
import MicroactSection from '@/components/MicroactSection';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

// Chargement paresseux pour optimiser les performances
const PartnersSection = lazy(() => import('@/components/PartnersSection'));

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <HeroSection />
      <DevelopmentSection />
      <ManagementSection /> 
    
      <MicroactSection />
      <PartnersSection />
      <ContactSection />
      <Suspense fallback={<div className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">Chargement des partenaires...</p>
        </div>
      </div>}>
        
      </Suspense>
      <Footer />
    </div>
  );
};

export default Index;
