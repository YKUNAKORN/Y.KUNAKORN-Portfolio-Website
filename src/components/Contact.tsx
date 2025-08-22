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
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="font-['IBM_Plex_Mono'] text-lg text-[#666666]/80 max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-[#f5f5f7] rounded-3xl p-8 border border-[#e5e5e5] shadow-md">
            <h3 className="text-2xl font-semibold text-[#000000] mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#666666] mb-2 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#ddd] text-[#666666] placeholder-[#666666]/50 focus:outline-none focus:ring-2 focus:ring-[#666666]/40 transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#666666] mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#ddd] text-[#666666] placeholder-[#666666]/50 focus:outline-none focus:ring-2 focus:ring-[#666666]/40 transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#666666] mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#ddd] text-[#666666] placeholder-[#666666]/50 focus:outline-none focus:ring-2 focus:ring-[#666666]/40 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#666666] text-white py-4 px-8 rounded-2xl font-semibold hover:bg-black transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-[#f5f5f7] rounded-3xl p-8 border border-[#e5e5e5] shadow-md">
              <h3 className="text-2xl font-semibold text-[#666666] mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-[#ddd]">
                    <Phone className="w-6 h-6 text-[#666666]" />
                  </div>
                  <div>
                    <p className="text-[#666666]/70 text-sm">Phone</p>
                    <p className="text-[#666666] font-medium">+66 95 467 8926</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-[#ddd]">
                    <Mail className="w-6 h-6 text-[#666666]" />
                  </div>
                  <div>
                    <p className="text-[#666666]/70 text-sm">Email</p>
                    <p className="text-[#666666] font-medium">kunakorn.contact@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-[#ddd]">
                    <MapPin className="w-6 h-6 text-[#666666]" />
                  </div>
                  <div>
                    <p className="text-[#666666]/70 text-sm">Location</p>
                    <p className="text-[#666666] font-medium">Bangkok, Thailand</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-[#f5f5f7] rounded-3xl p-8 border border-[#e5e5e5] shadow-md">
              <h3 className="text-2xl font-semibold text-[#666666] mb-8">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.instagram.com/this.kao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[#ddd] hover:bg-[#f5f5f7] transition-all duration-300"
                >
                  <Instagram className="w-6 h-6 text-[#666666]" />
                  <span className="text-[#666666] font-medium">Instagram</span>
                </a>
                <a
                  href="https://web.facebook.com/kao.kunakorn.7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[#ddd] hover:bg-[#f5f5f7] transition-all duration-300"
                >
                  <Facebook className="w-6 h-6 text-[#666666]" />
                  <span className="text-[#666666] font-medium">Facebook</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/kunakorn-yamngam-932069338/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[#ddd] hover:bg-[#f5f5f7] transition-all duration-300 col-span-2"
                >
                  <Linkedin className="w-6 h-6 text-[#666666]" />
                  <span className="text-[#666666] font-medium">LinkedIn</span>
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
