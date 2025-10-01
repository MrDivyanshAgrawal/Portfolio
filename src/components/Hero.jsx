// Hero.jsx - With updated scroll indicator and styling from reference
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaChevronDown, FaHtml5, FaReact } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  // Handle window resize and mouse movement
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleIntersection = (entries) => {
      const [entry] = entries;
      setIsInView(entry.isIntersecting);
    };

    // Set up intersection observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  // Adjust badge positions based on screen size
  const getBadgePositions = () => {
    if (windowWidth < 640) { // small mobile
      return {
        html: { top: "-10px", right: "10px" },
        react: { bottom: "10px", right: "10px" },
        cpp: { top: "50%", left: "-10px" },
        badgeSize: "3rem",
        textSize: "0.55rem"
      };
    } else if (windowWidth < 1024) { // tablet/small laptop
      return {
        html: { top: "-15px", right: "20px" },
        react: { bottom: "20px", right: "20px" },
        cpp: { top: "40%", left: "-15px" },
        badgeSize: "3.5rem",
        textSize: "0.65rem"
      };
    } else { // large screens
      return {
        html: { top: "-20px", right: "30px" },
        react: { bottom: "30px", right: "30px" },
        cpp: { top: "40%", left: "-20px" },
        badgeSize: "4rem",
        textSize: "0.7rem"
      };
    }
  };
  
  const badgePositions = getBadgePositions();

  const socialLinks = [
    {
      icon: <FaLinkedin size={26} />,
      href: 'https://www.linkedin.com/in/divyansh-agrawal-673420257',
      label: 'LinkedIn',
    },
    {
      icon: <FaGithub size={26} />,
      href: 'https://github.com/MrDivyanshAgrawal',
      label: 'GitHub',
    },
    {
      icon: <FaInstagram size={26} />,
      href: 'https://www.instagram.com/divyansh.1004',
      label: 'Instagram',
    },
    {
      icon: <FaEnvelope size={26} />,
      href: 'mailto:divyansh1001agrawal@gmail.com',
      label: 'Email',
    }
  ];

  return (
    <div 
      id="home"
      ref={heroRef}
      className="relative w-full min-h-screen flex items-start justify-center overflow-hidden -mt-26" 
      style={{ 
        backgroundPosition: `calc(50% + ${mousePosition.x / 100}px) calc(50% + ${mousePosition.y / 100}px)` 
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-32 md:mt-36">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Content - Text */}
          <motion.div
            className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              className="inline-block px-4 py-1 bg-cyan-900/30 text-cyan-400 font-medium rounded-full mb-4 border border-cyan-500/20"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              👋 Hey, I'm
            </motion.span>
            
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Divyansh Agrawal
              </span>
            </motion.h1>
            
            <motion.div
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 min-h-[3rem] sm:min-h-[4rem]"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <span className="text-gray-300">I'm a </span>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Competitive Programmer",
                  2000,
                  "DSA Enthusiast",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600"
              />
            </motion.div>

            <motion.p
              className="text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 lg:pr-4 text-sm sm:text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              Computer Science student at IIIT Kota with 8.79/10 CGPA and expertise in
              full stack development. Skilled in React, Node.js, and C++. Ranked in top 6.75% on
              LeetCode with 450+ algorithmic solutions and consistent problem-solving approach.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <motion.button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 
                       text-white rounded-lg font-semibold transition-all duration-300
                       hover:shadow-lg hover:shadow-cyan-500/25 text-sm sm:text-base cursor-pointer"
              >
                Contact Me
              </motion.button>
              
              <motion.a
                href="/Divyansh_Agrawal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent text-cyan-400 rounded-lg 
                       font-semibold transition-all duration-300 border-2 
                       border-cyan-400 hover:bg-cyan-400/10 hover:shadow-lg 
                       hover:shadow-cyan-400/25 text-sm sm:text-base flex items-center"
              >
                <FaEnvelope className="mr-2" /> Resume
              </motion.a>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start mb-8 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    backgroundColor: "rgba(6, 182, 212, 0.1)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.1 + (index * 0.1), duration: 0.5 }}
                  className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg
                         text-gray-400 hover:text-cyan-400 transition-all duration-300
                         border border-gray-700 hover:border-cyan-400/50"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            className="w-full sm:w-3/4 md:w-2/3 lg:w-2/5 order-1 lg:order-2 mx-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative mx-auto max-w-[250px] sm:max-w-xs md:max-w-sm">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-20 -z-10 transform scale-110 animate-pulse"></div>
              
              {/* Main Photo Frame with Skill Badges */}
              <div className="relative rounded-full overflow-visible border-4 border-cyan-500/30 p-2 bg-gray-900/70 shadow-2xl">
                <img 
                  src="/Profile.jpg" 
                  alt="Divyansh Agrawal"
                  className="rounded-full w-full h-auto object-cover aspect-square"
                />

                {/* Decorative Ring */}
                <div className="absolute inset-0 border-8 border-cyan-500/10 rounded-full"></div>

                {/* HTML Badge */}
                <motion.div
                  className="absolute rounded-xl z-20 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden"
                  style={{
                    background: "linear-gradient(120deg, rgba(6, 182, 212, 0.8), rgba(59, 130, 246, 0.8))",
                    boxShadow: "0 4px 15px rgba(6, 182, 212, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    width: badgePositions.badgeSize,
                    height: badgePositions.badgeSize,
                    top: badgePositions.html.top,
                    right: badgePositions.html.right
                  }}
                  animate={{ y: [0, -5, 0], x: [0, 3, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <FaHtml5 className="text-white text-base sm:text-xl mb-1" />
                  <span className="text-white font-medium" style={{ fontSize: badgePositions.textSize }}>HTML</span>
                </motion.div>

                {/* React Badge */}
                <motion.div
                  className="absolute rounded-xl z-20 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden"
                  style={{
                    background: "linear-gradient(120deg, rgba(14, 165, 233, 0.8), rgba(79, 70, 229, 0.8))",
                    boxShadow: "0 4px 15px rgba(14, 165, 233, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    width: badgePositions.badgeSize,
                    height: badgePositions.badgeSize,
                    bottom: badgePositions.react.bottom,
                    right: badgePositions.react.right
                  }}
                  animate={{ y: [0, 5, 0], x: [0, -3, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <FaReact className="text-white text-base sm:text-xl mb-1" />
                  <span className="text-white font-medium" style={{ fontSize: badgePositions.textSize }}>React</span>
                </motion.div>

                {/* C++ Badge */}
                <motion.div
                  className="absolute rounded-xl z-20 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden"
                  style={{
                    background: "linear-gradient(120deg, rgba(2, 132, 199, 0.8), rgba(6, 182, 212, 0.8))",
                    boxShadow: "0 4px 15px rgba(2, 132, 199, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    width: badgePositions.badgeSize,
                    height: badgePositions.badgeSize,
                    top: badgePositions.cpp.top,
                    left: badgePositions.cpp.left,
                    transform: "translateY(-50%)"
                  }}
                  animate={{ y: ["-50%", "calc(-50% + 4px)", "-50%"], x: [0, -3, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4.5,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <SiCplusplus className="text-white text-base sm:text-xl mb-1" />
                  <span className="text-white font-medium" style={{ fontSize: badgePositions.textSize }}>C++</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator - Using reference style */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.3, duration: 0.7 }}
      >
        <a
          href="#about"
          className="flex flex-col items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900/50 border border-gray-700"
          >
            <FaChevronDown />
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
