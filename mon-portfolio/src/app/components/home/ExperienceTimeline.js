import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  
  const experiences = [
    {
      company: "Safran Aircraft Engines",
      position: "Apprenti Ingénieur & Chef de Projet en Développement d’Industrie Numérique",
      period: "09/2022 - 08/2025",
      location: "Evry, France",
      description: [
        "Développement full-stack et conception UI/UX d'une application innovante, incluant la réalisation de maquettes sous Figma et le développement avec Next.js, MongoDB et API Routes.",
        "Gestion de projet agile : supervision d'un apprenti et coordination d'un prestataire pour assurer la qualité et la performance du développement.",
        "Création et implémentation d'un serious game « Closed Door Machining » pour sensibiliser les équipes aux enjeux de l'industrialisation numérique.",
        "Conception et programmation d'interfaces réactives avec HTML, CSS, React et Tailwind pour une expérience utilisateur optimale."
      ],
      tech: ["Next.js", "MongoDB", "React", "Tailwind", "Figma"]
    },
    {
      company: "Sega",
      position: "Technicien Contrôle Qualité",
      period: "07/2021 - 07/2021",
      location: "Angerville, France",
      description: [
        "Réalisation de tests fonctionnels approfondis sur des armoires électriques pour vérifier leur conformité aux normes opérationnelles et aux standards de qualité.",
        "Inspection détaillée des branchements et connexions afin de minimiser les risques de défaillance et garantir la sécurité.",
        "Contribution à l'assurance qualité par la réalisation de tests finaux et la validation du bon fonctionnement avant expédition."
      ]
    },
    {
      company: "Eneria",
      position: "Chargé de projet",
      period: "04/2021 - 06/2021",
      location: "Montlhery, France",
      description: [
        "Pilotage intégral d'un projet de conception de coffrets de simulation pour tester les armoires de contrôle-commande, depuis l'analyse des besoins jusqu'à la validation finale.",
        "Programmation d'automates Siemens S7-1200 via TIA-Portal et conception de schémas électriques assistée par CAO.",
        "Coordination de projet incluant la gestion des fournisseurs et le suivi des achats pour optimiser les processus de production.",
        "Assemblage rigoureux et réalisation de tests de validation pour assurer la conformité et la fiabilité des produits."
      ],
      tech: ["Siemens S7-1200", "TIA-Portal", "CAO", "Gestion de projet", "Relations clients", "Techniques d'automatisation"]
    },
    {
      company: "SEGA",
      position: "Monteur-câbleur",
      period: "juil. 2019 - juil. 2019",
      location: "Angerville, Île-de-France, France",
      description: [
        "Durant ce contrat saisonnier d'un mois chez SEGA, j'ai participé à l'assemblage, au câblage et à la préparation d'armoires électriques, en respectant des procédures de production strictes pour garantir la qualité et la conformité des produits.",
        "Assemblage de l'ossature des armoires : Montage des structures métalliques en suivant les instructions techniques.",
        "Préparation des platines : Perçage et préparation des platines pour une fixation optimale des composants.",
        "Installation des goulottes et rails : Fixation soignée pour organiser le câblage et sécuriser l'ensemble.",
        "Câblage et tests : Réalisation complète du câblage accompagné de tests rigoureux pour valider le fonctionnement.",
        "Emballage et préparation à l'expédition : Conditionnement des armoires selon les normes de sécurité pour garantir une livraison sans dommage."
      ],
      tech: ["Compétences manuelles et techniques", "Rigueur et respect des normes"]
    },
    {
      company: "SEGA",
      position: "Monteur-câbleur",
      period: "juil. 2018 - juil. 2018",
      location: "Angerville, Île-de-France, France",
      description: [
        "Durant ce contrat saisonnier d'un mois chez SEGA, j'ai participé à l'assemblage, au câblage et à la préparation d'armoires électriques, en respectant des procédures de production strictes pour garantir la qualité et la conformité des produits.",
        "Assemblage de l'ossature des armoires : Montage des structures métalliques en suivant les instructions techniques.",
        "Préparation des platines : Perçage et préparation des platines pour une fixation optimale des composants.",
        "Installation des goulottes et rails : Fixation soignée pour organiser le câblage et sécuriser l'ensemble.",
        "Câblage et tests : Réalisation complète du câblage accompagné de tests rigoureux pour valider le fonctionnement.",
        "Emballage et préparation à l'expédition : Conditionnement des armoires selon les normes de sécurité pour garantir une livraison sans dommage."
      ],
      tech: ["Compétences manuelles et techniques", "Rigueur et respect des normes"]
    },
  ];

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % experiences.length);
      }, 8000); // Change active experience every 8 seconds
      
      return () => clearInterval(interval);
    }
  }, [isInView, experiences.length]);

  // Animation variants
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    exit: { y: -50, opacity: 0, transition: { duration: 0.3 } }
  };

  const timelineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  const backgroundAnimation = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%'],
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <section className="py-24 bg-[#0a192f] relative overflow-hidden" id="experience">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{
          background: 'linear-gradient(45deg, #0a192f 25%, #112240 50%, #233554 75%, #0a192f 100%)',
          backgroundSize: '400% 400%'
        }}
        animate="animate"
        variants={backgroundAnimation}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-16 text-center"
          >
            <span className="text-orange-300">04.</span>{" "}
            <span className="relative">
              Mon parcours professionnel
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-300 rounded-full"></span>
            </span>
        </motion.h2>

        <motion.p 
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Mon expérience professionnelle dans le développement et l'ingénierie
        </motion.p>
        
        <div ref={containerRef} className="max-w-6xl mx-auto">
          {/* Interactive Timeline Navigation */}
          <div className="mb-16">
            <motion.div 
              className="h-1 bg-gray-700 rounded-full relative w-full max-w-3xl mx-auto"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={timelineVariants}
            >
              {experiences.map((exp, index) => (
                <motion.button
                  key={index}
                  className={`absolute top-0 transform -translate-y-1/2 w-6 h-6 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-orange-300 scale-125' 
                      : 'bg-blue-500 hover:bg-blue-400'
                  }`}
                  style={{ left: `${(index / (experiences.length - 1)) * 100}%` }}
                  onClick={() => setActiveIndex(index)}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-mono">
                    {exp.period.split(' - ')[0]}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </div>
          
          {/* Experience Cards */}
          <div className="relative min-h-[500px]">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 ${activeIndex === index ? 'z-10' : 'z-0 pointer-events-none'}`}
                initial="hidden"
                animate={activeIndex === index ? "visible" : "exit"}
                variants={cardVariants}
                custom={index}
              >
                <div className="bg-gradient-to-r from-[#112240] to-[#1a2d50] p-8 rounded-xl shadow-2xl border-l-4 border-orange-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-1/3">
                      <div className="bg-[#0a192f]/60 p-6 rounded-lg mb-4">
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                        <div className="flex items-center mb-2">
                          <span className="text-orange-300 font-medium">{exp.company}</span>
                          <span className="text-gray-400 mx-2">•</span>
                          <span className="text-gray-400">{exp.location}</span>
                        </div>
                        <span className="inline-block bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm mb-2 font-mono">
                          {exp.period}
                        </span>
                        
                        {exp.tech && exp.tech.length > 0 && (
                          <div className="mt-4">
                            <h4 className="text-gray-300 text-sm mb-2 font-semibold">Technologies utilisées</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.tech.map((item, idx) => (
                                <span key={idx} className="px-2 py-1 bg-[#172a4e] text-blue-300 rounded text-xs font-mono relative overflow-hidden group">
                                  <span className="relative z-10">{item}</span>
                                  <span className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-20"></span>
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h4 className="text-blue-300 font-semibold mb-4 font-mono">Responsabilités & Réalisations</h4>
                      <ul className="space-y-3">
                        {exp.description.map((item, idx) => (
                          <motion.li
                            key={idx}
                            className="pl-6 relative text-gray-300 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-3 before:h-3 before:rounded-full before:bg-blue-500 before:transform before:translate-y-[-50%]"
                            initial={{ opacity: 0, x: -20 }}
                            animate={activeIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-10 gap-4">
            <motion.button
              className="p-3 rounded-full bg-[#112240] hover:bg-[#172a4e] text-white transition duration-300"
              onClick={() => setActiveIndex(prev => (prev - 1 + experiences.length) % experiences.length)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.6 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.div className="flex items-center gap-2">
              {experiences.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-orange-300' : 'bg-gray-600'}`}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                />
              ))}
            </motion.div>
            
            <motion.button
              className="p-3 rounded-full bg-[#112240] hover:bg-[#172a4e] text-white transition duration-300"
              onClick={() => setActiveIndex(prev => (prev + 1) % experiences.length)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.6 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}