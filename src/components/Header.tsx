"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { PenToolIcon } from "@/app/icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu when window is resized to larger size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>

      {/* Top accent line with animation */}
      <div className="absolute top-0 left-0 right-0 h-1 animate-gradient-x overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"></div>
      </div>

      {/* Bottom accent line with animation */}
      <div className="absolute bottom-0 left-0 right-0 h-1 animate-gradient-x-reverse overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-6 py-5 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <PenToolIcon className="h-6 w-6 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Metalyplast
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - centered */}
          <nav className="container hidden md:block mx-auto">
            <ul className="flex justify-between items-center w-full max-w-2xl mx-auto">
              <li className="px-5">
                <Link
                  href="/"
                  className="text-white hover:text-blue-400 transition-colors duration-200 font-medium relative group py-2"
                >
                  Inicio
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="px-5">
                <Link
                  href="/sobre-nosotros"
                  className="text-white hover:text-blue-400 transition-colors duration-200 font-medium relative group py-2"
                >
                  Nosotros
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="px-5">
                <Link
                  href="/servicios"
                  className="text-white hover:text-blue-400 transition-colors duration-200 font-medium relative group py-2"
                >
                  Servicios
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="px-5">
                <Link
                  href="/contacto"
                  className="text-white hover:text-blue-400 transition-colors duration-200 font-medium relative group py-2"
                >
                  Contacto
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button - positioned at right */}
          <button
            className="md:hidden flex items-center text-white hover:text-blue-400 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Empty div to balance the layout on desktop */}
          <div className="hidden md:block w-[100px]"></div>
        </div>

        {/* Mobile navigation */}
        <div
          ref={menuRef}
          className={`md:hidden absolute left-0 right-0 bg-gray-800 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
          style={{
            top: isMenuOpen ? "100%" : "80%",
            boxShadow: isMenuOpen ? "0 10px 15px -3px rgba(0, 0, 0, 0.4)" : "none",
            borderBottom: "1px solid rgba(59, 130, 246, 0.2)",
          }}
        >
          <nav className="container mx-auto px-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/"
                  className="block py-2 text-white hover:text-blue-400 transition-colors duration-200"
                  onClick={closeMenu}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="block py-2 text-white hover:text-blue-400 transition-colors duration-200"
                  onClick={closeMenu}
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="block py-2 text-white hover:text-blue-400 transition-colors duration-200"
                  onClick={closeMenu}
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="block py-2 text-white hover:text-blue-400 transition-colors duration-200"
                  onClick={closeMenu}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
