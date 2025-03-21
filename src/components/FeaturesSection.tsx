
import React from 'react';
import { Globe, Smartphone, Target, Facebook, BarChart, Share2, FileText, Bot, Cpu, Palette } from 'lucide-react';

const FeaturesSection = () => {
  const services = [
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: "Web Development",
      description: "Custom website design and development using the latest technologies and frameworks for optimal performance."
    },
    {
      icon: <Smartphone className="w-10 h-10 text-primary" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver seamless experiences across all devices."
    },
    {
      icon: <Target className="w-10 h-10 text-primary" />,
      title: "Meta Ads",
      description: "Strategic Meta advertising campaigns that reach your target audience and drive measurable results."
    },
    {
      icon: <Facebook className="w-10 h-10 text-primary" />,
      title: "Facebook Ads",
      description: "Targeted Facebook ad campaigns that maximize your ROI and boost your brand's online presence."
    },
    {
      icon: <BarChart className="w-10 h-10 text-primary" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that increase visibility, traffic, and conversions."
    },
    {
      icon: <Share2 className="w-10 h-10 text-primary" />,
      title: "Social Media Handling",
      description: "Expert social media management to grow your audience and enhance brand engagement."
    },
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: "Content Creation",
      description: "High-quality, engaging content that resonates with your audience and drives business growth."
    },
    {
      icon: <Bot className="w-10 h-10 text-primary" />,
      title: "AI Chatbot Creation",
      description: "Custom AI chatbots that enhance customer service and streamline business operations."
    },
    {
      icon: <Cpu className="w-10 h-10 text-primary" />,
      title: "AI Agents",
      description: "Intelligent AI agents that automate tasks and provide valuable insights for your business."
    },
    {
      icon: <Palette className="w-10 h-10 text-primary" />,
      title: "UI/UX Design",
      description: "Intuitive and visually appealing user interfaces that enhance user experience and satisfaction."
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Our Services
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business grow and succeed in the competitive digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-morphism rounded-xl p-6 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 border border-primary/20">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
