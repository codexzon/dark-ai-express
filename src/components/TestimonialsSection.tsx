
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    content: "This AI tool has completely transformed our content creation process. We're now producing high-quality articles in half the time it used to take us.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    content: "The code generation features have saved our development team countless hours. The suggestions are incredibly accurate and easily customizable.",
    author: "Michael Chen",
    role: "Lead Developer",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    content: "As a startup founder, this tool has been invaluable. It's like having an extra team member who's always available to help with various tasks.",
    author: "Emma Rodriguez",
    role: "CEO, TechStart",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    content: "I was skeptical about AI tools, but this one exceeded my expectations. The learning curve is minimal, and the results are outstanding.",
    author: "David Wilson",
    role: "Content Strategist",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    content: "We've been able to scale our operations significantly thanks to the automation capabilities. Our customers are happier, and so is our team.",
    author: "Lisa Thompson",
    role: "Operations Manager",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    content: "The customer support team is exceptional. They're quick to respond and always go above and beyond to ensure we're getting the most out of the platform.",
    author: "Robert Garcia",
    role: "Customer Success",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg"
  }
];

const TestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-2/3 bg-primary/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about our AI solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-morphism rounded-xl p-6 card-hover flex flex-col"
            >
              <div className="flex-1">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              </div>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-primary/30"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation */}
        <div className="flex justify-center mt-10 gap-4">
          <button 
            onClick={handlePrev}
            className="p-2 rounded-full bg-primary/10 text-white hover:bg-primary/20 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2 items-center">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === currentPage ? 'bg-primary w-6' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={handleNext}
            className="p-2 rounded-full bg-primary/10 text-white hover:bg-primary/20 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
