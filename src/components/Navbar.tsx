
import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { auth } from '@/lib/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import AuthModal from './auth/AuthModal';
import Logout from './auth/Logout';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'What We Do', href: '#what-we-do' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
  ];

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-background/80 shadow-md' : ''
      }`}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <motion.div variants={itemVariants}>
            <Logo />
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <ul className="flex space-x-4">
              {navLinks.map((link) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <a 
                    href={link.href} 
                    className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={itemVariants}>
                <Link 
                  to="/auth" 
                  className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Authentication
                </Link>
              </motion.li>
            </ul>
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-2 ml-4"
            >
              {user ? (
                <>
                  <span className="text-sm text-gray-300 mr-2">Hi, {user.email.split('@')[0]}</span>
                  <Logout />
                </>
              ) : (
                <>
                  <AuthModal 
                    triggerContent={
                      <Button 
                        variant="outline" 
                        className="border-primary/30 hover:border-primary/60"
                      >
                        <LogIn className="w-4 h-4 mr-2" />
                        Sign In
                      </Button>
                    }
                    defaultTab="login"
                  />
                  <AuthModal 
                    triggerContent={
                      <Button className="purple-gradient purple-gradient-hover">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Get Started
                      </Button>
                    }
                    defaultTab="signup"
                  />
                </>
              )}
            </motion.div>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.div className="md:hidden" variants={itemVariants}>
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden neo-blur absolute top-16 left-0 right-0 z-50"
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link, index) => (
              <motion.a
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-primary/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
            >
              <Link
                to="/auth"
                className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-primary/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Authentication
              </Link>
            </motion.div>
            <motion.div 
              className="flex flex-col gap-2 pt-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (navLinks.length + 1) * 0.05 }}
            >
              {user ? (
                <>
                  <span className="px-3 py-2 text-sm text-gray-300">Hi, {user.email.split('@')[0]}</span>
                  <Logout />
                </>
              ) : (
                <>
                  <AuthModal 
                    triggerContent={
                      <Button 
                        variant="outline" 
                        className="w-full justify-center border-primary/30 hover:border-primary/60"
                      >
                        <LogIn className="w-4 h-4 mr-2" />
                        Sign In
                      </Button>
                    }
                    defaultTab="login"
                  />
                  <AuthModal 
                    triggerContent={
                      <Button className="w-full justify-center purple-gradient purple-gradient-hover">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Get Started
                      </Button>
                    }
                    defaultTab="signup"
                  />
                </>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
