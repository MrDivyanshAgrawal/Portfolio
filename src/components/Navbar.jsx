// Navbar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [navbarHeight, setNavbarHeight] = useState(0);
  
  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    // Handle navbar height for scroll offset calculation
    const updateNavHeight = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };
    
    // Handle scroll detection
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      updateNavHeight(); // Update height when navbar changes (on scroll)
    };

    // Initial height calculation
    updateNavHeight();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateNavHeight);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateNavHeight);
    };
  }, [scrolled]);

  // Calculate optimal offset value - adjusted to better position content under navbar
  const scrollOffset = -(navbarHeight + 20); // Adjusted for better positioning

  return (
    <>
      <motion.nav
        id="navbar" // Add ID for height calculation
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-800/90 backdrop-blur-xl shadow-lg shadow-cyan-500/10 py-3 border-b border-slate-700/50' 
            : 'bg-slate-800/50 backdrop-blur-md py-5'
        }`}
        style={{ position: 'fixed', top: 0 }} // Explicitly set position styles
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={0} // Set to 0 for home section
              duration={800}
              className="cursor-pointer flex items-center space-x-3 group"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="/Logo.png" 
                alt="Divyansh Agrawal Logo" 
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover 
                         ring-2 ring-cyan-400/20 group-hover:ring-cyan-400/40 
                         transition-all duration-300"
              />
              
              <h1 className="hidden sm:block text-lg md:text-xl font-bold text-transparent 
                           bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Divyansh Agrawal
              </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={item.to === 'home' ? 0 : scrollOffset} // Special handling for home
                  duration={800} // Increased for smoother scrolling
                  onSetActive={() => setActiveSection(item.to)}
                  className={`text-sm lg:text-base font-medium cursor-pointer 
                            transition-all duration-300 relative py-2
                            ${activeSection === item.to 
                              ? 'text-cyan-400' 
                              : 'text-gray-300 hover:text-white'
                            }`}
                >
                  {item.name}
                  {activeSection === item.to && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 
                               bg-gradient-to-r from-cyan-400 to-blue-400"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed right-0 top-0 h-full w-72 bg-slate-800/95 
                       backdrop-blur-lg z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-6 
                              border-b border-slate-700/50">
                  <h2 className="text-xl font-semibold text-transparent bg-clip-text 
                               bg-gradient-to-r from-cyan-400 to-blue-400">
                    Menu
                  </h2>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <FiX size={24} />
                  </motion.button>
                </div>
                
                <nav className="flex-1 px-6 py-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={item.to === 'home' ? 0 : scrollOffset} // Special handling for home
                        duration={800}
                        className="block text-gray-300 hover:text-cyan-400 py-3 
                                 text-lg font-medium cursor-pointer transition-all 
                                 duration-300 hover:translate-x-2"
                        onClick={() => setIsOpen(false)}
                        onSetActive={() => setActiveSection(item.to)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
