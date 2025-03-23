"use client";

import { useEffect, useState, useRef } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import Portfolio from './components/home/Portfolio';
import Footer from './components/layout/Footer';
import ProjectShowcase from './components/home/ProjectShowcase';
import ExperienceTimeline from './components/home/ExperienceTimeline';

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const portfolioRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-[#0a192f] text-white min-h-screen overflow-x-hidden">
      <Navbar />
      
      <div className="relative">
        {/* Hero Section with 3D Object */}
        <Hero scrollToNext={scrollToPortfolio} />
        
        {/* Portfolio Section (About & Skills) */}
        <div ref={portfolioRef}>
          <Portfolio />
        </div>
        
        {/* Experience Timeline */}
        <div ref={experienceRef}>
          <ExperienceTimeline />
        </div>
        
        {/* Project Showcase Section */}
        <div ref={projectsRef}>
          <ProjectShowcase />
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}