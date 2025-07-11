
import React from 'react';
import { Briefcase, GraduationCap, Award, Heart, Calendar } from 'lucide-react';

const Experience = () => {
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
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 glass rounded-full">
              <Calendar size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground">Journey</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
          </div>

          <div className="gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-4 gradient-primary rounded-xl">
                <Briefcase size={24} className="text-white" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">Machine Learning Intern</h3>
                <p className="text-primary font-semibold mb-2">Campalin Innovations • April 2023 – June 2023</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Worked on a major ML project titled House Price Prediction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Handled data cleaning, training models, and evaluating accuracy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Tools: Python, Pandas, NumPy, scikit-learn, Matplotlib, Seaborn</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Academic Background
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
          </div>

          <div className="gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                <GraduationCap size={24} className="text-white" />
              </div>
              <div className="flex-grow">
                <div className="mb-3">
                  <span className="gradient-primary text-white px-3 py-1 rounded-full text-sm font-semibold">B.Tech in CSE</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">B.Tech in Computer Science & Engineering</h3>
                <p className="text-foreground font-medium mb-1">SRM Institute of Science and Technology, Delhi NCR</p>
                <p className="text-muted-foreground">2022 – 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
          </div>

          <div className="gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 gradient-primary rounded-xl">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Professional Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3 p-4 glass rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <Award size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extracurriculars */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Beyond Code
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 text-center">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-2">Chess</h3>
              <p className="text-muted-foreground">Regular player, known for strategic thinking and analytical approach</p>
            </div>
            <div className="gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 text-center">
              <div className="p-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full inline-block mb-4">
                <Heart size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Volunteering</h3>
              <p className="text-muted-foreground">Worked with Muskurahat Foundation on outreach and fundraising campaigns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
