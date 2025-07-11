
import React from 'react';
import { Briefcase, GraduationCap, Award, Heart } from 'lucide-react';

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
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Work Experience */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333B4F] mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-[#A88BEB] mx-auto rounded-full"></div>
          </div>

          <div className="bg-[#F5F8FF] rounded-2xl p-8 border border-[#D3CCFF]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#A88BEB] rounded-lg">
                <Briefcase size={24} className="text-white" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#333B4F] mb-2">Machine Learning Intern</h3>
                <p className="text-[#A88BEB] font-medium mb-2">Campalin Innovations • April 2023 – June 2023</p>
                <ul className="space-y-2 text-[#444]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#A88BEB] mt-2">•</span>
                    <span>Worked on a major ML project titled House Price Prediction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A88BEB] mt-2">•</span>
                    <span>Handled data cleaning, training models, and evaluating accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A88BEB] mt-2">•</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#333B4F] mb-4">Academic Background</h2>
            <div className="w-24 h-1 bg-[#A88BEB] mx-auto rounded-full"></div>
          </div>

          <div className="bg-[#F5F8FF] rounded-2xl p-8 border border-[#D3CCFF]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FFD6A5] rounded-lg">
                <GraduationCap size={24} className="text-[#444]" />
              </div>
              <div className="flex-grow">
                <div className="mb-3">
                  <span className="bg-[#A88BEB] text-white px-3 py-1 rounded-full text-sm font-medium">B.Tech in CSE</span>
                </div>
                <h3 className="text-2xl font-bold text-[#333B4F] mb-2">B.Tech in Computer Science & Engineering</h3>
                <p className="text-[#444] font-medium mb-1">SRM Institute of Science and Technology, Delhi NCR</p>
                <p className="text-[#666]">2022 – 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333B4F] mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-[#A88BEB] mx-auto rounded-full"></div>
          </div>

          <div className="bg-[#F5F8FF] rounded-2xl p-8 border border-[#D3CCFF]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#A88BEB] rounded-lg">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#333B4F]">Professional Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-[#D3CCFF]">
                  <Award size={16} className="text-[#A88BEB] mt-1 flex-shrink-0" />
                  <span className="text-[#444]">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extracurriculars */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333B4F] mb-4">Extracurriculars</h2>
            <div className="w-24 h-1 bg-[#A88BEB] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F5F8FF] rounded-2xl p-8 border border-[#D3CCFF]">
              <div className="text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-[#333B4F] mb-2">Chess</h3>
                <p className="text-[#444]">Regular player, known for strategic thinking</p>
              </div>
            </div>
            <div className="bg-[#F5F8FF] rounded-2xl p-8 border border-[#D3CCFF]">
              <div className="text-center">
                <div className="p-3 bg-[#FFD6A5] rounded-full inline-block mb-4">
                  <Heart size={24} className="text-[#444]" />
                </div>
                <h3 className="text-xl font-bold text-[#333B4F] mb-2">Volunteering</h3>
                <p className="text-[#444]">Worked with Muskurahat Foundation on outreach and fundraising campaigns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
