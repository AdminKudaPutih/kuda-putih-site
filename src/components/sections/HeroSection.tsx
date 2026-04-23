 "use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const mockRooms = [
  {
    id: 1,
    name: "Boarding Room",
    availability: "7/19",
    price: "Rp 1.500.000 / month",
    features: [
      { name: "Single Bed", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> },
      { name: "Shared Bathroom", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> },
      { name: "Free Wi-Fi", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg> }
    ]
  },
  {
    id: 2,
    name: "Suite Room",
    availability: "2/5",
    price: "Rp 3.500.000 / month",
    features: [
      { name: "King Bed", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> },
      { name: "En-suite Bathroom", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg> },
      { name: "AC & Wi-Fi", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> }
    ]
  }
];

export default function HeroSection() {
  const [isChecking, setIsChecking] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    setHasChecked(false);
    
    // Simulate API call
    setTimeout(() => {
      setIsChecking(false);
      setHasChecked(true);
    }, 1500);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0 bg-zinc-900">
          <Image width={1920} height={1080} src="/hero_bg.png" alt="Kuda Putih House Bali" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-brand-dark/50 bg-linear-t/o-t from-brand-dark/80 via-transparent to-brand-dark/20 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-28 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left side: SEO Optimized Short Copywriting */}
            <div className="text-left filter drop-shadow-lg">
               <span className="inline-block py-1.5 px-4 rounded-full bg-white/30 backdrop-blur-md border border-white/20 text-white text-xs font-semibold mb-6 tracking-widest uppercase shadow-sm">
                Discover Kuda Putih House
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                Cozy Living Near <span className="text-brand-accent">Pantai Gunung Payung</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-lg font-light leading-relaxed">
                Experience safety, tranquility, and modern comfort in the heart of South Kuta, Bali.
              </p>
            </div>

            {/* Right side: Glassmorphism Availability Form or Results */}
            <div className="max-w-md m-auto lg:ml-auto w-full">
              <AnimatePresence mode="wait">
                {!hasChecked ? (
                  <motion.div 
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-black/40 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 transform lg:translate-x-4 w-full"
                  >
                    <h2 className="text-2xl font-heading font-bold text-white mb-6">Reserve Your Room</h2>
                    <form onSubmit={handleCheckAvailability} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-medium text-white/80 uppercase tracking-widest mb-2">Check-in</label>
                          <input 
                            type="date" 
                            required
                            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all "
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-white/80 uppercase tracking-widest mb-2">Check-out</label>
                          <input 
                            type="date" 
                            required
                            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all "
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-white/80 uppercase tracking-widest mb-2">Guests</label>
                        <div className="relative">
                          <select className="w-full px-4 py-3 rounded-xl border border-white/20 bg-brand-dark/50 text-white focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all appearance-none cursor-pointer">
                            <option className="text-black">1 Person</option>
                            <option className="text-black">2 People</option>
                            <option className="text-black">3 People +</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <button 
                        type="submit"
                        disabled={isChecking}
                        className="w-full bg-brand-accent hover:bg-brand-accentSoft text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(217,108,59,0.3)] hover:shadow-[0_0_30px_rgba(217,108,59,0.5)] transform active:scale-[0.98] transition-all tracking-wide disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                      >
                        {isChecking ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                            Checking...
                          </>
                        ) : "Check Availability"}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full transform lg:translate-x-4"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white border-l-4 border-brand-accent pl-2">Available Rooms</h3>
                      <button 
                        onClick={() => setHasChecked(false)}
                        className="text-xs font-medium text-white/70 hover:text-white transition-colors underline"
                      >
                        Change Dates
                      </button>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      {mockRooms.map((room, index) => (
                        <motion.div 
                          key={room.id}
                          initial={{ opacity: 0, rotateX: 90 }}
                          animate={{ opacity: 1, rotateX: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.15,
                            type: "spring",
                            bounce: 0.4
                          }}
                          style={{ transformOrigin: "top" }}
                          className="bg-black/50  backdrop-blur-xl rounded-2xl border border-white/10 p-4 flex items-center justify-between hover:bg-black/70 hover:border-brand-accentSoft transition-colors"
                        >
                          <div className="flex flex-col">
                            <h4 className="text-white font-bold">{room.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-[10px] font-bold bg-white/10 text-white/90 px-2 py-0.5 rounded-full">
                                {room.availability} Left
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {room.features.slice(0,2).map((feature, i) => (
                                <div key={i} className="flex items-center gap-1 text-[10px] text-white/70 bg-white/5 px-1.5 py-0.5 rounded-md">
                                  {feature.icon}
                                  {feature.name}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <button 
                            onClick={() => alert(`Added ${room.name} to Cart`)}
                            className="bg-brand-accent hover:bg-brand-accentSoft text-white p-2.5 rounded-xl transition-all ml-4"
                            title="Add to Cart"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
  );
}
