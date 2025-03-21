
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Loader2 } from 'lucide-react';

const CtaSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleConsultation = () => {
    setIsLoading(true);
    // Simulate loading delay before redirecting to Google Meet
    setTimeout(() => {
      window.open('https://meet.google.com/new', '_blank');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="glass-morphism rounded-2xl p-8 md:p-16 text-center purple-glow">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already leveraging our expertise in web development, digital marketing, and AI solutions. Let's discuss your project today!
          </p>
          <Button 
            size="lg" 
            className="purple-gradient purple-gradient-hover gap-2 px-8 py-6 text-white font-medium"
            onClick={handleConsultation}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Connecting...
              </>
            ) : (
              <>
                Schedule Free Consultation <ArrowRight size={18} />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
