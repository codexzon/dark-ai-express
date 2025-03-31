
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ParallaxElement from './ParallaxElement';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      const glowElements = element.querySelectorAll('.glow-element');
      glowElements.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
        }
      });
      
      // Add parallax to background grid
      const grid = element.querySelector('.grid-pattern');
      if (grid && grid instanceof HTMLElement) {
        grid.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // GSAP animations
    const timeline = gsap.timeline();
    
    timeline
      .from(textRef.current?.querySelector('h1'), {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
      })
      .from(textRef.current?.querySelector('p'), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .from(textRef.current?.querySelectorAll('button'), {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.4")
      .from(".preview-container", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out"
      }, "-=0.3");
      
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      timeline.kill();
    };
  }, []);

  // Framer motion variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef} 
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden dark-gradient"
      data-scroll-section
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <ParallaxElement speed={0.05} direction="down">
          <motion.div 
            className="glow-element absolute top-1/4 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          ></motion.div>
        </ParallaxElement>
        
        <ParallaxElement speed={0.08} direction="up">
          <motion.div 
            className="glow-element absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          ></motion.div>
        </ParallaxElement>
        
        <div className="grid-pattern absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiM1OTRkZmIxMCIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIj48L3JlY3Q+PC9zdmc+')]"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div 
          ref={textRef}
          className="max-w-4xl mx-auto text-center"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="mb-6 inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20"
            variants={itemVariant}
            data-scroll
            data-scroll-speed="0.3"
          >
            <p className="text-sm font-medium text-primary">Digital Agency & IT Services</p>
          </motion.div>
          
          <motion.h1 
            className="heading-gradient text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight"
            variants={itemVariant}
            data-scroll
            data-scroll-speed="0.2"
          >
            Transform Your Business<br />With Digital Excellence
          </motion.h1>
          
          <ParallaxElement speed={0.1} direction="up">
            <motion.p 
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto opacity-90"
              variants={itemVariant}
            >
              RNP IT SOLUTION delivers cutting-edge web development, app creation, digital marketing, and AI solutions to help your business thrive in the digital landscape.
            </motion.p>
          </ParallaxElement>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariant}
          >
            <Button size="lg" className="purple-gradient purple-gradient-hover text-white font-medium px-6 py-6 rounded-lg">
              Get Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="gap-2 font-medium border-primary/30 hover:border-primary/60 px-6 py-6 rounded-lg">
              View Our Work <ArrowRight size={16} />
            </Button>
          </motion.div>
          
          {/* UI Preview */}
          <ParallaxElement speed={0.15} direction="up">
            <motion.div 
              className="mt-16 relative max-w-3xl mx-auto preview-container"
              variants={itemVariant}
            >
              <div className="glass-morphism rounded-xl overflow-hidden shadow-2xl purple-glow">
                <div className="border-b border-white/10 p-3 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-4 bg-black/20">
                  <div className="flex flex-col gap-3">
                    <div className="h-8 w-full bg-white/5 rounded animate-pulse"></div>
                    <div className="h-24 w-full bg-white/5 rounded"></div>
                    <div className="flex gap-2">
                      <div className="h-8 w-1/3 bg-white/5 rounded"></div>
                      <div className="h-8 w-1/3 bg-primary/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </ParallaxElement>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.svg 
          className="w-6 h-6 text-gray-300" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </motion.svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
