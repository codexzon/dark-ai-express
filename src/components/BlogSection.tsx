
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "5 Ways AI Can Transform Your Customer Service",
      excerpt: "Discover how AI chatbots and agents can revolutionize your customer support and increase satisfaction.",
      image: "https://images.unsplash.com/photo-1677442135198-21d94daca0d0?q=80&w=2832&auto=format&fit=crop",
      date: "June 12, 2023",
      readTime: "5 min read"
    },
    {
      title: "The Ultimate Guide to Facebook & Meta Advertising",
      excerpt: "Learn the insider strategies that can maximize your ROI and reach on Facebook and Meta platforms.",
      image: "https://images.unsplash.com/photo-1684469749275-91e0dc566473?q=80&w=2832&auto=format&fit=crop",
      date: "July 23, 2023",
      readTime: "8 min read"
    },
    {
      title: "Why Responsive Web Design is Essential in 2023",
      excerpt: "Explore the importance of mobile-first design and how it impacts your conversion rates and SEO ranking.",
      image: "https://images.unsplash.com/photo-1655720033654-a4239dd42d10?q=80&w=2832&auto=format&fit=crop",
      date: "August 5, 2023",
      readTime: "10 min read"
    }
  ];

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-background/50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Insights & Resources
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Expert advice, industry trends, and actionable tips to help you stay ahead in the digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="glass-morphism rounded-xl overflow-hidden card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between text-sm text-white/80">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors gap-1">
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="gap-2 border-primary/30 hover:border-primary/60">
            View All Posts <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
