"use client";

import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Image from 'next/image';

export default function About() {
  const aboutItems = [
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
  ];

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
          <span className="text-orange-300">01.</span>{" "}
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
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="relative rounded-lg overflow-hidden mb-8 shadow-xl">
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center">
                <Image 
                  src="/images/Jonathan.png" 
                  alt="Profile" 
                  width={500} 
                  height={500} 
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 border-4 border-orange-300 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#112240] p-8 rounded-lg shadow-xl mb-8">
              <p className="text-xl leading-relaxed text-gray-300 mb-6">
                Bienvenue sur mon portfolio ! Je suis un{" "}
                <span className="text-orange-300 font-semibold">ingénieur en informatique industrielle et électronique</span>
                , spécialisé dans le développement d'applications web modernes et la conception d'interfaces utilisateur intuitives.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Mon parcours m'a permis de développer une expertise dans l'optimisation des processus industriels via des solutions numériques innovantes, en combinant mes connaissances techniques avec une approche créative de la résolution de problèmes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aboutItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-300"
                >
                  <div className="flex items-start mb-3">
                    <span className="text-3xl mr-4">{item.icon}</span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}