
import React from 'react';
import { ExternalLink, Github, Rocket } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

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
    <section ref={ref} id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"></div>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 glass rounded-full hover:scale-105 hover:bg-primary/10 transition-all duration-300 cursor-pointer group">
            <Rocket size={16} className="text-primary group-hover:animate-pulse" />
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">My Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:scale-105 transition-all duration-700 transform flex flex-col h-full group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
                <p className="text-muted-foreground/80 mb-6 leading-relaxed text-sm">{project.details}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 glass text-primary text-sm rounded-full border border-primary/20 font-medium transition-all duration-300 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      style={{ transitionDelay: `${400 + index * 150 + techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto">
                <a 
                  href="https://github.com/gargsparsh07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full gradient-primary text-white py-3 px-6 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Github size={18} />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
