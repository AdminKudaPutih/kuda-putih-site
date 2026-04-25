import Image from "next/image";
import React, { useRef, useState } from "react";
import { useInView } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  icon: React.ReactNode;
}

export default function FeatureCard({ title, description, imageSrc, icon }: FeatureCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  const showDescription = isInView && !isHovered;

  return (
    <div 
      ref={ref} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl w-full h-80 sm:h-96 cursor-default border border-zinc-200 dark:border-zinc-800 transition-all duration-500 ${isInView ? "shadow-2xl" : "shadow-sm"}`}
    >
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        className={`object-cover transition-transform duration-700 ${isInView ? "scale-110" : "scale-100"}`}
      />

      {/* Gradient Overlay */}
      {/* InView state: extends upwards to make text readable */}
      <div className={`absolute inset-0 bg-linear-to-t from-black/80 opacity-80 transition-all duration-500 ${showDescription ? "via-black/70 to-black/30 delay-500" : "via-black/10 to-transparent delay-0"}`} />

      {/* Content Container */}
      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end transform transition-transform duration-500">
        
        {/* Icon & Title */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-brand-accent/20 backdrop-blur-md rounded-xl text-brand-accent">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white tracking-wide drop-shadow-md">
            {title}
          </h3>
        </div>

        {/* Hidden Description */}
        <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${showDescription ? "grid-rows-[1fr] delay-1000" : "grid-rows-[0fr] delay-0"}`}>
          <div className="overflow-hidden">
            <p className={`text-sm text-zinc-300 leading-relaxed pt-2 pb-1 transition-opacity duration-500 ${showDescription ? "opacity-100 delay-700" : "opacity-0 delay-0"}`}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
