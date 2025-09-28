import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { techIcons } from './Icons';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project, index, isVisible, animationCount }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const controls = useAnimation();

  // Reset and restart animations when visibility or animation count changes
  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.5, delay: index * 0.1 }
      });
    } else {
      controls.start({ opacity: 0, y: 30 });
    }
  }, [isVisible, animationCount, controls, index]);

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 }
    }
  };

  // Technology tag animation variants
  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        delay: 0.3 + (i * 0.05), 
        duration: 0.3,
        type: "spring",
        stiffness: 200
      }
    })
  };

  return (
    <motion.div
      ref={cardRef}
      key={`card-${index}-${animationCount}`} // Force re-animation
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        initial={{ boxShadow: "0 0 0 rgba(6, 182, 212, 0)" }}
        animate={isHovered ? 
          { boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)" } : 
          { boxShadow: "0 0 0 rgba(6, 182, 212, 0)" }
        }
        transition={{ duration: 0.3 }}
        className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden
                border border-gray-700 hover:border-cyan-400/50
                transition-all duration-300 h-full"
      >
        {/* Project Image with Error Handling */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <motion.img
            src={project.image || "https://via.placeholder.com/800x400"}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/800x400?text=Project+Preview";
            }}
          />
          
          {/* Overlay with Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent 
                     flex items-end justify-start p-6"
          >
            <div className="flex gap-3">
              {project.github && (
                <motion.a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
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
                  whileHover={{ scale: 1.1, rotate: -5 }}
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
            <motion.h3
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 
                       transition-colors duration-300 line-clamp-1"
            >
              {project.title}
            </motion.h3>
            {/* Live indicator */}
            {project.demo && (
              <motion.span 
                key={`live-${animationCount}`} // Force re-animation
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                  delay: index * 0.1 + 0.4
                }}
                className="flex items-center gap-1 text-xs text-green-400 bg-green-400/10 
                           px-2 py-1 rounded-full whitespace-nowrap"
              >
                <motion.span 
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="w-1.5 h-1.5 bg-green-400 rounded-full" 
                />
                Live
              </motion.span>
            )}
          </div>
          
          <motion.p
            key={`desc-${animationCount}`} // Force re-animation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className="text-gray-300 mb-6 line-clamp-3 text-sm md:text-base"
          >
            {project.description}
          </motion.p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={`tech-${techIndex}-${animationCount}`} // Force re-animation
                custom={techIndex} // Pass index to variants for staggered animation
                variants={tagVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                whileHover={{ 
                  y: -5, 
                  backgroundColor: "rgba(6, 182, 212, 0.1)",
                  borderColor: "rgba(6, 182, 212, 0.5)"
                }}
                className="flex items-center gap-1 bg-gray-900/50 backdrop-blur-sm 
                         px-2.5 py-1.5 rounded-lg text-sm border border-gray-700
                         hover:border-cyan-400/50 transition-all duration-300"
              >
                <motion.span 
                  className="text-lg"
                  animate={isVisible ? { rotate: [0, 15, 0, -15, 0] } : {}}
                  transition={{ 
                    duration: 1, 
                    delay: 0.5 + techIndex * 0.05 + index * 0.02,
                    ease: "easeInOut"
                  }}
                >
                  {techIcons[tech.icon]}
                </motion.span>
                <span className="text-gray-300 text-xs md:text-xs">{tech.name}</span>
              </motion.span>
            ))}
          </div>
        </div>

        {/* Gradient border on hover */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.1 : 0 }}
          className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 
                    rounded-xl pointer-events-none" 
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
