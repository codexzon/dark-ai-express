
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2564&auto=format&fit=crop",
      description: "A full-featured e-commerce website with payment integration and inventory management",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Fitness Tracking App",
      category: "app",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2787&auto=format&fit=crop",
      description: "Mobile application for tracking workouts, nutrition, and health metrics",
      tags: ["React Native", "Firebase", "Redux"]
    },
    {
      title: "AI Customer Service Chatbot",
      category: "ai",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2606&auto=format&fit=crop",
      description: "Intelligent chatbot that handles customer inquiries and support requests",
      tags: ["OpenAI", "Python", "NLP"]
    },
    {
      title: "Marketing Campaign Dashboard",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      description: "Analytics dashboard for tracking marketing campaign performance",
      tags: ["Google Analytics", "Data Visualization", "SEO"]
    },
    {
      title: "Social Media Management Tool",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2674&auto=format&fit=crop",
      description: "Platform for scheduling, analyzing, and optimizing social media content",
      tags: ["Content Strategy", "Analytics", "Automation"]
    },
    {
      title: "Restaurant Ordering App",
      category: "app",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2274&auto=format&fit=crop",
      description: "Mobile app for restaurant ordering with real-time order tracking",
      tags: ["UI/UX Design", "Mobile Development", "Payment Integration"]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-1/3 bg-primary/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Recent Work
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['all', 'web', 'app', 'ai', 'marketing'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === category 
                  ? 'bg-primary text-white' 
                  : 'bg-primary/10 text-gray-300 hover:bg-primary/20'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="glass-morphism rounded-xl overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button className="purple-gradient purple-gradient-hover">
                    View Project <ExternalLink size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
