// src/components/ScrollToTop.jsx - Fixed Initial State
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  // Start with isVisible as false to hide button on initial load
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Check scroll position whenever the page scrolls
  useEffect(() => {
    const toggleVisibility = () => {
      // Only show button when scrolled down enough (300px)
      if (window.scrollY > 300) {
        setIsVisible(true);
        
        // Calculate scroll progress percentage
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(currentProgress, 100));
      } else {
        // Hide button when near the top
        setIsVisible(false);
      }
    };

    // Run check immediately (will be false at top of page)
    toggleVisibility();
    
    // Set up scroll listener
    window.addEventListener('scroll', toggleVisibility);
    
    // Clean up
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
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            duration: 0.3
          }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full 
                   bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                   shadow-lg hover:shadow-cyan-500/25 cursor-pointer
                   flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          {/* Arrow icon with animation */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <FiArrowUp className="w-6 h-6" />
          </motion.div>
          
          {/* Progress circle around button */}
          <svg
            className="absolute w-full h-full -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="4"
            />
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeDasharray="302"
              strokeDashoffset={302 - (302 * scrollProgress) / 100}
              className="transition-all duration-300"
            />
          </svg>
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 
                        opacity-0 group-hover:opacity-20 rounded-full blur-md 
                        transition-opacity duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
