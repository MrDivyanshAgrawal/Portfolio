import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if we've scrolled past the home section
  useEffect(() => {
    const homeSection = document.getElementById('home');
    
    const toggleVisibility = () => {
      if (homeSection) {
        const homeBottom = homeSection.getBoundingClientRect().bottom;
        setIsVisible(homeBottom < 0);
      } else if (window.pageYOffset > 300) {
        // Fallback if home section is not found
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full z-50
                   bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                   shadow-lg shadow-cyan-500/20 transform hover:scale-110
                   transition-all duration-300 backdrop-blur-sm"
          aria-label="Scroll to top"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowUp className="w-5 h-5" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 
                        opacity-0 hover:opacity-20 rounded-full blur-md 
                        transition-opacity duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
