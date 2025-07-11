
import React from 'react';
import { Download, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F8FF] to-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-[#333B4F] mb-6">
            Sparsh Garg
          </h1>
          <p className="text-xl md:text-2xl text-[#A88BEB] mb-8 font-medium">
            CS Undergraduate | Prompt Engineer | AI/ML Enthusiast | Python Developer
          </p>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg text-[#444] leading-relaxed">
              I'm passionate about building machine learning models that solve real-world problems. 
              I constantly explore the evolving world of AI and love leveraging Python to bring intelligent solutions to life.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-[#444]">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-[#A88BEB]" />
              <span>Delhi, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-[#A88BEB]" />
              <span>your.email@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-[#A88BEB]" />
              <span>+91-XXXXXXXXXX</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#333B4F] text-white px-8 py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-[#a88beb] hover:to-[#f8ceec] transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105">
              <Download size={18} />
              Download Resume
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-[#A88BEB] text-[#A88BEB] px-8 py-3 rounded-lg font-medium hover:bg-[#A88BEB] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
