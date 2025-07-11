
import React from 'react';
import { Code, Users } from 'lucide-react';

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
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333B4F] mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-[#A88BEB] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {/* Technical Skills */}
          <div className="bg-[#F5F8FF] rounded-2xl p-8 border border-[#D3CCFF]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#A88BEB] rounded-lg">
                <Code size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#333B4F]">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white text-[#444] rounded-full border border-[#D3CCFF] hover:bg-[#A88BEB] hover:text-white transition-all duration-300 font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-[#F5F8FF] rounded-2xl p-8 border border-[#D3CCFF]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#FFD6A5] rounded-lg">
                <Users size={24} className="text-[#444]" />
              </div>
              <h3 className="text-2xl font-bold text-[#333B4F]">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white text-[#444] rounded-full border border-[#D3CCFF] hover:bg-[#FFD6A5] hover:text-[#333B4F] transition-all duration-300 font-medium shadow-sm"
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
