import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Loading");
  const [isComplete, setIsComplete] = useState(false);
  
  // Simulate loading progress
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          return 100;
        }
        return prev + 5;
      });
    }, 150);

    // Animate the loading text with dots
    const textTimer = setInterval(() => {
      setLoadingText((prev) => {
        if (prev === "Loading...") return "Loading";
        return prev + ".";
      });
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, []);

  const mainVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren", 
        staggerChildren: 0.2
      } 
    },
    exit: { 
      opacity: 0,
      transition: { 
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 }
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-gray-950 flex flex-col items-center justify-center z-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={mainVariants}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>

      {/* Logo or branding element */}
      <motion.div
        variants={itemVariants}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-white">Divyansh's </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Portfolio
          </span>
        </h1>
        <p className="text-gray-400 text-sm">Full Stack Developer & Problem Solver</p>
      </motion.div>

      {/* Spinner with gradient */}
      <motion.div
        variants={itemVariants}
        className="relative w-24 h-24 mb-8"
      >
        {/* Main rotating spinner */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-blue-500 border-b-purple-500 border-l-transparent"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Inner rotating spinner (opposite direction) */}
        <motion.div
          className="absolute inset-2 rounded-full border-4 border-transparent border-t-transparent border-r-purple-400 border-b-cyan-500 border-l-blue-400"
          animate={{ rotate: -360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Percentage in the middle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span 
            className="text-white text-lg font-medium"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {loadingProgress}%
          </motion.span>
        </div>
      </motion.div>
      
      {/* Loading text with animation */}
      <motion.p
        variants={itemVariants}
        className="text-xl text-white font-light mb-8"
      >
        {loadingText}
      </motion.p>
      
      {/* Progress bar */}
      <motion.div
        variants={itemVariants}
        className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: `${loadingProgress}%` }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Tips or quotes during loading */}
      <motion.p
        variants={itemVariants}
        className="mt-8 text-gray-400 text-sm max-w-sm text-center px-4"
      >
        {isComplete ? 
          "Ready to explore my portfolio!" : 
          "Preparing a seamless experience for you..."}
      </motion.p>
    </motion.div>
  );
};

export default Loader;
