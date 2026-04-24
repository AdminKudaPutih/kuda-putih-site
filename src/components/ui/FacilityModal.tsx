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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md"
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
                <span className="text-emerald-600 dark:text-emerald-400 p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl">
                  {facility.icon}
                </span>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {facility.label}
                </h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                {facility.description}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
