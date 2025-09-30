import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import AnimatedBackground from './components/AnimatedBackground';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative">
      <AnimatedBackground />
      <Navbar />
      <main className="overflow-hidden">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
