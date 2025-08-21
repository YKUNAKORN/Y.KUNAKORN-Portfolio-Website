import React, { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && textRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        heroRef.current.style.transform = `translateY(${parallax}px)`;
        textRef.current.style.transform = `translateY(${parallax * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900  to-violet-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      {/* Floating Elements */}
      <div ref={heroRef} className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-40 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div ref={textRef} className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Y.KUNAKORN
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/80 mb-4 font-light">
            Full Stack Developer & Creative Technologist
          </p>
          <p className="font-['IBM_Plex_Mono'] text-lg sm:text-l text-white/60 mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting modern technology and impressive user experiences through 
            thoughtful design and development with attention to every detail
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/YKUNAKORN"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/10 rounded-full backdrop-blur-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/kunakorn-yamngam-932069338/"
              className="group p-3 bg-white/10 rounded-full backdrop-blur-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-200" />
            </a>
            <a
              href="mailto:kunakorn.contact@gmail.com"
              className="group p-3 bg-white/10 rounded-full backdrop-blur-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-200" />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center px-8 py-4 font-semibold rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg hover:scale-105 transition-transform"
          >
            View More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full"></div>
      </div>
    </section>
  )
};

export default Hero;