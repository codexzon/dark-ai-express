
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BusinessSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background/50">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-full h-full bg-primary/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
              Accelerate Your Business Growth
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              At RNP IT SOLUTION, we combine technical expertise with marketing prowess to create comprehensive digital strategies that drive measurable business growth.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Custom-tailored digital strategies',
                'Data-driven marketing campaigns',
                'Cutting-edge web and app development',
                'AI-powered business automation',
                'ROI-focused social media management',
                'Brand-aligned content creation'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="purple-gradient purple-gradient-hover w-fit gap-2">
              Learn About Our Process <ArrowRight size={16} />
            </Button>
          </div>
          
          {/* Right Column - Visual */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px]"></div>
              <div className="glass-morphism relative overflow-hidden rounded-xl border border-white/10 p-1">
                <div className="bg-black/40 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-xl font-semibold">Growth Analytics</div>
                    <div className="text-sm text-gray-400">Live</div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-20 bg-primary/10 rounded-lg animate-pulse"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-32 bg-white/5 rounded-lg"></div>
                      <div className="h-32 bg-white/5 rounded-lg"></div>
                    </div>
                    <div className="h-12 bg-primary/10 rounded-lg w-1/2 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
