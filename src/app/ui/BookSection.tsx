"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock Room Data
const mockRooms = [
  {
    id: 1,
    name: "Boarding Room",
    description: "Compact and practical, perfect for solo travelers or students seeking a comfortable and affordable stay.",
    availability: "7/19",
    rating: "4.8",
    price: "Rp 1.500.000 / month",
    features: [
      { name: "Single Bed", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> },
      { name: "Shared Bathroom", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> },
      { name: "Free Wi-Fi", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg> }
    ]
  },
  {
    id: 2,
    name: "Suite Room",
    description: "Spacious and elegant, offering top-tier comfort with a private bathroom and premium amenities.",
    availability: "2/5",
    rating: "4.9",
    price: "Rp 3.500.000 / month",
    features: [
      { name: "King Bed", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> },
      { name: "En-suite Bathroom", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg> },
      { name: "AC & Wi-Fi", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> }
    ]
  }
];

export default function BookSection() {
  const [isChecking, setIsChecking] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<typeof mockRooms[0] | null>(null);

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

  const handleBookDirectly = (e: React.MouseEvent, roomName: string) => {
    e.stopPropagation(); // Prevents modal from opening when clicking the 'Book' button on card
    alert(`Initiating booking process for ${roomName}...`);
  };

  return (
    <section id="book" className="flex flex-col min-h-screen bg-brand-accentSoft/20 dark:bg-zinc-900 px-6 py-24 items-center justify-center text-center relative">
      <div className="max-w-4xl w-full">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-emerald-900 dark:text-emerald-400 mb-4">
            Book Your Stay
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Tell us when you plan to arrive and we&apos;ll check availability for you.
          </p>
        </div>

        {/* Availability Form (adapted from HeroSection style but matching light/dark theme) */}
        <div className="bg-white dark:bg-zinc-950 rounded-3xl shadow-xl p-8 md:p-10 border border-emerald-50 dark:border-zinc-800 mx-auto max-w-2xl relative z-10 transition-all duration-500">
          <form onSubmit={handleCheckAvailability} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2">Check-in</label>
                <input 
                  type="date" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2">Check-out</label>
                <input 
                  type="date" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all"
                />
              </div>
            </div>
            
            <div className="text-left">
              <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2">Guests</label>
              <div className="relative">
                <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all appearance-none cursor-pointer">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People +</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-zinc-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isChecking}
              className="w-full bg-brand-accent hover:bg-brand-accentSoft text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(217,108,59,0.2)] hover:shadow-[0_0_30px_rgba(217,108,59,0.4)] disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.98] transition-all tracking-wide flex justify-center items-center gap-2"
            >
              {isChecking ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Checking...
                </>
              ) : "Check Availability"}
            </button>
          </form>
        </div>

        {/* Results Area */}
        <AnimatePresence>
          {hasChecked && !isChecking && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-16 text-left"
            >
              <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-8 pl-2 border-l-4 border-brand-accent">Available Rooms</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mockRooms.map((room) => (
                  <motion.div 
                    key={room.id}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedRoom(room)}
                    className="bg-white dark:bg-zinc-950 rounded-2xl shadow-lg border border-zinc-100 dark:border-zinc-800 overflow-hidden cursor-pointer group hover:shadow-xl transition-all"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-sm font-semibold text-brand-accent mb-1 drop-shadow-sm">{room.availability} Available</p>
                          <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-brand-accent transition-colors">{room.name}</h4>
                        </div>
                        <div className="flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded-lg text-sm font-bold">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <span>{room.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-6 line-clamp-2">
                        {room.description}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-6">
                        {room.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1.5 rounded-full">
                            {feature.icon}
                            {feature.name}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
                      <span className="font-bold text-lg text-emerald-900 dark:text-emerald-400">{room.price}</span>
                      <button 
                        onClick={(e) => handleBookDirectly(e, room.name)}
                        className="bg-brand-primary hover:bg-brand-primarySoft text-white px-5 py-2 rounded-xl font-bold transition-colors text-sm shadow-sm"
                      >
                        Book
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Modal Sheet for Room Details */}
      <AnimatePresence>
        {selectedRoom && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRoom(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-70 bg-white dark:bg-zinc-950 rounded-t-3xl md:top-1/2 md:-translate-y-1/2 md:max-h-[80vh] md:max-w-xl md:mx-auto md:rounded-3xl shadow-2xl flex flex-col md:bottom-auto md:left-auto md:right-auto md:w-full overflow-hidden"
              style={ { maxHeight: '90vh' } }
            >
              {/* Drag Indicator (Mobile) */}
              <div className="w-full flex justify-center py-3 md:hidden">
                <div className="w-12 h-1.5 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
              </div>
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>

              <div className="p-6 md:p-8 overflow-y-auto flex-1 text-left">
                <p className="text-sm font-bold text-brand-accent mb-2">{selectedRoom.availability} Available</p>
                <h2 className="text-3xl font-heading font-bold text-zinc-900 dark:text-white mb-2">{selectedRoom.name}</h2>
                <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold mb-6">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <span>{selectedRoom.rating} (120+ reviews)</span>
                </div>
                
                {/* Image Placeholder */}
                <div className="w-full h-48 md:h-64 bg-zinc-200 dark:bg-zinc-800 rounded-2xl mb-6 flex items-center justify-center text-zinc-400 border border-dashed border-zinc-300 dark:border-zinc-700">
                  <span className="font-medium text-lg">Room Image Gallery</span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">About this room</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                  {selectedRoom.description} Experience the optimal balance of privacy and community living. 
                  Our facilities are maintained daily to ensure maximum comfort and hygiene for all our guests.
                </p>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">What this place offers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {selectedRoom.features.map((feature, i) => (
                     <div key={i} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                        <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-emerald-600 dark:text-emerald-400">
                          {feature.icon}
                        </div>
                        <span className="font-medium">{feature.name}</span>
                     </div>
                  ))}
                  <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                    <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-emerald-600 dark:text-emerald-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                    <span className="font-medium">24/7 Security</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                    <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-emerald-600 dark:text-emerald-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                    </div>
                    <span className="font-medium">Daily Cleaning</span>
                  </div>
                </div>

              </div>
              
              {/* Sticky Footer */}
              <div className="p-5 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.05)] z-10 transition-colors">
                 <div>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Price</p>
                    <p className="text-2xl font-bold text-emerald-900 dark:text-emerald-400">{selectedRoom.price}</p>
                 </div>
                 <button 
                  onClick={() => alert(`Redirecting to final booking for ${selectedRoom.name}...`)}
                  className="bg-brand-accent hover:bg-brand-accentSoft text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md active:scale-95"
                 >
                   Confirm Booking
                 </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}
