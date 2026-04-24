import Image from "next/image";
import Link from "next/link";
import { Bed, Utensils, Flame, Car, MapPin, Wifi, ShieldCheck, Sparkles, Map, Dumbbell, BedDouble, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const facilities = [
    { icon: <Bed className="w-5 h-5" />, label: "19 Boarding Rooms & 2 Suites" },
    { icon: <Utensils className="w-5 h-5" />, label: "Common Kitchen & Dining Area" },
    { icon: <Flame className="w-5 h-5" />, label: "Grill BBQ Area" },
    { icon: <Wifi className="w-5 h-5" />, label: "Free High-Speed Wi-Fi" },
    { icon: <ShieldCheck className="w-5 h-5" />, label: "Secure Parking Area" },
    { icon: <Sparkles className="w-5 h-5" />, label: "Weekly Cleaning" },
    { icon: <Dumbbell className="w-5 h-5" />, label: "Gym and Yoga + trainer" },
    { icon: <BedDouble className="w-5 h-5" />, label: "Extra beds" },
  ];

  const services = [
    { icon: <Car className="w-5 h-5" />, label: "Motor Bike & Car Rental" },
    { icon: <Map className="w-5 h-5" />, label: "Professional Tour Guide Service" },
  ];

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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-8">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-center text-zinc-700 dark:text-zinc-300">
                <span className="text-emerald-600 dark:text-emerald-400 mr-3 p-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                  {facility.icon}
                </span>
                <span className="font-medium">{facility.label}</span>
              </div>
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
    </section>
  );
}
