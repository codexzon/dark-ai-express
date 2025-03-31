
import React, { createContext, useContext, useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface LocomotiveScrollContextType {
  scroll: LocomotiveScroll | null;
  isReady: boolean;
}

const LocomotiveScrollContext = createContext<LocomotiveScrollContextType>({
  scroll: null,
  isReady: false,
});

export const useLocomotiveScroll = () => useContext(LocomotiveScrollContext);

interface LocomotiveScrollProviderProps {
  children: React.ReactNode;
  options?: any;
}

export const LocomotiveScrollProvider: React.FC<LocomotiveScrollProviderProps> = ({
  children,
  options = { smooth: true, lerp: 0.1 }
}) => {
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!scroll) {
      (async () => {
        try {
          const smoothScrollbar = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]') as HTMLElement,
            ...options,
          });
          
          setScroll(smoothScrollbar);
          setIsReady(true);
          
          // Update scroll on window resize
          window.addEventListener('resize', () => {
            smoothScrollbar.update();
          });
        } catch (error) {
          console.error("Failed to initialize Locomotive Scroll:", error);
        }
      })();
    }

    return () => {
      if (scroll) {
        scroll.destroy();
        setScroll(null);
        setIsReady(false);
      }
    };
  }, [options]);

  return (
    <LocomotiveScrollContext.Provider value={{ scroll, isReady }}>
      {children}
    </LocomotiveScrollContext.Provider>
  );
};
