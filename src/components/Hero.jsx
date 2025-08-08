import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import profilePic from '../assets/profile.png'

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about') || document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: scroll down by viewport height
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  const animatedTexts = [
    'Developer',
    'Designer',
    'Creator',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const currentText = animatedTexts[currentTextIndex];
    let timeoutId;

    if (isTyping) {
      if (displayedText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentTextIndex, animatedTexts]);

  const socialLinks = [
    { icon: Github, url: 'https://github.com/singhrohit27781', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/rohit-kumar-singh-83a699379/', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:singhrohit27781@gmail.com', label: 'Email' }
  ];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Enhanced Interactive Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10"></div>

        {/* Floating Code Snippets - Desktop Only */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 opacity-20 dark:opacity-30 hidden lg:block"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg text-xs font-mono">
            <div className="text-blue-600">const</div>
            <div className="text-purple-600">developer = {'{'}</div>
            <div className="ml-2 text-green-600">creative: true</div>
            <div className="text-purple-600">{'}'}</div>
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute top-40 right-16 opacity-20 dark:opacity-30 hidden lg:block"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg text-xs font-mono">
            <div className="text-orange-600">function</div>
            <div className="text-blue-600">buildAmazing() {'{'}</div>
            <div className="ml-2 text-green-600">return magic;</div>
            <div className="text-blue-600">{'}'}</div>
          </div>
        </motion.div>

        {/* Geometric Shapes - Desktop Only */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 right-32 w-16 h-16 border-2 border-blue-300/30 dark:border-blue-600/30 hidden lg:block"
        ></motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-20 w-12 h-12 bg-purple-300/20 dark:bg-purple-600/20 rounded-full hidden lg:block"
        ></motion.div>

        {/* Particle System - Desktop Only */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            className="absolute bottom-20 w-2 h-2 bg-blue-400/40 dark:bg-blue-300/40 rounded-full hidden lg:block"
            style={{ left: `${20 + i * 10}%` }}
          ></motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="min-h-screen py-20 flex flex-col justify-center relative">
          {/* Vertical Social Links - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex fixed left-8 top-1/2 transform -translate-y-1/2 flex-col space-y-4 z-20"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.2, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  style={{
                    outline: 'none',
                    border: 'none',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    WebkitTapHighlightColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                  }}
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}

            {/* Vertical Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 60 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="w-px bg-gray-300 dark:bg-gray-600 mx-auto"
            ></motion.div>
          </motion.div>

          {/* Content Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1 relative">
              {/* Mobile Social Links - Top */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:hidden flex justify-center space-x-4 mb-8"
              >
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2.5 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700"
                      style={{
                        outline: 'none',
                        border: 'none',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        WebkitTapHighlightColor: 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                      }}
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </motion.div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Available for work
              </span>
            </motion.div>

            {/* Animated Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-gray-300 leading-tight"
            >
              Hi, I'm a{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block min-w-[200px] sm:min-w-[300px] lg:min-w-[400px]">
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-blue-600 dark:text-blue-400"
                >
                  |
                </motion.span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-medium"
            >
              Full Stack Developer & UI/UX Designer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg lg:max-w-none"
            >
              I create exceptional digital experiences that combine beautiful design with powerful functionality. Passionate about turning ideas into reality.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/projects"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  View My Work
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 rounded-lg font-semibold transition-all duration-200"
                >
                  <Download size={18} className="mr-2" />
                  Download Resume
                </a>
              </motion.div>
            </motion.div>
          </div>

            {/* Right Content - Stunning Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex justify-center items-center order-1 lg:order-2"
            >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="w-72 sm:w-80 h-80 sm:h-96 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900/50 dark:to-indigo-900/50 rounded-2xl sm:rounded-3xl shadow-2xl border border-blue-200/50 dark:border-blue-700/50 p-6 sm:p-8 relative overflow-hidden backdrop-blur-sm"
              >

                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)`,
                      borderRadius: '24px'
                    }}
                  />
                </div>

                {/* Card Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Header Section with Profile */}
                  <div className="flex items-center space-x-4 mb-6">
                    {/* Small Circular Profile Picture */}
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg">
                        <img
                           src={profilePic} 
                          alt="Rohit Kumar Singh"
                          className="w-10 h-10 sm:w-10 sm:h-10 object-cover object-center hover:scale-105 transition-transform duration-300 mx-auto mt-1"
                          onError={(e) => {
                            // Fallback to assets folder if public folder doesn't work
                            e.target.src = "/src/assets/profile.png";
                            e.target.onerror = () => {
                              // Final fallback to initials
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = `
                                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 text-white text-sm font-bold">
                                  RK
                                </div>
                              `;
                            };
                          }}
                        />
                      </div>
                      {/* Online Status */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"
                      ></motion.div>
                    </div>

                    {/* Name and Title */}
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-300 mb-1">Rohit Kumar Singh</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Full Stack Developer</p>

                      {/* Status Badge */}
                      <div className="inline-flex items-center px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs font-medium">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                        Available
                      </div>
                    </div>
                  </div>

                  {/* Skills Section */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'Python', 'C++','java','express' , 'mongoDB','next js'].map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">3+</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Years</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-purple-600">50+</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-green-600">15+</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Clients</div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg"
              >
                <span className="text-lg sm:text-2xl">⚡</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg"
              >
                <span className="text-base sm:text-xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
          </div>
        </div>









        {/* Scroll Down Indicator - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNext}
          style={{
            outline: 'none',
            border: 'none',
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            style={{
              outline: 'none',
              border: 'none',
              boxShadow: 'none',
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            <span className="text-xs sm:text-xs font-medium mb-2 sm:mb-3 tracking-wider uppercase hidden sm:block">Scroll Down</span>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
              style={{
                outline: 'none',
                border: 'none',
                boxShadow: 'none',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              {/* Mouse Body - Responsive Size */}
              <div
                className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 dark:border-gray-500 hover:border-blue-600 dark:hover:border-blue-400 rounded-full transition-colors duration-300"
                style={{
                  outline: 'none',
                  boxShadow: 'none',
                  WebkitTapHighlightColor: 'transparent'
                }}
              >
                {/* Mouse Scroll Wheel - Responsive Size */}
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-0.5 h-1.5 sm:w-1 sm:h-2 bg-gray-400 dark:bg-gray-500 hover:bg-blue-600 dark:hover:bg-blue-400 rounded-full mx-auto mt-1.5 sm:mt-2 transition-colors duration-300"
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
