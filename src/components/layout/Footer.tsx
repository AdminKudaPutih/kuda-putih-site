"use client";

import Link from "next/link";
import { 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight,
  MessageCircle
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Rooms", href: "#rooms" },
  { name: "Memories", href: "#gallery" },
  { name: "Location", href: "#location" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Cookies Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
];

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-creamSoft pt-20 pb-10 px-6 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="#home" className="inline-block">
              <span className="font-heading text-3xl font-bold text-brand-creamSoft tracking-tight">
                Kuda Putih<span className="text-brand-accent">.</span>
              </span>
            </Link>
            <p className="text-brand-cream leading-relaxed max-w-xs">
              Experience the authentic Bali spirit in our premium boarding house. A peaceful sanctuary designed for comfort, community, and tropical living.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2.5 bg-brand-darkSoft/50 rounded-full hover:bg-brand-accent hover:text-brand-creamSoft transition-all duration-300" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="p-2.5 bg-brand-darkSoft/50 rounded-full hover:bg-brand-accent hover:text-brand-creamSoft transition-all duration-300" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="p-2.5 bg-brand-darkSoft/50 rounded-full hover:bg-brand-accent hover:text-brand-creamSoft transition-all duration-300" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-brand-creamSoft font-bold uppercase tracking-widest text-sm mb-8 border-l-2 border-brand-accent pl-3">
              Quick Navigation
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="flex items-center group text-brand-cream hover:text-brand-accent transition-colors"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-brand-creamSoft font-bold uppercase tracking-widest text-sm mb-8 border-l-2 border-brand-accent pl-3">
              Get In Touch
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 text-brand-accent">
                  <MapPin size={20} />
                </div>
                <p className="text-brand-cream leading-relaxed">
                  Jl. Kuda Putih No. 88, Canggu, <br />
                  Kuta Utara, Badung, Bali 80361
                </p>
              </li>
              <li className="flex items-center gap-4 text-brand-cream hover:text-brand-accent transition-colors">
                <div className="text-brand-accent">
                  <Phone size={20} />
                </div>
                <a href="tel:+628123456789">+62 812-3456-789</a>
              </li>
              <li className="flex items-center gap-4 text-brand-cream hover:text-brand-accent transition-colors">
                <div className="text-brand-accent">
                  <Mail size={20} />
                </div>
                <a href="mailto:hello@kudaputihbali.com">hello@kudaputihbali.com</a>
              </li>
            </ul>
          </div>

          {/* Policies Column */}
          <div>
            <h4 className="text-brand-creamSoft font-bold uppercase tracking-widest text-sm mb-8 border-l-2 border-brand-accent pl-3">
              Information
            </h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-brand-cream hover:text-brand-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-10 p-6 bg-brand-darkSoft/30 rounded-2xl border border-brand-darkSoft/20">
               <p className="text-xs font-bold text-brand-primarySoft uppercase tracking-widest mb-2">Office Hours</p>
               <p className="text-sm text-brand-cream">Mon - Sat: 08:00 - 20:00</p>
               <p className="text-sm text-brand-cream">Sun: 09:00 - 17:00</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-brand-darkSoft/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-brand-cream/40 text-center md:text-left">
            &copy; {new Date().getFullYear()} Kuda Putih House, Bali. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
             <span className="text-[10px] uppercase tracking-[0.2em] text-brand-cream/20 font-bold">
               Designed in Bali
             </span>
             <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-darkSoft"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-brand-darkSoft"></div>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
