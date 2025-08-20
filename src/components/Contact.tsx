import React, { useState } from 'react';
import { Mail, Phone, Instagram, Facebook, Linkedin, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Liquid Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-pink-900/20">
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="backdrop-blur-2xl bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl shadow-white/5">
            <h3 className="text-2xl font-semibold text-white mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white/80 mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white/80 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-500 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-500 shadow-2xl shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="backdrop-blur-2xl bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl shadow-white/5">
              <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Phone</p>
                    <p className="text-white font-medium">+66 XX-XXX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <p className="text-white font-medium">y.kunakorn@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-500/20 to-blue-500/20 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-white font-medium">Bangkok, Thailand</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="backdrop-blur-2xl bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl shadow-white/5">
              <h3 className="text-2xl font-semibold text-white mb-8">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://instagram.com/y.kunakorn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-white/10 hover:from-pink-500/20 hover:to-purple-500/20 hover:scale-105 transition-all duration-500 group"
                >
                  <Instagram className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform duration-500" />
                  <span className="text-white font-medium">Instagram</span>
                </a>
                <a
                  href="https://facebook.com/y.kunakorn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-white/10 hover:from-blue-500/20 hover:to-cyan-500/20 hover:scale-105 transition-all duration-500 group"
                >
                  <Facebook className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-500" />
                  <span className="text-white font-medium">Facebook</span>
                </a>
                <a
                  href="https://linkedin.com/in/y-kunakorn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-white/10 hover:from-blue-600/20 hover:to-indigo-600/20 hover:scale-105 transition-all duration-500 group col-span-2"
                >
                  <Linkedin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-500" />
                  <span className="text-white font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;