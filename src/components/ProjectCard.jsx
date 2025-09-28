import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { techIcons } from './Icons';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: index * 0.1 }
          });
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "-10% 0px" 
      }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [controls, index]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden
                    border border-gray-700 hover:border-cyan-400/50
                    transition-all duration-300 h-full">
        
        {/* Project Image */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <motion.img
            src={project.image || "https://via.placeholder.com/800x400"}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Overlay with Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent 
                     flex items-end justify-start p-6"
          >
            <div className="flex gap-3">
              {project.github && (
                <motion.a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-900/80 backdrop-blur-sm text-white p-3 rounded-lg 
                           hover:bg-gray-800 transition-colors border border-gray-700
                           hover:border-cyan-400/50"
                  title="View Code"
                >
                  <FiGithub className="w-5 h-5" />
                </motion.a>
              )}
              {project.demo && (
                <motion.a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 
                           rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 
                           transition-all duration-300"
                  title="Live Demo"
                >
                  <FiExternalLink className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 
                         transition-colors duration-300">
              {project.title}
            </h3>
            {/* Live indicator */}
            {project.demo && (
              <span className="flex items-center gap-1 text-xs text-green-400 bg-green-400/10 
                           px-2 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Live
              </span>
            )}
          </div>
          
          <p className="text-gray-300 mb-6 line-clamp-2 text-sm md:text-base">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.1 + techIndex * 0.05 }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm 
                         px-3 py-1.5 rounded-lg text-sm border border-gray-700
                         hover:border-cyan-400/50 transition-all duration-300"
              >
                <span className="text-lg">{techIcons[tech.icon]}</span>
                <span className="text-gray-300 text-xs">{tech.name}</span>
              </motion.span>
            ))}
          </div>
        </div>

        {/* Gradient border on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 
                      opacity-0 group-hover:opacity-10 transition-opacity duration-300 
                      rounded-xl pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
