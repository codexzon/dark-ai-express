
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);
  
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
    <section id="pricing" className="py-24 relative overflow-hidden dark-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-primary/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Our Pricing Plan
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Choose the perfect web development, app development, and IT services plan for your needs. All plans include a 14-day free trial.
          </p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${!annual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <div 
              className="relative w-14 h-7 bg-primary/20 rounded-full cursor-pointer"
              onClick={() => setAnnual(!annual)}
            >
              <div 
                className={`absolute top-1 w-5 h-5 rounded-full bg-primary transition-all duration-300 ${
                  annual ? 'left-8' : 'left-1'
                }`}
              ></div>
            </div>
            <span className={`ml-3 ${annual ? 'text-white' : 'text-gray-400'}`}>
              Annual <span className="text-xs text-primary ml-1">Save 20%</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-morphism rounded-xl overflow-hidden flex flex-col ${
                plan.popular ? 'border-primary/30 purple-glow scale-105 md:scale-110 z-10' : 'border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center text-sm font-medium py-1">
                  Most Popular
                </div>
              )}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-0.5">
                        <Check size={18} />
                      </span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'purple-gradient purple-gradient-hover' 
                      : 'bg-primary/10 hover:bg-primary/20 text-white border border-primary/30'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
