import { useState } from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [productInterest, setProductInterest] = useState('');

  const scrollToContact = (product = '') => {
    setProductInterest(product);
    setTimeout(() => {
      const element = document.getElementById('contacto');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const scrollToProducts = () => {
    const element = document.getElementById('productos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        onContactClick={scrollToContact}
      />

      <div className="fade-in">
        <HeroSection 
          onContactClick={scrollToContact}
          onProductsClick={scrollToProducts}
        />
      </div>

      <div className="fade-in">
        <ProductsSection onContactClick={scrollToContact} />
      </div>

      <div className="fade-in">
        <AboutSection />
      </div>

      <div className="fade-in">
        <TestimonialsSection />
      </div>

      <div className="fade-in">
        <ContactSection productInterest={productInterest} />
      </div>

      <Footer />
    </div>
  );
}