// src/sections/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMapPin, FiMail, FiPhone, FiGithub, FiLinkedin, FiArrowRight, FiCheck, FiExternalLink } from 'react-icons/fi';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FiMapPin size={24} />,
      title: "Location",
      content: "Indore, Madhya Pradesh, India",
      color: "cyan"
    },
    {
      icon: <FiMail size={24} />,
      title: "Email",
      content: "divyansh1001agrawal@gmail.com",
      href: "mailto:divyansh1001agrawal@gmail.com",
      color: "blue"
    },
    {
      icon: <FiPhone size={24} />,
      title: "Phone",
      content: "+91 9301956873",
      href: "tel:+919301956873",
      color: "purple"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub size={22} />,
      href: "https://github.com/MrDivyanshAgrawal",
      color: "hover:bg-gray-700"
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin size={22} />,
      href: "https://linkedin.com/in/DivyanshAgrawal",
      color: "hover:bg-blue-700"
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={22} />,
      href: "https://twitter.com/yourusername",
      color: "hover:bg-sky-600"
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={22} />,
      href: "https://instagram.com/yourusername",
      color: "hover:bg-pink-600"
    }
  ];
  
  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32">
        {/* Section Title */}
        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent 
                     bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hello? Feel free to reach out!
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Card */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-700 
                       hover:border-cyan-400/50 transition-all duration-300 h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-10">Let's Connect</h3>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={200 + index * 100}
                    className="group"
                  >
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-5"
                    >
                      <div className={`p-4 rounded-xl ${
                        info.color === 'cyan' ? 'bg-cyan-400/10 text-cyan-400' :
                        info.color === 'blue' ? 'bg-blue-400/10 text-blue-400' :
                        'bg-purple-400/10 text-purple-400'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-2 text-lg">{info.title}</h4>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group/link"
                          >
                            <span className="break-all">{info.content}</span>
                            <FiExternalLink className="ml-2 opacity-0 group-hover/link:opacity-100 transform translate-y-1 group-hover/link:translate-y-0 transition-all flex-shrink-0" />
                          </a>
                        ) : (
                          <p className="text-gray-300">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
              
              {/* Social Links Section */}
              <div 
                data-aos="fade-up"
                data-aos-delay="500"
                className="mt-12 pt-8 border-t border-gray-700"
              >
                <h4 className="font-semibold text-white mb-6 text-lg">Find me on social media</h4>
                <div className="grid grid-cols-4 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-aos="zoom-in"
                      data-aos-delay={600 + index * 100}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gray-900/50 ${social.color} p-4 rounded-xl text-gray-300 hover:text-white 
                             transition-all duration-300 flex items-center justify-center border border-gray-700 
                             hover:border-transparent group`}
                      aria-label={`${social.name} Profile`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
              
              {/* Quote Card */}
              <div 
                data-aos="fade-up"
                data-aos-delay="700"
                className="mt-10 p-6 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-xl 
                       border border-cyan-800/30 backdrop-blur-sm"
              >
                <div className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-3xl">"</span>
                  <p className="text-cyan-300/80 italic text-sm leading-relaxed">
                    Looking forward to collaborating on exciting projects and bringing your ideas to life! 
                    Let's create something amazing together.
                  </p>
                  <span className="text-cyan-400 text-3xl self-end">"</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-700 
                                                 hover:border-purple-400/50 transition-all duration-300 h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Send a Message</h3>
              
              {submitSuccess && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-8 bg-green-900/30 backdrop-blur-sm text-green-400 p-5 rounded-xl 
                         flex items-center space-x-3 border border-green-800/50"
                >
                  <motion.div 
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-green-900/50 p-2 rounded-full flex-shrink-0"
                  >
                    <FiCheck size={20} className="text-green-400" />
                  </motion.div>
                  <p className="text-sm md:text-base">Your message has been sent successfully! I'll get back to you within 24 hours.</p>
                </motion.div>
              )}
              
              <div className="space-y-6">
                <div data-aos="fade-up" data-aos-delay="300">
                  <label htmlFor="name" className="block text-gray-200 mb-2 font-medium">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full bg-gray-900/50 backdrop-blur-sm border ${formErrors.name ? 'border-red-500' : 'border-gray-700'} 
                           rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                           focus:ring-cyan-500 focus:border-transparent transition-all duration-300`}
                  />
                  {formErrors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 flex items-center gap-1"
                    >
                      <span className="inline-block w-1 h-1 bg-red-400 rounded-full"></span>
                      {formErrors.name}
                    </motion.p>
                  )}
                </div>
                
                <div data-aos="fade-up" data-aos-delay="400">
                  <label htmlFor="email" className="block text-gray-200 mb-2 font-medium">
                    Your Email <span className="text-red-400">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange} 
                    placeholder="john@example.com"
                    className={`w-full bg-gray-900/50 backdrop-blur-sm border ${formErrors.email ? 'border-red-500' : 'border-gray-700'} 
                           rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                           focus:ring-cyan-500 focus:border-transparent transition-all duration-300`}
                  />
                  {formErrors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 flex items-center gap-1"
                    >
                      <span className="inline-block w-1 h-1 bg-red-400 rounded-full"></span>
                      {formErrors.email}
                    </motion.p>
                  )}
                </div>
                
                <div data-aos="fade-up" data-aos-delay="500">
                  <label htmlFor="message" className="block text-gray-200 mb-2 font-medium">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi there, I'd like to discuss a project..."
                    maxLength={500}
                    className={`w-full bg-gray-900/50 backdrop-blur-sm border ${formErrors.message ? 'border-red-500' : 'border-gray-700'} 
                           rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                           focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none`}
                  ></textarea>
                  {formErrors.message && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 flex items-center gap-1"
                    >
                      <span className="inline-block w-1 h-1 bg-red-400 rounded-full"></span>
                      {formErrors.message}
                    </motion.p>
                  )}
                  <p className="text-gray-500 text-sm mt-2">
                    {formData.message.length}/500 characters
                  </p>
                </div>
              </div>
              
              <motion.button
                data-aos="fade-up" 
                data-aos-delay="600"
                type="submit"
                className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 px-6 rounded-xl 
                       font-medium flex items-center justify-center gap-3 hover:from-cyan-600 hover:to-purple-700 
                       transform transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 
                       disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend size={18} className="transform rotate-45" />
                  </>
                )}
              </motion.button>
              
              <p className="text-gray-500 text-xs text-center mt-6 flex items-center justify-center gap-1">
                <span className="inline-block w-1 h-1 bg-green-400 rounded-full"></span>
                Your information is secure and will not be shared with third parties
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
