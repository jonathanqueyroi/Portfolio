"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';
import Navbar from '../components/layout/Navbar';

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filtrer les compétences par catégorie
  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  // Variantes pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Catégories uniques
  const categories = ['All', ...new Set(skillsData.map(skill => skill.category))];

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#0a192f] pt-32 px-4">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-16 text-center"
          >
            <span className="text-orange-300">03.</span>{" "}
            <span className="relative">
              Mes Compétences
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-300 rounded-full"></span>
            </span>
          </motion.h2>

          {/* Catégorie de filtrage */}
          <div className="flex justify-center mb-12">
            <div className="bg-[#112240] p-2 rounded-full flex space-x-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-orange-300 text-[#0a192f] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grille de compétences */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#112240] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4 text-orange-300">{skill.icon}</div>
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mt-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-orange-300"
                  ></motion.div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-400">Niveau</span>
                  <span className="text-sm text-white">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}