"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-emerald-100 dark:border-zinc-800 last:border-none">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
      >
        <span className="text-lg font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-emerald-600 dark:text-brand-accent flex-shrink-0"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface FAQAccordionProps {
  items: { question: string; answer: string }[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-3xl mx-auto bg-white dark:bg-zinc-950 rounded-3xl shadow-xl p-8 md:p-10 border border-emerald-50 dark:border-zinc-900">
      {items.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
