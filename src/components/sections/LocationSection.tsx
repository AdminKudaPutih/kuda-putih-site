"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Car, Navigation } from "lucide-react";

export default function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Car moves from left to right across the container
  const carPosition = useTransform(scrollYProgress, [0, 1], ["-65%", "100%"]);

  return (
    <section
      id="location"
      ref={sectionRef}
      className="py-24 px-6 bg-white dark:bg-zinc-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Side: Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.8643241088!2d115.1846!3d-8.8354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTAnMDcuNCJTIDExNcKwMTEnMDQuNiJF!5e0!3m2!1sen!2sid!4v1713680000000!5m2!1sen!2sid&q=55FQ%2B7V%20Kutuh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kuda Putih House Location"
              />
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-emerald-100 dark:border-zinc-800 flex items-center gap-3">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-xl">
                  <MapPin className="text-emerald-700 dark:text-emerald-400 w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Our Location</p>
                  <p className="text-sm font-serif font-bold text-emerald-900 dark:text-emerald-100">Kutuh, Badung, Bali</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Description */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 dark:text-emerald-400 mb-6">
                Strategic & Serene
              </h2>
              <div className="space-y-6 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                <p>
                  Nestled in the tranquil area of Kutuh, Kuda Putih House offers the perfect balance between peaceful living and proximity to Bali&apos;s most iconic destinations.
                </p>
                <p>
                  Just a short drive away from the breathtaking Pandawa Beach and the majestic Melasti Beach, our location is ideal for those who appreciate natural beauty without sacrificing convenience.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-50/50 dark:bg-zinc-900/50 border border-emerald-100/50 dark:border-zinc-800">
                    <Navigation className="text-emerald-600 dark:text-emerald-400 w-5 h-5 mt-1" />
                    <p className="text-sm font-medium">5 mins to Pandawa Beach</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-50/50 dark:bg-zinc-900/50 border border-emerald-100/50 dark:border-zinc-800">
                    <Navigation className="text-emerald-600 dark:text-emerald-400 w-5 h-5 mt-1" />
                    <p className="text-sm font-medium">10 mins to Melasti Beach</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Car Animation Container */}
            <div className="relative h-12 w-full bg-zinc-100 dark:bg-zinc-900/50 rounded-2xl overflow-hidden border-b-4 border-black dark:border-zinc-800">
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-300 dark:bg-zinc-700" /> {/* Road Line */}
              <motion.div
                style={{ left: carPosition, x: "-50%" }}
                className="absolute bottom-1 flex flex-col items-center"
              >
                <Car className="text-emerald-700 dark:text-emerald-400 w-10 h-10" />

              </motion.div>
            </div>
            <p className="text-sm text-zinc-500 italic text-center">Scroll to see our guest arriving...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
