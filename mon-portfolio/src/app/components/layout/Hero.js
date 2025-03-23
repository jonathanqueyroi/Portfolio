// Hero.js
"use client";

import { useEffect, useRef } from 'react';
import Button from '../ui/Button';

export default function Hero({ scrollToNext }) {
  const heroRef = useRef(null);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative px-4">
      {/* Animated 3D Object - This would be replaced with a proper 3D component */}
      <div className="relative w-96 h-96 mb-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-72 h-72 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80 blur-sm animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full border-8 border-gradient-to-r from-blue-400 to-transparent rotate-45 transform opacity-80"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-56 h-56 rounded-full bg-transparent border-8 border-gradient-to-r from-transparent to-pink-400 -rotate-45 transform opacity-80"></div>
        </div>
      </div>
      
      {/* Text Content */}
      <div className="text-center z-10">
        <h2 className="tracking-widest text-sm font-light mb-2">INGÉNIEUR</h2>
        <h1 className="text-6xl md:text-7xl font-serif mb-4">JONATHAN QUEYROI</h1>
        <h3 className="text-xl tracking-widest text-orange-300">INFORMATIQUE INDUSTRIELLE & ÉLECTRONIQUE</h3>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 cursor-pointer" onClick={scrollToNext}>
        <div className="flex flex-col items-center animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}