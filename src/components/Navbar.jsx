import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [navbarHeight, setNavbarHeight] = useState(0);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
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
            ? 'bg-gray-900/90 backdrop-blur-md shadow-lg py-2 sm:py-3' 
            : 'bg-transparent py-3 sm:py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex justify-between items-center">
          {/* Logo Section */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={0} // Set to 0 for home section
            duration={800}
            className="cursor-pointer flex items-center group"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 mr-2 overflow-hidden rounded-full border-2 border-cyan-500/30 group-hover:border-cyan-500 transition-colors duration-300">
              <motion.img
                whileHover={{ scale: 1.15 }}
                src="/Logo3.jpg"
                alt="Divyansh Agrawal Logo"
                className="w-full h-full object-cover"
                transition={{ duration: 0.5 }}
              />
            </div>
            <div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 text-xl sm:text-2xl font-bold">
                Divyansh
              </span>
              <span className="text-white text-xl sm:text-2xl font-bold">Agrawal</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                spy={true}
                smooth={true}
                offset={item.to === 'home' ? 0 : scrollOffset} // Special handling for home
                duration={800} // Increased for smoother scrolling
                onSetActive={() => setActiveSection(item.to)}
                className={`text-sm lg:text-base font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-400 ${
                  activeSection === item.to
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              type="button"
              className="flex items-center justify-center h-10 w-10 rounded-lg bg-gray-800/70 text-gray-300 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Right side slide-in panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay that covers only part of the screen */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              style={{ backdropFilter: 'blur(4px)' }}
            />
            
            {/* Right side slide-in menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed right-0 top-0 h-full w-[50%] bg-gray-900/95 backdrop-blur-lg z-50 md:hidden shadow-xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-6 border-b border-gray-800/50">
                  <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    Menu
                  </h2>
                  <motion.button
                    className="flex items-center justify-center h-10 w-10 rounded-lg bg-gray-800/70 text-gray-300 focus:outline-none"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiX size={20} />
                  </motion.button>
                </div>
                
                <div className="flex-1 px-6 py-6 overflow-y-auto">
                  <div className="flex flex-col space-y-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.07 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          to={item.to}
                          spy={true}
                          smooth={true}
                          offset={item.to === 'home' ? 0 : scrollOffset}
                          duration={800}
                          className={`block py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 ${
                            activeSection === item.to
                              ? 'text-cyan-400 bg-cyan-500/10'
                              : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                          }`}
                          onClick={() => setIsOpen(false)}
                          onSetActive={() => setActiveSection(item.to)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Bottom hint with down arrow */}
                <div className="p-6 border-t border-gray-800/50">
                  <motion.div 
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-gray-500 text-sm mb-2">Tap to navigate</p>
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FiChevronDown className="text-cyan-400" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
