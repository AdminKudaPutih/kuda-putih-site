import ImageCarousel from "../ui/ImageCarousel";
import ReviewCarousel from "../ui/ReviewCarousel";

export default function MemorySection() {
  return (
    <section id="gallery" className="flex flex-col bg-brand-creamSoft dark:bg-brand-dark py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary dark:text-brand-primarySoft mb-6">
          Memories at Kuda Putih
        </h2>
        <p className="text-brand-darkSoft dark:text-brand-cream text-lg max-w-2xl mx-auto">
          Explore a glimpse of life at Kuda Putih House and hear from those who have made it their home in Bali.
        </p>
      </div>

      <div className="space-y-1">
        <ImageCarousel />
        <ReviewCarousel />
      </div>
    </section>
  );
}
