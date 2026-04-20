import HeroSection from "./ui/HeroSection";
import AboutSection from "./ui/AboutSection";
import RoomsOverviewSection from "./ui/RoomsOverviewSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <AboutSection />

      <RoomsOverviewSection />

      {/* Gallery */}
      <section id="gallery" className="flex flex-col min-h-screen bg-emerald-50 dark:bg-zinc-900 px-6 py-24 items-center justify-center">
        <div className="max-w-5xl mx-auto w-full text-center">
          <h2 className="text-4xl font-serif font-bold text-emerald-900 dark:text-emerald-400 mb-8">Gallery</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-zinc-200 dark:bg-zinc-800 rounded-lg shadow-sm flex items-center justify-center text-zinc-400 italic">
                Image {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 px-6 py-24 items-center justify-center text-center">
        <h2 className="text-4xl font-serif font-bold text-emerald-900 dark:text-emerald-400 mb-8">Location</h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-10 max-w-2xl">
          Located centrally in Canggu, Bali, providing walking access to the finest cafes, surfing beaches, and nightlife.
        </p>
        <div className="w-full max-w-4xl h-96 bg-zinc-200 dark:bg-zinc-800 rounded-2xl shadow-inner flex flex-col items-center justify-center text-zinc-500">
          <span className="italic mb-2">Interactive Map Placeholder</span>
          <span>Jl. Pantai Batu Bolong, Canggu, Bali</span>
        </div>
      </section>

      {/* Book Now */}
      <section id="book" className="flex flex-col min-h-screen bg-[#fdfbf7] dark:bg-zinc-900 px-6 py-24 items-center justify-center text-center">
        <div className="max-w-xl w-full bg-white dark:bg-zinc-950 rounded-3xl shadow-2xl p-10 border border-emerald-50 dark:border-zinc-800">
          <h2 className="text-4xl font-serif font-bold text-emerald-900 dark:text-emerald-400 mb-4">Book Your Stay</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            Tell us when you plan to arrive and we&apos;ll check availability for you.
          </p>
          <form className="flex flex-col gap-4 text-left">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Name</label>
              <input type="text" className="w-full border border-zinc-300 dark:border-zinc-700 rounded-lg p-3 bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none" placeholder="First & Last Name"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Email</label>
              <input type="email" className="w-full border border-zinc-300 dark:border-zinc-700 rounded-lg p-3 bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none" placeholder="you@example.com"/>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Move in</label>
                <input type="date" className="w-full border border-zinc-300 dark:border-zinc-700 rounded-lg p-3 bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Duration</label>
                <select className="w-full border border-zinc-300 dark:border-zinc-700 rounded-lg p-3 bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none">
                  <option>1 Month</option>
                  <option>3 Months</option>
                  <option>6+ Months</option>
                </select>
              </div>
            </div>
            <button type="button" className="w-full bg-emerald-800 text-white font-bold py-4 rounded-lg mt-4 hover:bg-emerald-900 transition-colors shadow-md">
              Check Availability
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-emerald-950 dark:bg-black py-10 text-center text-emerald-50 dark:text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Kuda Putih House, Bali. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
