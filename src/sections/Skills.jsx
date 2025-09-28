import { motion, useAnimation } from 'framer-motion';
import { techIcons } from '../components/Icons';
import { useState, useRef, useEffect } from 'react';
import { SiLeetcode, SiCodechef, SiGeeksforgeeks, SiCodingninjas } from 'react-icons/si';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const scrollRefs = useRef([]);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Setup visibility observer for animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when visibility changes
        setIsVisible(entry.isIntersecting);
        
        // Trigger animations when section becomes visible
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
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
            opacity: 0.5,
            y: 20
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

  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "React.js", icon: "react" },
        { name: "JavaScript", icon: "javascript" },
        { name: "HTML5", icon: "html" },
        { name: "CSS3", icon: "css" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Bootstrap", icon: "bootstrap" },
        { name: "Material UI", icon: "mui" },
        { name: "jQuery", icon: "jquery" },
        { name: "Framer Motion", icon: "framer" },
        { name: "Vite", icon: "vite" },
      ]
    },
    {
      title: "Backend Development",
      color: "from-green-400 to-emerald-500",
      skills: [
        { name: "Node.js", icon: "node" },
        { name: "Express.js", icon: "express" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "MySQL", icon: "mysql" },
        { name: "Socket.IO", icon: "socketio" },
        { name: "Redis", icon: "redis" },
        { name: "JWT", icon: "jwt" },
        { name: "RESTful APIs", icon: "api" },
        { name: "Cloudinary", icon: "cloudinary" },
        { name: "Stripe", icon: "stripe" },
      ]
    },
    {
      title: "Programming Languages",
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "C++", icon: "cpp" },
        { name: "C", icon: "c" },
        { name: "Python", icon: "python" },
        { name: "JavaScript", icon: "javascript" },
        { name: "Data Structures", icon: "dsa" },
        { name: "Algorithms", icon: "algorithm" },
      ]
    },
    {
      title: "Tools & Deployment",
      color: "from-orange-400 to-red-500",
      skills: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "VS Code", icon: "vscode" },
        { name: "Postman", icon: "postman" },
        { name: "Vercel", icon: "vercel" },
        { name: "Render", icon: "render" },
      ]
    },
  ];

  const cpPlatforms = [
    {
      platform: "LeetCode",
      rating: "1830",
      problems: "450+",
      percentile: "Top 6.47%",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-900/20 to-orange-900/20",
      icon: <SiLeetcode className="w-12 h-12" />,
      iconColor: "text-yellow-500",
      progress: 85,
      link: "https://leetcode.com/u/divyansh1004"
    },
    {
      platform: "CodeChef",
      rating: "1500",
      problems: "115+",
      percentile: "3★ Coder",
      gradient: "from-amber-400 to-red-600",
      bgGradient: "from-amber-900/20 to-red-900/20",
      icon: <SiCodechef className="w-12 h-12" />,
      iconColor: "text-amber-600",
      progress: 70,
      link: "https://www.codechef.com/users/divyansh_1001"
    },
    {
      platform: "GeeksforGeeks",
      rating: "1570",
      problems: "200+",
      percentile: "Institute Rank 1",
      gradient: "from-green-400 to-emerald-600",
      bgGradient: "from-green-900/20 to-emerald-900/20",
      icon: <SiGeeksforgeeks className="w-12 h-12" />,
      iconColor: "text-green-600",
      progress: 75,
      link: "https://www.geeksforgeeks.org/user/divyansh10363k"
    },
    {
      platform: "Code360",
      rating: "2158",
      problems: "300+",
      percentile: "Expert Level",
      gradient: "from-purple-400 to-pink-600",
      bgGradient: "from-purple-900/20 to-pink-900/20",
      icon: <SiCodingninjas className="w-12 h-12" />,
      iconColor: "text-purple-500",
      progress: 90,
      link: "https://www.naukri.com/code360/profile/divyansh1001ag"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const scrollLeft = (categoryIndex) => {
    if (scrollRefs.current[categoryIndex]) {
      const scrollAmount = 320; // Scroll by approximately 2.5 cards
      const currentScroll = scrollRefs.current[categoryIndex].scrollLeft;
      
      scrollRefs.current[categoryIndex].scrollTo({
        left: currentScroll - scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = (categoryIndex) => {
    if (scrollRefs.current[categoryIndex]) {
      const scrollAmount = 320;
      const currentScroll = scrollRefs.current[categoryIndex].scrollLeft;
      
      scrollRefs.current[categoryIndex].scrollTo({
        left: currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative py-10 md:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent 
                       bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Technical Skills
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isVisible ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
          />
        </motion.div>
        
        {/* Skills Categories with Horizontal Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? 
                { opacity: 1, y: 0, transition: { delay: categoryIndex * 0.1 }} : 
                { opacity: 0, y: 30 }
              }
            >
              {/* Category Title with margin bottom */}
              <h3 className={`text-xl md:text-2xl font-bold mb-8 text-transparent 
                           bg-clip-text bg-gradient-to-r ${category.color}`}>
                {category.title}
              </h3>
              
              {/* Skills Row Container with proper overflow */}
              <div className="relative group">
                {/* Left Arrow */}
                <motion.button
                  onClick={() => scrollLeft(categoryIndex)}
                  className="absolute -left-5 top-1/2 -translate-y-1/2 z-20
                           w-12 h-12 rounded-full flex items-center justify-center
                           transition-all duration-300 opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Scroll left"
                  animate={isVisible ? { x: 0 } : { x: -20 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} 
                                rounded-full blur-md opacity-60`} />
                  <div className="relative w-full h-full bg-gray-900/80 backdrop-blur-sm 
                                rounded-full flex items-center justify-center
                                border border-gray-700 hover:border-cyan-400/50">
                    <HiChevronLeft className="w-6 h-6 text-white" />
                  </div>
                  <motion.div
                    animate={{
                      x: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.color} 
                                  rounded-full blur-sm`} />
                  </motion.div>
                </motion.button>

                {/* Right Arrow */}
                <motion.button
                  onClick={() => scrollRight(categoryIndex)}
                  className="absolute -right-5 top-1/2 -translate-y-1/2 z-20
                           w-12 h-12 rounded-full flex items-center justify-center
                           transition-all duration-300 opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Scroll right"
                  animate={isVisible ? { x: 0 } : { x: 20 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} 
                                rounded-full blur-md opacity-60`} />
                  <div className="relative w-full h-full bg-gray-900/80 backdrop-blur-sm 
                                rounded-full flex items-center justify-center
                                border border-gray-700 hover:border-cyan-400/50">
                    <HiChevronRight className="w-6 h-6 text-white" />
                  </div>
                  <motion.div
                    animate={{
                      x: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.color} 
                                  rounded-full blur-sm`} />
                  </motion.div>
                </motion.button>

                {/* Scroll Container */}
                <div 
                  ref={el => scrollRefs.current[categoryIndex] = el}
                  className="overflow-x-auto overflow-y-visible scrollbar-hide 
                           scroll-smooth snap-x snap-mandatory"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch'
                  }}
                >
                  <div className="flex gap-4 pb-6 pt-6 px-8 md:px-12">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isVisible ? 
                          { 
                            opacity: 1, 
                            scale: 1, 
                            transition: { 
                              delay: skillIndex * 0.05 + categoryIndex * 0.1,
                              type: "spring",
                              stiffness: 200 
                            } 
                          } : 
                          { opacity: 0, scale: 0.5 }
                        }
                        className="flex-shrink-0 snap-start"
                      >
                        <motion.div
                          whileHover={{ 
                            y: -15,
                            scale: 1.1,
                            transition: { type: "spring", stiffness: 300 }
                          }}
                          onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4
                                   border border-gray-700 hover:border-cyan-400/50
                                   transition-all duration-300 w-32 h-32
                                   flex flex-col items-center justify-center gap-3
                                   hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer"
                          style={{ 
                            zIndex: hoveredSkill === `${categoryIndex}-${skillIndex}` ? 20 : 1,
                            position: 'relative'
                          }}
                        >
                          {/* Glow Effect */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${category.color} 
                                        opacity-0 hover:opacity-20 transition-opacity 
                                        duration-300 rounded-xl blur-xl`} />
                          
                          {/* Icon */}
                          <motion.span 
                            animate={{ 
                              rotate: hoveredSkill === `${categoryIndex}-${skillIndex}` ? 360 : 0,
                              scale: isVisible ? [0.9, 1.1, 1] : 0.5,
                              transition: { duration: 0.8, times: [0, 0.6, 1] }
                            }}
                            className="text-4xl relative z-10"
                          >
                            {techIcons[skill.icon]}
                          </motion.span>
                          
                          {/* Name */}
                          <span className="text-xs font-medium text-gray-300 text-center 
                                       hover:text-white transition-colors relative z-10">
                            {skill.name}
                          </span>
                          
                          {/* Floating particles on hover */}
                          {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                            <>
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-1 h-1 bg-cyan-400 rounded-full pointer-events-none"
                                  initial={{ 
                                    x: 0, 
                                    y: 0,
                                    opacity: 0 
                                  }}
                                  animate={{ 
                                    x: [0, (i - 2) * 20 * Math.random()],
                                    y: [0, -40 * Math.random() - 10],
                                    opacity: [0, 1, 0]
                                  }}
                                  transition={{ 
                                    duration: 1 + Math.random(),
                                    delay: i * 0.1,
                                    repeat: Infinity,
                                    repeatType: "loop"
                                  }}
                                  style={{ zIndex: 30 }}
                                />
                              ))}
                            </>
                          )}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Gradient fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 
                              bg-gradient-to-r from-gray-950 to-transparent 
                              pointer-events-none z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-16 
                              bg-gradient-to-l from-gray-950 to-transparent 
                              pointer-events-none z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Competitive Programming Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isVisible ? 
                { opacity: 1, transition: { delay: 0.6 } } : 
                { opacity: 0 }
              }
            >
              Competitive Programming Journey
            </motion.span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cpPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? 
                  { opacity: 1, y: 0, transition: { delay: 0.6 + index * 0.1 }} : 
                  { opacity: 0, y: 30 }
                }
                whileHover={{ scale: 1.05 }}
              >
                <motion.a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group block cursor-pointer"
                  aria-label={`View profile on ${platform.platform}`}
                >
                  {/* Pulsating background effect */}
                  <motion.div
                    animate={isVisible ? {
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0.7, 0.5],
                    } : { scale: 1, opacity: 0.5 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.2
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${platform.bgGradient} 
                              rounded-2xl blur-xl opacity-50 group-hover:opacity-100 
                              transition-opacity duration-300`} 
                  />
                  
                  <div className="relative bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6
                                border border-gray-700/50 group-hover:border-gray-600
                                transition-all duration-300 h-full">
                    <motion.div
                      animate={isVisible ? { 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0, -5, 0],
                        transition: { 
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3
                        }
                      } : { scale: 1 }}
                      className={`${platform.iconColor} mb-4 flex justify-center`}
                    >
                      {platform.icon}
                    </motion.div>
                    
                    <h4 className={`text-xl font-bold mb-6 text-center text-transparent 
                                 bg-clip-text bg-gradient-to-r ${platform.gradient}`}>
                      {platform.platform}
                    </h4>
                    
                    <div className="text-center mb-4">
                      <motion.p 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={isVisible ? 
                          { scale: 1, opacity: 1, transition: { delay: 0.8 + index * 0.1 } } : 
                          { scale: 0.8, opacity: 0 }
                        }
                        className="text-4xl font-bold text-white mb-1"
                      >
                        {platform.rating}
                      </motion.p>
                      <p className="text-sm text-gray-400 uppercase tracking-wider">Rating</p>
                    </div>
                    
                    <div className="mb-4">
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${platform.progress}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: 1 + index * 0.1,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${platform.gradient}`}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-300">{platform.problems}</span>
                      <span className={`font-medium text-transparent bg-clip-text 
                                     bg-gradient-to-r ${platform.gradient}`}>
                        {platform.percentile}
                      </span>
                    </div>
                    
                    {/* Hover overlay with "View Profile" text */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/80 
                               rounded-2xl flex items-center justify-center backdrop-blur-sm"
                    >
                      <span className={`text-transparent bg-clip-text 
                                    bg-gradient-to-r ${platform.gradient} font-bold text-xl`}>
                        View Profile
                      </span>
                    </motion.div>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Background decorations with animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? 
          { opacity: 0.5, scale: 1, transition: { duration: 1 } } : 
          { opacity: 0, scale: 0.8 }
        }
        className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" 
      />
      <motion.div
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

export default Skills;
