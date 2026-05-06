import { useState, useEffect } from "react";
import { CategoryCarouselSection } from "@/sections/CategoryCarouselSection";
import { PromoSliderSection } from "@/sections/PromoSliderSection";
import { FeaturedMenuSection } from "@/sections/FeaturedMenuSection";
import { DeliveryBanner } from "@/sections/DeliveryBanner";
import { BestSellersSection } from "@/sections/BestSellersSection";
import { BlogSection } from "@/sections/BlogSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { MapSection } from "@/sections/MapSection";

const HERO_SLIDES = [
  {
    image: `${import.meta.env.BASE_URL}assets/hero11.jpg`,
    address: "2269 Ellsworth Rd, Ypsilanti, MI 48197",
    title: "THE OLIVE BRANCH RESTAURANT",
    subtitle:
      "Welcome to The Olive Branch! Discover a world of culinary delights and indulge in an unforgettable experience. Our full online order experience is coming soon, until then, our kitchen is still open.",
    menuText: "OUR MENU",
  },
];

export const MainContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white text-black">
      <section
        id="home"
        className="hero-slider relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      >
        {HERO_SLIDES.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className={`slide absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              index === currentSlide ? "active opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-black/15" />
        <div className="overlay relative z-20 text-center px-4 max-w-4xl mx-auto text-white backdrop-blur-sm bg-white/5 rounded-lg p-8">
          <p
            className="text-[#f1d89a] mb-4 text-sm md:text-lg tracking-wide font-semibold"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "1.1rem",
              letterSpacing: "0.1em",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            {HERO_SLIDES[0].address}
          </p>

          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-4"></div>

          <h1
            className="text-white text-4xl md:text-6xl mb-4"
            style={{
              fontFamily: "'Cinzel', serif",
              letterSpacing: "0.05em",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            }}
          >
            {HERO_SLIDES[0].title}
          </h1>

          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-4"></div>

          <p
            className="text-white text-sm md:text-lg mb-12 leading-relaxed max-w-2xl mx-auto"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
            }}
          >
            <br />
            <span
              className="font-bold text-white text-base md:text-xl mt-4 block"
              style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.9)" }}
            >
              Our full online order experience is coming soon, until then, our kitchen is still open.
            </span>
          </p>
          <div className="border-t border-[#c9a96e]/30 w-24 mx-auto mb-4"></div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <a
              href="https://order.toasttab.com/online/the-olive-branch-2269-ellsworth-rd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#c9a96e] bg-[#4CAF50] px-8 py-3 text-sm font-semibold text-white uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-[#4CAF50]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Order online
            </a>
            <a
              href="tel:+17349617452"
              className="inline-flex items-center justify-center rounded-full border border-[#c9a96e] px-8 py-3 text-sm font-semibold text-white uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-white/10"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Call to order
            </a>
          </div>
          <div className="border-b border-[#c9a96e]/30 w-24 mx-auto mt-4"></div>
        </div>
      </section>

      <CategoryCarouselSection />
      <PromoSliderSection />
      <FeaturedMenuSection />
      <DeliveryBanner />
      <BestSellersSection />
      <BlogSection />
      <TestimonialsSection />
      <MapSection />
    </main>
  );
};
