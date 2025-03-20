
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="glass-morphism rounded-2xl p-8 md:p-16 text-center purple-glow">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
            What are you waiting for?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users already leveraging our AI platform to build amazing products. Try it free for 14 days, no credit card required.
          </p>
          <Button size="lg" className="purple-gradient purple-gradient-hover gap-2 px-8 py-6 text-white font-medium">
            Get Started Now <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
