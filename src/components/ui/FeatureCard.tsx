import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  icon: React.ReactNode;
}

export default function FeatureCard({ title, description, imageSrc, icon }: FeatureCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl group w-full h-80 sm:h-96 cursor-default border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-2xl transition-all duration-500">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      {/* Default state: subtle gradient at the bottom. Hover state: extends upwards */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:via-black/70 group-hover:to-black/30 transition-all duration-500" />

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
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
          <div className="overflow-hidden">
            <p className="text-sm text-zinc-300 leading-relaxed pt-2 pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
