import { useState, useRef, type PointerEvent } from "react";
import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";

const TESTIMONIALS = [
  {
    imageUrl: "https://c.animaapp.com/motvxa6rie2GTp/assets/client-4.jpg",
    name: "Rachel K.",
    testimonial:
      "I had the pleasure of dining at this restaurant with a group of friends and it was truly fantastic. The food was delicious and the service was impeccable. I would highly recommend this restaurant to anyone looking for an amazing meal.",
  },
  {
    imageUrl: "https://c.animaapp.com/motvxa6rie2GTp/assets/client-3.jpg",
    name: "James H.",
    testimonial:
      "I visited this restaurant with my family and we were blown away by the quality of the food and the service. The ambiance was perfect and we felt so comfortable and relaxed throughout the entire meal.",
  },
  {
    imageUrl: "https://c.animaapp.com/motvxa6rie2GTp/assets/client-1.jpg",
    name: "Sarah P.",
    testimonial:
      "I&#39;m so glad I stumbled upon this restaurant. The food is exceptional and the staff is warm and welcoming. I highly recommend this restaurant to anyone looking for a memorable dining experience.",
  },
  {
    imageUrl: "https://c.animaapp.com/motvxa6rie2GTp/assets/client-2.jpg",
    name: "Alex B.",
    testimonial:
      "I recently celebrated a special occasion at this restaurant and it was truly unforgettable. The food was outstanding, the atmosphere was perfect, and the staff went above and beyond to make our experience exceptional.",
  },
  {
    imageUrl: "https://c.animaapp.com/motvxa6rie2GTp/assets/client-4.jpg",
    name: "Cameron C.",
    testimonial:
      "The food at this restaurant is absolutely delicious! Every dish we tried was expertly prepared and bursting with flavor. The service was also fantastic, making for a truly memorable dining experience.",
  },
  {
    imageUrl: "https://c.animaapp.com/motvxa6rie2GTp/assets/client-3.jpg",
    name: "Jason M.",
    testimonial:
      "If you&#39;re looking for a restaurant with incredible food, a great atmosphere, and top-notch service, look no further than this gem. I&#39;ve been a regular for years and have never been disappointed.",
  },
  {
    imageUrl: "https://c.animaapp.com/motvxa6rie2GTp/assets/client-1.jpg",
    name: "David L.",
    testimonial:
      "I recently visited this restaurant and was blown away by the quality of the food and the service. The staff was friendly and attentive, and the atmosphere was perfect for a great night out.",
  },
  {
    imageUrl: "https://c.animaapp.com/motvxa6rie2GTp/assets/client-2.jpg",
    name: "Daniel H.",
    testimonial:
      "The quality of the food at this restaurant is outstanding. Every dish is prepared with care and attention to detail, and the flavors are simply amazing. The staff is also friendly and knowledgeable.",
  },
];

const CARD_WIDTH = 386.667 + 30; // width + margin-right on desktop
const CARDS_VISIBLE_DESKTOP = 3;

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dragStart = useRef<number | null>(null);

  const maxIndex = Math.max(0, TESTIMONIALS.length - CARDS_VISIBLE_DESKTOP);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dragStart.current = e.clientX;
  };
  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    const dx = dragStart.current - e.clientX;
    if (dx > 40) next();
    else if (dx < -40) prev();
    dragStart.current = null;
  };

  // Mobile: show 1 card at a time
  const mobileOffset = currentIndex * (334 + 21);
  const desktopOffset = currentIndex * CARD_WIDTH;

  return (
    <div className="relative text-sm box-border caret-transparent flex flex-col leading-[21px] max-w-full outline-[3px] w-full mx-auto px-4 md:text-[15.8218px] md:leading-[23.7326px] md:px-[30px]">
      <div className="text-sm box-border caret-transparent gap-x-0 flex flex-col grow flex-wrap h-full leading-[21px] max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[45px] w-full mx-auto pb-[60px] md:text-[15.8218px] md:flex-nowrap md:leading-[23.7326px] md:pb-[90px]">
        {/* Title */}
        <div className="relative text-sm box-border caret-transparent leading-[21px] max-w-full min-h-[auto] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
          <div className="text-sm box-border caret-transparent grid leading-[21px] outline-[3px] text-center md:text-[15.8218px] md:leading-[23.7326px]">
            <h2 className="relative text-[24.4631px] font-normal box-border caret-transparent leading-[24.4631px] mt-[-8.56209px] min-h-[auto] min-w-[auto] outline-[3px] mx-auto py-2 font-cinzel md:text-[32.0832px] md:leading-[32.0832px] md:mt-[-11.2291px] after:accent-auto after:box-border after:caret-transparent after:text-zinc-900 after:block after:text-[24.4631px] after:not-italic after:normal-nums after:font-normal after:left-[-15%] after:tracking-[normal] after:leading-[24.4631px] after:list-outside after:list-disc after:[mask-image:linear-gradient(90deg,rgba(0,0,0,0),rgb(255,255,255)_40%,rgb(255,255,255)_60%,rgba(0,0,0,0))] after:outline-[3px] after:pointer-events-auto after:absolute after:right-[-15%] after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-zinc-900 after:border-b after:border-separate after:border-t after:inset-y-0 after:font-cinzel after:md:text-[32.0832px] after:md:leading-[32.0832px]">
              Testimonials
            </h2>
            <p className="text-orange-400 text-xl box-border caret-transparent tracking-[1px] leading-[30px] min-h-[auto] min-w-[auto] -order-1 outline-[3px] z-[1] font-allura md:text-[26px] md:leading-[39px]">
              What Our Clients Say
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="relative text-sm box-border caret-transparent leading-[21px] max-w-full min-h-[auto] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
          <div
            className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            <ul
              className="relative flex h-full list-none pl-0 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${typeof window !== "undefined" && window.innerWidth >= 768 ? desktopOffset : mobileOffset}px)`,
              }}
            >
              {TESTIMONIALS.map((t, idx) => (
                <TestimonialCard
                  key={idx}
                  imageUrl={t.imageUrl}
                  imageAlt=""
                  name={t.name}
                  testimonial={t.testimonial}
                />
              ))}
            </ul>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            aria-label="Previous slide"
            className={`absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-[rgba(0,0,0,0.1)_-3px_0px_3px_0px_inset] text-[32px] font-cinzel z-10 -translate-x-1/2 transition-all duration-200 ${currentIndex === 0 ? "text-zinc-300 cursor-default" : "text-zinc-700 cursor-pointer hover:shadow-[rgba(0,0,0,0.2)_0px_0px_8px_0px] hover:text-orange-400"}`}
          >
            &#8249;
          </button>
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            aria-label="Next slide"
            className={`absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-[rgba(0,0,0,0.1)_3px_0px_3px_0px_inset] text-[32px] font-cinzel z-10 translate-x-1/2 transition-all duration-200 ${currentIndex >= maxIndex ? "text-zinc-300 cursor-default" : "text-zinc-700 cursor-pointer hover:shadow-[rgba(0,0,0,0.2)_0px_0px_8px_0px] hover:text-orange-400"}`}
          >
            &#8250;
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-[45px]">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to page ${idx + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-[rgb(119,119,119)_0px_1px_1px_0px_inset] ${idx === currentIndex ? "bg-orange-400 scale-110" : "bg-black/10 hover:bg-black/25"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
