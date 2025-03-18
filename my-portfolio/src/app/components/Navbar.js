"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white h-16 flex items-center px-6"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo / Titre */}
      <div className="flex-grow text-xl font-bold">MonPortfolio</div>

      {/* Liens de navigation sur écrans larges */}
      <div className="hidden md:flex gap-6">
        <a href="#hero" className="hover:text-red-400 transition-colors">
          Accueil
        </a>
        <a href="#skills" className="hover:text-red-400 transition-colors">
          Compétences
        </a>
        <a href="#projects" className="hover:text-red-400 transition-colors">
          Projets
        </a>
        <a href="#contact" className="hover:text-red-400 transition-colors">
          Contact
        </a>
      </div>

      {/* Bouton burger sur mobile */}
      <button
        onClick={handleToggle}
        className="md:hidden ml-4 focus:outline-none"
      >
        <span className="material-icons">menu</span>
      </button>

      {/* Menu déroulant sur mobile */}
      {isOpen && (
        <div className="absolute top-16 right-0 bg-gray-800 w-48 rounded-md shadow-md flex flex-col md:hidden">
          <a
            href="#hero"
            className="px-4 py-2 hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </a>
          <a
            href="#skills"
            className="px-4 py-2 hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Compétences
          </a>
          <a
            href="#projects"
            className="px-4 py-2 hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Projets
          </a>
          <a
            href="#contact"
            className="px-4 py-2 hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </motion.nav>
  );
}
