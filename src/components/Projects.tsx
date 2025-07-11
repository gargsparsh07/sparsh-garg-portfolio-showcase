
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Product Recommender System",
      description: "An intelligent ML system that suggests personalized products based on past user behavior.",
      details: "Transforms raw interaction data into smart predictions with stunning data visualizations.",
      techStack: ["Python", "HTML", "CSS", "Pandas", "NumPy", "scikit-learn", "Seaborn", "Matplotlib", "ML"]
    },
    {
      title: "Egg Basket Game",
      description: "A nostalgic arcade game where players catch falling eggs in real time using interactive Python GUI.",
      details: "Rebuilt with smooth mechanics and logic-driven visuals to deliver a fun gaming experience.",
      techStack: ["Python", "Tkinter", "Random", "itertools", "Canvas"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#F5F8FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333B4F] mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-[#A88BEB] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-[#D3CCFF] hover:shadow-xl hover:shadow-[#A88BEB]/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#333B4F] mb-4">{project.title}</h3>
                <p className="text-[#444] mb-3 leading-relaxed">{project.description}</p>
                <p className="text-[#666] mb-6 leading-relaxed">{project.details}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#F5F8FF] text-[#A88BEB] text-sm rounded-full border border-[#D3CCFF] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto">
                <button className="w-full bg-[#333B4F] text-white py-3 px-6 rounded-lg font-medium hover:bg-gradient-to-r hover:from-[#a88beb] hover:to-[#f8ceec] transition-all duration-300 flex items-center justify-center gap-2">
                  <Github size={18} />
                  View on GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
