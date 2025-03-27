"use client";

import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import ProjectGrid from '../components/projects/ProjectGrid';
import Button from '../components/ui/Button';

export default function ProjectsPage() {
  // Projets tirés de votre CV (identique à votre ProjectShowcase)
  const allProjects = [
    {
      id: 1,
      title: "Application de Gestion Industrielle",
      subtitle: "Développement full-stack d'une application pour Safran Aircraft Engines",
      description: "Conception et implémentation d'une solution complète permettant l'optimisation des processus industriels via une interface intuitive et moderne.",
      category: "Next.js · MongoDB · React",
      slug: "safran-app"
    },
    {
      id: 2,
      title: "Serious Game CDM",
      subtitle: "Jeu de sensibilisation au Closed Door Machining",
      description: "Développement d'un jeu interactif éducatif visant à sensibiliser les équipes aux bonnes pratiques de fabrication en environnement contrôlé.",
      category: "React · JavaScript · UI/UX",
      slug: "serious-game"
    },
    {
      id: 3,
      title: "Coffrets de Simulation",
      subtitle: "Conception de coffrets pour tester des armoires de contrôle-commande",
      description: "Création d'outils de simulation permettant de valider le bon fonctionnement des systèmes de contrôle-commande avant déploiement.",
      category: "Siemens S7-1200 · TIA-Portal · CAO",
      slug: "coffrets-simulation"
    },
    // Plus de projets si nécessaire
  ];

  return (
    <div className="bg-[#0a192f] min-h-screen text-white">
      <Navbar />

      <motion.main 
        className="container mx-auto px-4 py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-5xl font-bold mb-16 text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-orange-300">Mes</span> Projets
        </motion.h1>

        <ProjectGrid projects={allProjects} />

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button variant="outline" className="px-8 py-3">
            Télécharger mon CV
          </Button>
        </motion.div>
      </motion.main>
    </div>
  );
}