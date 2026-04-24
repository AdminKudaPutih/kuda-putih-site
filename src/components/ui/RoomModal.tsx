"use client";

import { X, Star } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import React from "react";

export interface RoomFacility {
  icon: React.ReactNode;
  label: string;
}

export interface RoomDetails {
  title: string;
  modalTitle?: string; // For "Vibrant Environment" to override title
  description: string;
  image: string;
  price?: string;
  rating?: string;
  availability?: string;
  facilities: RoomFacility[];
  isEnvironment?: boolean; // Flag to indicate if it's the environment card
}

interface RoomModalProps {
  room: RoomDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function RoomModal({ room, isOpen, onClose }: RoomModalProps) {
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
      {isOpen && room && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
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
            className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative h-64 sm:h-72 shrink-0">
              <Image
                src={room.image}
                alt={room.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {room.modalTitle || room.title}
                  </h3>
                  {room.rating && (
                    <div className="flex items-center gap-1 text-brand-accentSoft">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="font-bold text-white">{room.rating}</span>
                      <span className="text-white/80 text-sm ml-1">/ 5</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto">
              {/* Top info bar (Price & Availability) - hide for Environment */}
              {!room.isEnvironment && (room.price || room.availability) && (
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-100 dark:border-zinc-800">
                  {room.price && (
                    <div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">Starting from</p>
                      <p className="text-2xl font-bold text-brand-primary dark:text-brand-primarySoft">
                        {room.price}
                      </p>
                    </div>
                  )}
                  {room.availability && (
                    <div className="bg-brand-primarySoft/10 dark:bg-brand-primarySoft/20 px-4 py-2 rounded-xl border border-brand-primarySoft/20">
                      <span className="font-semibold text-brand-primary dark:text-brand-primarySoft">
                        {room.availability}
                      </span>
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                    Description
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {room.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                    {room.isEnvironment ? "Property Facilities" : "Room Facilities"}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {room.facilities.map((facility, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                        <span className="text-brand-primary dark:text-brand-primarySoft">
                          {facility.icon}
                        </span>
                        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                          {facility.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
