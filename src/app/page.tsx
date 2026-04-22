import HeroSection from "./ui/HeroSection";
import AboutSection from "./ui/AboutSection";
import RoomsOverviewSection from "./ui/RoomsOverviewSection";
import MemorySection from "./ui/MemorySection";
import LocationSection from "./ui/LocationSection";
import BookSection from "./ui/BookSection";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <AboutSection />

      <RoomsOverviewSection />

      {/* Memory Section (Replaces Gallery) */}
      <MemorySection />

      {/* Location Section */}
      <LocationSection />

      {/* Book Now */}
      <BookSection />
      <footer className="bg-emerald-950 dark:bg-black py-10 text-center text-emerald-50 dark:text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Kuda Putih House, Bali. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
