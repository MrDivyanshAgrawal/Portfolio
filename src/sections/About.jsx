import { motion, useMotionValue, useInView } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaUserGraduate,
  FaAward,
  FaDownload,
  FaQuoteLeft,
} from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiGithub } from "react-icons/si";
import { useState, useRef } from "react";

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Separate refs for different sections to control their individual animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const infoRef = useRef(null);
  const quoteRef = useRef(null);
  const ctaRef = useRef(null);
  const profileRef = useRef(null);
  const statsRef = useRef(null);
  
  // Check if each section is in view
  const isSectionInView = useInView(sectionRef, { once: false, margin: "-100px 0px" });
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.3 });
  const isInfoInView = useInView(infoRef, { once: false, amount: 0.3 });
  const isQuoteInView = useInView(quoteRef, { once: false, amount: 0.5 });
  const isCtaInView = useInView(ctaRef, { once: false, amount: 0.5 });
  const isProfileInView = useInView(profileRef, { once: false, amount: 0.5 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.2 });

  const stats = [
    {
      icon: <FaCode className="w-8 h-8" />,
      count: "450+",
      label: "Problems Solved",
      description: "on LeetCode, CodeChef, and other platforms",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      count: "4+",
      label: "Major Projects",
      description: "including MERN stack applications",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: <FaUserGraduate className="w-8 h-8" />,
      count: "8.79",
      label: "CGPA",
      description: "at IIIT Kota (Till 6th Semester)",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      count: "Top 10",
      label: "Hackathon Team",
      description: "in HacktheChain 2.0",
      color: "from-orange-400 to-red-500",
    },
  ];

  // Platform links with larger icons
  const platformLinks = [
    {
      icon: <SiLeetcode size={26} />,
      href: "https://leetcode.com/u/divyansh1004",
      label: "LeetCode",
    },
    {
      icon: <SiCodechef size={26} />,
      href: "https://www.codechef.com/users/divyansh_1001",
      label: "CodeChef",
    },
    {
      icon: <SiGithub size={26} />,
      href: "https://github.com/MrDivyanshAgrawal",
      label: "GitHub",
    },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-10 md:py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent 
                     bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Profile Image for Mobile */}
            <div className="lg:hidden mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isSectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative w-48 h-48 mx-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-50" />
                <img
                  src="/Profile/ProfileImage-2.jpg"
                  alt="Divyansh Agrawal"
                  className="relative w-full h-full rounded-full object-cover border-4 border-gray-800"
                />
              </motion.div>
            </div>

            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-white"
            >
              Full Stack Developer &
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r 
                         from-cyan-400 to-blue-500"
              >
                {" "}
                Problem Solver
              </span>
            </motion.h3>

            <div ref={infoRef} className="space-y-4 text-gray-300 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                I'm a Computer Science student at{" "}
                <span className="text-cyan-400 font-medium">
                  Indian Institute of Information Technology Kota
                </span>
                , passionate about creating innovative web solutions and solving
                complex problems through code.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                With expertise in the{" "}
                <span className="text-cyan-400 font-medium">MERN stack</span>{" "}
                and a strong foundation in data structures and algorithms, I
                strive to build applications that are both technically robust
                and user-friendly.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                My passion for competitive programming has helped me develop
                strong problem-solving skills, placing me in the{" "}
                <span className="text-cyan-400 font-medium">
                  top 6.47% globally on LeetCode
                </span>
                .
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                When I'm not coding, I'm exploring new technologies,
                contributing to open source projects, and looking for ways to
                enhance my technical expertise to deliver better solutions.
              </motion.p>
            </div>

            {/* Quote or Personal Touch */}
            <div ref={quoteRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isQuoteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7 }}
                className="relative mt-8 p-6 bg-gray-800/30 backdrop-blur-sm rounded-lg 
                       border border-gray-700/50"
              >
                <FaQuoteLeft className="absolute top-4 left-4 text-cyan-400/20 text-3xl" />
                <p className="text-gray-300 italic pl-8">
                  "I believe in writing clean, efficient code that not only solves
                  problems but creates delightful user experiences."
                </p>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div ref={ctaRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.a
                  href="/Divyansh_Agrawal_Resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 
                         bg-gradient-to-r from-cyan-500 to-blue-600 
                         text-white rounded-lg font-medium shadow-lg 
                         hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  <FaDownload size={18} /> Download Resume
                </motion.a>

                <div className="flex gap-3">
                  {platformLinks.map((platform, index) => (
                    <motion.a
                      key={index}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg
                             text-gray-400 hover:text-cyan-400 transition-all duration-300
                             border border-gray-700 hover:border-cyan-400/50"
                      aria-label={platform.label}
                    >
                      {platform.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Stats & Profile */}
          <div className="space-y-6">
            {/* Profile Image for Desktop */}
            <div ref={profileRef} className="hidden lg:block mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isProfileInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.7 }}
                className="relative w-64 h-64 mx-auto"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-30"
                />
                <img
                  src="/Profile/ProfileImage-2.jpg"
                  alt="Divyansh Agrawal"
                  className="relative w-full h-full rounded-full object-cover border-4 border-gray-800"
                />
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group h-full"
                >
                  <motion.div
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      mouseX.set(e.clientX - rect.left);
                      mouseY.set(e.clientY - rect.top);
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6
                        border border-gray-700 hover:border-cyan-400/50
                        transition-all duration-300 overflow-hidden
                        h-full min-h-[200px] flex flex-col`}
                    >
                      {/* Gradient overlay on hover */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background:
                            hoveredCard === index
                              ? `radial-gradient(circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
                              : "none",
                        }}
                      />

                      <div
                        className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-3`}
                      >
                        <div className="w-10 h-10">
                          {stat.icon}
                        </div>
                      </div>

                      <motion.h3
                        className="text-3xl font-bold text-white mb-1"
                        animate={{ scale: hoveredCard === index ? 1.05 : 1 }}
                      >
                        {stat.count}
                      </motion.h3>

                      <p
                        className={`text-lg font-semibold text-transparent bg-clip-text 
                        bg-gradient-to-r ${stat.color} mb-2`}
                      >
                        {stat.label}
                      </p>

                      <p className="text-gray-400 text-sm flex-grow">
                        {stat.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl -z-10"
      />
    </section>
  );
};

export default About;
