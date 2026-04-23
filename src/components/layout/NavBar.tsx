"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Rooms", href: "#rooms" },
  { name: "Memories", href: "#gallery" },
  { name: "Location", href: "#location" },
];

export default function NavBar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if we are at the top
      setIsAtTop(currentScrollY <= 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Observer for active scroll state
  useEffect(() => {
    const observers = new Map();

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Also observe the 'book' section even though it's a CTA
    [...navLinks, { name: "Book Now", href: "#book" }].forEach((link) => {
      const id = link.href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        sectionObserver.observe(element);
        observers.set(id, element);
      }
    });

    return () => {
      observers.forEach((element) => {
        sectionObserver.unobserve(element);
      });
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed md:rounded-b-xl shadow-2xl shadow-brand-primarySoft/30 top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${!isVisible ? "-translate-y-full" : "translate-y-0"
        } ${isAtTop
          ? "bg-brand-cream shadow-md"
          : "bg-brand-cream/50 backdrop-blur-md shadow-sm pointer-events-auto"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">

          {/* Logo - Left */}
          <div className="shrink-0 flex items-center md:w-1/4">
            <Link href="#home" className="flex items-center gap-2">
              <span className={`font-heading text-xl sm:text-2xl font-bold tracking-tight text-brand-primary`}>
                Kuda Putih House
              </span>
            </Link>
          </div>

          {/* Nav Links - Center */}
          <nav className="hidden md:flex justify-center flex-1 lg:space-x-8 space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-base font-medium transition-all hover:text-brand-accentSoft ${activeSection === link.href.replace("#", "")
                  ? "bg-brand-primary text-sm text-brand-cream font-bold scale-105 drop-shadow-sm rounded-full px-2 py-0.5"
                  : "text-brand-primarySoft hover:text-brand-accentSoft"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA - Right */}
          <div className="hidden md:flex items-center justify-end w-1/4">
            <div className="relative inline-flex group">
              <div className="absolute inset-0 rounded-full border-2 border-brand-accent bg-brand-accentSoft/50 pulse-soft opacity-75"></div>
              <a
                href="#book"
                className={`relative px-5 py-2 text-sm font-bold border-2 rounded-full transition-all duration-300 shadow-sm hover:scale-105 ${
                  activeSection === "book" 
                    ? "bg-brand-accent border-brand-accent shadow-brand-accentSoft dark:bg-brand-accent dark:border-brand-accent text-white" 
                    : "bg-brand-accentSoft/20 border-brand-accent shadow-brand-accentSoft dark:bg-emerald-600/50 dark:border-emerald-600 text-brand-accent hover:text-white hover:bg-brand-accent hover:border-brand-accent"
                }`}
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md text-brand-dark hover:text-brand-primary hover:bg-brand-creamSoft focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary`}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-96 border-b shadow-xl" : "max-h-0 bg-transparent"}${isAtTop
          ? "bg-brand-cream shadow-md"
          : "bg-brand-cream/50 backdrop-blur-md shadow-sm pointer-events-auto"
        }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === link.href.replace("#", "")
                ? "text-brand-primary"
                : "text-brand-darkSoft hover:bg-brand-creamSoft hover:text-brand-dark"
                }`}
            >
              {link.name}
            </a>
          ))}
          <div className="relative mt-4">
            <div className="absolute inset-0 rounded-md border-2 border-brand-accent animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-75"></div>
            <a
              href="#book"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`relative block px-3 py-2 rounded-md border-2 text-base font-bold transition-colors text-center text-brand-cream ${
                activeSection === "book"
                  ? "bg-brand-accent border-brand-accent shadow-brand-accentSoft"
                  : "bg-brand-accentSoft/50 border-brand-accent shadow-brand-accentSoft hover:bg-brand-accent hover:border-brand-accent"
              }`}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
