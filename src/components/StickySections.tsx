
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger as ScrollTriggerGSAP } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTriggerGSAP);

const sections = [
  {
    title: "Web Development",
    description: "We create responsive, user-friendly websites that drive business growth using the latest technologies and best practices.",
    color: "from-blue-600 to-purple-600"
  },
  {
    title: "Mobile App Development",
    description: "Our expert team builds native and cross-platform mobile applications for iOS and Android that provide seamless user experiences.",
    color: "from-purple-600 to-pink-600"
  },
  {
    title: "Digital Marketing",
    description: "We design comprehensive digital marketing strategies to increase your online presence and drive targeted traffic to your business.",
    color: "from-pink-600 to-orange-600"
  },
  {
    title: "AI & Machine Learning",
    description: "Leverage the power of artificial intelligence and machine learning to optimize business processes and gain valuable insights.",
    color: "from-orange-600 to-yellow-500"
  }
];

const StickySections = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Create the sticky effect
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=400%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      }
    });
    
    // Animate each section
    sectionRefs.current.forEach((section, i) => {
      if (i === 0) return; // Skip first section as it's already shown
      
      timeline.fromTo(
        section,
        { y: "100vh", opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        i * 0.5
      );
      
      if (i < sectionRefs.current.length - 1) {
        timeline.to(
          section,
          { y: "-100vh", opacity: 0, duration: 0.5 },
          i * 0.5 + 0.5
        );
      }
    });
    
    return () => {
      if (timeline.scrollTrigger) {
        timeline.scrollTrigger.kill();
      }
      timeline.kill();
    };
  }, []);
  
  return (
    <section id="what-we-do" className="relative h-screen">
      <div ref={containerRef} className="h-screen w-full relative overflow-hidden">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={el => el && (sectionRefs.current[index] = el)}
            className={`absolute inset-0 flex items-center justify-center ${index === 0 ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="max-w-4xl w-full mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-morphism rounded-xl overflow-hidden p-8 text-center"
              >
                <motion.h2 
                  className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {section.title}
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-300 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {section.description}
                </motion.p>
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto"
                  initial={{ width: 0 }}
                  animate={{ width: "6rem" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                ></motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StickySections;
