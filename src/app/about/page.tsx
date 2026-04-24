"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Bed, Utensils, Flame, Wifi, ShieldCheck, Sparkles, Dumbbell, BedDouble } from "lucide-react";
import FeatureCard from "@/components/ui/FeatureCard";
import NavBar from "@/components/layout/NavBar";

const facilitiesData = [
  {
    title: "19 Boarding Rooms & 2 Suites",
    description: "Experience premium comfort in our meticulously designed rooms, perfect for both short and long-term stays.",
    icon: <Bed className="w-6 h-6" />,
    imageSrc: "https://images.unsplash.com/photo-1522771731470-41029e54f13a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Common Kitchen & Dining Area",
    description: "Cook your favorite meals in our fully equipped communal kitchen and enjoy them in our spacious dining area.",
    icon: <Utensils className="w-6 h-6" />,
    imageSrc: "https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Grill BBQ Area",
    description: "Host weekend gatherings or enjoy a relaxed evening with friends at our dedicated BBQ and grill spot.",
    icon: <Flame className="w-6 h-6" />,
    imageSrc: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Free High-Speed Wi-Fi",
    description: "Stay connected effortlessly with our reliable and lightning-fast Wi-Fi, available throughout the premises.",
    icon: <Wifi className="w-6 h-6" />,
    imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Secure Parking Area",
    description: "Rest easy knowing your vehicles are safe in our monitored and secure dedicated parking space.",
    icon: <ShieldCheck className="w-6 h-6" />,
    imageSrc: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Weekly Cleaning",
    description: "Enjoy a consistently pristine environment with our complimentary weekly room cleaning service.",
    icon: <Sparkles className="w-6 h-6" />,
    imageSrc: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Gym and Yoga + trainer",
    description: "Maintain your fitness goals in our on-site gym and yoga studio, complete with professional trainer assistance.",
    icon: <Dumbbell className="w-6 h-6" />,
    imageSrc: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Extra beds",
    description: "Accommodate additional guests comfortably with our readily available extra beds upon request.",
    icon: <BedDouble className="w-6 h-6" />,
    imageSrc: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800"
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <NavBar />

      {/* Hero Header Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-brand-accentSoft/10 dark:bg-zinc-900/50 z-0" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-heading font-bold text-emerald-900 dark:text-emerald-400 mb-6"
          >
            About Kuda Putih
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            A sanctuary of comfort, community, and tranquility nestled in the heart of South Kuta, Bali.
          </motion.p>
        </div>
      </section>

      {/* Detailed Description & Image Gallery */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 dark:text-zinc-100">
              More Than Just A Place To Stay
            </h2>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
              <p>
                Kuda Putih House was established with a singular vision: to provide an exceptional living experience that bridges the gap between premium hotel comfort and the warmth of a residential home.
              </p>
              <p>
                Located just minutes away from pristine beaches like Pantai Gunung Payung and Pantai Pandawa, our property is strategically positioned to offer you both the serene tranquility of nature and the convenience of modern amenities.
              </p>
              <p>
                Whether you are a digital nomad seeking inspiration, a student looking for a focused environment, or a traveler wanting to explore Bali, our community-driven spaces and top-tier facilities are designed to elevate your stay.
              </p>
            </div>
          </motion.div>

          {/* Image Showcase Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 h-full min-h-[400px] md:min-h-[500px]"
          >
            <div className="relative col-span-1 row-span-2 overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/about-main.png"
                alt="Kuda Putih Exterior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative col-span-1 overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/about-pool.png"
                alt="Pool Area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative col-span-1 overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/about-garden.png"
                alt="Garden Area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Interactive Features Grid */}
      <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 dark:text-emerald-400 mb-6">
              Our Premium Facilities
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Everything you need for a comfortable, productive, and relaxing lifestyle is right here.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilitiesData.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard 
                  title={facility.title}
                  description={facility.description}
                  icon={facility.icon}
                  imageSrc={facility.imageSrc}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
