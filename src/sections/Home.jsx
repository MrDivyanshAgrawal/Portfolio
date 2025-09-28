import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Refresh AOS animations when Home section is visited
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-0">
      {/* Remove default padding from home section since navbar is included */}
      <Navbar />
      <Hero />
    </section>
  );
};

export default Home;
