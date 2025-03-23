"use client";

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Portfolio() {
  const [activeSkill, setActiveSkill] = useState(1);
  const [maxHeight, setMaxHeight] = useState(0);
  const skillContentRefs = useRef([]);

  const skills = [
    {
      id: 1,
      title: "FRONTEND",
      description: "Développement d'interfaces modernes et réactives avec les technologies web les plus récentes",
      items: [
        { name: "Next.js", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "React", level: 95 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      id: 2,
      title: "BACKEND",
      description: "Conception et développement d'APIs robustes et de systèmes de bases de données performants",
      items: [
        { name: "Flask", level: 80 },
        { name: "FastAPI", level: 85 },
        { name: "API Routes", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "SQLite", level: 80 },
        { name: "MySQL", level: 85 }
      ]
    },
    {
      id: 3,
      title: "OUTILS",
      description: "Maîtrise des outils essentiels pour le développement professionnel et la conception",
      items: [
        { name: "Docker", level: 85 },
        { name: "Git", level: 95 },
        { name: "Figma", level: 80 },
        { name: "UI/UX Design", level: 85 }
      ]
    }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill(prev => prev === skills.length ? 1 : prev + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [skills.length]);

  // Effet pour calculer la hauteur maximale des sections de compétences
  useEffect(() => {
    // Assurez-vous que les refs sont disponibles
    if (skillContentRefs.current.length === skills.length) {
      // Obtenez les hauteurs de tous les contenus
      const heights = skillContentRefs.current.map(ref => 
        ref ? ref.getBoundingClientRect().height : 0
      );
      
      // Définir la hauteur maximale
      setMaxHeight(Math.max(...heights));
    }
  }, [skills.length]);

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

  return (
    <section className="min-h-screen bg-[#0a192f] py-20 px-4" id="about">
      {/* About Section */}
      <div className="container mx-auto mb-20">
        <motion.h2 
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
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <div className="relative rounded-lg overflow-hidden mb-8 shadow-xl">
                <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center">
                  {/* Placeholder for profile image */}
                  <div className="text-6xl">👨‍💻</div>
                  {/* Uncomment and modify to use actual image */}
                  <Image src="/images/Jonathan.png" alt="Profile" fill className="object-cover"/>
                </div>
                <div className="absolute inset-0 border-4 border-orange-300 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
              </div>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7"
            >
              <motion.div 
                variants={itemVariants}
                className="bg-[#112240] p-8 rounded-lg shadow-xl mb-8 transform hover:-translate-y-2 transition-all duration-300"
              >
                <p className="text-xl leading-relaxed text-gray-300 mb-6">
                  Bienvenue sur mon portfolio ! Je suis un{" "}
                  <span className="text-orange-300 font-semibold">ingénieur en informatique industrielle et électronique</span>
                  , spécialisé dans le développement d'applications web modernes et la conception d'interfaces utilisateur intuitives.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  Mon parcours m'a permis de développer une expertise dans l'optimisation des processus industriels via des solutions numériques innovantes, en combinant mes connaissances techniques avec une approche créative de la résolution de problèmes.
                </p>
              </motion.div>

              <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {aboutItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-300"
                  >
                    <div className="flex items-start mb-3">
                      <span className="text-3xl mr-4">{item.icon}</span>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="container mx-auto mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          <span className="text-orange-300">02.</span>{" "}
          <span className="relative">
            Compétences
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-300 rounded-full"></span>
          </span>
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          {/* Skill Navigation */}
          <div className="flex justify-center mb-10">
            <div className="bg-[#112240] p-2 rounded-full flex space-x-4">
              {skills.map((skill) => (
                <button
                  key={skill.id}
                  onClick={() => setActiveSkill(skill.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeSkill === skill.id
                      ? "bg-orange-300 text-[#0a192f] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {skill.title}
                </button>
              ))}
            </div>
          </div>

          {/* Conteneur à hauteur fixe pour les sections de compétences */}
          <div className="relative" style={{ height: maxHeight > 0 ? `${maxHeight}px` : 'auto' }}>
            {/* Active Skill Content */}
            {skills.map((skill, index) => {
              // Initialiser les refs lors du premier rendu
              if (!skillContentRefs.current[index]) {
                skillContentRefs.current[index] = null;
              }
              
              return (
                <div
                  key={skill.id}
                  ref={el => skillContentRefs.current[index] = el}
                  className={`transition-all duration-500 ${
                    activeSkill === skill.id
                      ? "opacity-100 visible absolute top-0 left-0 right-0"
                      : "opacity-0 invisible absolute top-0 left-0 right-0"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeSkill === skill.id ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#112240] rounded-xl p-8 shadow-xl"
                  >
                    <h3 className="text-2xl font-bold mb-2 text-orange-300">
                      {skill.title}
                    </h3>
                    <p className="text-gray-300 mb-8">{skill.description}</p>

                    <div className="space-y-6">
                      {skill.items.map((item, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium text-white">{item.name}</span>
                            <span className="text-gray-400">{item.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${item.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-orange-300"
                            ></motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* 3D Showcase Section (Redesigned) */}
      <div className="container mx-auto mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          <span className="text-orange-300">03.</span>{" "}
          <span className="relative">
            Ma passion
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-300 rounded-full"></span>
          </span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-xl overflow-hidden shadow-2xl"
        >
          {/* Background with animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-80 z-0">
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', 
              backgroundSize: '30px 30px' 
            }}></div>
          </div>

          <div className="relative z-10 p-8">
            {/* Floating title with glow effect */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12 text-center"
            >
              <h2 className="text-4xl font-bold text-white inline-block relative">
                <span className="relative z-10">TECHNOLOGIES & INDUSTRIES</span>
                <span className="absolute -inset-1 bg-orange-300 opacity-20 blur-xl rounded-lg z-0"></span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-orange-300 mx-auto mt-3 rounded-full"></div>
            </motion.div>
            
            {/* Interactive passion cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: "🏎️",
                  title: "Sports mécaniques",
                  description: "Passion pour la performance et l'innovation technologique dans le monde automobile",
                  color: "from-blue-600 to-blue-900",
                  delay: 0.3
                },
                {
                  icon: "✈️",
                  title: "Aviation & Voyages",
                  description: "Fascination pour l'aéronautique et découverte de nouvelles cultures",
                  color: "from-purple-600 to-purple-900",
                  delay: 0.5
                },
                {
                  icon: "🏃",
                  title: "Activités sportives",
                  description: "Pratique régulière d'activités physiques pour maintenir un équilibre vie-travail",
                  color: "from-orange-500 to-orange-800",
                  delay: 0.7
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className={`bg-[#112240] rounded-lg overflow-hidden transform transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-700`}
                >
                  <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                  <div className="p-6">
                    <div className="flex justify-center mb-4">
                      <motion.div 
                        whileHover={{ rotate: 10, scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="text-5xl relative"
                      >
                        <span>{item.icon}</span>
                        <span className="absolute inset-0 opacity-30 blur-xl bg-orange-300 rounded-full"></span>
                      </motion.div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-center text-white">{item.title}</h3>
                    <p className="text-gray-300 text-center">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Description with animated highlight */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="bg-[#112240] p-8 rounded-xl border border-gray-700"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                Passionné par les technologies industrielles et l'aviation, j'explore constamment comment 
                <motion.span 
                  initial={{ color: "#CBD5E0" }}
                  animate={{ color: "#FBD38D" }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  className="font-semibold mx-1"
                >
                  l'informatique industrielle
                </motion.span>
                peut transformer les processus de production et améliorer l'efficacité des systèmes.
                Cette passion me pousse à rester à l'avant-garde de l'innovation technologique et à créer des solutions qui ont un 
                <motion.span 
                  initial={{ color: "#CBD5E0" }}
                  animate={{ color: "#FBD38D" }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                  className="font-semibold mx-1"
                >
                  impact réel
                </motion.span>.
              </p>
            </motion.div>
            
            {/* Visual accent elements */}
            <div className="absolute top-10 right-10 w-32 h-32 opacity-20">
              <motion.div 
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
                className="w-full h-full border-4 border-orange-300 rounded-full"
              ></motion.div>
            </div>
            
            <div className="absolute bottom-20 left-10 w-16 h-16 opacity-20">
              <motion.div 
                animate={{ 
                  rotate: -360,
                  x: [0, 10, 0],
                  y: [0, 10, 0]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
                className="w-full h-full border-4 border-blue-500 rounded-full"
              ></motion.div>
            </div>
          </div>
            </motion.div>
            
            {/* Interactive skills showcase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 bg-[#112240] rounded-xl p-6 shadow-lg border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-orange-300">Ce qui me passionne vraiment</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Innovation technologique",
                    description: "Explorer de nouvelles technologies et les appliquer à des problèmes concrets du monde industriel",
                    icon: "💡",
                    delay: 0.2
                  },
                  {
                    title: "Performance & Optimisation",
                    description: "Perfectionner les systèmes et processus pour atteindre une efficacité maximale",
                    icon: "⚡",
                    delay: 0.4
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: item.delay }}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-start p-4 rounded-lg bg-[#1a2f50]"
                  >
                    <div className="p-3 bg-blue-900/50 rounded-lg mr-4">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
    </section>
  );
}