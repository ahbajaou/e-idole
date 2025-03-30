
import React, { useEffect, useState } from 'react';
import {
  MessageCircle, Award, Globe, Users,
  Mail,
  Lock,
  User,
  ArrowRight , Menu, X
} from 'lucide-react';
// import { Menu, X } from 'lucide-react';

import { FaInstagram, FaTwitter, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

import img1 from '../assets/img1.png'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'

import { motion } from 'framer-motion';
// import React from 'react';
// import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Uncomment the following line when ready to implement navigation
    navigate('/chat');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#E80015]">Login</h2>
            <p className="text-gray-600 mt-2">Welcome back! Please enter your details</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="text-gray-400" size={20} />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E80015]/50 transition duration-300"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="text-gray-400" size={20} />
              </div>
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E80015]/50 transition duration-300"
              />
            </div>

            <div className="flex justify-end items-center">
              <a 
                href="#" 
                className="text-sm text-[#E80015] hover:underline transition"
              >
                Forgot Password?
              </a>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-[#E80015] to-red-700 text-white py-3 rounded-lg hover:opacity-90 transition duration-300 flex items-center justify-center space-x-2"
            >
              <span>Login</span>
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// import React, { useEffect, useState } from 'react';
// import { Menu, X } from 'lucide-react';

const ResponsiveNavbar = ({ setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar-menu') && !event.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu when window is resized above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed flex flex-col justify-center items-center top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 bg-white w-full shadow-md">
      <div className='w-full max-w-7xl flex justify-between items-center'>
        <div className="text-xl sm:text-2xl font-bold">
          <span className="text-red-600">E-IDOLS</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a onClick={() => setActiveSection(true)} href="#home" className="hover:text-gray-600 transition-colors">Home</a>
          <a onClick={() => setActiveSection(true)} href="#about" className="hover:text-gray-600 transition-colors">About</a>
          <a onClick={() => setActiveSection(true)} href="#service" className="hover:text-gray-600 transition-colors">Service</a>
          <button 
            onClick={() => setActiveSection(false)} 
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Login
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center menu-button" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`navbar-menu w-full absolute top-full left-0 right-0 bg-white shadow-md md:hidden transition-all duration-200 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <a 
            onClick={() => {
              setActiveSection(true);
              setIsMenuOpen(false);
            }} 
            href="#home" 
            className="hover:text-red-600 transition-colors py-2"
          >
            Home
          </a>
          <a 
            onClick={() => {
              setActiveSection(true);
              setIsMenuOpen(false);
            }} 
            href="#about" 
            className="hover:text-red-600 transition-colors py-2"
          >
            About
          </a>
          <a 
            onClick={() => {
              setActiveSection(true);
              setIsMenuOpen(false);
            }} 
            href="#service" 
            className="hover:text-red-600 transition-colors py-2"
          >
            Service
          </a>
          <button 
            onClick={() => {
              setActiveSection(false);
              setIsMenuOpen(false);
            }} 
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors w-full text-left"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

// export default ResponsiveNavbar;


export default function EIdolsPage() {
  const [logoPositions, setLogoPositions] = useState([0, -30, -60, -90]); // Tighter spacing between logos
  const [activeSection, setActiveSection] = useState(true);
  const images = [
    img2,
    img3,
    img4,
    img5,
    img2,
    img3,
    img4,
    img5
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };  // Infinite animation variants
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
        staggerDirection: 1,
        repeat: Infinity,
      },
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0.6,
      scale: 0.95
    },
    animate: {
      opacity: [0.6, 1, 0.6],
      scale: [0.95, 1.02, 0.95],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setLogoPositions((prevPositions) =>
        prevPositions.map((pos) => (pos >= 100 ? -90 : pos + 1)) // Reset the position to -90 for a smooth loop
      );
    }, 50); // Control animation speed

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="font-sans flex items-center justify-center flex-col">
      {/* Header */}
      {/* Header with proper positioning */}
      {/* <header className="fixed flex justify-center items-center top-0 left-0 right-0 z-50 px-6 py-4 bg-white w-full shadow-md">
        <div className='w-[94%] flex justify-between items-center '>
          <div className="text-2xl font-bold">
            <span className="text-red-600">E-IDOLS</span>
          </div>
          <nav className="flex items-center space-x-6">
            <a onClick={(e) => setActiveSection(true)} href="#home" className="hover:text-gray-600">Home</a>
            <a onClick={(e) => setActiveSection(true)} href="#about" className="hover:text-gray-600">About</a>
            <a onClick={(e) => setActiveSection(true)} href="#service" className="hover:text-gray-600">Service</a>
            <button onClick={(e) => setActiveSection(false)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Login</button>
          </nav>

        </div>
      </header> */}
        <ResponsiveNavbar setActiveSection={setActiveSection} />
      {activeSection ? (
        <>

          {/* Hero Section with padding-top to prevent content hiding behind fixed header */}
          <section id="home" className="relative h-screen w-[90%] flex items-center justify-center mt-20">
            <div className="absolute inset-0 bg-black flex items-center justify-center" style={{ borderRadius: '30px', overflow: 'hidden' }}>
              <img
                src={img1}
                alt="Woman holding camera"
                className="w-full h-full opacity-40 object-cover"
              />
            </div>
            <div className="relative flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-6xl font-bold text-white mb-4">
                <span className="text-red-600">E-IDOLS</span> TALENT AGENCY
              </h1>
              <p className="text-white text-lg mb-8">Discovering and Elevating Digital Talents</p>
              <button
                onClick={(e) => setActiveSection(false)}
                className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition"
              >
                Explore Talents
              </button>
            </div>
          </section>


          {/* About Section */}
          <section id="about" className="w-[90%]">
            <div className="flex flex-col md:flex-row gap-8 h-screen  items-center justify-center">
              <div className="md:w-1/2 h-[100%] flex flex-col  justify-center">
                <h2 className="text-3xl font-bold text-red-600 mb-6">About E-Idols</h2>
                <p className="text-black mb-4">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <p className="text-black">
                  It has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
              </div>
              <div className="md:w-1/2 bg-gray-200 h-[80%] flex items-center justify-center " style={{ borderRadius: '30px', overflow: 'hidden' }}>
                <img
                  src={img7}
                  alt="About Image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </section>


          {/* Red Line with Animated Logo */}
          <div className="relative h-12 bg-red-600 w-full overflow-hidden flex">
            {/* Container for the animations */}
            <div className="flex whitespace-nowrap">
              {/* First marquee animation */}
              <motion.div
                className="flex items-center"
                variants={marqueeVariants}
                animate="animate"
              >
                {/* Repeat the text multiple times to ensure continuous flow */}
                {[...Array(10)].map((_, index) => (
                  <span
                    key={index}
                    className="text-white text-4xl font-bold mx-8"
                  >
                    E-IDOLS
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Gallery Section */}
          <section className="py-32 px-6 md:px-12 lg:px-24 bg-black w-full">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="animate"
              animate="animate"
            >
              {images.map((image, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-800 h-72 md:h-96 lg:h-[400px] overflow-hidden rounded-lg"
                  variants={itemVariants}
                  initial="initial"
                  animate="animate"
                  custom={i}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${i + 1}`}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>


          {/* Services Section */}
          <section id="service" className="py-16 px-6 md:px-12 lg:px-24">
            <h2 className="text-3xl font-bold text-red-600 text-center mb-12">Our Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: MessageCircle, title: 'Talent Management', desc: 'Comprehensive career support' },
                { icon: Globe, title: 'Global Positioning', desc: 'International talent placement' },
                { icon: Award, title: 'Brand Partnerships', desc: 'Strategic collaboration' },
                { icon: Users, title: 'Content Strategy', desc: 'Innovative content development' }
              ].map((service, i) => (
                <div key={i} className="bg-gray-200 p-6 rounded-lg text-center shadow-md">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-red-600">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-red-600 mb-2">{service.title}</h3>
                  <p className="text-sm text-black">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-black py-12 px-6 md:px-12 lg:px-24 w-full text-white">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-8 md:mb-0">
                <div className="text-2xl font-bold text-red-600 mb-4">E-IDOLS</div>

                <div className="flex justify-center gap-6 mt-6">
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="w-6 h-6 text-white hover:text-red-600 transition-colors" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="w-6 h-6 text-white hover:text-red-600 transition-colors" />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="w-6 h-6 text-white hover:text-red-600 transition-colors" />
                  </a>
                  <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                    <FaTiktok className="w-6 h-6 text-white hover:text-red-600 transition-colors" />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold mb-4">Company</h4>
                  <p className="text-sm mb-2">About Us</p>
                  <p className="text-sm mb-2">Our Team</p>
                  <p className="text-sm">Careers</p>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Services</h4>
                  <p className="text-sm mb-2">Talent Management</p>
                  <p className="text-sm mb-2">Brand Partnerships</p>
                  <p className="text-sm">Content Creation</p>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Contact</h4>
                  <p className="text-sm mb-2">info@e-idols.com</p>
                  <p className="text-sm mb-2">+1 (555) 123-4567</p>
                  <p className="text-sm">Los Angeles, CA</p>
                </div>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <LoginComponent />
      )}
    </div>
  );
}
