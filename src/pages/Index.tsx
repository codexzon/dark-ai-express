
import React, { useEffect, useRef } from 'react';
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
import StickySections from '@/components/StickySections';
import ThreeJsBackground from '@/components/ThreeJsBackground';
import { LocomotiveScrollProvider } from '@/context/LocomotiveScrollContext';
import { ScrollArea } from '@/components/ui/scroll-area';
import { gsap } from 'gsap';

const Index = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add custom cursor
    if (!cursorRef.current) return;
    
    const cursor = cursorRef.current;
    
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };
    
    const onMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
      });
    };
    
    const onMouseLeave = () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
      });
    };
    
    // Add magnetic effect to buttons and links
    const magneticElements = document.querySelectorAll('a, button');
    magneticElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
          scale: 2.5,
          duration: 0.3,
        });
      });
      
      el.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
        });
      });
    });
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    
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
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <LocomotiveScrollProvider>
      <div className="cursor-glow" ref={cursorRef}></div>
      <div className="min-h-screen w-full font-space" data-scroll-container>
        <ThreeJsBackground />
        <Navbar />
        <main>
          <HeroSection />
          <BusinessSection />
          <FeaturesSection />
          <StickySections />
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
    </LocomotiveScrollProvider>
  );
};

export default Index;
