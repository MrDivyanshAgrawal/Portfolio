// AnimatedBackground.jsx - Web Development & Computer Science Theme (Fixed)
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaReact, FaNodeJs, FaCode, FaDatabase, FaServer, FaGithub, FaLaptopCode, FaCogs, FaBrain } from 'react-icons/fa';
import { SiJavascript, SiCss3, SiHtml5, SiMongodb, SiTailwindcss } from 'react-icons/si';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 1200, 
    height: typeof window !== 'undefined' ? window.innerHeight : 800 
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Tech icons for the floating elements - Removed SiAlgorithm and added FaCogs and FaBrain instead
  const techIcons = [
    <FaReact key="react" />,
    <SiJavascript key="js" />,
    <SiHtml5 key="html" />,
    <SiCss3 key="css" />,
    <FaNodeJs key="node" />,
    <SiMongodb key="mongodb" />,
    <FaDatabase key="database" />,
    <FaServer key="server" />,
    <FaGithub key="github" />,
    <SiTailwindcss key="tailwind" />,
    <FaCode key="code" />,
    <FaLaptopCode key="laptop" />,
    <FaCogs key="cogs" />,
    <FaBrain key="brain" />
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
      />
      
      {/* Mouse follow gradient */}
      <div
        className="absolute w-[600px] h-[600px] opacity-20 transition-all duration-700 ease-out pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)`,
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
      />
      
      {/* Binary code pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px), linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Digital circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0,50 L100,50 M50,0 L50,100 M25,25 L75,75 M75,25 L25,75" 
                  fill="none" stroke="rgba(6, 182, 212, 0.8)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
      
      {/* Floating Tech Icons */}
      {techIcons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-500/20"
          style={{ 
            fontSize: Math.random() * 20 + 15 
          }}
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
            rotate: Math.random() * 360,
          }}
          animate={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
            rotate: Math.random() * 720 - 360,
          }}
          transition={{
            duration: Math.random() * 50 + 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        >
          {icon}
        </motion.div>
      ))}
      
      {/* Floating code snippets */}
      {[...Array(15)].map((_, i) => {
        const codeSnippet = [
          "{</>}",
          "function()",
          "import React",
          "const [state, setState]",
          "useEffect()",
          "<div>",
          "export default",
          "npm install",
          "git commit",
          ".map()",
          "async/await",
          "=>",
          "class Node {}",
          "JSON.parse()",
          "O(n log n)"
        ][i % 15];
        
        return (
          <motion.div
            key={i + 'code'}
            className="absolute text-cyan-500/10 font-mono text-xs sm:text-sm"
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
            }}
            animate={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
            }}
            transition={{
              duration: Math.random() * 40 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          >
            {codeSnippet}
          </motion.div>
        );
      })}
      
      {/* Floating particles - Optimized */}
      {[...Array(70)].map((_, i) => (
        <motion.div
          key={i + 'particle'}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
          }}
          animate={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
