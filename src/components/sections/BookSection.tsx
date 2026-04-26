"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { getRooms, getRoomAvailability, Room } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import { Bed, Wifi, Wind, Monitor, Bath, Shield, Star, Coffee, Utensils } from "lucide-react";

interface BookSectionProps {
  initialRooms: Room[];
}

interface AvailableRoom extends Room {
  available_count: number;
}

const iconMap: Record<string, React.ReactNode> = {
  "WiFi": <Wifi className="w-5 h-5" />,
  "AC": <Wind className="w-5 h-5" />,
  "TV": <Monitor className="w-5 h-5" />,
  "Shower": <Bath className="w-5 h-5" />,
  "Bathtub": <Bath className="w-5 h-5" />,
  "Mini Bar": <Coffee className="w-5 h-5" />,
  "Balcony": <Utensils className="w-5 h-5" />,
  "Queen Bed": <Bed className="w-5 h-5" />,
  "King Bed": <Bed className="w-5 h-5" />,
  "Secure Access": <Shield className="w-5 h-5" />,
};

export default function BookSection({ initialRooms }: BookSectionProps) {
  const { cart, addToCart, updateQuantity, globalCheckIn: checkIn, setGlobalCheckIn: setCheckIn, globalCheckOut: checkOut, setGlobalCheckOut: setCheckOut } = useCart();
  const [isChecking, setIsChecking] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<ReturnType<typeof getMappedRoom> | null>(null);
  const [availableRooms, setAvailableRooms] = useState<AvailableRoom[]>([]);

  const today = new Date().toISOString().split('T')[0];
  const minCheckOut = checkIn 
    ? new Date(new Date(checkIn).getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    : today;

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckIn = e.target.value;
    setCheckIn(newCheckIn);
    if (checkOut && newCheckIn >= checkOut) {
      setCheckOut("");
    }
  };

  const getEffectiveAvailability = (room: AvailableRoom) => {
    const overlappingCartItems = cart.filter(item => {
      if (item.room.id !== room.id) return false;
      return item.startDate < checkOut && item.endDate > checkIn;
    });
    const cartQuantity = overlappingCartItems.reduce((sum, item) => sum + item.quantity, 0);
    return room.available_count - cartQuantity;
  };

  const getMappedRoom = (room: AvailableRoom) => {
    const isSuite = room.type === 'suite';
    const effectiveAvailable = getEffectiveAvailability(room);
    return {
      id: room.id,
      name: isSuite ? "Exclusive Suite Room" : "Standard Basic Room",
      image: isSuite ? "/images/about-pool.png" : "/images/about-main.png",
      description: room.description,
      availability: effectiveAvailable,
      total_quantity: room.total_quantity,
      raw_room: room, // Reference for addToCart
      rating: isSuite ? "5.0" : "4.8",
      price: `Rp ${room.current_price.toLocaleString('id-ID')} / month`,
      features: room.facilities.map(f => ({
        name: f,
        icon: iconMap[f] || <Star className="w-5 h-5" />
      }))
    };
  };

  const mappedRooms = availableRooms.map(getMappedRoom);

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
    <section id="book" className="flex flex-col min-h-screen bg-brand-accentSoft/10 dark:bg-brand-dark px-6 py-24 items-center justify-center text-center relative">
      <div className="max-w-4xl w-full">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary dark:text-brand-primarySoft mb-4">
            Book Your Stay
          </h2>
          <p className="text-brand-darkSoft dark:text-brand-cream text-lg max-w-2xl mx-auto">
            Tell us when you plan to arrive and we&apos;ll check availability for you.
          </p>
        </div>

        {/* Availability Form (adapted from HeroSection style but matching light/dark theme) */}
        <AnimatePresence mode="wait">
          {!hasChecked && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-brand-creamSoft dark:bg-brand-dark rounded-3xl shadow-xl p-8 md:p-10 border border-brand-darkSoft/20 dark:border-brand-creamSoft/10 mx-auto max-w-2xl relative z-10 transition-all duration-500"
            >
              <form onSubmit={handleCheckAvailability} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <label className="block text-xs font-bold text-brand-darkSoft dark:text-brand-cream uppercase tracking-widest mb-2">Check-in</label>
                <input 
                  type="date" 
                  required
                  min={today}
                  value={checkIn}
                  onChange={handleCheckInChange}
                  className="w-full px-4 py-3 rounded-xl border border-brand-darkSoft/20 dark:border-brand-creamSoft/10 bg-brand-creamSoft/50 dark:bg-brand-darkSoft/30 text-brand-dark dark:text-brand-creamSoft focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-brand-darkSoft dark:text-brand-cream uppercase tracking-widest mb-2">Check-out</label>
                <input 
                  type="date" 
                  required
                  min={minCheckOut}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-brand-darkSoft/20 dark:border-brand-creamSoft/10 bg-brand-creamSoft/50 dark:bg-brand-darkSoft/30 text-brand-dark dark:text-brand-creamSoft focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all"
                />
              </div>
            </div>
            
            <div className="text-left">
              <label className="block text-xs font-bold text-brand-darkSoft dark:text-brand-cream uppercase tracking-widest mb-2">Guests</label>
              <div className="relative">
                <select className="w-full px-4 py-3 rounded-xl border border-brand-darkSoft/20 dark:border-brand-creamSoft/10 bg-brand-creamSoft/50 dark:bg-brand-darkSoft/30 text-brand-dark dark:text-brand-creamSoft focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all appearance-none cursor-pointer">
                  <option className="text-brand-dark">1 Person</option>
                  <option className="text-brand-dark">2 People</option>
                  <option className="text-brand-dark">3 People +</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-brand-darkSoft">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isChecking}
              className="w-full bg-brand-accent hover:bg-brand-accentSoft text-brand-creamSoft font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(217,108,59,0.2)] hover:shadow-[0_0_30px_rgba(217,108,59,0.4)] disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.98] transition-all tracking-wide flex justify-center items-center gap-2"
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
          )}
        </AnimatePresence>

        {/* Results Area */}
        <AnimatePresence>
          {hasChecked && !isChecking && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-8 text-left w-full max-w-3xl mx-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-brand-dark dark:text-brand-creamSoft pl-3 border-l-4 border-brand-accent">Available Rooms</h3>
                <button 
                  onClick={() => setHasChecked(false)}
                  className="text-sm font-medium text-brand-darkSoft hover:text-brand-accent transition-colors underline underline-offset-4"
                >
                  Change Dates
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mappedRooms.map((room, index) => (
                  <motion.div 
                    key={room.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.15,
                      ease: "easeOut"
                    }}
                    onClick={() => setSelectedRoom(room)}
                    className="bg-brand-creamSoft dark:bg-brand-dark rounded-2xl shadow-lg border border-brand-darkSoft/20 dark:border-brand-creamSoft/10 overflow-hidden cursor-pointer group hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
                  >
                    <div className="relative h-48 w-full">
                      {room.image ? (
                        <Image src={room.image} alt={room.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full bg-brand-cream/50 dark:bg-brand-darkSoft/30 flex items-center justify-center text-brand-darkSoft">No Image</div>
                      )}
                      <div className="absolute top-3 left-3 bg-brand-creamSoft/90 dark:bg-brand-dark/80 backdrop-blur text-brand-accent px-2.5 py-1 rounded-full text-xs font-bold shadow-sm">
                        {room.availability} Available
                      </div>
                      <div className="absolute top-3 right-3 bg-brand-creamSoft/90 dark:bg-brand-dark/80 backdrop-blur flex items-center gap-1 text-brand-primary dark:text-brand-primarySoft px-2.5 py-1 rounded-full text-xs font-bold shadow-sm">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span>{room.rating}</span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <h4 className="text-2xl font-bold text-brand-dark dark:text-brand-creamSoft group-hover:text-brand-accent transition-colors mb-2">{room.name}</h4>
                      <p className="text-brand-darkSoft dark:text-brand-cream text-sm mb-4 line-clamp-2">
                        {room.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {room.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs font-medium text-brand-darkSoft dark:text-brand-cream bg-brand-primary/10 dark:bg-brand-primarySoft/20 px-2 py-1 rounded-md">
                            {feature.icon}
                            {feature.name}
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-brand-darkSoft/20 dark:border-brand-creamSoft/10">
                        <div>
                          <span className="block text-xs text-brand-darkSoft font-medium">Price</span>
                          <span className="font-bold text-lg text-brand-primary dark:text-brand-primarySoft">{room.price.split(' /')[0]}</span>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(room.raw_room, 1, checkIn, checkOut, room.raw_room.available_count);
                          }}
                          disabled={room.availability <= 0}
                          className="bg-brand-accent hover:bg-brand-accentSoft text-brand-creamSoft px-4 py-2.5 rounded-xl font-bold transition-all shadow-md active:scale-95 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span className="hidden sm:inline text-sm">Add to Cart</span>
                        </button>
                      </div>
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
              className="fixed inset-0 bg-brand-dark/60 backdrop-blur-sm z-60"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-70 bg-brand-creamSoft dark:bg-brand-dark rounded-t-3xl md:top-1/2 md:-translate-y-1/2 md:max-h-[80vh] md:max-w-xl md:mx-auto md:rounded-3xl shadow-2xl flex flex-col md:bottom-auto md:left-auto md:right-auto md:w-full overflow-hidden"
              style={ { maxHeight: '90vh' } }
            >
              {/* Drag Indicator (Mobile) */}
              <div className="w-full flex justify-center py-3 md:hidden">
                <div className="w-12 h-1.5 bg-brand-darkSoft/40 dark:bg-brand-cream/20 rounded-full"></div>
              </div>
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 p-2 bg-brand-creamSoft/50 dark:bg-brand-darkSoft/30 rounded-full text-brand-darkSoft hover:text-brand-dark dark:hover:text-brand-creamSoft transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>

              <div className="p-6 md:p-8 overflow-y-auto flex-1 text-left">
                <p className="text-sm font-bold text-brand-accent mb-2">{selectedRoom.availability} Available</p>
                <h2 className="text-3xl font-heading font-bold text-brand-dark dark:text-brand-creamSoft mb-2">{selectedRoom.name}</h2>
                <div className="flex items-center gap-1 text-brand-primary dark:text-brand-primarySoft font-bold mb-6">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <span>{selectedRoom.rating} (120+ reviews)</span>
                </div>
                
                {/* Image Placeholder */}
                <div className="w-full h-48 md:h-64 bg-brand-cream/50 dark:bg-brand-darkSoft/30 rounded-2xl mb-6 flex items-center justify-center text-brand-darkSoft border border-dashed border-brand-darkSoft/20 dark:border-brand-creamSoft/10">
                  <span className="font-medium text-lg">Room Image Gallery</span>
                </div>

                <h3 className="text-lg font-bold text-brand-dark dark:text-brand-creamSoft mb-3">About this room</h3>
                <p className="text-brand-darkSoft dark:text-brand-cream mb-8 leading-relaxed">
                  {selectedRoom.description} Experience the optimal balance of privacy and community living. 
                  Our facilities are maintained daily to ensure maximum comfort and hygiene for all our guests.
                </p>

                <h3 className="text-lg font-bold text-brand-dark dark:text-brand-creamSoft mb-4">What this place offers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {selectedRoom.features.map((feature, i) => (
                     <div key={i} className="flex items-center gap-3 text-brand-darkSoft dark:text-brand-cream">
                        <div className="p-2 bg-brand-primary/10 dark:bg-brand-primarySoft/20 rounded-lg text-brand-primary dark:text-brand-primarySoft">
                          {feature.icon}
                        </div>
                        <span className="font-medium">{feature.name}</span>
                     </div>
                  ))}
                  <div className="flex items-center gap-3 text-brand-darkSoft dark:text-brand-cream">
                    <div className="p-2 bg-brand-primary/10 dark:bg-brand-primarySoft/20 rounded-lg text-brand-primary dark:text-brand-primarySoft">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                    <span className="font-medium">24/7 Security</span>
                  </div>
                  <div className="flex items-center gap-3 text-brand-darkSoft dark:text-brand-cream">
                    <div className="p-2 bg-brand-primary/10 dark:bg-brand-primarySoft/20 rounded-lg text-brand-primary dark:text-brand-primarySoft">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                    </div>
                    <span className="font-medium">Daily Cleaning</span>
                  </div>
                </div>

              </div>
              
              {/* Sticky Footer */}
              <div className="p-5 border-t border-brand-darkSoft/20 dark:border-brand-creamSoft/10 bg-brand-creamSoft dark:bg-brand-dark shadow-[0_-10px_30px_rgba(0,0,0,0.05)] flex items-center justify-between z-10 transition-colors">
                 <div>
                    <p className="text-brand-darkSoft dark:text-brand-cream text-sm font-medium">Price</p>
                    <p className="text-2xl font-bold text-brand-primary dark:text-brand-primarySoft">{selectedRoom.price}</p>
                 </div>
                 {(() => {
                    const cartItem = cart.find(item => item.room.id === selectedRoom.id && item.startDate === checkIn && item.endDate === checkOut);
                    const quantityInCart = cartItem?.quantity || 0;

                    if (quantityInCart > 0) {
                      return (
                        <div className="flex items-center gap-4 bg-brand-creamSoft dark:bg-brand-dark/50 rounded-xl p-2 border border-brand-darkSoft/10 dark:border-brand-creamSoft/10">
                          <button
                            onClick={() => updateQuantity(selectedRoom.id, checkIn, checkOut, quantityInCart - 1, selectedRoom.raw_room.available_count)}
                            className="p-2 hover:bg-brand-darkSoft/10 dark:hover:bg-brand-creamSoft/10 rounded-lg transition-colors"
                          >
                            <svg className="w-5 h-5 text-brand-darkSoft dark:text-brand-creamSoft" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                          </button>
                          <span className="text-lg font-bold text-brand-primary dark:text-brand-primarySoft w-6 text-center">
                            {quantityInCart}
                          </span>
                          <button
                            onClick={() => updateQuantity(selectedRoom.id, checkIn, checkOut, quantityInCart + 1, selectedRoom.raw_room.available_count)}
                            disabled={selectedRoom.availability <= 0}
                            className="p-2 hover:bg-brand-darkSoft/10 dark:hover:bg-brand-creamSoft/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <svg className="w-5 h-5 text-brand-darkSoft dark:text-brand-creamSoft" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                          </button>
                        </div>
                      );
                    }

                    return (
                      <button 
                        onClick={() => {
                          addToCart(selectedRoom.raw_room, 1, checkIn, checkOut, selectedRoom.raw_room.available_count);
                          setSelectedRoom(null);
                        }}
                        disabled={selectedRoom.availability <= 0}
                        className="bg-brand-accent hover:bg-brand-accentSoft text-brand-creamSoft px-8 py-3.5 rounded-xl font-bold transition-all shadow-md active:scale-95 disabled:opacity-50"
                      >
                        Add to Cart
                      </button>
                    );
                 })()}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}
