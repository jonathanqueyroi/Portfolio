"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-screen bg-[#0a0d1c]"
      >
        {/* Arrière-plan : image 3D ou gradient */}
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
             style={{ backgroundImage: "url('/images/3d-ring.png')" }}
        ></div>

        <div className="z-10 text-center p-6">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            SIMON SPARKS <span className="block text-blue-400 text-2xl md:text-4xl">Generative Design</span>
          </motion.h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-lg md:text-xl">
            Découvrez mes créations numériques et mon approche unique du design 3D.
          </p>
        </div>
      </section>

      {/* ABOUT Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center bg-[#0e1226] p-6"
      >
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-8"
        >
          À propos de moi
        </motion.h2>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-center text-gray-300"
        >
          Passionné par l&apos;innovation et la création de visuels impactants,
          je conçois des expériences immersives pour le web et le mobile.
        </motion.p>
      </section>

      {/* WORK Section */}
      <section
        id="work"
        className="min-h-screen flex flex-col items-center justify-center bg-[#13172d] p-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-8"
        >
          Mes Projets
        </motion.h2>
        {/* Cartes de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#1b1f3a] p-4 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Project #1</h3>
            <p className="text-gray-300">
              Description du projet, technologies utilisées, lien vers le déploiement, etc.
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1b1f3a] p-4 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Project #2</h3>
            <p className="text-gray-300">
              Description du projet, technologies utilisées, lien vers le déploiement, etc.
            </p>
          </motion.div>
          {/* Ajoute autant de projets que nécessaire */}
        </div>
      </section>

      {/* SHOP Section (exemple) */}
      <section
        id="shop"
        className="min-h-[50vh] flex flex-col items-center justify-center bg-[#0e1226] p-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-4"
        >
          Boutique
        </motion.h2>
        <p className="max-w-2xl text-center text-gray-300">
          Propose éventuellement des prints 3D, des assets, ou autres services.
        </p>
      </section>

      {/* CONTACT Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-[#0a0d1c] p-6"
      >
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-6"
        >
          Contact
        </motion.h2>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl w-full text-gray-800"
        >
          {/* Formulaire de contact */}
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Votre nom"
              className="p-3 rounded-md"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="p-3 rounded-md"
            />
            <textarea
              rows={4}
              placeholder="Votre message"
              className="p-3 rounded-md"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            >
              Envoyer
            </button>
          </div>
        </motion.form>
      </section>
    </>
  );
}
