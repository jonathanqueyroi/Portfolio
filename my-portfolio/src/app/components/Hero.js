"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black via-gray-900 to-red-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mt-4">Jonathan Queyroi</h1>
        <p className="text-xl md:text-2xl mt-2 text-gray-300">
          Développeur Fullstack & Chef de Projet
        </p>
        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          Passionné par la création de produits numériques innovants et la
          gestion de projets techniques.
        </p>
      </motion.div>
    </section>
  );
}
