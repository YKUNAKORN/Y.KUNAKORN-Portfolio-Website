import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Simple background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,white_70%)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto ">
        <div className="space-y-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Y.KUNAKORN
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer & Creative Technologist
          </p>
          <p className="font-['IBM_Plex_Mono'] text-gray-500 max-w-xl mx-auto leading-relaxed">
            Crafting modern technology and impressive user experiences through 
            thoughtful design and development with attention to every detail
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/YKUNAKORN"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
            >
              <Github className="w-5 h-5 text-gray-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/kunakorn-yamngam-932069338/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
            >
              <Linkedin className="w-5 h-5 text-gray-600" />
            </a>
            <a
              href="mailto:kunakorn.contact@gmail.com"
              className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
            >
              <Mail className="w-5 h-5 text-gray-600" />
            </a>
          </div>

          {/* CTA Button */}
          <div className="pt-12">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center px-8 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-200"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ArrowDown className="w-5 h-5 text-gray-400 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;