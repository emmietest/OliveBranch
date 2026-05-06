import { HeroSection } from "@/sections/HeroSection";
import { CategoryCarouselSection } from "@/sections/CategoryCarouselSection";
import { PromoSliderSection } from "@/sections/PromoSliderSection";
import { FeaturedMenuSection } from "@/sections/FeaturedMenuSection";
import { DeliveryBanner } from "@/sections/DeliveryBanner";
import { BestSellersSection } from "@/sections/BestSellersSection";
import { BlogSection } from "@/sections/BlogSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { MapSection } from "@/sections/MapSection";

export const MainContent = () => {
  return (
    <div className="text-sm box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
      <div className="text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
        <main className="text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
          <div className="text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
            <div className="text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
              <HeroSection />
              <CategoryCarouselSection />
              <PromoSliderSection />
              <FeaturedMenuSection />
              <DeliveryBanner />
              <BestSellersSection />
              <BlogSection />
              <TestimonialsSection />
              <MapSection />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
