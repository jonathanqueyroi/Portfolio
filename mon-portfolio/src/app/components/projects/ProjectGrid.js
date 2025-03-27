"use client";

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects }) => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      animate="visible"
    >
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          index={index} 
        />
      ))}
    </motion.div>
  );
};

export default ProjectGrid;