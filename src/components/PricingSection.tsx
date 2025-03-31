
import React, { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MotionButton } from '@/components/ui/motion-button';
import ScrollTrigger from './ScrollTrigger';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        markers: false
      }
    });
    
    timeline
      .from('.pricing-heading', {
        y: 50, 
        opacity: 0,
        duration: 0.8
      })
      .from('.pricing-description', {
        y: 30, 
        opacity: 0,
        duration: 0.6
      }, "-=0.4")
      .from('.pricing-toggle', {
        scale: 0.9,
        opacity: 0,
        duration: 0.5
      }, "-=0.3");
      
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          markers: false
        },
        y: 50,
        opacity: 0,
        duration: 0.7,
        delay: index * 0.2
      });
    });
    
    return () => {
      if (timeline.scrollTrigger) {
        timeline.scrollTrigger.kill();
      }
      timeline.kill();
    };
  }, []);
  
  const plans = [
    {
      name: "Starter",
      price: annual ? 600 : 60,
      period: annual ? "/year" : "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Professional website development",
        "Mobile responsive design",
        "Basic SEO optimization",
        "Content management system",
        "5 pages included",
        "1 month support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Premium",
      price: annual ? 800 : 80,
      period: annual ? "/year" : "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Advanced website development",
        "Mobile app development (iOS/Android)",
        "Advanced SEO & analytics",
        "E-commerce functionality",
        "Up to 15 pages",
        "Social media integration",
        "3 months support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Business",
      price: annual ? 1500 : 150,
      period: annual ? "/year" : "/month",
      description: "For large organizations with advanced needs",
      features: [
        "Enterprise web solutions",
        "Custom app development",
        "AI integration capabilities",
        "Advanced security features",
        "Unlimited pages",
        "API development & integration",
        "Database development",
        "1 year dedicated support",
        "Monthly performance reports"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" ref={sectionRef} className="py-32 relative overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-2/3 bg-zinc-800/50 rounded-full blur-[100px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="text-center mb-20">
          <ScrollTrigger animation="slideUp">
            <h2 className="pricing-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
          </ScrollTrigger>
          
          <ScrollTrigger animation="slideUp" delay={0.2}>
            <p className="pricing-description text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
              Select the perfect plan for your business needs. All plans include dedicated support and our satisfaction guarantee.
            </p>
          </ScrollTrigger>
          
          <ScrollTrigger animation="scale" delay={0.4}>
            <div className="pricing-toggle flex items-center justify-center mb-12">
              <span className={`mr-3 ${!annual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
              <motion.div 
                className="relative w-14 h-7 bg-zinc-700 rounded-full cursor-pointer"
                onClick={() => setAnnual(!annual)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="absolute top-1 w-5 h-5 rounded-full bg-white"
                  animate={{ 
                    left: annual ? '2rem' : '0.25rem',
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                ></motion.div>
              </motion.div>
              <span className={`ml-3 ${annual ? 'text-white' : 'text-gray-400'}`}>
                Annual <span className="text-xs text-white ml-1">Save 20%</span>
              </span>
            </div>
          </ScrollTrigger>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`bg-zinc-800/50 backdrop-blur-md border border-zinc-700/50 rounded-xl overflow-hidden flex flex-col ${
                plan.popular ? 'ring-1 ring-white scale-105 md:scale-110 z-10' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {plan.popular && (
                <motion.div 
                  className="bg-white text-zinc-900 text-center text-sm font-medium py-1"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Most Popular
                </motion.div>
              )}
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <motion.h3 
                  className="text-2xl font-bold mb-2 tracking-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                >
                  {plan.name}
                </motion.h3>
                <motion.p 
                  className="text-zinc-400 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                >
                  {plan.description}
                </motion.p>
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  <span className="text-5xl font-bold tracking-tight">${plan.price}</span>
                  <span className="text-zinc-400">{plan.period}</span>
                </motion.div>
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 + index * 0.1 }}
                    >
                      <span className="text-white mt-0.5">
                        <Check size={18} />
                      </span>
                      <span className="text-zinc-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                >
                  <MotionButton 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-white text-zinc-900 hover:bg-zinc-200' 
                        : 'bg-zinc-700/50 hover:bg-zinc-700 text-white border border-zinc-600'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {plan.cta}
                  </MotionButton>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
