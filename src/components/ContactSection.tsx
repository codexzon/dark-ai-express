
import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!form.current) {
      toast.error("Form reference not available. Please try again.");
      setIsSubmitting(false);
      return;
    }

    // Use the emailjs-com library instead of the CDN version
    emailjs.sendForm(
      'service_gvqcjaw', // Your Service ID
      'template_dcke26q', // Your Template ID
      form.current,
      'wcuRMdDZE9hoUHAdA' // Your Public Key
    )
      .then((response) => {
        console.log('Email sent successfully:', response);
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
        form.current?.reset();
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        toast.error("Failed to send message. Please try again later.");
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden dark-gradient">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-1/2 bg-primary/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Contact With Us
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help! Get in touch with our team.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto glass-morphism rounded-xl p-8">
          <form id="contact-form" ref={form} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <div className="text-center">
              <Button 
                type="submit" 
                className="purple-gradient purple-gradient-hover px-8 py-6 text-white font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
