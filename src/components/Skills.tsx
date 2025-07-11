
import React from 'react';
import { Code, Users, Zap } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    'Python', 'Machine Learning', 'Data Science', 'NLP', 'MySQL', 'Pandas', 
    'NumPy', 'scikit-learn', 'Matplotlib', 'Seaborn', 'HTML', 'CSS', 'Java', 
    'C Programming', 'Cryptography', 'Data Structures', 'WordPress', 'VS Code', 'AI'
  ];

  const softSkills = [
    'Effective Communication', 'Problem Solving', 'Critical Thinking', 
    'Team Work', 'Strategic Thinking', 'Adaptability', 'Self-Learning', 'English Proficiency'
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 glass rounded-full hover:scale-105 hover:bg-primary/10 transition-all duration-300 cursor-pointer group">
            <Zap size={16} className="text-primary group-hover:animate-pulse" />
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">What I Do</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {/* Technical Skills */}
          <div className="gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 gradient-primary rounded-xl">
                <Code size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 glass text-foreground rounded-full border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 glass text-foreground rounded-full border border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
