"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Wifi, Bed, Monitor, Wind, Shield, Coffee, Utensils, Flame, Sparkles, Dumbbell, Car } from "lucide-react";
import RoomModal, { RoomDetails } from "./RoomModal";

const rooms: (RoomDetails & { alignment: 'left' | 'right' })[] = [
  {
    title: "Standard Basic Room",
    description: "Our standard basic rooms offer a perfect blend of comfort and functionality. Each room is equipped with high-quality furnishings, a cozy bed, and modern amenities designed for long-term stays.",
    image: "/images/about-main.png",
    alignment: "left",
    price: "IDR 3.000.000 / month",
    rating: "4.8",
    availability: "Available",
    facilities: [
      { icon: <Bed className="w-5 h-5" />, label: "Queen Bed" },
      { icon: <Wifi className="w-5 h-5" />, label: "High-Speed Wifi" },
      { icon: <Wind className="w-5 h-5" />, label: "Air Conditioning" },
      { icon: <Monitor className="w-5 h-5" />, label: "Smart TV" },
    ],
  },
  {
    title: "Exclusive Suite Room",
    description: "Experience premium living in our suite rooms. Featuring more space, enhanced privacy, and luxury finishes, these rooms are ideal for those who seek the best in their accommodation.",
    image: "/images/about-pool.png",
    alignment: "right",
    price: "IDR 5.500.000 / month",
    rating: "5.0",
    availability: "Only 2 left!",
    facilities: [
      { icon: <Bed className="w-5 h-5" />, label: "King Bed" },
      { icon: <Wifi className="w-5 h-5" />, label: "Premium Wifi" },
      { icon: <Wind className="w-5 h-5" />, label: "AC" },
      { icon: <Monitor className="w-5 h-5" />, label: "50\" Smart TV" },
      { icon: <Coffee className="w-5 h-5" />, label: "Mini Fridge" },
    ],
  },
  {
    title: "Vibrant Environment",
    modalTitle: "Kuda Putih Facilities",
    description: "Nestled in a serene location, Kuda Putih House provides a tranquil atmosphere surrounded by Bali's natural beauty. Enjoy the perfect balance of peaceful living and strategic access to local attractions.",
    image: "/images/about-garden.png",
    alignment: "left",
    isEnvironment: true,
    facilities: [
      { icon: <Utensils className="w-5 h-5" />, label: "Communal Kitchen" },
      { icon: <Flame className="w-5 h-5" />, label: "BBQ Area" },
      { icon: <Shield className="w-5 h-5" />, label: "Secure Parking" },
      { icon: <Sparkles className="w-5 h-5" />, label: "Weekly Cleaning" },
      { icon: <Dumbbell className="w-5 h-5" />, label: "Gym & Yoga" },
      { icon: <Car className="w-5 h-5" />, label: "Vehicle Rental" },
    ],
  },
];

export default function RoomsOverviewSection() {
  const [selectedRoom, setSelectedRoom] = useState<RoomDetails | null>(null);

  return (
    <section id="rooms" className="py-24 px-6 bg-brand-primarySoft/10 dark:bg-brand-dark overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-primary dark:text-brand-primarySoft mb-6"
          >
            Refined Living Spaces
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-brand-darkSoft dark:text-brand-cream text-lg max-w-2xl mx-auto"
          >
            Explore our thoughtfully designed accommodations, crafted to provide the ultimate comfort and a premium Bali living experience.
          </motion.p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {rooms.map((room, index) => (
            <div 
              key={index}
              className={`flex flex-col ${room.alignment === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-20`}
            >
              {/* Image Container */}
              <motion.div 
                initial={{ opacity: 0, x: room.alignment === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}
                className="w-full md:w-1/2"
              >
                <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl group border border-brand-darkSoft/20 dark:border-brand-creamSoft/10">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: room.alignment === 'left' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}
                className="w-full md:w-1/2 space-y-6"
              >
                <h3 className="text-3xl font-serif font-bold text-brand-primary dark:text-brand-primarySoft">
                  {room.title}
                </h3>
                <p className="text-brand-darkSoft dark:text-brand-cream text-lg leading-relaxed">
                  {room.description}
                </p>
                <div className="pt-4">
                  <button 
                    onClick={() => setSelectedRoom(room)}
                    className="text-brand-primary dark:text-brand-primarySoft font-semibold border-b-2 border-brand-primary/30 dark:border-brand-primarySoft/30 hover:border-brand-primary dark:hover:border-brand-primarySoft transition-colors pb-1"
                  >
                    View Room Details
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Explore All Rooms Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center"
        >
          <Link 
            href="/rooms" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-brand-creamSoft rounded-full font-bold shadow-lg hover:bg-brand-primarySoft transition-all hover:scale-105 group"
          >
            Explore All Rooms
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>

      <RoomModal 
        room={selectedRoom} 
        isOpen={!!selectedRoom} 
        onClose={() => setSelectedRoom(null)} 
      />
    </section>
  );
}
