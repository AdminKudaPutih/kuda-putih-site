"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const rooms = [
  {
    title: "Standard Boarding Room",
    description: "Our standard boarding rooms offer a perfect blend of comfort and functionality. Each room is equipped with high-quality furnishings, a cozy bed, and modern amenities designed for long-term stays.",
    image: "/images/about-main.png",
    alignment: "left",
  },
  {
    title: "Exclusive Suite Room",
    description: "Experience premium living in our suite rooms. Featuring more space, enhanced privacy, and luxury finishes, these rooms are ideal for those who seek the best in their accommodation.",
    image: "/images/about-pool.png",
    alignment: "right",
  },
  {
    title: "Vibrant Environment",
    description: "Nestled in a serene location, Kuda Putih House provides a tranquil atmosphere surrounded by Bali's natural beauty. Enjoy the perfect balance of peaceful living and strategic access to local attractions.",
    image: "/images/about-garden.png",
    alignment: "left",
  },
];

export default function RoomsOverviewSection() {
  return (
    <section id="rooms" className="py-24 px-6 bg-brand-primarySoft/10 dark:bg-zinc-950 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 dark:text-emerald-400 mb-6"
          >
            Refined Living Spaces
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto"
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
                viewport={{ once: true, margin: "-100px" }}
                className="w-full md:w-1/2"
              >
                <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl group border border-zinc-200 dark:border-zinc-800">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: room.alignment === 'left' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full md:w-1/2 space-y-6"
              >
                <h3 className="text-3xl font-serif font-bold text-emerald-800 dark:text-emerald-300">
                  {room.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  {room.description}
                </p>
                <div className="pt-4">
                  <button className="text-emerald-700 dark:text-emerald-400 font-semibold border-b-2 border-emerald-700/30 dark:border-emerald-400/30 hover:border-emerald-700 dark:hover:border-emerald-400 transition-colors pb-1">
                    View Room Details
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
