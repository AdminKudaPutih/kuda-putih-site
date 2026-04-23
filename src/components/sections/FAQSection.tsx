"use client";

import FAQAccordion from "../ui/FAQAccordion";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "How to book a room through the website?",
    answer: "You can use our 'Book Now' section to check availability for your desired dates. Once you've selected a room, click the 'Book' button and follow the instructions to complete your reservation."
  },
  {
    question: "How is the payment process?",
    answer: "We support various payment methods, including bank transfers and major credit cards. After booking, you will receive payment instructions via email."
  },
  {
    question: "What if I pass the validity period of payments?",
    answer: "If payment is not received within the validity period (usually 24 hours), your reservation will be automatically cancelled. You will need to re-book if the room is still available."
  },
  {
    question: "What is Kuda Putih and what services do you offer?",
    answer: "Kuda Putih is a premium boarding house and homestay in Bali, offering comfortable rooms, lush gardens, and a peaceful atmosphere. We provide daily, weekly, and monthly stays with full amenities."
  }
];

export default function FAQSection() {
  return (
    <section className="bg-brand-cream/30 dark:bg-zinc-900/50 py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-emerald-900 dark:text-emerald-400 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about your stay at Kuda Putih House.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FAQAccordion items={faqData} />
        </motion.div>
      </div>
    </section>
  );
}
