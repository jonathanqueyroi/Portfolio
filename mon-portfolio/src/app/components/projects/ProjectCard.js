"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Button = ({ children, variant = "default", className = "", ...props }) => {
  const baseClasses = "px-4 py-2 rounded font-medium transition-all duration-300 text-sm";
  
  const variants = {
    default: "bg-orange-300 text-[#0a192f] hover:bg-orange-400",
    outline: "border border-orange-300 text-orange-300 hover:bg-orange-300/10",
    ghost: "text-gray-300 hover:text-white hover:bg-white/5"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      className="bg-[#112240] rounded-lg overflow-hidden shadow-lg border border-blue-500/10 group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5, 
          delay: index * 0.1 
        } 
      }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 group-hover:opacity-0 transition-opacity duration-300 z-10" />
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-30 group-hover:opacity-20 transition-opacity">
            <pre className="text-xs text-left p-4 font-mono text-white/50">
              {`function ${project.title.toLowerCase().replace(/\s/g, '')}() {
  const technologies = [${project.category.split(' · ').map(tech => `"${tech}"`).join(', ')}];
  return technologies.optimize();
}`}
            </pre>
          </div>
          <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white/80 z-20">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <span className="text-orange-300 font-mono text-xs mb-2 block">Projet</span>
        <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
        
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.category.split(' · ').map((tech, i) => (
            <motion.span 
              key={i} 
              className="px-2 py-1 bg-[#172a4e] text-blue-300 rounded text-xs font-mono"
              whileHover={{ 
                y: -2,
                backgroundColor: "#1a2f50", 
                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)"
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-3">
          <Link href={`/projects/${project.slug}`}>
            <Button variant="outline" className="flex items-center gap-2">
              <span>Voir détails</span>
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ 
                  repeat: Infinity,
                  duration: 1.5,
                  repeatType: "loop"
                }}
              >→</motion.span>
            </Button>
          </Link>
          <Link href={project.githubLink || "#"} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;