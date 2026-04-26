import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import RoomsOverviewSection from "../components/ui/RoomsOverviewSection";
import MemorySection from "../components/sections/MemorySection";
import LocationSection from "../components/sections/LocationSection";
import BookSection from "../components/sections/BookSection";
import FAQSection from "../components/sections/FAQSection";
import { getRooms } from "@/lib/data";


export default async function Home() {
  const rooms = await getRooms();

  return (
    <div className="flex flex-col min-h-screen bg-brand-creamSoft dark:bg-brand-dark">
      <HeroSection />

      <AboutSection />

      <RoomsOverviewSection initialRooms={rooms} />

      {/* Memory Section (Replaces Gallery) */}
      <MemorySection />

      {/* Location Section */}
      <LocationSection />

      {/* Book Now */}
      <BookSection initialRooms={rooms} />

      {/* FAQ Section */}
      <FAQSection />


    </div>
  );
}
