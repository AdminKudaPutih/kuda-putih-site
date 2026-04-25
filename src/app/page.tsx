import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import RoomsOverviewSection from "../components/ui/RoomsOverviewSection";
import MemorySection from "../components/sections/MemorySection";
import LocationSection from "../components/sections/LocationSection";
import BookSection from "../components/sections/BookSection";
import FAQSection from "../components/sections/FAQSection";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-creamSoft dark:bg-brand-dark">
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


    </div>
  );
}
