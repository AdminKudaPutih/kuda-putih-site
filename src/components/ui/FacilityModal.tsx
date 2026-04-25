"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import React from "react";

export interface Facility {
  icon: React.ReactNode;
  label: string;
  description: string;
  image: string;
}

interface FacilityModalProps {
  facility: Facility | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function FacilityModal({ facility, isOpen, onClose }: FacilityModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && facility && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-brand-creamSoft dark:bg-brand-dark rounded-3xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-brand-dark/20 hover:bg-brand-dark/40 text-brand-creamSoft rounded-full transition-colors backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative h-64 sm:h-80">
              <Image
                src={facility.image}
                alt={facility.label}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-brand-primary dark:text-brand-primarySoft p-3 bg-brand-primary/10 dark:bg-brand-primarySoft/20 rounded-xl">
                  {facility.icon}
                </span>
                <h3 className="text-2xl font-bold text-brand-dark dark:text-brand-creamSoft">
                  {facility.label}
                </h3>
              </div>
              <p className="text-brand-darkSoft dark:text-brand-cream leading-relaxed text-lg">
                {facility.description}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
