import { motion, useInView } from 'framer-motion';
import { FiBook, FiAward } from 'react-icons/fi';
import { FaUniversity, FaSchool, FaGraduationCap } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';
import { useRef } from 'react';

const Education = () => {
  // Create refs for different sections
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);
  const achievementsSectionRef = useRef(null);
  
  // Create arrays for refs before using them
  const educationRefs = useRef(Array(3).fill().map(() => useRef(null)));
  const achievementRefs = useRef(Array(5).fill().map(() => useRef(null)));
  
  // Use inView to check visibility
  const isSectionInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });
  const isTimelineInView = useInView(timelineRef, { once: false, amount: 0.2 });
  const isAchievementsInView = useInView(achievementsSectionRef, { once: false, amount: 0.2 });
  
  // Check if individual education items are in view - safely
  const educationInView = educationRefs.current.map(ref => 
    useInView(ref, { once: false, amount: 0.2 })
  );
  
  // Check if achievement items are in view - safely
  const achievementInView = achievementRefs.current.map(ref => 
    useInView(ref, { once: false, amount: 0.2 })
  );

  // Animation variants
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
      logo: "/Education/college.png",
      highlights: ["Strong foundation in Computer Science", "Active participant in coding competitions"],
      coursework: [
        "Data Structures and Algorithms (DSA)",
        "Artificial Intelligence (AI)", 
        "Database Management System (DBMS)",
        "Operating Systems (OS)",
        "Computer Networks (CN)",
        "Object-Oriented Programming (OOPS)",
        "Machine Learning (ML)",
        "Web Development (Web D)",
        "Software Engineering (SE)",
      ]
    },
    {
      type: "school",
      institution: "Chhatrapati Shivaji Public School",
      degree: "Senior Secondary (Class XII) - Science Stream",
      duration: "2019 - 2021",
      grade: "Percentage: 85.2%",
      icon: <HiAcademicCap className="text-blue-400 text-xl" />,
      logo: "/Education/School2.png",
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
      logo: "/Education/School1.jpeg",
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
        <div ref={titleRef} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent 
                     bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
          >
            Education
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isTitleInView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
          />
        </div>
        
        {/* Education Timeline - Zigzag Layout */}
        <div ref={timelineRef} className="relative">
          {/* Timeline line for desktop with animation */}
          <motion.div 
            variants={timelineVariants}
            initial="hidden"
            animate={isTimelineInView ? "visible" : "hidden"}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 
                     bg-gradient-to-b from-cyan-400/50 via-blue-400/50 to-green-400/50" 
          />
          
          {/* Timeline line for mobile with animation */}
          <motion.div 
            variants={timelineVariants}
            initial="hidden"
            animate={isTimelineInView ? "visible" : "hidden"}
            className="md:hidden absolute left-8 w-0.5 
                     bg-gradient-to-b from-cyan-400/50 via-blue-400/50 to-green-400/50" 
          />
          
          <div>
            {educationData.map((edu, index) => (
              <div
                key={`education-${index}`}
                ref={educationRefs.current[index]}
                className="relative mb-16"
              >
                <div className={`flex items-center ${
                  index % 2 === 0 
                    ? 'md:flex-row' 
                    : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot with animation */}
                  <motion.div 
                    variants={circleVariants}
                    initial="hidden"
                    animate={educationInView[index] ? "visible" : "hidden"}
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
                      initial={{ opacity: 0, y: 30 }}
                      animate={educationInView[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6 }}
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
                              animate={educationInView[index] ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
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
                              animate={educationInView[index] ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
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
                          animate={educationInView[index] ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
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
                            animate={educationInView[index] ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="mb-4"
                          >
                            <h4 className={`text-sm font-semibold text-gray-400 mb-2 ${index%2===1 ? 'md:text-left':''}`}>
                              Key Highlights
                            </h4>
                            <ul className={`space-y-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                              {edu.highlights.map((highlight, i) => (
                                <motion.li 
                                  key={`highlight-${i}`}
                                  initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                                  animate={educationInView[index] ? 
                                    { opacity: 1, x: 0, transition: { delay: 0.7 + i * 0.1, duration: 0.4 } } : 
                                    { opacity: 0, x: index % 2 === 0 ? -10 : 10 }
                                  }
                                  className="text-gray-300 text-sm flex items-center gap-2"
                                >
                                  <motion.span 
                                    animate={educationInView[index] ? { 
                                      scale: [1, 1.3, 1],
                                      color: ["#06b6d4", "#ffffff", "#06b6d4"] 
                                    } : {}}
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
                            animate={educationInView[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="mt-6"
                          >
                            <h4 className="font-semibold text-gray-400 text-sm mb-3">Relevant Coursework</h4>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                              {edu.coursework.map((course, i) => (
                                <motion.div
                                  key={`course-${i}`}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={educationInView[index] ? 
                                    { opacity: 1, scale: 1, transition: { delay: 0.9 + i * 0.05, duration: 0.4 } } : 
                                    { opacity: 0, scale: 0.8 }
                                  }
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
                            animate={educationInView[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="mt-4"
                          >
                            <h4 className="font-semibold text-gray-400 text-sm mb-2 text-left">Core Subjects</h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.subjects.map((subject, i) => (
                                <motion.span 
                                  key={`subject-${i}`}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={educationInView[index] ? 
                                    { opacity: 1, scale: 1, transition: { delay: 0.9 + i * 0.1, duration: 0.4 } } : 
                                    { opacity: 0, scale: 0.8 }
                                  }
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
                            animate={educationInView[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="mt-4"
                          >
                            <h4 className="font-semibold text-gray-400 text-sm mb-2">Achievements</h4>
                            <div className="space-y-2">
                              {edu.achievements.map((achievement, i) => (
                                <motion.div 
                                  key={`achievement-${i}`}
                                  initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                                  animate={educationInView[index] ? 
                                    { opacity: 1, x: 0, transition: { delay: 0.9 + i * 0.1, duration: 0.4 } } : 
                                    { opacity: 0, x: index % 2 === 0 ? -10 : 10 }
                                  }
                                  className={`flex items-center gap-2 
                                           ${index % 2 === 1 ? 'md:justify-end' : ''}`}
                                >
                                  <motion.div
                                    animate={educationInView[index] ? { 
                                      rotate: [0, 10, 0, -10, 0],
                                      scale: [1, 1.2, 1]
                                    } : {}}
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
              </div>
            ))}
          </div>
        </div>
        
        {/* Achievements Section */}
        <div ref={achievementsSectionRef} className="mt-20">
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={isAchievementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-white mb-2"
            >
              Achievements & Recognition
            </motion.h3>
            <motion.div 
              initial={{ width: 0 }}
              animate={isAchievementsInView ? { width: "5rem" } : { width: 0 }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={`achievement-card-${index}`}
                ref={achievementRefs.current[index]}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={achievementInView[index] ? 
                    { opacity: 1, y: 0, transition: { duration: 0.5 } } : 
                    { opacity: 0, y: 20 }
                  }
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(6, 182, 212, 0.1)" }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6
                           border border-gray-700 hover:border-cyan-400/50
                           transition-all duration-300 group h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      animate={achievementInView[index] ? { 
                        rotate: [0, 10, 0, -10, 0],
                        scale: [1, 1.2, 1]
                      } : {}}
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
                      animate={achievementInView[index] ? { 
                        scale: [1, 1.1, 1],
                        backgroundColor: ["rgba(6, 182, 212, 0.1)", "rgba(6, 182, 212, 0.2)", "rgba(6, 182, 212, 0.1)"]
                      } : {}}
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
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isSectionInView ? { opacity: 0.5, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1 }}
        className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isSectionInView ? { opacity: 0.5, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"
      />
    </section>
  );
};

export default Education;
