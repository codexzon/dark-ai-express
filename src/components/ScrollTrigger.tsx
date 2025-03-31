
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger as ScrollTriggerGSAP } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTriggerGSAP);

interface ScrollTriggerProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  id?: string;
}

const ScrollTrigger: React.FC<ScrollTriggerProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 1,
  className = '',
  threshold = 0.2,
  id
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: `top bottom-=${threshold * 100}%`,
        toggleActions: 'play none none none',
        markers: false,
      }
    });
    
    // Set initial state
    gsap.set(element, { opacity: 0 });
    
    // Different animation types
    switch (animation) {
      case 'fadeIn':
        tl.to(element, { opacity: 1, duration, delay });
        break;
      case 'slideUp':
        gsap.set(element, { y: 50 });
        tl.to(element, { y: 0, opacity: 1, duration, delay });
        break;
      case 'slideLeft':
        gsap.set(element, { x: 50 });
        tl.to(element, { x: 0, opacity: 1, duration, delay });
        break;
      case 'slideRight':
        gsap.set(element, { x: -50 });
        tl.to(element, { x: 0, opacity: 1, duration, delay });
        break;
      case 'scale':
        gsap.set(element, { scale: 0.8 });
        tl.to(element, { scale: 1, opacity: 1, duration, delay });
        break;
      default:
        tl.to(element, { opacity: 1, duration, delay });
    }
    
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [animation, delay, duration, threshold]);
  
  return (
    <div ref={elementRef} className={className} id={id}>
      {children}
    </div>
  );
};

export default ScrollTrigger;
