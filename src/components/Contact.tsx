import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Send, MessageSquare } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={ref} id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background"></div>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 glass rounded-full hover:scale-105 hover:bg-primary/10 transition-all duration-300 cursor-pointer group">
            <MessageSquare size={16} className="text-primary group-hover:animate-pulse" />
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`} style={{ transitionDelay: '200ms' }}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Ready to collaborate?</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, or just having a chat about AI and technology.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: "sparshgarg.skp@gmail.com" },
                  { icon: Phone, text: "+91-9876543210" },
                  { icon: MapPin, text: "Delhi, India" }
                ].map((item, index) => (
                  <div key={index} className={`flex items-center gap-4 p-4 glass rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`} style={{ transitionDelay: `${400 + index * 100}ms` }}>
                    <div className="p-3 gradient-primary rounded-lg">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '700ms' }}>
              <h4 className="text-xl font-bold mb-4">Follow me</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, name: 'GitHub' },
                  { icon: Linkedin, name: 'LinkedIn' },
                  { icon: Code, name: 'Portfolio' }
                ].map((social, index) => (
                  <button 
                    key={index}
                    className="p-3 glass rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <social.icon size={20} className="text-muted-foreground group-hover:text-primary" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`} style={{ transitionDelay: '300ms' }}>
            <h3 className="text-2xl font-bold mb-2">Send Message</h3>
            <p className="text-muted-foreground mb-6">
              Let's start a conversation. I'll get back to you as soon as possible.
            </p>

            {showSuccess && (
              <div className="mb-6 p-4 glass border border-primary/30 rounded-xl">
                <p className="text-primary font-medium">Thanks for reaching out, I appreciate your time! You'll hear from me soon 😊</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-foreground font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 glass border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-transparent text-foreground placeholder-muted-foreground"
                />
              </div>
              <div>
                <label className="block text-foreground font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 glass border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-transparent text-foreground placeholder-muted-foreground"
                />
              </div>
              <div>
                <label className="block text-foreground font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 glass border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-transparent text-foreground placeholder-muted-foreground"
                />
              </div>
              <div>
                <label className="block text-foreground font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or just say hi..."
                  className="w-full px-4 py-3 glass border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none bg-transparent text-foreground placeholder-muted-foreground"
                />
              </div>
              <button
                type="submit"
                className="w-full gradient-primary text-white py-4 px-6 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
