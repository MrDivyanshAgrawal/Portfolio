// App.jsx - Updated with better AOS configuration
import { useEffect, useState } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS animation library with improved settings
    AOS.init({
      duration: 800,
      once: false, // Animation occurs every time
      mirror: true, // Whether elements should animate out while scrolling past them
      offset: 50, // Offset (in px) from the original trigger point
      easing: 'ease-in-out',
      delay: 0,
      anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
      disable: false, // Accept 'phone', 'tablet', 'mobile', boolean, expression or function
    });

    // Add a refreshHard method to AOS
    if (window.AOS && !window.AOS.refreshHard) {
      window.AOS.refreshHard = function() {
        // First, remove all aos classes and attributes
        document.querySelectorAll('[data-aos]').forEach(el => {
          el.removeAttribute('data-aos-animate');
          // el.classList.remove('aos-animate', 'aos-init');
        });
        
        // Then refresh
        setTimeout(() => {
          window.AOS.refresh();
        }, 10);
      };
    }

    // Event listener to refresh AOS when user scrolls
    const handleScroll = () => {
      if (window.AOS) {
        window.AOS.refresh();
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative">
      {/* Global animated background */}
      <AnimatedBackground />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
      
      {/* Content */}
      <div className="relative z-10">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
