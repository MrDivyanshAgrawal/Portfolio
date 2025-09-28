import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Navigation links
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Portfolio Info */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl font-bold text-white mb-2">
              Divyansh's Portfolio
            </h2>
            <h3 className="text-lg text-indigo-400 mb-3">
              Full Stack Developer & Problem Solver
            </h3>
            <p className="text-gray-300 mb-4">
              Thank you for visiting my portfolio website.
              Connect with me over socials.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-2xl font-bold text-white mb-4">
              Quick Links
            </h2>
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <div key={link.name} data-aos="fade-up" data-aos-delay={200 + index * 50}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href.substring(1));
                    }}
                    className="text-gray-300 hover:text-white flex items-center gap-2"
                  >
                    <span className="text-indigo-500">❯</span> {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          {/* Column 3: Contact Info */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h2 className="text-2xl font-bold text-white mb-4">
              Contact Info
            </h2>
            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2">
                <FiMail className="text-indigo-500" size={18} />
                <a href="mailto:divyansh1001agrawal@gmail.com" className="text-gray-300 hover:text-white">
                  divyansh1001agrawal@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <FiMapPin className="text-indigo-500" size={18} />
                <span>Indore, India-452001</span>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-2 mt-6">
              {[
                { href: "https://www.linkedin.com/in/DivyanshAgrawal", icon: <FiLinkedin className="text-gray-900" size={18} />, label: "LinkedIn" },
                { href: "https://github.com/MrDivyanshAgrawal", icon: <FiGithub className="text-gray-900" size={18} />, label: "GitHub" },
                { href: "mailto:divyansh1001agrawal@gmail.com", icon: <FiMail className="text-gray-900" size={18} />, label: "Email" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white rounded-full p-2 flex items-center justify-center"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
              <motion.a 
                href="https://instagram.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white rounded-full p-2 flex items-center justify-center"
                aria-label="Instagram"
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-900" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex justify-center items-center">
            Designed with <FiHeart className="text-red-500 mx-2" /> by Divyansh Agrawal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
