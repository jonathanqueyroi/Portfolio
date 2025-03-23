// pages/experience.js
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      company: "Safran Aircraft Engines",
      location: "Evry, France",
      position: "Apprenti Ingénieur en Développement d'Industrie Numérique",
      period: "09/2022 - 08/2025",
      tasks: [
        "Développement et gestion d'une application : conception, maquettes (Figma), développement full-stack (Next.js, MongoDB, API Routes).",
        "Gestion d'un projet en supervisant un apprenti tout en manageant un prestataire pour le développement du code de l'application.",
        "Conception et développement d'un serious game pour sensibiliser au Closed Door Machining (CDM).",
        "Programmation d'interfaces UI/UX et développement Web (HTML, CSS, React, Tailwind)."
      ]
    },
    {
      company: "Sega",
      location: "Angerville, France",
      position: "Technicien Contrôle Qualité",
      period: "07/2021 - 07/2021",
      tasks: [
        "Réalisation de tests fonctionnels complets des armoires électriques en vérifiant leur conformité aux exigences opérationnelles et aux standards de qualité.",
        "Inspection minutieuse des branchements et connexions pour minimiser les risques de défaillance.",
        "Contribution à l'assurance qualité en réalisant des tests finaux et validation du bon fonctionnement avant expédition aux clients."
      ]
    },
    {
      company: "Eneria",
      location: "Montlhery, France",
      position: "Chargé de projet",
      period: "04/2021 - 06/2021",
      tasks: [
        "Gestion complète d'un projet de conception de coffrets de simulation pour tester les armoires de contrôle-commande, de l'analyse des besoins à la validation finale.",
        "Programmation d'automates Siemens S7-1200 via TIA-Portal et conception de schémas électriques en CAO.",
        "Gestion de projet avec coordination des fournisseurs et suivi des achats.",
        "Assemblage et tests de validation pour garantir la conformité et la fiabilité du produit."
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 pb-16">
      <Head>
        <title>Expérience | Jonathan Queyroi</title>
        <meta name="description" content="Parcours professionnel et expériences de Jonathan Queyroi" />
      </Head>

      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Expérience Professionnelle</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-gray-800 rounded-lg p-8 shadow-lg relative"
            >
              <div className="absolute -left-2 top-8 h-full w-1 bg-blue-500" style={{ height: 'calc(100% - 4rem)' }}></div>
              
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-blue-400">{exp.position}</h3>
                <p className="text-gray-400 font-medium mt-1 md:mt-0">{exp.period}</p>
              </div>
              
              <div className="flex items-center mb-6">
                <h4 className="font-semibold">{exp.company}</h4>
                <span className="mx-2 text-gray-500">|</span>
                <p className="text-gray-400">{exp.location}</p>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}