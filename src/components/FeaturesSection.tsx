
import React from 'react';
import { Command, Cpu, Zap, Shield, Braces, BarChart } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Command className="w-10 h-10 text-primary" />,
      title: "AI-Powered Generation",
      description: "Leverage OpenAI's GPT models to generate high-quality content, code, and more automatically."
    },
    {
      icon: <Cpu className="w-10 h-10 text-primary" />,
      title: "Next.js Infrastructure",
      description: "Built on Next.js for optimal performance, SEO, and developer experience with React."
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Lightning Fast",
      description: "Optimized for speed with server-side rendering, edge functions, and efficient API calls."
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Secure Authentication",
      description: "Enterprise-grade authentication with role-based access control and data protection."
    },
    {
      icon: <Braces className="w-10 h-10 text-primary" />,
      title: "Type-Safe Code",
      description: "Written in TypeScript for reliable code, easier maintenance, and fewer bugs."
    },
    {
      icon: <BarChart className="w-10 h-10 text-primary" />,
      title: "Analytics Integration",
      description: "Built-in analytics to track user behavior, feature usage, and business metrics."
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Key Features of AI Tool
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Powerful capabilities designed to help you build, launch, and scale your AI-powered products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-morphism rounded-xl p-6 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 border border-primary/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
