"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send, 
  MapPin, 
  PhoneCall 
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    sending: false,
    success: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ sending: true, success: false, error: false });

    try {
      // Simulation d'envoi de formulaire
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setFormStatus({ 
        sending: false, 
        success: true, 
        error: false 
      });
    } catch (error) {
      setFormStatus({ 
        sending: false, 
        success: false, 
        error: true 
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-orange-300" />,
      title: "Email",
      content: "jonathan.quelard@example.com",
      link: "mailto:jonathan.quelard@example.com"
    },
    {
      icon: <Linkedin className="text-orange-300" />,
      title: "LinkedIn",
      content: "Jonathan Quelard",
      link: "https://www.linkedin.com/in/jonathanquelard"
    },
    {
      icon: <Github className="text-orange-300" />,
      title: "GitHub",
      content: "JonathanQuelard",
      link: "https://github.com/jonathanquelard"
    }
  ];

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
    <>
      <Navbar />
      <section className="min-h-screen bg-[#0a192f] pt-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-16 text-center"
          >
            <span className="text-orange-300">04.</span>{" "}
            <span className="relative">
              Contact
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-300 rounded-full"></span>
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold text-white mb-6"
              >
                Contactez-moi
              </motion.h3>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-[#112240] p-6 rounded-xl flex items-center space-x-6 hover:bg-[#1a2f50] transition-all duration-300"
                >
                  <div className="bg-[#1a2f50] p-3 rounded-full">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <a 
                      href={info.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-orange-300 transition-colors"
                    >
                      {info.content}
                    </a>
                  </div>
                </motion.div>
              ))}

              <motion.div 
                variants={itemVariants}
                className="bg-[#112240] p-6 rounded-xl"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <MapPin className="text-orange-300" />
                  <span className="text-white">Paris, France</span>
                </div>
                <div className="flex items-center space-x-4">
                  <PhoneCall className="text-orange-300" />
                  <span className="text-white">+33 6 XX XX XX XX</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Formulaire de contact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <form 
                onSubmit={handleSubmit} 
                className="bg-[#112240] p-8 rounded-xl shadow-xl space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2">Nom</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0a192f] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-300"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0a192f] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2">Sujet</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a192f] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-300"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-[#0a192f] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-300"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus.sending}
                  className={`w-full flex items-center justify-center py-3 rounded-lg transition-all duration-300 ${
                    formStatus.sending 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-orange-300 hover:bg-orange-400 text-[#0a192f]'
                  }`}
                >
                  {formStatus.sending ? (
                    <span>Envoi en cours...</span>
                  ) : (
                    <>
                      <Send className="mr-2" /> Envoyer le message
                    </>
                  )}
                </button>

                {formStatus.success && (
                  <div className="mt-4 p-4 bg-green-600/20 border border-green-600 text-green-300 rounded-lg text-center">
                    Votre message a été envoyé avec succès !
                  </div>
                )}

                {formStatus.error && (
                  <div className="mt-4 p-4 bg-red-600/20 border border-red-600 text-red-300 rounded-lg text-center">
                    Une erreur s'est produite. Veuillez réessayer.
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}