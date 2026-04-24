"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bed, Utensils, Flame, Car, MapPin, Wifi, ShieldCheck, Sparkles, Map, Dumbbell, BedDouble, ArrowRight } from "lucide-react";
import FacilityModal, { Facility } from "../ui/FacilityModal";

export default function AboutSection() {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const facilities: Facility[] = [
    { 
      icon: <Bed className="w-5 h-5" />, 
      label: "19 Boarding Rooms & 2 Suites",
      description: "Our property features 19 well-appointed boarding rooms and 2 luxury suites, each designed with comfort and privacy in mind. Every room is fully furnished and includes modern amenities for a seamless living experience.",
      image: "https://images.unsplash.com/photo-1737517302831-e7b8a8eaa97c?auto=format&fit=crop&q=80&w=800"
    },
    { 
      icon: <Utensils className="w-5 h-5" />, 
      label: "Common Kitchen & Dining Area",
      description: "A spacious and fully equipped common kitchen and dining area is available for all residents. It's the perfect place to prepare your favorite meals and socialize with fellow boarders in a clean, organized environment.",
      image: "https://images.unsplash.com/photo-1740759546654-7fac6f620e8c?auto=format&fit=crop&q=80&w=800"
    },
    { 
      icon: <Flame className="w-5 h-5" />, 
      label: "Grill BBQ Area",
      description: "Enjoy outdoor gatherings in our dedicated BBQ area. Perfect for weekend get-togethers, this space is equipped with premium grilling facilities set against a beautiful tropical backdrop.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800"
    },
    { 
      icon: <Wifi className="w-5 h-5" />, 
      label: "Free High-Speed Wi-Fi",
      description: "Stay connected with high-speed fiber optic internet available throughout the entire property. Whether you're working remotely or streaming your favorite shows, our reliable Wi-Fi ensures you're always online.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
    },
    { 
      icon: <ShieldCheck className="w-5 h-5" />, 
      label: "Secure Parking Area",
      description: "Your peace of mind is our priority. We provide a spacious and secure parking area for both motorbikes and cars, monitored 24/7 to ensure the safety of your vehicles.",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800"
    },
    { 
      icon: <Sparkles className="w-5 h-5" />, 
      label: "Weekly Cleaning",
      description: "Maintain a fresh and healthy living environment with our complimentary weekly cleaning service. Our professional staff ensures that all common areas and your rooms are kept in pristine condition.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800"
    },
    { 
      icon: <Dumbbell className="w-5 h-5" />, 
      label: "Gym and Yoga + trainer",
      description: "Stay fit and balanced with our on-site gym and yoga facilities. We also offer access to professional trainers to help you achieve your fitness goals right where you live.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
    },
    { 
      icon: <BedDouble className="w-5 h-5" />, 
      label: "Extra beds",
      description: "Hosting a guest? We offer extra bed services to accommodate your visitors comfortably. Just let our management know in advance, and we'll have everything ready for you.",
      image: "https://images.unsplash.com/photo-1531576788337-610fa9c67107?qauto=format&fit=crop&q=80&w=800"
    },
  ];

  const services = [
    { icon: <Car className="w-5 h-5" />, label: "Motor Bike & Car Rental" },
    { icon: <Map className="w-5 h-5" />, label: "Professional Tour Guide Service" },
  ];

  const handleFacilityClick = (facility: Facility) => {
    setSelectedFacility(facility);
    setIsModalOpen(true);
  };

  return (
    <section id="about" className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 px-6 py-24 items-center justify-center">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image Grid */}
        <div className="grid grid-cols-2 gap-4 h-full min-h-[500px]">
          <div className="relative col-span-1 row-span-2 overflow-hidden rounded-2xl group border border-zinc-100 dark:border-zinc-800">
            <Image
              src="/images/about-main.png"
              alt="Kuda Putih House Exterior"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="relative col-span-1 overflow-hidden rounded-2xl group border border-zinc-100 dark:border-zinc-800">
            <Image
              src="/images/about-pool.png"
              alt="Swimming Pool"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="relative col-span-1 overflow-hidden rounded-2xl group border border-zinc-100 dark:border-zinc-800">
            <Image
              src="/images/about-garden.png"
              alt="Mini Garden"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col text-left">
          <h2 className="text-4xl font-serif font-bold text-emerald-900 dark:text-emerald-400 mb-6">
            Discover Kuda Putih House
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 leading-relaxed">
            Welcome to Kuda Putih House, a premium boarding house strategically located in Kuta Selatan, Badung, Bali. 
            Designed for those who seek comfort and tranquility, our accommodation offers an exceptional living experience 
            near famous destinations like Pantai Gunung Payung and Pantai Pandawa.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-300 mb-4">
            Facilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {facilities.map((facility, index) => (
              <button 
                key={index} 
                onClick={() => handleFacilityClick(facility)}
                className="flex items-center text-left text-zinc-700 dark:text-zinc-300 p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:hover:bg-emerald-900/20 transition-all group border border-transparent hover:border-emerald-100 dark:hover:border-emerald-800/30 active:scale-[0.98]"
              >
                <span className="text-emerald-600 dark:text-emerald-400 mr-3 p-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg group-hover:bg-emerald-100 dark:group-hover:bg-emerald-800/50 transition-colors">
                  {facility.icon}
                </span>
                <span className="font-medium group-hover:text-emerald-900 dark:group-hover:text-emerald-300 transition-colors">{facility.label}</span>
              </button>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-300 mb-4">
            Extra Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center text-zinc-700 dark:text-zinc-300">
                <span className="text-emerald-600 dark:text-emerald-400 mr-3 p-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                  {service.icon}
                </span>
                <span className="font-medium">{service.label}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex items-center p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 mb-8">
            <MapPin className="text-emerald-600 dark:text-emerald-400 mr-4 w-8 h-8 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Strategic Location</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Walking distance or short drive to Pantai Gunung Payung & Pantai Pandawa.</p>
            </div>
          </div>

          <Link href="/about" className="inline-flex items-center justify-center bg-brand-accent hover:bg-brand-accentSoft text-white font-bold py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(217,108,59,0.3)] hover:shadow-[0_0_30px_rgba(217,108,59,0.5)] transform active:scale-[0.98] transition-all tracking-wide self-start group">
            Discover About Us! 
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <FacilityModal 
        facility={selectedFacility} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}

