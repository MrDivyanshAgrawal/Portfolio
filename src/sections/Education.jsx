// src/sections/Education.jsx
import { motion, useAnimation } from 'framer-motion';
import { FiBook, FiAward } from 'react-icons/fi';
import { FaUniversity, FaSchool, FaGraduationCap } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';
import { useState, useRef, useEffect } from 'react';

const Education = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const [animationCount, setAnimationCount] = useState(0);

  // Set up intersection observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state
        setIsVisible(entry.isIntersecting);
        
        if (entry.isIntersecting) {
          // Increment animation counter to force re-animation
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
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const educationData = [
    {
      type: "university",
      institution: "Indian Institute of Information Technology, Kota",
      degree: "Bachelor of Technology in Computer Science",
      duration: "Nov 2022 - Present",
      grade: "CGPA: 8.79 (Till 6th Semester)",
      icon: <FaUniversity className="text-cyan-400 text-xl" />,
      logo: "/Education/college.png", // Updated image path with extension
      highlights: ["Strong foundation in Computer Science", "Active participant in coding competitions"],
      coursework: [
        "Data Structures",
        "Artificial Intelligence", 
        "Database Management",
        "Operating Systems",
        "Computer Networks",
        "Object-Oriented Programming"
      ]
    },
    {
      type: "school",
      institution: "Chhatrapati Shivaji Public School",
      degree: "Senior Secondary (Class XII) - Science Stream",
      duration: "2019 - 2021",
      grade: "Percentage: 85.2%",
      icon: <HiAcademicCap className="text-blue-400 text-xl" />,
      logo: "/Education/School2.png", // Updated image path with extension
      highlights: ["PCM with Physical Education", "Consistent academic performance"],
      subjects: ["Physics", "Chemistry", "Mathematics", "Physical Education", "English"]
    },
    {
      type: "school",
      institution: "St. Norbert Senior Secondary School",
      degree: "Secondary (Class X) - CBSE",
      duration: "2009 - 2019",
      grade: "Percentage: 91%",
      icon: <FaSchool className="text-green-400 text-xl" />,
      logo: "/Education/School1.jpeg", // Updated image path with extension
      highlights: ["10 Years of Academic Excellence", "Strong foundation in academics"],
      achievements: ["Bronze Medal - National Science Olympiad", "Bronze Medal - French Olympiad"]
    }
  ];

  const achievements = [
    {
      title: "LeetCode Achievements",
      description: "Earned 7 LeetCode badges including the prestigious 100 Days Badge, 50 Days Badge, and Contest badges",
      highlight: "7 Badges"
    },
    {
      title: "Google Cloud Arcade",
      description: "Achieved 70+ badges and secured position in the elite Diamond League through consistent performance",
      highlight: "Diamond League"
    },
    {
      title: "Naukri Campus Recognition",
      description: "Acquired 25 badges for comprehensive skill development across various technical domains",
      highlight: "25 Badges"
    },
    {
      title: "Science & Language Olympiads",
      description: "Won Bronze Medals in both National Science Olympiad and French Olympiad",
      highlight: "2 Bronze Medals"
    },
    {
      title: "Academic Excellence",
      description: "Consistent academic performer with 91% in Class X and maintaining 8.79 CGPA in college",
      highlight: "Top Performer"
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32">
        {/* Section Title */}
        <motion.div
          key={`title-${animationCount}`} // Force re-render and animation
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent 
                       bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Education
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isVisible ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
          />
        </motion.div>
        
        {/* Education Timeline - Zigzag Layout */}
        <div className="relative">
          {/* Timeline line for desktop with animation */}
          <motion.div 
            key={`timeline-desktop-${animationCount}`}
            variants={timelineVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 
                     bg-gradient-to-b from-cyan-400/50 via-blue-400/50 to-green-400/50" 
          />
          
          {/* Timeline line for mobile with animation */}
          <motion.div 
            key={`timeline-mobile-${animationCount}`}
            variants={timelineVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="md:hidden absolute left-8 w-0.5 
                     bg-gradient-to-b from-cyan-400/50 via-blue-400/50 to-green-400/50" 
          />
          
          <motion.div
            key={`education-container-${animationCount}`}
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={`education-${index}-${animationCount}`}
                variants={itemVariants}
                className="relative mb-16"
                custom={index}
              >
                <div className={`flex items-center ${
                  index % 2 === 0 
                    ? 'md:flex-row' 
                    : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot with animation */}
                  <motion.div 
                    key={`dot-${index}-${animationCount}`}
                    variants={circleVariants}
                    className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 
                              bg-gray-900 p-3 rounded-full border-4 ${
                                index === 0 ? 'border-cyan-400 shadow-cyan-400/20' : 
                                index === 1 ? 'border-blue-400 shadow-blue-400/20' : 
                                'border-green-400 shadow-green-400/20'
                              } shadow-lg z-10`}
                  >
                    {edu.icon}
                  </motion.div>
                  
                  {/* Content Card */}
                  <div 
                    className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8
                               border border-gray-700 hover:border-cyan-400/50
                               transition-all duration-300 group"
                    >
                      <div className={`${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                        {/* Header with Logo */}
                        <div className="mb-4">
                          <div className={`flex items-start gap-4 mb-3 ${
                            index % 2 === 1 ? 'md:flex-row-reverse' : ''
                          }`}>
                            {/* Institution Logo */}
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3, duration: 0.5 }}
                              className="flex-shrink-0"
                            >
                              <div className="w-16 h-16 bg-gray-700/50 rounded-lg overflow-hidden 
                                            border border-gray-600 flex items-center justify-center">
                                <img 
                                  src={edu.logo} 
                                  alt={`${edu.institution} logo`}
                                  className="w-full h-full object-contain p-2"
                                  onError={(e) => {
                                    // Fallback if logo doesn't load
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = `
                                      <span class="text-gray-500 text-xs text-center">
                                        Logo
                                      </span>
                                    `;
                                  }}
                                />
                              </div>
                            </motion.div>
                            
                            {/* Institution Details */}
                            <motion.div 
                              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4, duration: 0.5 }}
                              className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}
                            >
                              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 
                                           group-hover:text-cyan-400 transition-colors">
                                {edu.institution}
                              </h3>
                              <p className="text-cyan-400 font-medium text-lg">{edu.degree}</p>
                              <div className={`flex items-center gap-2 text-gray-400 text-sm mt-2
                                            ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                                <FiBook className="w-4 h-4" />
                                <span>{edu.duration}</span>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                        
                        {/* Grade with animation */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5, duration: 0.4 }}
                          className={`inline-block px-4 py-2 bg-gray-900/50 rounded-lg mb-4 
                                    border border-gray-700`}
                        >
                          <p className="text-white font-semibold">
                            {edu.grade.split(':')[0]}: 
                            <span className={`ml-2 text-transparent bg-clip-text bg-gradient-to-r 
                                           ${index === 0 ? 'from-cyan-400 to-blue-400' : 
                                             index === 1 ? 'from-blue-400 to-purple-400' : 
                                             'from-green-400 to-emerald-400'}`}>
                              {edu.grade.split(':')[1]}
                            </span>
                          </p>
                        </motion.div>
                        
                        {/* Highlights with staggered animation */}
                        {edu.highlights && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="mb-4"
                          >
                            <h4 className={`text-sm font-semibold text-gray-400 mb-2 ${index%2===1 ? 'md:text-left':''}`}>
                              Key Highlights
                            </h4>
                            <ul className={`space-y-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                              {edu.highlights.map((highlight, i) => (
                                <motion.li 
                                  key={`highlight-${i}-${animationCount}`}
                                  initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                                  className="text-gray-300 text-sm flex items-center gap-2"
                                >
                                  <motion.span 
                                    animate={{ 
                                      scale: [1, 1.3, 1],
                                      color: ["#06b6d4", "#ffffff", "#06b6d4"] 
                                    }}
                                    transition={{ 
                                      duration: 2,
                                      delay: i * 0.5,
                                      repeat: Infinity,
                                      repeatDelay: 5
                                    }}
                                    className={`text-cyan-400 ${index % 2 === 1 ? 'md:text-left' : ''}`}
                                  >
                                    •
                                  </motion.span>
                                  <span>{highlight}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}

                        
                        {/* Coursework for university with grid animation */}
                        {edu.coursework && (
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="mt-6"
                          >
                            <h4 className="font-semibold text-gray-400 text-sm mb-3">Relevant Coursework</h4>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                              {edu.coursework.map((course, i) => (
                                <motion.div
                                  key={`course-${i}-${animationCount}`}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.9 + i * 0.05, duration: 0.4 }}
                                  whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: "rgba(6, 182, 212, 0.1)",
                                    borderColor: "rgba(6, 182, 212, 0.3)"
                                  }}
                                  className="bg-gray-900/50 backdrop-blur-sm rounded-lg px-3 py-2 
                                         text-center border border-gray-700 hover:border-cyan-400/50
                                         transition-all duration-300"
                                >
                                  <span className="text-gray-300 text-xs">{course}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                        
                        {/* Subjects for Class XII with animation */}
                        {edu.subjects && (
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="mt-4"
                          >
                            <h4 className="font-semibold text-gray-400 text-sm mb-2 text-left">Core Subjects</h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.subjects.map((subject, i) => (
                                <motion.span 
                                  key={`subject-${i}-${animationCount}`}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                                  whileHover={{ 
                                    scale: 1.1,
                                    backgroundColor: "rgba(6, 182, 212, 0.1)",
                                    color: "#06b6d4"
                                  }}
                                  className="text-xs px-3 py-1 bg-gray-900/50 
                                           rounded-full text-gray-300 border border-gray-700"
                                >
                                  {subject}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                        
                        {/* Achievements for Class X with animation */}
                        {edu.achievements && (
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="mt-4"
                          >
                            <h4 className="font-semibold text-gray-400 text-sm mb-2">Achievements</h4>
                            <div className="space-y-2">
                              {edu.achievements.map((achievement, i) => (
                                <motion.div 
                                  key={`achievement-${i}-${animationCount}`}
                                  initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                                  className={`flex items-center gap-2 
                                           ${index % 2 === 1 ? 'md:justify-end' : ''}`}
                                >
                                  <motion.div
                                    animate={{ 
                                      rotate: [0, 10, 0, -10, 0],
                                      scale: [1, 1.2, 1]
                                    }}
                                    transition={{ 
                                      duration: 2,
                                      delay: i * 0.5,
                                      repeat: Infinity,
                                      repeatDelay: 4
                                    }}
                                  >
                                    <FiAward className="text-yellow-400 w-4 h-4 flex-shrink-0" />
                                  </motion.div>
                                  <span className="text-gray-300 text-sm">{achievement}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Achievements Section */}
        <motion.div
          key={`achievements-${animationCount}`}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Achievements & Recognition
            </h3>
            <motion.div 
              initial={{ width: 0 }}
              animate={isVisible ? { width: "5rem" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={`achievement-card-${index}-${animationCount}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? 
                  { opacity: 1, y: 0, transition: { delay: 0.8 + index * 0.1, duration: 0.5 } } : 
                  { opacity: 0, y: 20 }
                }
              >
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(6, 182, 212, 0.1)" }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6
                           border border-gray-700 hover:border-cyan-400/50
                           transition-all duration-300 group h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, 0, -10, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        delay: index * 0.5,
                        repeat: Infinity,
                        repeatDelay: 4
                      }}
                    >
                      <FiAward className="text-cyan-400 text-2xl" />
                    </motion.div>
                    <motion.span 
                      animate={{ 
                        scale: [1, 1.1, 1],
                        backgroundColor: ["rgba(6, 182, 212, 0.1)", "rgba(6, 182, 212, 0.2)", "rgba(6, 182, 212, 0.1)"]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }}
                      className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 
                               px-2 py-1 rounded-full"
                    >
                      {achievement.highlight}
                    </motion.span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 
                               transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background decorations with animation */}
      <motion.div 
        key={`bg1-${animationCount}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 0.5, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1 }}
        className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        key={`bg2-${animationCount}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 0.5, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"
      />
    </section>
  );
};

export default Education;
