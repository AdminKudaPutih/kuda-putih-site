"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    text: "Kuda Putih House is a hidden gem in Canggu. The tranquil garden and modern rooms made my long-term stay absolutely perfect.",
    author: "Sarah J.",
  },
  {
    text: "The best boarding experience I've had in Bali. Strategic location, incredibly clean, and the pool area is just stunning!",
    author: "Michael R.",
  },
  {
    text: "Perfect for digital nomads! Fast Wi-Fi, peaceful environment, and just a short walk to the beach. Highly recommended.",
    author: "Elena P.",
  },
  {
    text: "Exceptional hospitality and a beautiful atmosphere. It truly feels like a home away from home in the heart of Bali.",
    author: "David K.",
  },
  {
    text: "A masterclass in modern living. The attention to detail in every room and the vibrant community here are unmatched.",
    author: "Anita W.",
  },
  {
    text: "Staying here was the highlight of my Bali trip. The blend of luxury and comfort at such a great location is rare.",
    author: "Tom B.",
  },
];

// Duplicate the reviews to create a seamless loop
const duplicatedReviews = [...reviews, ...reviews];

export default function ReviewCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-10">
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: ["-50%", "0%"], // Opposite direction to the image carousel
        }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedReviews.map((review, index) => (
          <div
            key={index}
            className="w-80 md:w-[400px] p-8 bg-brand-creamSoft dark:bg-brand-darkSoft/20 rounded-3xl shadow-md border border-brand-darkSoft/20 dark:border-brand-creamSoft/10 shrink-0 flex flex-col justify-between"
          >
            <p className="text-brand-darkSoft dark:text-brand-cream italic text-lg leading-relaxed mb-6">
              &quot;{review.text}&quot;
            </p>
            <div className="font-serif font-bold text-brand-primary dark:text-brand-primarySoft">
              — {review.author}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
