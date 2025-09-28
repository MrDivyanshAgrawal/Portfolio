// src/sections/Education.jsx
import { motion } from 'framer-motion';
import { FiBook, FiAward } from 'react-icons/fi';
import { FaUniversity, FaSchool, FaGraduationCap } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';

const Education = () => {
  const educationData = [
    {
      type: "university",
      institution: "Indian Institute of Information Technology, Kota",
      degree: "Bachelor of Technology in Computer Science",
      duration: "Nov 2022 - Present",
      grade: "CGPA: 8.79 (Till 6th Semester)",
      icon: <FaUniversity className="text-cyan-400 text-xl" />,
      logo: "/Education/College", // Add your logo path here
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
      logo: "/Education/School2", // Add your logo path here
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
      logo: "/Education/School1", // Add your logo path here
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
    <section id="education" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32">
        {/* Section Title */}
        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent 
                       bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </div>
        
        {/* Education Timeline - Zigzag Layout */}
        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full 
                        bg-gradient-to-b from-cyan-400/50 via-blue-400/50 to-green-400/50" />
          
          {/* Timeline line for mobile */}
          <div className="md:hidden absolute left-8 w-0.5 h-full 
                        bg-gradient-to-b from-cyan-400/50 via-blue-400/50 to-green-400/50" />
          
          {educationData.map((edu, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
              className="relative mb-16"
            >
              <div className={`flex items-center ${
                index % 2 === 0 
                  ? 'md:flex-row' 
                  : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 
                              bg-gray-900 p-3 rounded-full border-4 ${
                                index === 0 ? 'border-cyan-400 shadow-cyan-400/20' : 
                                index === 1 ? 'border-blue-400 shadow-blue-400/20' : 
                                'border-green-400 shadow-green-400/20'
                              } shadow-lg z-10`}>
                  {edu.icon}
                </div>
                
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
                          <div className="flex-shrink-0">
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
                          </div>
                          
                          {/* Institution Details */}
                          <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
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
                          </div>
                        </div>
                      </div>
                      
                      {/* Grade */}
                      <div className={`inline-block px-4 py-2 bg-gray-900/50 rounded-lg mb-4 
                                    border border-gray-700`}>
                        <p className="text-white font-semibold">
                          {edu.grade.split(':')[0]}: 
                          <span className={`ml-2 text-transparent bg-clip-text bg-gradient-to-r 
                                         ${index === 0 ? 'from-cyan-400 to-blue-400' : 
                                           index === 1 ? 'from-blue-400 to-purple-400' : 
                                           'from-green-400 to-emerald-400'}`}>
                            {edu.grade.split(':')[1]}
                          </span>
                        </p>
                      </div>
                      
                      {/* Highlights */}
                      {edu.highlights && (
                        <div className="mb-4">
                          <h4 className={`text-sm font-semibold text-gray-400 mb-2 ${index%2===1 ? 'md:text-left':''}`}>Key Highlights</h4>
                          <ul className={`space-y-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                            {edu.highlights.map((highlight, i) => (
                              <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                                <span className={`text-cyan-400 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>•</span>
                                <span className={index % 2 === 1 ? 'md:order-1' : ''}>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      
                      {/* Coursework for university */}
                      {edu.coursework && (
                        <div className="mt-6">
                          <h4 className="font-semibold text-gray-400 text-sm mb-3">Relevant Coursework</h4>
                          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                            {edu.coursework.map((course, i) => (
                              <div
                                key={i}
                                data-aos="zoom-in"
                                data-aos-delay={i * 50}
                                className="bg-gray-900/50 backdrop-blur-sm rounded-lg px-3 py-2 
                                       text-center border border-gray-700 hover:border-cyan-400/50
                                       transition-all duration-300"
                              >
                                <span className="text-gray-300 text-xs">{course}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Subjects for Class XII */}
                      {edu.subjects && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-gray-400 text-sm mb-2">Core Subjects</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.subjects.map((subject, i) => (
                              <span key={i} className="text-xs px-3 py-1 bg-gray-900/50 
                                                   rounded-full text-gray-300 border border-gray-700">
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Achievements for Class X */}
                      {edu.achievements && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-gray-400 text-sm mb-2">Achievements</h4>
                          <div className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
                              <div key={i} className={`flex items-center gap-2 
                                                   ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                                <FiAward className="text-yellow-400 w-4 h-4 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Achievements Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Achievements & Recognition
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6
                           border border-gray-700 hover:border-cyan-400/50
                           transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <FiAward className="text-cyan-400 text-2xl" />
                    <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 
                                 px-2 py-1 rounded-full">
                      {achievement.highlight}
                    </span>
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

      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Education;
