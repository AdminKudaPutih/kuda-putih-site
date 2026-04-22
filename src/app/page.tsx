import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import RoomsOverviewSection from "../components/ui/RoomsOverviewSection";
import MemorySection from "../components/sections/MemorySection";
import LocationSection from "../components/sections/LocationSection";
import BookSection from "../components/sections/BookSection";
import FAQSection from "../components/sections/FAQSection";

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

      {/* FAQ Section */}
      <FAQSection />

      <footer className="bg-emerald-950 dark:bg-black py-10 text-center text-emerald-50 dark:text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Kuda Putih House, Bali. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
