'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.link.replace('#', ''));
      const scrollPosition = window.scrollY + 100;
      const isScrolled = window.scrollY > 10;

      setScrolled(isScrolled);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`w-full h-[80px] fixed top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#030014]/98 backdrop-blur-lg border-b border-[#2A0E61]/50 shadow-2xl' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between px-6 lg:px-10 max-w-7xl mx-auto">
        {/* Logo + Name */}
        <Link
          href="#home"
          className="flex items-center group"
        >
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
          </div>
          <div className="hidden md:flex ml-4">
            <span className="text-white font-bold text-xl">Abhiram</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold text-xl ml-1">
              Sankarasetty
            </span>
          </div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden lg:flex items-center space-x-4">
          {NAV_LINKS.map((link) => {
            const sectionId = link.link.replace('#', '');
            const isActive = activeSection === sectionId;
            
            return (
              <button
                key={link.title}
                onClick={() => scrollToSection(sectionId)}
                className={`relative transition-all duration-300 font-medium text-xs uppercase tracking-wide group ${
                  isActive 
                    ? 'text-cyan-300' 
                    : 'text-white hover:text-cyan-300'
                }`}
              >
                {link.title}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 rounded-full ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            );
          })}
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex items-center space-x-3">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              className="p-3 rounded-xl bg-gradient-to-r from-[#2A0E61]/60 to-[#7042f8]/40 hover:from-[#2A0E61]/80 hover:to-[#7042f8]/60 transition-all duration-300 hover:scale-110 border border-[#7042f8]/30"
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none p-3 bg-[#2A0E61]/40 rounded-lg border border-[#7042f8]/30"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
            }`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0'
      } overflow-hidden bg-[#030014]/98 backdrop-blur-lg border-t border-[#2A0E61]/50`}>
        <div className="px-6 py-6 space-y-4">
          {/* Links */}
          {NAV_LINKS.map((link) => {
            const sectionId = link.link.replace('#', '');
            const isActive = activeSection === sectionId;
            
            return (
              <button
                key={link.title}
                onClick={() => {
                  scrollToSection(sectionId);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-center py-3 border-b border-[#2A0E61]/30 rounded-lg transition-all duration-300 font-bold ${
                  isActive 
                    ? 'text-cyan-300 bg-[#2A0E61]/30' 
                    : 'text-white hover:text-cyan-300 hover:bg-[#2A0E61]/20'
                }`}
              >
                {link.title}
              </button>
            );
          })}
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-4 pt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                className="p-4 rounded-xl bg-gradient-to-r from-[#2A0E61]/60 to-[#7042f8]/40 hover:from-[#2A0E61]/80 hover:to-[#7042f8]/60 transition-all duration-300 border border-[#7042f8]/30"
              >
                <Icon className="h-7 w-7 text-white" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};