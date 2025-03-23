// Footer.js
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // Liens de navigation avec leur structure correcte
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" }
  ];

  const socialLinks = [
    { name: "GitHub", icon: <Github size={18} />, url: "https://github.com/jonathanqueyroi" },
    { name: "LinkedIn", icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/jonathan-queyroi-590a3b236/" },
    { name: "Email", icon: <Mail size={18} />, url: "mailto:jonath91220@gmail.com" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <footer className="py-12 bg-[#0a192f] border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Logo and Brief Description */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-1">
            <Link href="/">
              <div className="font-bold text-lg flex items-center mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 15C25 20.5228 20.5228 25 15 25C9.47715 25 5 20.5228 5 15C5 9.47715 9.47715 5 15 5C20.5228 5 25 9.47715 25 15Z" stroke="#ED8936" strokeWidth="2"/>
                  <path d="M35 25C35 30.5228 30.5228 35 25 35C19.4772 35 15 30.5228 15 25C15 19.4772 19.4772 15 25 15C30.5228 15 35 19.4772 35 25Z" stroke="#ED8936" strokeWidth="2"/>
                  <text x="20" y="25" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">JQ</text>
                </svg>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Ingénieur en informatique industrielle et électronique, spécialisé dans le développement d'applications web modernes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-300 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-white font-bold mb-4 text-lg">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path}
                    className={`text-gray-400 hover:text-orange-300 transition-colors flex items-center ${
                      pathname === link.path ? 'text-orange-300' : ''
                    }`}
                  >
                    <span className="text-orange-300 mr-2">›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-white font-bold mb-4 text-lg">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="block">Email:</span>
                <a href="mailto:jonath91220@gmail.com" className="hover:text-orange-300 transition-colors">jonath91220@gmail.com</a>
              </li>
              <li>
                <span className="block">Basé à:</span>
                <span>Paris, France</span>
              </li>
              <li className="pt-2">
                <a 
                  href="/contact" 
                  className="inline-flex items-center text-sm bg-[#112240] hover:bg-[#1a2f50] text-orange-300 px-4 py-2 rounded-md transition-colors mt-2"
                >
                  Me contacter <ExternalLink size={14} className="ml-2" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter or Latest Updates */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-white font-bold mb-4 text-lg">Restez connecté</h3>
            <p className="text-gray-400 text-sm mb-4">
              Abonnez-vous pour recevoir mes dernières actualités et projets.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-[#112240] text-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-orange-300 w-full"
              />
              <button 
                type="submit" 
                className="bg-orange-300 hover:bg-orange-400 text-[#0a192f] font-medium px-4 py-2 rounded-r-md transition-colors"
              >
                OK
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} QUEYROI. Tous droits réservés.
          </div>
          
          {/* Additional Links */}
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="/legal" className="hover:text-orange-300 transition-colors">Mentions légales</a>
            <a href="/privacy" className="hover:text-orange-300 transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}