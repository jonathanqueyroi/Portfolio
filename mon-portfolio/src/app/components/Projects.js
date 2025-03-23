"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-700"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center p-6"
      >
        <h2 className="text-3xl font-bold mb-4">Mes Projets</h2>
        <p className="text-gray-200 mb-8">
          Aperçu de mes projets récents, mêlant design et performance.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Projet #1</h3>
            <p className="text-gray-300 mt-2">
              Description du projet, stack utilisée, rôles, etc.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Projet #2</h3>
            <p className="text-gray-300 mt-2">
              Description du projet, stack utilisée, rôles, etc.
            </p>
          </div>
          {/* Ajoute d'autres projets ici */}
        </div>
      </motion.div>
    </section>
  );
}
