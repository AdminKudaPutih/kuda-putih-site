"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Wifi, Bed, Monitor, Wind, Shield, Coffee, Utensils, Flame, Sparkles, Dumbbell, Car, Bath, Star } from "lucide-react";
import RoomModal, { RoomDetails } from "./RoomModal";
import { Room } from "@/lib/data";

interface RoomsOverviewSectionProps {
  initialRooms: Room[];
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

const environmentData: RoomDetails & { alignment: 'left' | 'right' } = {
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
};

export default function RoomsOverviewSection({ initialRooms }: RoomsOverviewSectionProps) {
  const [selectedRoom, setSelectedRoom] = useState<RoomDetails | null>(null);

  const mappedRooms: (RoomDetails & { alignment: 'left' | 'right' })[] = initialRooms.map((room, index) => {
    const isSuite = room.type === 'suite';
    return {
      title: isSuite ? "Exclusive Suite Room" : "Standard Basic Room",
      description: room.description,
      image: isSuite ? "/images/about-pool.png" : "/images/about-main.png",
      alignment: index % 2 === 0 ? "left" : "right",
      price: `IDR ${room.current_price.toLocaleString('id-ID')} / month`,
      rating: isSuite ? "5.0" : "4.8",
      availability: room.total_quantity <= 2 ? `Only ${room.total_quantity} left!` : "Available",
      facilities: room.facilities.map(f => ({
        icon: iconMap[f] || <Star className="w-5 h-5" />,
        label: f
      })),
    };
  });

  const allDisplayItems = [...mappedRooms, environmentData];

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
          {allDisplayItems.map((room, index) => (
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
