// src/components/ScrollToTop.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if we've scrolled past the home section
  useEffect(() => {
    const homeSection = document.getElementById('home');
    
    const toggleVisibility = () => {
      if (homeSection) {
        const homeBottom = homeSection.getBoundingClientRect().bottom;
        setIsVisible(homeBottom < 0);
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
          className="fixed bottom-8 right-8 z-40 p-3 rounded-full 
                   bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                   shadow-lg hover:shadow-cyan-500/25 cursor-pointer"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="w-6 h-6" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 
                        opacity-0 hover:opacity-20 rounded-full blur-md 
                        transition-opacity duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;

