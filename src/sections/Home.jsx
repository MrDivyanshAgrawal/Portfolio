import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-16 py-16">
        <Hero />
      </div>
    </section>
  );
};

export default Home;
