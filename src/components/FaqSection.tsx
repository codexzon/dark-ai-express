
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "What services does RNP IT SOLUTION offer?",
      answer: "We offer a comprehensive range of digital services including web development, app development, digital marketing, social media management, content creation, AI solutions like chatbots and agents, UI/UX design, Meta and Facebook advertising, and more."
    },
    {
      question: "How can RNP IT SOLUTION help my business grow?",
      answer: "We create tailored digital strategies that combine our technical expertise with marketing knowledge to increase your online visibility, drive traffic, boost conversions, and enhance your customer engagement through multiple digital channels."
    },
    {
      question: "What is the typical timeframe for a web development project?",
      answer: "Project timelines vary based on complexity and requirements. A simple website might take 2-4 weeks, while more complex web applications can take 2-6 months. During our initial consultation, we'll provide a specific timeline for your project."
    },
    {
      question: "Do you offer maintenance and support after project completion?",
      answer: "Yes, we provide ongoing maintenance and support services for all our projects. We offer various support packages to ensure your digital assets remain secure, up-to-date, and performing optimally."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing is customized based on your specific requirements and project scope. We work with businesses of all sizes and can create solutions that fit different budgets. Contact us for a free consultation and quote."
    },
    {
      question: "What makes RNP IT SOLUTION different from other agencies?",
      answer: "Our unique approach combines deep technical expertise with strategic marketing knowledge. We focus on delivering measurable ROI for our clients, and we pride ourselves on our responsive communication, transparent processes, and commitment to long-term client success."
    },
    {
      question: "Can you help with AI integration for my existing business systems?",
      answer: "Absolutely! We specialize in creating custom AI solutions including chatbots, AI agents, and automation tools that integrate seamlessly with your existing business systems to enhance efficiency and customer experience."
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get answers to common questions about our services, processes, and how we can help your business.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass-morphism rounded-lg overflow-hidden border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
