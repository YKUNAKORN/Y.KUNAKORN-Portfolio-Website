import React, { useState } from 'react';
import { Mail, Phone, Instagram, Facebook, Linkedin, Github, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-light bg-gradient-to-t from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="font-['IBM_Plex_Mono'] text-lg text-[#666666]/80 max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-[#f5f5f7] rounded-3xl p-4 sm:p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#666666] mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#666666]" />
                  </div>
                  <div>
                    <p className="text-[#666666]/70 text-sm">Phone</p>
                    <p className="text-[#666666] font-medium">+66 95 467 8926</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#666666]" />
                  </div>
                  <div>
                    <p className="text-[#666666]/70 text-sm">Email</p>
                    <p className="text-[#666666] font-medium">kunakorn.contact@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center ">
                    <MapPin className="w-6 h-6 text-[#666666]" />
                  </div>
                  <div>
                    <p className="text-[#666666]/70 text-sm">Location</p>
                    <p className="text-[#666666] font-medium">Bangkok, Thailand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Social Media Links */}
            <div className="bg-[#f5f5f7] rounded-3xl p-4 sm:p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#666666] mb-8">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.instagram.com/this.kao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-2xl bg-white text-[#666666] transition-colors duration-[500ms] hover:bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:text-white">
                  <Instagram className="w-6 h-6 text-[#666666] transition-colors duration-[500ms] group-hover:text-white" />
                  <span className="font-medium">Instagram</span>
                </a>
                <a
                  href="https://web.facebook.com/kao.kunakorn.7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-2xl bg-white text-[#666666] transition-colors duration-[500ms] hover:bg-[#166fe0] hover:text-white"
                >
                  <Facebook className="w-6 h-6 text-[#666666] transition-colors duration-[500ms] group-hover:text-white" />
                  <span className="font-medium">Facebook</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/kunakorn-yamngam-932069338/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-2xl bg-[#ffffff] text-[#666666] transition-colors duration-[500ms] hover:bg-[#095aa9] hover:text-white">
                  <Linkedin className="w-6 h-6 text-[#666666] transition-colors duration-[500ms] group-hover:text-white" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/YKUNAKORN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-2xl bg-[#ffffff] text-[#666666] transition-colors duration-[500ms] hover:bg-black hover:text-white">
                  <Github className="w-6 h-6 text-[#666666] transition-colors duration-[500ms] group-hover:text-white" />
                  <span className="font-medium">Github</span>
                </a>
                <a
                  href="mailto:kunakorn.contact@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-2xl bg-white text-[#666666] transition-colors duration-[500ms] hover:bg-gradient-to-r from-emerald-400 to-cyan-400 hover:text-white col-span-2 justify-center">
                  <Mail className="w-6 h-6 text-[#666666] transition-colors duration-[500ms] group-hover:text-white" />
                  <span className="font-medium">Email : kunakorn.contact@gmail.com</span>
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
