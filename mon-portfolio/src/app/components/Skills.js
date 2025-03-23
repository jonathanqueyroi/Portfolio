"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  // L'option { once: true } joue l'animation une seule fois
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center p-6"
      >
        <h2 className="text-3xl font-bold mb-4">Mes Compétences</h2>
        <p className="text-gray-200 mb-8">
          Un aperçu des compétences que j’ai développées en tant que développeur et chef de projet.
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left text-gray-100">
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>Tailwind CSS</li>
          <li>Agilité / Scrum</li>
          <li>Git / GitHub</li>
          {/* ...ajoute tes skills */}
        </ul>
      </motion.div>
    </section>
  );
}
