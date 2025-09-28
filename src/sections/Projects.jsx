// src/sections/Projects.jsx
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "EventHub - Book Your Next Experience",
      description: "A modern full-stack event booking platform with real-time seat selection, Stripe payment integration, and digital QR ticket generation. Features JWT authentication and WebSocket for live updates.",
      image: "/eventhub-preview.png",
      github: "https://github.com/MrDivyanshAgrawal/EventHub",
      demo: "https://eventhub-t9i2.onrender.com",
      technologies: [
        { name: "MongoDB", icon: "mongodb" },
        { name: "Express", icon: "express" },
        { name: "React", icon: "react" },
        { name: "Node.js", icon: "node" },
        { name: "Socket.IO", icon: "socketio" },
        { name: "Stripe", icon: "stripe" },
        { name: "Tailwind", icon: "tailwind" },
        { name: "Cloudinary", icon: "cloudinary" },
      ]
    },
    {
      title: "MERN-CHAT",
      description: "A comprehensive real-time chat platform using MERN stack with Socket.IO for instant messaging, supporting secure authentication and profile management.",
      image: "/mern-chat-preview.png",
      github: "https://github.com/MrDivyanshAgrawal/mern-chat",
      demo: "https://mern-chat-app.onrender.com",
      technologies: [
        { name: "MongoDB", icon: "mongodb" },
        { name: "Express", icon: "express" },
        { name: "React", icon: "react" },
        { name: "Node.js", icon: "node" },
        { name: "Socket.IO", icon: "socketio" },
        { name: "JWT", icon: "jwt" },
      ]
    },
    {
      title: "CartMantra",
      description: "Full-stack e-commerce platform with Stripe payment integration, admin dashboard, and comprehensive analytics for optimized performance.",
      image: "/cartmantra-preview.png",
      github: "https://github.com/MrDivyanshAgrawal/cartmantra",
      demo: "https://cartmantra.onrender.com",
      technologies: [
        { name: "React", icon: "react" },
        { name: "Node.js", icon: "node" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "Stripe", icon: "stripe" },
        { name: "Redis", icon: "redis" },
        { name: "Tailwind", icon: "tailwind" },
      ]
    },
    {
      title: "Text Similarity Recommender",
      description: "Python app using TF-IDF and cosine similarity to analyze and recommend related documents with interactive visualizations.",
      image: "/text-similarity-preview.png",
      github: "https://github.com/MrDivyanshAgrawal/text-similarity",
      demo: "https://text-similarity.streamlit.app",
      technologies: [
        { name: "Python", icon: "python" },
        { name: "NLTK", icon: "python" },
        { name: "Streamlit", icon: "python" },
      ]
    },
    {
      title: "Currency Converter",
      description: "A responsive currency converter application with real-time exchange rates, built with React and Tailwind CSS. Features swap functionality and modern UI.",
      image: "/currency-converter-preview.png",
      github: "https://github.com/MrDivyanshAgrawal/currency-converter",
      demo: null,
      technologies: [
        { name: "React", icon: "react" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "REST API", icon: "api" },
        { name: "Vite", icon: "vite" },
      ]
    },
    {
      title: "Emergency Response System",
      description: "Web-based system that reduced emergency response times by 25%, recognized among Top 10 teams in HacktheChain 2.0 hackathon.",
      image: "/emergency-response-preview.png",
      github: "https://github.com/MrDivyanshAgrawal/emergency-response",
      demo: null,
      technologies: [
        { name: "React", icon: "react" },
        { name: "Node.js", icon: "node" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "Socket.IO", icon: "socketio" },
      ]
    }
  ];

  return (
    <section id="projects" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32">
        {/* Section Title */}
        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent 
                       bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my journey through full-stack development, from real-time applications 
            to AI-powered solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
        
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center mt-16"
        >
          <a
            href="https://github.com/MrDivyanshAgrawal"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 
                     bg-gradient-to-r from-cyan-500 to-blue-600 
                     text-white rounded-lg font-medium shadow-lg 
                     hover:shadow-cyan-500/25 transition-all duration-300
                     hover:scale-105"
          >
            <FiGithub className="text-xl" />
            See More on GitHub
          </a>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Projects;
