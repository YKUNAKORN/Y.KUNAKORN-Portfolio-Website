import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Y.KUNAKORN
            </div>
            <p className="text-white/50 flex items-center justify-center md:justify-start">
              "You will nerver find a time for anything if you want time you must make it""
            </p>
          </div>
          
          <div className="text-center text-white/50">
            <p>&copy; 2025 Y.KUNAKORN. All rights reserved.</p>
            <p className="text-sm mt-1">Crafted with passion and precision</p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="group p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;