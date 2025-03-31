
import React, { useRef, useEffect } from 'react';
import { useLocomotiveScroll } from '@/context/LocomotiveScrollContext';
import { gsap } from 'gsap';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 0.1,
  direction = 'up',
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scroll } = useLocomotiveScroll();
  
  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    let y = 0;
    let x = 0;
    
    const handleScroll = () => {
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInView) {
        const scrollPosition = (rect.top - window.innerHeight) * speed;
        
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
  }, [speed, direction, scroll]);
  
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ParallaxElement;
