"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Wifi, Bed, Monitor, Wind, Shield, Coffee, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

const availableRooms = [
  {
    id: "basic-room",
    title: "Standard Basic Room",
    description: "Our standard basic rooms offer a perfect blend of comfort and functionality. Each room is equipped with high-quality furnishings, a cozy bed, and modern amenities designed for long-term stays. Experience the warmth of a residential home with premium hotel comfort.",
    image: "/images/about-main.png",
    price: "IDR 3.000.000",
    period: "/ month",
    rating: "4.8",
    availability: "Available",
    facilities: [
      { icon: <Bed className="w-5 h-5" />, label: "Queen Bed" },
      { icon: <Wifi className="w-5 h-5" />, label: "High-Speed Wifi" },
      { icon: <Wind className="w-5 h-5" />, label: "Air Conditioning" },
      { icon: <Monitor className="w-5 h-5" />, label: "Smart TV" },
      { icon: <Shield className="w-5 h-5" />, label: "Secure Access" },
    ],
  },
  {
    id: "suite-room",
    title: "Exclusive Suite Room",
    description: "Experience premium living in our suite rooms. Featuring more space, enhanced privacy, luxury finishes, and a private balcony, these rooms are ideal for those who seek the best in their accommodation. Perfect for digital nomads and couples.",
    image: "/images/about-pool.png",
    price: "IDR 5.500.000",
    period: "/ month",
    rating: "5.0",
    availability: "Only 2 left!",
    facilities: [
      { icon: <Bed className="w-5 h-5" />, label: "King Bed" },
      { icon: <Wifi className="w-5 h-5" />, label: "Premium Wifi" },
      { icon: <Wind className="w-5 h-5" />, label: "AC" },
      { icon: <Monitor className="w-5 h-5" />, label: "50\" Smart TV" },
      { icon: <Coffee className="w-5 h-5" />, label: "Mini Fridge" },
    ],
  }
];

export default function RoomsPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <div className="min-h-screen bg-brand-creamSoft dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[500px] flex flex-col justify-center items-center px-6 overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 w-full h-full z-0 origin-top"
        >
          <Image
            src="/images/about-garden.png"
            alt="Refined Accommodations"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-0" />
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10 pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-6"
          >
            Refined <br className="md:hidden" /> <span className="text-brand-accentSoft">Accommodations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            Find your perfect sanctuary. Choose from our carefully curated rooms designed for ultimate comfort and tranquility.
          </motion.p>
        </div>

        {/* Cloud Transition Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-brand-creamSoft dark:from-zinc-950 via-brand-creamSoft/60 dark:via-zinc-950/60 to-transparent z-10 pointer-events-none" />
      </section>

      {/* Rooms Listing Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="space-y-24 md:space-y-32">
          {availableRooms.map((room, index) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-square lg:aspect-[4/5] xl:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl group border border-zinc-200 dark:border-zinc-800">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Tags on Image */}
                  <div className="absolute top-6 left-6 flex gap-3">
                    <div className="bg-brand-primarySoft/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg border border-brand-primary/50">
                      {room.availability}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <div className="flex items-center gap-2 text-brand-accent mb-3">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-bold text-lg">{room.rating}</span>
                    <span className="text-zinc-500 dark:text-zinc-400 text-sm">/ 5</span>
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-brand-primary dark:text-brand-primarySoft mb-4">
                    {room.title}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                    {room.description}
                  </p>
                </div>

                {/* Facilities */}
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Room Facilities</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {room.facilities.map((fac, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="p-2 bg-brand-primary/10 dark:bg-brand-primarySoft/20 rounded-lg text-brand-primary dark:text-brand-primarySoft">
                          {fac.icon}
                        </span>
                        <span className="font-medium text-zinc-700 dark:text-zinc-300">
                          {fac.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Action */}
                <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">Starting from</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-brand-primary dark:text-brand-primarySoft">
                        {room.price}
                      </span>
                      <span className="text-zinc-500 dark:text-zinc-400 font-medium">
                        {room.period}
                      </span>
                    </div>
                  </div>

                  <Link 
                    href="#book"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-accent hover:bg-brand-accentSoft text-white rounded-full font-bold shadow-lg shadow-brand-accent/30 transition-all hover:scale-105 group"
                  >
                    <ShoppingCart className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                    <span>Add to Chart</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
