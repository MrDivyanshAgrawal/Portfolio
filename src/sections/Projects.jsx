// src/sections/Projects.jsx
import { motion, useAnimation } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { FiGithub } from 'react-icons/fi';
import { useRef, useEffect, useState } from 'react';

const Projects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  
  // Track animation cycles
  const [animationCount, setAnimationCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state
        setIsVisible(entry.isIntersecting);
        
        if (entry.isIntersecting) {
          // Increase animation counter to force re-animation
          setAnimationCount(prev => prev + 1);
          
          // Start animations
          controls.start({
            opacity: 1,
            y: 0,
            transition: { 
              duration: 0.5,
              staggerChildren: 0.1
            }
          });
          
          // Reset AOS animations when this section comes into view
          if (window.AOS) {
            setTimeout(() => {
              window.AOS.refreshHard(); // Force a full refresh of all animations
            }, 100);
          }
        } else {
          // Reset animations when section is out of view
          controls.start({
            opacity: 0,
            y: 20,
            transition: { duration: 0.3 }
          });
        }
      },
      {
        root: null,
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "-10% 0px" // Trigger slightly before element comes into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      title: "EventHub - Book Your Next Experience",
      description: "A modern full-stack event booking platform with real-time seat selection, Stripe payment integration, and digital QR ticket generation. Features JWT authentication and WebSocket for live updates.",
      image: "/Project/eventhub.png",
      github: "https://github.com/MrDivyanshAgrawal/EventHub",
      demo: "https://eventhub-t9i2.onrender.com/",
      technologies: [
        { name: "MongoDB", icon: "mongodb" },
        { name: "Express", icon: "express" },
        { name: "React", icon: "react" },
        { name: "Node.js", icon: "node" },
        { name: "Socket.IO", icon: "socketio" },
        { name: "Stripe", icon: "stripe" },
        { name: "Tailwind", icon: "tailwind" },
        { name: "Cloudinary", icon: "cloudinary" },
      ]
    },
    {
      title: "MERN-CHAT",
      description: "A comprehensive real-time chat platform using MERN stack with Socket.IO for instant messaging, supporting secure authentication and profile management.",
      image: "/Project/mernchat.png",
      github: "https://github.com/MrDivyanshAgrawal/MERN-CHAT",
      demo: "https://mern-chat-5dg4.onrender.com",
      technologies: [
        { name: "MongoDB", icon: "mongodb" },
        { name: "Express", icon: "express" },
        { name: "React", icon: "react" },
        { name: "Node.js", icon: "node" },
        { name: "Socket.IO", icon: "socketio" },
        { name: "JWT", icon: "jwt" },
      ]
    },
    {
      title: "CartMantra",
      description: "Full-stack e-commerce platform with Stripe payment integration, admin dashboard, and comprehensive analytics for optimized performance.",
      image: "/Project/cartmantra.png",
      github: "https://github.com/MrDivyanshAgrawal/CartMantra",
      demo: "https://cartmantra.onrender.com",
      technologies: [
        { name: "React", icon: "react" },
        { name: "Node.js", icon: "node" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "Stripe", icon: "stripe" },
        { name: "Redis", icon: "redis" },
        { name: "Tailwind", icon: "tailwind" },
      ]
    },
    {
      title: "Text Similarity Recommender",
      description: "Python app using TF-IDF and cosine similarity to analyze and recommend related documents with interactive visualizations.",
      image: "/Project/textsimilarity.png",
      github: "https://github.com/MrDivyanshAgrawal/text-similarity-app",
      demo: "https://app-app-k9kdcnscuhdqvr4lceb2un.streamlit.app/",
      technologies: [
        { name: "Python", icon: "python" },
        { name: "NLTK", icon: "python" },
        { name: "Streamlit", icon: "python" },
      ]
    },
    {
      title: "Currency Converter",
      description: "A responsive currency converter application with real-time exchange rates, built with React and Tailwind CSS. Features swap functionality and modern UI.",
      image: "/currency-converter-preview.png",
      github: "https://github.com/MrDivyanshAgrawal/CurrencyConvertor",
      demo: null,
      technologies: [
        { name: "React", icon: "react" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "REST API", icon: "api" },
        { name: "Vite", icon: "vite" },
      ]
    },
    {
      title: "Express-Emergency-System",
      description: "Web-based system that reduced emergency response times by 25%, recognized among Top 10 teams in HacktheChain 2.0 hackathon.",
      image: "/emergency-response-preview.png",
      github: "https://github.com/MrDivyanshAgrawal/Express-Emergency-System",
      demo: null,
      technologies: [
        { name: "React", icon: "react" },
        { name: "Node.js", icon: "node" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "Socket.IO", icon: "socketio" },
      ]
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="relative py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32">
        {/* Section Title with animation that resets */}
        <motion.div
          key={`title-${animationCount}`} // Force re-render and animation
          variants={titleVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent 
                       bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Featured Projects
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isVisible ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"
          />
          <motion.p
            variants={titleVariants}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Showcasing my journey through full-stack development, from real-time applications 
            to AI-powered solutions
          </motion.p>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div
          key={`grid-${animationCount}`} // Force re-render and animation
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={`project-${index}-${animationCount}`} // Force re-render and animation
              project={project} 
              index={index}
              isVisible={isVisible}
              animationCount={animationCount}
            />
          ))}
        </motion.div>
        
        {/* GitHub Link */}
        <motion.div
          key={`github-${animationCount}`} // Force re-render and animation
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/MrDivyanshAgrawal"
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-3 
                     bg-gradient-to-r from-cyan-500 to-blue-600 
                     text-white rounded-lg font-medium shadow-lg 
                     hover:shadow-cyan-500/25 transition-all duration-300"
          >
            <FiGithub className="text-xl" />
            See More on GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Background decorations with animation */}
      <motion.div 
        key={`bg1-${animationCount}`} // Force re-render
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? 
          { opacity: 0.5, scale: 1, transition: { duration: 1 } } : 
          { opacity: 0, scale: 0.8 }
        }
        className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" 
      />
      <motion.div 
        key={`bg2-${animationCount}`} // Force re-render
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? 
          { opacity: 0.5, scale: 1, transition: { duration: 1, delay: 0.2 } } : 
          { opacity: 0, scale: 0.8 }
        }
        className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" 
      />
    </section>
  );
};

export default Projects;
