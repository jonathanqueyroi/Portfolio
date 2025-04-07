"use client";

import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState(0);
  
  const aboutTabs = [
    {
      title: "Profil",
      icon: "👨‍💻",
      content: (
        <div className="space-y-4">
          <p className="text-xl leading-relaxed text-gray-300">
            Bienvenue sur mon portfolio ! Je suis un{" "}
            <span className="text-orange-300 font-semibold">ingénieur en informatique industrielle et électronique</span>
            , spécialisé dans le développement d'applications web modernes et la conception d'interfaces utilisateur intuitives.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            Mon parcours m'a permis de développer une expertise dans l'optimisation des processus industriels via des solutions numériques innovantes, en combinant mes connaissances techniques avec une approche créative de la résolution de problèmes.
          </p>
        </div>
      )
    },
    {
      title: "Compétences",
      icon: "🛠️",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Développement Front-end", level: 90 },
            { name: "Développement Back-end", level: 85 },
            { name: "UI/UX Design", level: 80 },
            { name: "DevOps", level: 75 },
            { name: "Gestion de Projet", level: 85 },
            { name: "Systèmes Embarqués", level: 80 }
          ].map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-orange-300 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-[#0a192f] rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-orange-300 to-orange-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Services",
      icon: "🚀",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Ingénierie & Développement",
              description: "Ingénieur en informatique industrielle et électronique avec une expertise en développement full-stack et interfaces UI/UX.",
              icon: "💻"
            },
            {
              title: "Gestion de Projet",
              description: "Expérience confirmée en coordination d'équipes et gestion de projets technologiques complexes.",
              icon: "📊"
            },
            {
              title: "Optimisation Industrielle",
              description: "Spécialiste en optimisation des processus industriels via des solutions numériques innovantes.",
              icon: "🔧"
            },
            {
              title: "Innovation & Veille",
              description: "Passionné par l'innovation technologique et l'intégration de nouvelles technologies.",
              icon: "💡"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-300 hover:translate-y-[-5px]"
            >
              <div className="flex items-start mb-3">
                <span className="text-3xl mr-4">{item.icon}</span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      title: "Parcours",
      icon: "🎓",
      content: (
        <div className="relative border-l-2 border-orange-300 pl-8 space-y-8 py-2">
          {[
            {
              period: "2020 - Présent",
              title: "Ingénieur développement full-stack",
              company: "Entreprise XYZ",
              description: "Développement d'applications web et optimisation des processus industriels."
            },
            {
              period: "2018 - 2020",
              title: "Développeur front-end",
              company: "Entreprise ABC",
              description: "Conception et développement d'interfaces utilisateur pour applications web."
            },
            {
              period: "2015 - 2018",
              title: "Diplôme d'ingénieur",
              company: "École d'ingénieurs",
              description: "Spécialisation en informatique industrielle et électronique."
            }
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-orange-300"></div>
              <div className="mb-1 text-orange-300 font-medium">{item.period}</div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <div className="text-gray-400 mb-2">{item.company}</div>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      )
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          <span className="text-orange-300"></span>{" "}
          <span className="relative">
            À propos
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-300 rounded-full"></span>
          </span>
        </motion.h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <div className="relative rounded-lg overflow-hidden mb-8 group">
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center overflow-hidden">
                <Image 
                  src="/images/Jonathan.png" 
                  alt="Profile" 
                  width={500} 
                  height={500} 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute inset-0 border-4 border-orange-300 rounded-lg transform translate-x-4 translate-y-4 -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#112240] p-6 rounded-lg shadow-xl mb-8"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-orange-300 mr-2">📱</span> Contact
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-orange-300 mr-3">📧</span>
                  <span className="text-gray-300">jonathan@example.com</span>
                </li>
                <li className="flex items-center">
                  <span className="text-orange-300 mr-3">📞</span>
                  <span className="text-gray-300">+33 6 XX XX XX XX</span>
                </li>
                <li className="flex items-center">
                  <span className="text-orange-300 mr-3">📍</span>
                  <span className="text-gray-300">Paris, France</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8"
          >
            {/* Tabs navigation */}
            <div className="flex overflow-x-auto mb-6 pb-2 scrollbar-hide">
              {aboutTabs.map((tab, index) => (
                <motion.button
                  key={index}
                  variants={itemVariants}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center px-6 py-3 mr-2 rounded-lg whitespace-nowrap transition-all ${
                    activeTab === index 
                      ? "bg-[#112240] text-orange-300 shadow-lg border-b-2 border-orange-300" 
                      : "bg-[#0c2348] text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.title}
                </motion.button>
              ))}
            </div>

            {/* Tab content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#112240] p-8 rounded-lg shadow-xl"
            >
              {aboutTabs[activeTab].content}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}