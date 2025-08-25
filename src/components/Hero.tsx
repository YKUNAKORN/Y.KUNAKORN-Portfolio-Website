import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = ({ className = '' }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 overflow-hidden"    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100" />
      
      {/* Decorative blur circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-200/40 rounded-full mix-blend-multiply blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-200/40 rounded-full mix-blend-multiply blur-3xl animate-pulse delay-300" />

      {/* Content */}
      <div className={`relative z-10 text-center max-w-5xl mx-auto ${className}`}>
        <div className="space-y-10">
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Y.KUNAKORN
          </h1>
          <p className="text-base sm:text-2xl text-black font-light max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer & Creative Technologist
          </p>
          <p className="font-['IBM_Plex_Mono'] text-gray-500 max-w-xl mx-auto leading-relaxed">
            Crafting modern technology and delightful user experiences through 
            thoughtful design and attention to detail.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-6">
            <a
              href="https://github.com/YKUNAKORN"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white/60 backdrop-blur-lg shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300">
              <Github className="w-5 h-5 text-gray-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/kunakorn-yamngam-932069338/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white/60 backdrop-blur-lg shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300">
              <Linkedin className="w-5 h-5 text-gray-700" />
            </a>
            <a
              href="mailto:kunakorn.contact@gmail.com"
              className="p-3 rounded-2xl bg-white/60 backdrop-blur-lg shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300">
              <Mail className="w-5 h-5 text-gray-700" />
            </a>
          </div>

          {/* CTA */}
          <div className="pt-12">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center px-10 py-4 bg-black text-white text-base font-medium rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ArrowDown className="w-6 h-6 text-gray-400 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;