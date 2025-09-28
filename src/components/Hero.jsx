// Hero.jsx - Fully optimized with faster animations and synchronized timing
import { motion, useAnimation } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useEffect, useState, useRef, cloneElement } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Setup visibility observer for animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when visibility changes
        setIsVisible(entry.isIntersecting);
        
        // Trigger animations when section becomes visible
        if (entry.isIntersecting) {
          // Trigger Framer Motion animations all at once with minimal delay
          controls.start({
            opacity: 1,
            y: 0,
            transition: { 
              duration: 0.4, 
              staggerChildren: 0.02, 
              ease: "easeOut" 
            }
          });
          
          // Reset AOS animations when this section comes into view
          if (window.AOS) {
            window.AOS.refreshHard(); // Force a full refresh of all animations
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
        threshold: 0.2,
        rootMargin: "-10% 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.05,
        duration: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.25,
        staggerChildren: 0.03,
        delayChildren: 0.05
      }
    }
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 350, 
        damping: 15,
        duration: 0.2
      } 
    }
  };

  return (
    <div 
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center py-20 md:py-28 lg:py-0 overflow-hidden"
      style={{ 
        backgroundPosition: `calc(50% + ${mousePosition.x / 100}px) calc(50% + ${mousePosition.y / 100}px)` 
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="flex-1 text-center md:text-left w-full md:w-auto"
          >
            {/* Hey there text */}
            <motion.div
              variants={itemVariants}
              className="text-cyan-400 text-xl sm:text-2xl mb-2 font-light"
            >
              Hey there 👋,
            </motion.div>
            
            {/* Name - adjusted size and line height to avoid cutting */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8"
            >
              <span className="text-white">I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r 
                     from-cyan-400 via-blue-500 to-purple-600 inline-block md:whitespace-nowrap leading-tight">
                Divyansh Agrawal
              </span>
            </motion.h1>
            
            {/* Changing Text */}
            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-300 
                     min-h-[3rem] font-mono"
            >
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
                className="text-cyan-400"
              />
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={socialVariants}
              className="flex gap-4 justify-center md:justify-start mb-8"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  variants={socialIconVariants}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    backgroundColor: "rgba(6, 182, 212, 0.1)",
                    x: mousePosition.x / 100, 
                    y: mousePosition.y / 100
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg
                         text-gray-400 hover:text-cyan-400 transition-all duration-300
                         border border-gray-700 hover:border-cyan-400/50"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
            >
              <Link to="contact" smooth={true} duration={800} offset={-80}>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    x: mousePosition.x / 200, 
                    y: mousePosition.y / 200
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 
                         text-white rounded-lg font-semibold transition-all duration-300
                         hover:shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden
                         group"
                >
                  <span className="relative z-10">Contact Me</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
              
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  x: mousePosition.x / 200, 
                  y: mousePosition.y / 200
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent text-cyan-400 rounded-lg 
                       font-semibold transition-all duration-300 border-2 
                       border-cyan-400 hover:bg-cyan-400/10 hover:shadow-lg 
                       hover:shadow-cyan-400/25"
              >
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              transition: {
                duration: 0.5,
                delay: 0.05
              }
            } : { 
              opacity: 0, 
              scale: 0.8, 
              rotate: -10 
            }}
            className="flex-1 flex justify-center mt-8 md:mt-0"
          >
            <motion.div 
              className="relative group"
              style={{ 
                x: isVisible ? mousePosition.x / 100 : 0,
                y: isVisible ? mousePosition.y / 100 : 0
              }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              {/* Animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-3px] rounded-full bg-gradient-to-r 
                       from-cyan-500 via-transparent to-blue-500"
              />
              
              {/* Glow effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 
                       to-blue-500/20 rounded-full blur-2xl"
              />
              
              <img 
                src="/Profile.jpg" 
                alt="Divyansh Agrawal"
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 
                       lg:w-96 lg:h-96 rounded-full object-cover z-10
                       border-4 border-gray-800"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
