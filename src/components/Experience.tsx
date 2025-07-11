
import React from 'react';
import { Briefcase, GraduationCap, Award, Heart, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const { ref: workRef, isVisible: workVisible } = useScrollAnimation();
  const { ref: educationRef, isVisible: educationVisible } = useScrollAnimation();
  const { ref: certRef, isVisible: certVisible } = useScrollAnimation();
  const { ref: extraRef, isVisible: extraVisible } = useScrollAnimation();

  const certifications = [
    "Machine Learning with Python – Campalin Innovations",
    "Programming in Java – NPTEL", 
    "Data Science with Python – Simplilearn",
    "Python Crash Course – Udemy",
    "DBMS with MySQL – Coursera",
    "Introduction to NLP – Infosys Springboard",
    "Crowdfunding Campaigns – Muskurahat Foundation"
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Work Experience */}
        <div ref={workRef} className="mb-20">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-2 mb-4 glass rounded-full hover:scale-105 hover:bg-primary/10 transition-all duration-300 cursor-pointer group ${
              workVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '100ms' }}>
              <Calendar size={16} className="text-primary group-hover:animate-pulse" />
              <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">Journey</span>
            </div>
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent transition-all duration-1000 ${
              workVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`} style={{ transitionDelay: '200ms' }}>
              Work Experience
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full transition-all duration-1000 ${
              workVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`} style={{ transitionDelay: '300ms' }}></div>
          </div>

          <div className={`gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 ${
            workVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="flex items-start gap-4">
              <div className="p-4 gradient-primary rounded-xl hover:scale-110 transition-transform duration-300">
                <Briefcase size={24} className="text-white" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">Machine Learning Intern</h3>
                <p className="text-primary font-semibold mb-4">Campalin Innovations • April 2023 – June 2023</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Worked on a major ML project titled House Price Prediction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Handled data cleaning, training models, and evaluating accuracy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Tools: Python, Pandas, NumPy, scikit-learn, Matplotlib, Seaborn</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div ref={educationRef} className="mb-20">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent transition-all duration-1000 ${
              educationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`} style={{ transitionDelay: '100ms' }}>
              Academic Background
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full transition-all duration-1000 ${
              educationVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`} style={{ transitionDelay: '200ms' }}></div>
          </div>

          <div className={`gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 ${
            educationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`} style={{ transitionDelay: '300ms' }}>
            <div className="flex items-start gap-4">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl hover:scale-110 transition-transform duration-300">
                <GraduationCap size={24} className="text-white" />
              </div>
              <div className="flex-grow">
                <div className="mb-3">
                  <span className="gradient-primary text-white px-3 py-1 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300 inline-block cursor-pointer">B.Tech in CSE</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">B.Tech in Computer Science & Engineering</h3>
                <p className="text-foreground font-medium mb-1">SRM Institute of Science and Technology, Delhi NCR</p>
                <p className="text-muted-foreground">2022 – 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div ref={certRef} className="mb-20">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent transition-all duration-1000 ${
              certVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`} style={{ transitionDelay: '100ms' }}>
              Certifications
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full transition-all duration-1000 ${
              certVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`} style={{ transitionDelay: '200ms' }}></div>
          </div>

          <div className={`gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 ${
            certVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`} style={{ transitionDelay: '300ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 gradient-primary rounded-xl hover:scale-110 transition-transform duration-300">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Professional Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className={`flex items-start gap-3 p-4 glass rounded-xl border border-border/50 hover:border-primary/30 hover:scale-105 hover:bg-primary/5 transition-all duration-500 cursor-pointer group ${
                  certVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={{ transitionDelay: `${500 + index * 100}ms` }}>
                  <Award size={16} className="text-primary mt-1 flex-shrink-0 group-hover:animate-pulse" />
                  <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extracurriculars */}
        <div ref={extraRef}>
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent transition-all duration-1000 ${
              extraVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`} style={{ transitionDelay: '100ms' }}>
              Beyond Code
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full transition-all duration-1000 ${
              extraVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`} style={{ transitionDelay: '200ms' }}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:scale-[1.05] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 text-center cursor-pointer group ${
              extraVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`} style={{ transitionDelay: '300ms' }}>
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🧠</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">Chess</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Regular player, known for strategic thinking and analytical approach</p>
            </div>
            <div className={`gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:scale-[1.05] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 text-center cursor-pointer group ${
              extraVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="p-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">Volunteering</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Worked with Muskurahat Foundation on outreach and fundraising campaigns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
