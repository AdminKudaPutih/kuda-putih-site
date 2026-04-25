"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bed, Utensils, Flame, Wifi, ShieldCheck, Sparkles, Dumbbell, BedDouble, Car, Map, MapPin } from "lucide-react";
import FeatureCard from "@/components/ui/FeatureCard";
import Link from "next/link";

const facilitiesData = [
  {
    title: "19 Basic Rooms & 2 Suites",
    description: "Experience premium comfort in our meticulously designed rooms, perfect for both short and long-term stays.",
    icon: <Bed className="w-6 h-6" />,
    imageSrc: "https://images.unsplash.com/photo-1737517302831-e7b8a8eaa97c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Common Kitchen & Dining Area",
    description: "Cook your favorite meals in our fully equipped communal kitchen and enjoy them in our spacious dining area.",
    icon: <Utensils className="w-6 h-6" />,
    imageSrc: "https://images.unsplash.com/photo-1740759546654-7fac6f620e8c?auto=format&fit=crop&q=80&w=800"
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
    imageSrc: "https://images.unsplash.com/photo-1531576788337-610fa9c67107?qauto=format&fit=crop&q=80&w=800"
  }
];

const extraServicesData = [
  {
    title: "Motor Bike & Car Rental",
    description: "Explore the beautiful island of Bali at your own pace with our reliable and convenient on-site vehicle rental services.",
    icon: <Car className="w-6 h-6" />,
    imageSrc: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Professional Tour Guide Service",
    description: "Discover hidden gems and local culture with our experienced professional tour guides ready to tailor your Bali adventure.",
    icon: <Map className="w-6 h-6" />,
    imageSrc: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800"
  }
];

export default function AboutPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <main className="min-h-screen bg-brand-creamSoft dark:bg-brand-dark">


      {/* Hero Header Section */}
      <section className="relative h-dvh flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Background Image */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 w-full h-full z-0 origin-top"
        >
          <Image
            src="/images/about-main.png"
            alt="About Kuda Putih House"
            fill
            className="object-cover scale-110"
            priority
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-brand-dark/60 z-0" />
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10 pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl/20 font-heading font-bold text-brand-creamSoft mb-6"
          >
            About <br /> <span className="text-brand-accentSoft">Kuda Putih House</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-brand-cream max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            A sanctuary of comfort, community, and tranquility nestled in the heart of South Kuta, Bali.
          </motion.p>
        </div>

        {/* Cloud Transition Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-brand-creamSoft dark:from-brand-dark via-brand-creamSoft/60 dark:via-brand-dark/60 to-transparent z-10 pointer-events-none" />
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark dark:text-brand-creamSoft">
              More Than Just A Place To Stay
            </h2>
            <div className="space-y-4 text-brand-darkSoft dark:text-brand-cream leading-relaxed text-lg">
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
      <section className="py-24 px-6 bg-brand-cream dark:bg-brand-darkSoft/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary dark:text-brand-primarySoft mb-6">
              Our Premium Facilities
            </h2>
            <p className="text-xl text-brand-darkSoft dark:text-brand-cream max-w-2xl mx-auto">
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

      {/* Extra Services Section */}
      <section className="py-24 px-6 bg-brand-creamSoft dark:bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary dark:text-brand-primarySoft mb-6">
              Extra Services
            </h2>
            <p className="text-xl text-brand-darkSoft dark:text-brand-cream max-w-2xl mx-auto">
              Make your stay even more seamless with our additional tailored services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {extraServicesData.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  imageSrc={service.imageSrc}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Location Section */}
      <section className="py-10 px-6 bg-brand-cream dark:bg-brand-darkSoft/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-brand-creamSoft dark:bg-brand-darkSoft/20 rounded-3xl p-8 md:p-12 shadow-xl border border-brand-darkSoft/20 dark:border-brand-creamSoft/10"
          >
            <Link href="/#location" className="inline-flex items-center justify-center p-4 bg-brand-primary/10 hover:bg-brand-primary/20 dark:bg-brand-primarySoft/20 rounded-full mb-6 cursor-pointer ">
              <MapPin className="w-10 h-10 text-brand-primary dark:text-brand-primarySoft" />
            </Link>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary dark:text-brand-primarySoft mb-6">
              Strategic Location
            </h2>
            <p className="text-lg text-brand-darkSoft dark:text-brand-cream leading-relaxed mb-6">
              Nestled perfectly in South Kuta, Kuda Putih House offers an unbeatable balance of peaceful seclusion and incredible accessibility.
              We are within walking distance or a very short drive to the mesmerizing white sands of <strong>Pantai Gunung Payung</strong> and the famous <strong>Pantai Pandawa</strong>.
            </p>
            <p className="text-lg text-brand-darkSoft dark:text-brand-cream leading-relaxed">
              Experience the best of Bali&apos;s southern peninsula, with easy access to top-tier cafes, cultural landmarks, and surfing spots, all while having a quiet sanctuary to return to at the end of the day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      {/* <footer className="bg-brand-primary text-brand-cream py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-heading font-bold mb-2">Kuda Putih House</h2>
            <p className="text-brand-cream/70 text-sm">A sanctuary of comfort in South Kuta, Bali.</p>
          </div>
          <div className="text-sm text-brand-cream/60">
            &copy; {new Date().getFullYear()} Kuda Putih House. All rights reserved.
          </div>
        </div>
      </footer> */}

    </main>
  );
}
