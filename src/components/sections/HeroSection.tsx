 "use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { getRooms, getRoomAvailability, Room } from "@/lib/data";
import { useCart } from "@/context/CartContext";

interface AvailableRoom extends Room {
  available_count: number;
}

const facilityIcons: Record<string, React.ReactNode> = {
  WiFi: <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>,
  AC: <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>,
  TV: <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V20M17 4V20M3 8H21M3 12H21M3 16H21"></path></svg>,
  Shower: <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2V4c0-1.105-.895-2-2-2H6c-1.105 0-2 .895-2 2z"></path></svg>,
  Bathtub: <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M4 14h16M4 18h16"></path></svg>,
  "Mini Bar": <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6M9 16h6M12 8v8m0-12v4"></path></svg>,
  Balcony: <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>,
};

export default function HeroSection() {
  const { cart, addToCart } = useCart();
  const [isChecking, setIsChecking] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [availableRooms, setAvailableRooms] = useState<AvailableRoom[]>([]);

  const today = new Date().toISOString().split('T')[0];
  const minCheckOut = checkIn 
    ? new Date(new Date(checkIn).getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    : today;

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckIn = e.target.value;
    setCheckIn(newCheckIn);
    
    // Reset checkout if it's now invalid
    if (checkOut && newCheckIn >= checkOut) {
      setCheckOut("");
    }
  };

  const getEffectiveAvailability = (room: AvailableRoom) => {
    const cartItem = cart.find(
      item => item.room.id === room.id && item.startDate === checkIn && item.endDate === checkOut
    );
    return room.available_count - (cartItem?.quantity || 0);
  };

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  const handleCheckAvailability = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    
    try {
      const rooms = await getRooms();
      const availabilityPromises = rooms.map(async (room) => {
        const availableCount = await getRoomAvailability(room.id, checkIn, checkOut);
        return { ...room, available_count: availableCount };
      });
      
      const results = await Promise.all(availabilityPromises);
      setAvailableRooms(results.filter(r => r.available_count > 0));
      setHasChecked(true);
    } catch (error) {
      console.error("Failed to check availability:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full Background Image */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0 bg-brand-dark origin-top"
        >
          <Image width={1920} height={1080} src="/hero_bg.png" alt="Kuda Putih House Bali" className="w-full h-full object-cover opacity-90 scale-110" priority />
          <div className="absolute inset-0 bg-brand-dark/50 bg-linear-to-t from-brand-dark/80 via-transparent to-brand-dark/20 mix-blend-multiply"></div>
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 pt-28 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left side: SEO Optimized Short Copywriting */}
            <div className="text-left filter drop-shadow-lg">
               <span className="inline-block py-1.5 px-4 rounded-full bg-brand-creamSoft/30 backdrop-blur-md border border-brand-creamSoft/20 text-brand-creamSoft text-xs font-semibold mb-6 tracking-widest uppercase shadow-sm">
                Discover Kuda Putih House
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-brand-creamSoft mb-6 leading-tight">
                Cozy Living Near <span className="text-brand-accent">Pantai Gunung Payung</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-creamSoft/90 mb-8 max-w-lg font-light leading-relaxed">
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
                    className="bg-brand-dark/40 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-brand-creamSoft/20 transform lg:translate-x-4 w-full"
                  >
                    <h2 className="text-2xl font-heading font-bold text-brand-creamSoft mb-6">Reserve Your Room</h2>
                    <form onSubmit={handleCheckAvailability} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-medium text-brand-creamSoft/80 uppercase tracking-widest mb-2">Check-in</label>
                          <input 
                            type="date" 
                            required
                            min={today}
                            value={checkIn}
                            onChange={handleCheckInChange}
                            className="w-full px-4 py-3 rounded-xl border border-brand-creamSoft/20 bg-brand-creamSoft/10 text-brand-creamSoft placeholder-brand-creamSoft/50 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all "
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-brand-creamSoft/80 uppercase tracking-widest mb-2">Check-out</label>
                          <input 
                            type="date" 
                            required
                            min={minCheckOut}
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-brand-creamSoft/20 bg-brand-creamSoft/10 text-brand-creamSoft placeholder-brand-creamSoft/50 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all "
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-brand-creamSoft/80 uppercase tracking-widest mb-2">Guests</label>
                        <div className="relative">
                          <select className="w-full px-4 py-3 rounded-xl border border-brand-creamSoft/20 bg-brand-dark/50 text-brand-creamSoft focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all appearance-none cursor-pointer">
                            <option className="text-brand-dark">1 Person</option>
                            <option className="text-brand-dark">2 People</option>
                            <option className="text-brand-dark">3 People +</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-brand-creamSoft">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <button 
                        type="submit"
                        disabled={isChecking}
                        className="w-full bg-brand-accent hover:bg-brand-accentSoft text-brand-creamSoft font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(217,108,59,0.3)] hover:shadow-[0_0_30px_rgba(217,108,59,0.5)] transform active:scale-[0.98] transition-all tracking-wide disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                      >
                        {isChecking ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-brand-creamSoft" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
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
                      <h3 className="text-xl font-bold text-brand-creamSoft border-l-4 border-brand-accent pl-2">Available Rooms</h3>
                      <button 
                        onClick={() => setHasChecked(false)}
                        className="text-xs font-medium text-brand-creamSoft/70 hover:text-brand-creamSoft transition-colors underline"
                      >
                        Change Dates
                      </button>
                    </div>
                    
                    <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                      {availableRooms.length > 0 ? (
                        availableRooms.map((room, index) => (
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
                            className="bg-brand-dark/50  backdrop-blur-xl rounded-2xl border border-brand-creamSoft/10 p-4 flex items-center justify-between hover:bg-brand-dark/70 hover:border-brand-accentSoft transition-colors"
                          >
                            <div className="flex flex-col">
                              <h4 className="text-brand-creamSoft font-bold capitalize">{room.type} Room</h4>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px] font-bold bg-brand-creamSoft/10 text-brand-creamSoft/90 px-2 py-0.5 rounded-full">
                                  {getEffectiveAvailability(room)} / {room.total_quantity} Left
                                </span>
                                <span className="text-xs text-brand-accent font-semibold">
                                  Rp {room.current_price.toLocaleString('id-ID')}
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {room.facilities.slice(0, 3).map((facility, i) => (
                                  <div key={i} className="flex items-center gap-1 text-[10px] text-brand-creamSoft/70 bg-brand-creamSoft/10 px-1.5 py-0.5 rounded-md">
                                    {facilityIcons[facility] || null}
                                    {facility}
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <button 
                              onClick={() => addToCart(room, 1, checkIn, checkOut, room.available_count)}
                              disabled={getEffectiveAvailability(room) <= 0}
                              className="bg-brand-accent hover:bg-brand-accentSoft text-brand-creamSoft p-2.5 rounded-xl transition-all ml-4 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                              title="Add to Cart"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </button>
                          </motion.div>
                        ))
                      ) : (
                        <div className="text-center py-8 bg-brand-dark/50 backdrop-blur-xl rounded-2xl border border-brand-creamSoft/10">
                          <p className="text-brand-creamSoft/70 text-sm">No rooms available for selected dates.</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Cloud Transition Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-brand-creamSoft dark:from-brand-dark via-brand-creamSoft/60 dark:via-brand-dark/60 to-transparent z-10 pointer-events-none" />
      </section>
  );
}
      