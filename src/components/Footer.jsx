import { motion, useAnimation } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiMapPin, FiArrowUp, FiInstagram } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);
  const controls = useAnimation();
  
  // Set up intersection observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Navigation links
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { 
      href: "https://www.linkedin.com/in/divyansh-agrawal-673420257", 
      icon: <FiLinkedin size={18} />, 
      label: "LinkedIn",
      color: "bg-gradient-to-br from-cyan-500 to-blue-600"
    },
    { 
      href: "https://github.com/MrDivyanshAgrawal", 
      icon: <FiGithub size={18} />, 
      label: "GitHub",
      color: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    { 
      href: "mailto:divyansh1001agrawal@gmail.com", 
      icon: <FiMail size={18} />, 
      label: "Email",
      color: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    { 
      href: "https://www.instagram.com/divyansh.1004/", 
      icon: <FiInstagram size={18} />, 
      label: "Instagram",
      color: "bg-gradient-to-br from-yellow-500 to-pink-600"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="bg-gray-950 py-16 border-t border-gray-800/30 relative overflow-hidden">
      {/* Background gradient decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      {/* Scroll to top button - fixed position at bottom right */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-full text-white shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} />
      </motion.button>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Column 1: Portfolio Info */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-3 relative inline-block"
            >
              Divyansh's Portfolio
              <motion.div 
                initial={{ width: 0 }}
                animate={isVisible ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 absolute bottom-0 left-0"
              />
            </motion.h2>
            <motion.h3 
              variants={itemVariants} 
              className="text-lg text-cyan-400 mb-3"
            >
              Full Stack Developer & Problem Solver
            </motion.h3>
            <motion.p 
              variants={itemVariants} 
              className="text-gray-300 mb-6"
            >
              Thank you for visiting my portfolio website.
              Connect with me over socials to explore collaboration opportunities or just say hello!
            </motion.p>
            
            {/* Social Media Icons */}
            <motion.div 
              variants={itemVariants}
              className="flex space-x-3 mt-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${social.color} rounded-full p-2.5 flex items-center justify-center text-white shadow-lg hover:shadow-cyan-500/30 backdrop-blur-sm`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Column 2: Quick Links - BACK TO SINGLE COLUMN */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-4 relative inline-block"
            >
              Quick Links
              <motion.div 
                initial={{ width: 0 }}
                animate={isVisible ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 absolute bottom-0 left-0"
              />
            </motion.h2>
            {/* Restored to original single column layout */}
            <motion.div 
              variants={containerVariants}
              className="space-y-3"
            >
              {navLinks.map((link, index) => (
                <motion.div 
                  key={link.name} 
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  custom={index}
                >
                  <Link 
                    to={link.href.substring(1)}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-gray-300 hover:text-cyan-400 flex items-center gap-2 transition-colors cursor-pointer group"
                  >
                    <motion.span 
                      initial={{ color: "#6b7280" }}  
                      animate={{ color: "#06b6d4" }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      ❯
                    </motion.span> 
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Column 3: Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-4 relative inline-block"
            >
              Contact Info
              <motion.div 
                initial={{ width: 0 }}
                animate={isVisible ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 absolute bottom-0 left-0"
              />
            </motion.h2>
            <motion.div 
              variants={containerVariants}
              className="space-y-4 mb-4"
            >
              <motion.div 
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-cyan-400 bg-cyan-400/10 p-2 rounded-full"
                >
                  <FiMail size={18} />
                </motion.div>
                <a 
                  href="mailto:divyansh1001agrawal@gmail.com" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors group-hover:underline"
                >
                  divyansh1001agrawal@gmail.com
                </a>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-cyan-400 bg-cyan-400/10 p-2 rounded-full"
                >
                  <FiMapPin size={18} />
                </motion.div>
                <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                  Indore, Madhya Pradesh, India-452009
                </span>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800/50 mt-6"
            >
              <h4 className="text-white font-medium mb-2">Let's Connect!</h4>
              <p className="text-gray-400 text-sm">
                Feel free to reach out for collaborations or just a friendly hello. I'm open to discussing new projects and opportunities.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Copyright Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="border-t border-gray-800/30 pt-6 flex flex-col sm:flex-row justify-between items-center"
        >
          <motion.p 
            variants={itemVariants} 
            className="text-gray-400 text-sm mb-3 sm:mb-0"
          >
            © {currentYear} Divyansh Agrawal. All rights reserved.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2"
          >
            <motion.p 
              className="text-gray-400 flex items-center text-sm"
              animate={{
                color: ["#9ca3af", "#06b6d4", "#9ca3af"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              Designed with 
              <motion.div 
                animate={{
                  scale: [1, 1.2, 1],
                  color: ["#ef4444", "#ec4899", "#ef4444"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="mx-1"
              >
                <FiHeart className="text-red-500" />
              </motion.div> 
              by Divyansh Agrawal
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
