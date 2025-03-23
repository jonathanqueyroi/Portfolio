"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-[#0a192f]/90 backdrop-blur-sm' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo avec vos initiales JQ */}
        <Link href="/" className="flex items-center">
          <div className="font-bold text-lg flex items-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 15C25 20.5228 20.5228 25 15 25C9.47715 25 5 20.5228 5 15C5 9.47715 9.47715 5 15 5C20.5228 5 25 9.47715 25 15Z" stroke="white" strokeWidth="2"/>
              <path d="M35 25C35 30.5228 30.5228 35 25 35C19.4772 35 15 30.5228 15 25C15 19.4772 19.4772 15 25 15C30.5228 15 35 19.4772 35 25Z" stroke="white" strokeWidth="2"/>
              <text x="20" y="25" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">JQ</text>
            </svg>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path} 
              className={`text-sm uppercase hover:text-orange-300 transition-colors ${
                pathname === link.path ? 'text-orange-300' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button (à implémenter) */}
        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}