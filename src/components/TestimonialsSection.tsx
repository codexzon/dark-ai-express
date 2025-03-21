
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    content: "RNP IT SOLUTION transformed our online presence with a stunning website and effective digital marketing strategy. Our conversion rates have increased by 65% in just three months!",
    author: "Sarah Johnson",
    role: "Marketing Director, TechFirm",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    content: "The mobile app they developed for our business has received excellent feedback from users. Their attention to detail and focus on user experience is unmatched in the industry.",
    author: "Michael Chen",
    role: "CEO, AppSolutions Inc.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    content: "We saw a 300% ROI on our Facebook and Meta ad campaigns managed by RNP IT SOLUTION. Their targeting strategies and ad creatives are exceptional!",
    author: "Emma Rodriguez",
    role: "Founder, GrowthBrand",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    content: "The AI chatbot they created for our customer service has reduced our response time by 80% and improved customer satisfaction scores dramatically.",
    author: "David Wilson",
    role: "Customer Service Manager, ServicePro",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    content: "RNP IT SOLUTION's social media management has grown our following by 10k+ in just two months. Their content is engaging and their strategy is clearly working!",
    author: "Lisa Thompson",
    role: "Social Media Director, FashionRetail",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    content: "The UI/UX design work they did on our web application has significantly reduced user drop-off rates and increased the average time users spend on our platform.",
    author: "Robert Garcia",
    role: "Product Manager, DataViz",
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
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See what our clients have to say about our services and the results we've helped them achieve.
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
