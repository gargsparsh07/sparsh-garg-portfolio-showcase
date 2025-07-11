
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Send } from 'lucide-react';

const Contact = () => {
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
    <section id="contact" className="py-20 bg-gradient-to-br from-[#F5F8FF] to-[#FFD6A5]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333B4F] mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-[#A88BEB] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#333B4F] mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-[#D3CCFF]">
                  <div className="p-2 bg-[#A88BEB] rounded-lg">
                    <Mail size={20} className="text-white" />
                  </div>
                  <span className="text-[#444]">your.email@example.com</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-[#D3CCFF]">
                  <div className="p-2 bg-[#A88BEB] rounded-lg">
                    <Phone size={20} className="text-white" />
                  </div>
                  <span className="text-[#444]">+91-XXXXXXXXXX</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-[#D3CCFF]">
                  <div className="p-2 bg-[#A88BEB] rounded-lg">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <span className="text-[#444]">West Delhi, Delhi</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#333B4F] mb-4">Social Links</h4>
              <div className="flex gap-4">
                <button className="p-3 bg-white rounded-lg border border-[#D3CCFF] hover:bg-[#A88BEB] hover:text-white transition-all duration-300 group">
                  <Github size={20} className="text-[#444] group-hover:text-white" />
                </button>
                <button className="p-3 bg-white rounded-lg border border-[#D3CCFF] hover:bg-[#A88BEB] hover:text-white transition-all duration-300 group">
                  <Linkedin size={20} className="text-[#444] group-hover:text-white" />
                </button>
                <button className="p-3 bg-white rounded-lg border border-[#D3CCFF] hover:bg-[#A88BEB] hover:text-white transition-all duration-300 group">
                  <Code size={20} className="text-[#444] group-hover:text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 border border-[#D3CCFF] relative">
            <h3 className="text-2xl font-bold text-[#333B4F] mb-2">Send Message</h3>
            <p className="text-[#444] mb-6">I'd love to hear from you. Send me a message and I'll respond as soon as possible.</p>

            {showSuccess && (
              <div className="mb-6 p-4 bg-[#F5F8FF] border border-[#A88BEB] rounded-lg">
                <p className="text-[#A88BEB] font-medium">Thanks for reaching out, I appreciate your time! You'll hear from me soon 😊</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#333B4F] font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-[#D3CCFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A88BEB] focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-[#333B4F] font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-[#D3CCFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A88BEB] focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-[#333B4F] font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject (optional)"
                  className="w-full px-4 py-3 border border-[#D3CCFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A88BEB] focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-[#333B4F] font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 border border-[#D3CCFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A88BEB] focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#333B4F] text-white py-4 px-6 rounded-lg font-medium hover:bg-gradient-to-r hover:from-[#a88beb] hover:to-[#f8ceec] transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
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
