"use client";

import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import TimelineItem from '../components/experience/TimelineItem';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          <span className="text-orange-300">02.</span>{" "}
          <span className="relative">
            Expérience Professionnelle
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-300 rounded-full"></span>
          </span>
        </motion.h1>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-orange-300/30">
            {experiences.map((exp, index) => (
              <TimelineItem 
                key={index}
                {...exp}
                isFirst={index === 0}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}