"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Composant Button stylisé
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

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  
  // Projets tirés de votre CV
  const featuredProjects = [
    {
      id: 1,
      title: "Application de Gestion Industrielle",
      subtitle: "Développement full-stack d'une application pour Safran Aircraft Engines",
      description: "Conception et implémentation d'une solution complète permettant l'optimisation des processus industriels via une interface intuitive et moderne.",
      image: "/images/projects/safran-app.jpg", // Placeholder
      category: "Next.js · MongoDB · React",
      slug: "safran-app"
    },
    {
      id: 2,
      title: "Serious Game CDM",
      subtitle: "Jeu de sensibilisation au Closed Door Machining",
      description: "Développement d'un jeu interactif éducatif visant à sensibiliser les équipes aux bonnes pratiques de fabrication en environnement contrôlé.",
      image: "/images/projects/serious-game.jpg", // Placeholder
      category: "React · JavaScript · UI/UX",
      slug: "serious-game"
    },
    {
      id: 3,
      title: "Coffrets de Simulation",
      subtitle: "Conception de coffrets pour tester des armoires de contrôle-commande",
      description: "Création d'outils de simulation permettant de valider le bon fonctionnement des systèmes de contrôle-commande avant déploiement.",
      image: "/images/projects/simulation.jpg", // Placeholder
      category: "Siemens S7-1200 · TIA-Portal · CAO",
      slug: "coffrets-simulation"
    }
  ];

  // Animation pour le défilement parallaxe
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const titleY = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Animation pour le titre de section
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  // Animation pour les projets
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * i
      }
    }),
    selected: {
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    unselected: {
      scale: 1,
      opacity: 0.7,
      filter: "grayscale(50%)",
      transition: {
        duration: 0.4
      }
    }
  };

  // Gestion du changement de projet automatique
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProject(prev => (prev + 1) % featuredProjects.length);
    }, 8000);
    
    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  // Ajout des points de navigation
  const navigateToProject = (index) => {
    setActiveProject(index);
  };

  // Animation pour la carte de projet (Info)
  const infoCardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  };

  return (
    <motion.section 
      ref={containerRef}
      className="py-32 relative overflow-hidden bg-[#0a192f]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="projects"
    >
      {/* Fond avec effet de grille
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div> */}
      
      {/* Sphère décorative animée */}
      <motion.div 
        className="absolute top-40 right-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Titre de section avec animation */}
        <motion.h2 
          className="text-4xl font-bold mb-24 text-center"
          variants={titleVariants}
        >
          <span className="text-orange-300">05.</span>{" "}
          <span className="relative">
            Mes projets
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-300 rounded-full"></span>
          </span>
        </motion.h2>

        {/* Points de navigation */}
        <div className="flex justify-center mb-16">
          <div className="flex space-x-3">
            {featuredProjects.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full ${activeProject === index ? 'bg-orange-300' : 'bg-gray-600'}`}
                onClick={() => navigateToProject(index)}
                whileHover={{ scale: 1.2 }}
                animate={activeProject === index ? 
                  { scale: [1, 1.2, 1], backgroundColor: "#fdba74" } : 
                  { scale: 1, backgroundColor: "#4b5563" }
                }
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>
        </div>

        {/* Conteneur principal des projets */}
        <div className="max-w-6xl mx-auto relative min-h-[600px]">
          <AnimatePresence mode="wait">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`absolute inset-0 ${index === activeProject ? 'z-10' : 'z-0'}`}
                initial="hidden"
                animate={index === activeProject ? "visible" : "hidden"}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                custom={index}
              >
                {/* Projet layout */}
                <div className="flex flex-col lg:flex-row items-center gap-8 h-full">
                  {/* Image du projet avec effet 3D */}
                  <motion.div 
                    className="w-full lg:w-3/5 relative z-10"
                    variants={projectVariants}
                    custom={index}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="relative overflow-hidden rounded-lg group">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 z-10 group-hover:opacity-0 transition-opacity duration-300"
                      />
                      <motion.div 
                        className="aspect-video bg-gray-800 relative rounded-lg shadow-2xl transform perspective-1000"
                        whileHover={{ 
                          rotateY: 5, 
                          rotateX: -5,
                          scale: 1.02,
                          transition: { duration: 0.5 }
                        }}
                      >
                        {/* Image placeholder avec gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center overflow-hidden rounded-lg">
                          <motion.h3 
                            className="text-2xl font-bold z-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {project.title}
                          </motion.h3>
                          
                          {/* Lignes de code décoratives en fond */}
                          <div className="absolute inset-0 opacity-20 overflow-hidden">
                            <pre className="text-xs text-left p-8 font-mono">
                              {`function optimize() {
  const process = new IndustrialProcess();
  process.analyze();
  process.improve();
  return process.getEfficiency();
}

// Amélioration des performances
const efficiency = optimize();
console.log(\`Efficiency improved: \${efficiency}%\`);`}
                            </pre>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Informations du projet */}
                  <motion.div 
                    className="w-full lg:w-2/5 z-20"
                    variants={infoCardVariants}
                  >
                    <div className="relative">
                      <span className="text-orange-300 font-mono text-sm mb-1 inline-block">Projet en vedette</span>
                      <h3 className="text-3xl font-bold mb-4 text-white">{project.title}</h3>
                      
                      <motion.div 
                        className="bg-[#112240] p-6 rounded-lg shadow-lg mb-6 relative z-10 border border-blue-500/10"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <p className="text-gray-300 mb-3">{project.subtitle}</p>
                        <p className="text-gray-400 text-sm">{project.description}</p>
                      </motion.div>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.category.split(' · ').map((tech, i) => (
                          <motion.span 
                            key={i} 
                            className="px-3 py-1 bg-[#172a4e] text-blue-300 rounded text-xs font-mono"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
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
                      
                      <div className="flex gap-4">
                        <Link href={`/projects/${project.slug}`}>
                          <Button variant="outline" className="flex items-center gap-2">
                            <span>Voir le projet</span>
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
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" className="text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lien vers tous les projets */}
        <motion.div 
          className="text-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/projects">
            <Button variant="outline" className="px-8 py-3">
              <span className="mr-2">Voir tous les projets</span>
              <motion.span
                animate={{ 
                  x: [0, 5, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 1.5,
                }}
              >
                →
              </motion.span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}