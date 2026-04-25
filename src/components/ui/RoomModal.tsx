"use client";

import { X, Star } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
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

function ModalContent({ room, onClose }: { room: RoomDetails; onClose: () => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll({
    container: scrollRef,
  });

  // Parallax transforms for the image
  const imageY = useTransform(scrollY, [0, 300], [0, 10]);
  const imageScale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const overlayOpacity = useTransform(scrollY, [0, 300], [0.4, 0.7]);

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
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
            className="relative w-full max-w-3xl bg-brand-creamSoft/90 dark:bg-brand-dark/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-brand-dark/20 hover:bg-brand-dark/40 text-brand-creamSoft rounded-full transition-colors backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Parallax Image Background */}
            <div className="absolute top-0 left-0 right-0 h-full overflow-hidden z-0">
              <motion.div 
                style={{ y: imageY, scale: imageScale }}
                className="relative h-full w-full"
              >
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover"
                  priority
                />
                <motion.div 
                  style={{ opacity: overlayOpacity }}
                  className="absolute inset-0 bg-brand-dark" 
                />
              </motion.div>
            </div>

            {/* Scrollable Content Container */}
            <div 
              ref={scrollRef}
              className="relative z-10 overflow-y-auto h-full pt-48 sm:pt-64"
            >
              {/* Content Card with Title & Rating */}
              <div className="bg-brand-creamSoft/60 dark:bg-brand-dark/80 backdrop-blur-md rounded-t-[2.5rem] shadow-[0_-8px_30px_rgb(0,0,0,0.12)] min-h-full">
                <div className="p-6 sm:p-8">
                  {/* Title & Rating Header - Now part of the scrollable content */}
                  <div className="mb-8">
                    <h3 className="text-3xl sm:text-4xl font-bold text-brand-dark dark:text-brand-creamSoft mb-3">
                      {room.modalTitle || room.title}
                    </h3>
                    {room.rating && (
                      <div className="flex items-center gap-1.5 text-brand-accentSoft">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="font-bold text-brand-dark dark:text-brand-creamSoft">{room.rating}</span>
                        <span className="text-brand-darkSoft dark:text-brand-cream text-sm">/ 5 Rating</span>
                      </div>
                    )}
                  </div>

                  {/* Top info bar (Price & Availability) */}
                  {!room.isEnvironment && (room.price || room.availability) && (
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-8 border-b border-brand-darkSoft/20 dark:border-brand-creamSoft/10">
                      {room.price && (
                        <div>
                          <p className="text-xs uppercase tracking-wider text-brand-darkSoft dark:text-brand-cream font-semibold mb-1.5">Starting from</p>
                          <p className="text-3xl font-bold text-brand-primary dark:text-brand-primarySoft">
                            {room.price}
                          </p>
                        </div>
                      )}
                      {room.availability && (
                        <div className="bg-brand-primarySoft/10 dark:bg-brand-primarySoft/20 px-5 py-2.5 rounded-2xl border border-brand-primarySoft/20">
                          <span className="font-bold text-brand-primary dark:text-brand-primarySoft">
                            {room.availability}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="space-y-10">
                    <div>
                      <h4 className="text-xl font-bold text-brand-dark dark:text-brand-creamSoft mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-brand-primary rounded-full" />
                        Description
                      </h4>
                      <p className="text-brand-darkSoft dark:text-brand-cream leading-relaxed text-lg">
                        {room.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-brand-dark dark:text-brand-creamSoft mb-5 flex items-center gap-2">
                        <div className="w-1 h-6 bg-brand-primary rounded-full" />
                        {room.isEnvironment ? "Property Facilities" : "Room Facilities"}
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {room.facilities.map((facility, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-brand-creamSoft/50 dark:bg-brand-darkSoft/30 border border-brand-darkSoft/20 dark:border-brand-creamSoft/10 hover:border-brand-primary/30 transition-colors group">
                            <span className="text-brand-primary dark:text-brand-primarySoft group-hover:scale-110 transition-transform">
                              {facility.icon}
                            </span>
                            <span className="text-sm font-semibold text-brand-darkSoft dark:text-brand-cream">
                              {facility.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
    </div>
  );
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
      {isOpen && room && <ModalContent key="modal-content" room={room} onClose={onClose} />}
    </AnimatePresence>
  );
}
