import { motion, useAnimation } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiAward, FiTrendingUp } from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Set up intersection observer to trigger animations every time the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state
        setIsVisible(entry.isIntersecting);
        
        if (entry.isIntersecting) {
          controls.start("visible");
          // Refresh AOS animations
          if (window.AOS) {
            window.AOS.refresh();
          }
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.1 }
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
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const timelineDotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const experiences = [
    {
      title: "HacktheChain 2.0 – IIIT Kota",
      role: "Team Express Emergency Engineers",
      date: "Feb 2024",
      description: [
        "Developed a web-based Emergency Response System that reduced response times by 25%, and was recognized among the Top 10 of 40+ teams for innovation in crisis management.",
        "Optimized system architecture and workflows, enhancing performance by 30%, which improved user navigation and efficiency of emergency handling."
      ],
      skills: ["Web Development", "System Architecture", "UX/UI Design", "Crisis Management"],
      achievements: [
        { icon: <FiAward />, text: "Top 10 out of 40+ teams" },
        { icon: <FiTrendingUp />, text: "25% faster response time" }
      ]
    }
  ];
  
  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent 
                       bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Experience
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isVisible ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
          />
        </motion.div>
        
        <div className="relative">
          {/* Timeline line for desktop - animated */}
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={isVisible ? { height: "100%", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 
                    bg-gradient-to-b from-cyan-400/50 to-transparent hidden lg:block"
          />
          
          {/* Timeline line for mobile - animated */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={isVisible ? { height: "100%", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute left-8 w-0.5 bg-gradient-to-b 
                    from-cyan-400/50 to-transparent lg:hidden"
          />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`relative ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}
              >
                <div className={`lg:grid lg:grid-cols-2 lg:gap-8 
                              ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Timeline dot - with bouncy animation */}
                  <motion.div 
                    variants={timelineDotVariants}
                    className={`absolute top-8 bg-gray-900 p-3 rounded-full 
                                border-4 border-cyan-400 shadow-lg shadow-cyan-400/20
                                ${index % 2 === 0 
                                  ? 'left-4 lg:left-1/2 lg:-translate-x-1/2' 
                                  : 'left-4 lg:left-1/2 lg:-translate-x-1/2'}`}
                  >
                    <FiBriefcase className="text-cyan-400 text-xl" />
                  </motion.div>
                  
                  {/* Content */}
                  <div
                    className={`ml-20 lg:ml-0 ${index % 2 === 0 ? 'lg:text-right' : ''}`}
                  >
                    <motion.div
                      variants={cardVariants}
                      whileHover={{ scale: 1.02 }}
                      className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 lg:p-8
                              border border-gray-700 hover:border-cyan-400/50
                              transition-all duration-300 group"
                    >
                      {/* Hover gradient effect */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 
                                 rounded-xl"
                      />
                      
                      <div className="relative z-10">
                        {/* Header */}
                        <motion.div 
                          variants={itemVariants}
                          className={`flex flex-col ${index % 2 === 0 ? 'lg:items-end' : ''}`}
                        >
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                          <p className="text-cyan-400 font-medium text-lg mb-1">{exp.role}</p>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <FiCalendar />
                            <span>{exp.date}</span>
                          </div>
                        </motion.div>
                        
                        {/* Achievements badges */}
                        {exp.achievements && (
                          <div className={`flex flex-wrap gap-3 mt-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                            {exp.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{ scale: 1.1, y: -3 }}
                                className="flex items-center gap-2 px-3 py-1.5 bg-cyan-400/10 
                                       rounded-full border border-cyan-400/30"
                              >
                                <span className="text-cyan-400">{achievement.icon}</span>
                                <span className="text-sm text-cyan-300">{achievement.text}</span>
                              </motion.div>
                            ))}
                          </div>
                        )}
                        
                        {/* Description */}
                        <div className="mt-6 space-y-3">
                          {exp.description.map((desc, i) => (
                            <motion.p
                              key={i}
                              variants={itemVariants}
                              className="text-gray-300 leading-relaxed"
                            >
                              {desc}
                            </motion.p>
                          ))}
                        </div>
                        
                        {/* Skills */}
                        <div 
                          className={`mt-6 flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}
                        >
                          {exp.skills.map((skill, i) => (
                            <motion.span 
                              key={i}
                              variants={itemVariants}
                              whileHover={{ 
                                scale: 1.05, 
                                color: "rgb(34, 211, 238)", 
                                borderColor: "rgba(34, 211, 238, 0.5)" 
                              }}
                              className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-sm
                                     border border-gray-600 hover:border-cyan-400/50 hover:text-cyan-400
                                     transition-all duration-300"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Empty column for timeline layout */}
                  <div className="hidden lg:block" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Add more experiences prompt */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg">
            More experiences coming soon...
          </p>
        </motion.div>
      </div>
      
      {/* Background decoration with animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.2 }}
        className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 
                w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute bottom-0 left-0 transform -translate-x-1/2 
                w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
      />
    </section>
  );
};

export default Experience;
