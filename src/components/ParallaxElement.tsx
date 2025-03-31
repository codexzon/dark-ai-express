
import React, { useRef, useEffect } from 'react';
import { useLocomotiveScroll } from '@/context/LocomotiveScrollContext';
import { gsap } from 'gsap';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  delay?: number;
}

const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 0.1,
  direction = 'up',
  className = '',
  intensity = 'medium',
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scroll } = useLocomotiveScroll();
  
  // Adjust speed based on intensity
  const getSpeedMultiplier = () => {
    switch(intensity) {
      case 'low': return 0.5;
      case 'medium': return 1;
      case 'high': return 1.5;
      default: return 1;
    }
  };
  
  const actualSpeed = speed * getSpeedMultiplier();
  
  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    let y = 0;
    let x = 0;
    
    // Initial animation with delay
    gsap.fromTo(element, 
      { opacity: 0, y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0, x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0 },
      { opacity: 1, y: 0, x: 0, duration: 0.8, delay: delay, ease: "power2.out" }
    );
    
    const handleScroll = () => {
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      // Check if element is in viewport
      const isInView = rect.top < windowHeight && rect.bottom > 0;
      
      if (isInView) {
        // Calculate how far the element is from the center of the viewport
        const distanceFromCenter = (rect.top + rect.height / 2) - (windowHeight / 2);
        // Normalize this distance to a value between -1 and 1
        const normalizedDistance = distanceFromCenter / (windowHeight / 2);
        
        // Use the normalized distance to adjust the parallax effect
        const scrollPosition = normalizedDistance * actualSpeed * 100;
        
        switch (direction) {
          case 'up':
            y = -scrollPosition;
            break;
          case 'down':
            y = scrollPosition;
            break;
          case 'left':
            x = -scrollPosition;
            break;
          case 'right':
            x = scrollPosition;
            break;
        }
        
        gsap.to(element, {
          y,
          x,
          ease: "power2.out",
          duration: 0.6,
          overwrite: true,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Also update on locomotive scroll
    if (scroll) {
      scroll.on('scroll', handleScroll);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scroll) {
        scroll.off('scroll', handleScroll);
      }
    };
  }, [actualSpeed, direction, scroll, delay]);
  
  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
};

export default ParallaxElement;
