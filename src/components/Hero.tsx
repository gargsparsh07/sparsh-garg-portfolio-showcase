
import React from 'react';
import { Download, Mail, MapPin, Phone, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Hello badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full hover:scale-105 hover:bg-primary/10 transition-all duration-300 cursor-pointer group">
            <Sparkles size={16} className="text-primary group-hover:animate-pulse" />
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">Hello, I'm</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default">
            Sparsh Garg
          </h1>
          
          <div className="mb-8">
            <h2 className="text-xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              CS Undergraduate | Prompt Engineer | AI/ML Enthusiast | Python Developer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm passionate about building machine learning models that solve real-world problems. 
              I constantly explore the evolving world of AI and love leveraging Python to bring intelligent solutions to life.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-muted-foreground">
            <div className="flex items-center gap-2 glass px-3 py-2 rounded-lg hover:scale-105 hover:bg-primary/5 transition-all duration-300 cursor-pointer group">
              <MapPin size={16} className="text-primary group-hover:animate-pulse" />
              <span className="text-sm group-hover:text-primary transition-colors duration-300">Delhi, India</span>
            </div>
            <div className="flex items-center gap-2 glass px-3 py-2 rounded-lg hover:scale-105 hover:bg-primary/5 transition-all duration-300 cursor-pointer group">
              <Mail size={16} className="text-primary group-hover:animate-pulse" />
              <span className="text-sm group-hover:text-primary transition-colors duration-300">sparshgarg.skp@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 glass px-3 py-2 rounded-lg hover:scale-105 hover:bg-primary/5 transition-all duration-300 cursor-pointer group">
              <Phone size={16} className="text-primary group-hover:animate-pulse" />
              <span className="text-sm group-hover:text-primary transition-colors duration-300">+91-9876543210</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl animate-glow hover:shadow-primary/25">
              <Download size={20} />
              Download Resume
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass text-foreground px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 border border-primary/30 hover:border-primary/50 hover:bg-primary/5"
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
