
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import BusinessSection from '@/components/BusinessSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import FaqSection from '@/components/FaqSection';
import PortfolioSection from '@/components/PortfolioSection';

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main>
        <HeroSection />
        <BusinessSection />
        <FeaturesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <BlogSection />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
