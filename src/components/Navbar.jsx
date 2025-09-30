import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Close mobile menu when resizing to desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Determine if navbar should change style
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/90 backdrop-blur-md shadow-lg py-2 sm:py-3' 
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="#home" 
          className="flex items-center group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 mr-2 overflow-hidden rounded-full border-2 border-cyan-500/30 group-hover:border-cyan-500 transition-colors duration-300">
            {/* Logo image */}
            <motion.img 
              src="/Logo3.jpg" 
              alt="Divyansh Agrawal Logo" 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 text-xl sm:text-2xl font-bold">
              Divyansh
            </span>
            <span className="text-white text-xl sm:text-2xl font-bold">Agrawal</span>
          </div>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={`text-sm lg:text-base font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-400 ${
                activeSection === link.href.substring(1)
                  ? 'text-cyan-400 bg-cyan-500/10'
                  : 'text-gray-300'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          type="button"
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg bg-gray-800/70 text-gray-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900/95 backdrop-blur-lg flex flex-col justify-center items-center z-40 md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <motion.div 
              className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className="absolute h-20 w-20 bg-cyan-500/20 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.2, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>

            <motion.div 
              className="flex flex-col items-center space-y-6"
              variants={mobileMenuVariants}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  custom={index}
                >
                  <a
                    href={link.href}
                    className={`text-xl font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:bg-cyan-500/20 ${
                      activeSection === link.href.substring(1)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300'
                    }`}
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Bottom hint */}
            <motion.div 
              className="absolute bottom-10 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="text-gray-500 text-sm mb-2">Tap to navigate</p>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaChevronDown className="text-cyan-400" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
