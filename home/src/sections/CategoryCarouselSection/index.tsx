import { useState, useRef } from "react";
import { CategoryCard } from "@/sections/CategoryCarouselSection/components/CategoryCard";

const CATEGORIES = [
  {
    href: "#sushi",
    linkAriaLabel: "Visit product category Sushi",
    imageSrc:
      "https://c.animaapp.com/motvxa6rie2GTp/assets/cat-sushi-408x612.jpg",
    imageAlt: "Sushi",
    title: "Sushi",
  },
  {
    href: "#burgers",
    linkAriaLabel: "Visit product category Burgers",
    imageSrc:
      "https://c.animaapp.com/motvxa6rie2GTp/assets/cat-burgers-408x612.jpg",
    imageAlt: "Burgers",
    title: "Burgers",
  },
  {
    href: "#dinner",
    linkAriaLabel: "Visit product category Dinner",
    imageSrc:
      "https://c.animaapp.com/motvxa6rie2GTp/assets/cat-dinner-408x612.jpg",
    imageAlt: "Dinner",
    title: "Dinner",
  },
  {
    href: "#pizza",
    linkAriaLabel: "Visit product category Pizza",
    imageSrc:
      "https://c.animaapp.com/motvxa6rie2GTp/assets/cat-pizza-408x612.jpg",
    imageAlt: "Pizza",
    title: "Pizza",
  },
  {
    href: "#salads",
    linkAriaLabel: "Visit product category Salads",
    imageSrc:
      "https://c.animaapp.com/motvxa6rie2GTp/assets/cat-salads-408x612.jpg",
    imageAlt: "Salads",
    title: "Salads",
  },
];

// Cards visible per "page" - we slide by one card at a time
const CARD_WIDTH_MOBILE = 179.5 + 16; // w + mr
const CARD_WIDTH_DESKTOP = 284.5 + 32;

export const CategoryCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLUListElement>(null);

  // Drag/swipe support
  const dragStart = useRef<number | null>(null);

  const visibleCount = () => (window.innerWidth >= 768 ? 4 : 2);

  const maxIndex = () => Math.max(0, CATEGORIES.length - visibleCount());

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex(), i + 1));
  const goTo = (idx: number) => setCurrentIndex(idx);

  const getOffset = () => {
    const isMd = typeof window !== "undefined" && window.innerWidth >= 768;
    const cardW = isMd ? CARD_WIDTH_DESKTOP : CARD_WIDTH_MOBILE;
    return currentIndex * cardW;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStart.current === null) return;
    const dx = dragStart.current - e.clientX;
    if (dx > 40) next();
    else if (dx < -40) prev();
    dragStart.current = null;
  };

  return (
    <div className="relative text-sm box-border caret-transparent flex flex-col leading-[21px] max-w-full outline-[3px] w-full mb-20 px-4 md:text-[15.8218px] md:leading-[23.7326px] md:px-[30px]">
      <div className="text-sm box-border caret-transparent gap-x-0 flex flex-col grow flex-wrap h-full leading-[21px] max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[45px] w-full mx-auto pb-[60px] md:text-[15.8218px] md:flex-nowrap md:leading-[23.7326px] md:pb-[90px]">
        {/* Title */}
        <div className="relative text-sm box-border caret-transparent gap-x-0 leading-[21px] max-w-full min-h-[auto] outline-[3px] gap-y-[45px] md:text-[15.8218px] md:leading-[23.7326px]">
          <div className="text-sm box-border caret-transparent grid leading-[21px] outline-[3px] text-center md:text-[15.8218px] md:leading-[23.7326px]">
            <h2 className="relative text-[24.4631px] font-normal box-border caret-transparent leading-[24.4631px] mt-[-8.56209px] min-h-[auto] min-w-[auto] outline-[3px] mx-auto py-2 font-cinzel md:text-[32.0832px] md:leading-[32.0832px] md:mt-[-11.2291px] after:accent-auto after:box-border after:caret-transparent after:text-zinc-900 after:block after:text-[24.4631px] after:not-italic after:normal-nums after:font-normal after:left-[-15%] after:tracking-[normal] after:leading-[24.4631px] after:list-outside after:list-disc after:[mask-image:linear-gradient(90deg,rgba(0,0,0,0),rgb(255,255,255)_40%,rgb(255,255,255)_60%,rgba(0,0,0,0))] after:outline-[3px] after:pointer-events-auto after:absolute after:right-[-15%] after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-zinc-900 after:border-b after:border-separate after:border-t after:inset-y-0 after:font-cinzel after:md:text-[32.0832px] after:md:leading-[32.0832px]">
              Order Online
            </h2>
            <p className="text-orange-400 text-xl box-border caret-transparent tracking-[1px] leading-[30px] min-h-[auto] min-w-[auto] -order-1 outline-[3px] z-[1] font-allura md:text-[26px] md:leading-[39px]">
              Delivery Service
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative text-sm box-border caret-transparent leading-[21px] max-w-full min-h-[auto] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
          <div className="relative -mx-4 md:-mx-8">
            <div
              className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
            >
              <ul
                ref={trackRef}
                className="relative flex h-full list-none pl-0 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${getOffset()}px)` }}
              >
                {CATEGORIES.map((cat, idx) => (
                  <CategoryCard
                    key={cat.title}
                    groupAriaLabel={`${idx + 1} / ${CATEGORIES.length}`}
                    href={cat.href}
                    linkAriaLabel={cat.linkAriaLabel}
                    imageSrc={cat.imageSrc}
                    imageAlt={cat.imageAlt}
                    imageSizes="(max-width: 408px) 100vw, 408px"
                    title={cat.title}
                  />
                ))}
              </ul>
            </div>

            {/* Arrows */}
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              aria-label="Previous slide"
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-[rgba(0,0,0,0.1)_-3px_0px_3px_0px_inset] text-3xl font-cinzel z-10 transition-all duration-200 hover:shadow-[rgba(0,0,0,0.15)_0px_0px_6px_0px] ${currentIndex === 0 ? "opacity-40 cursor-default" : "cursor-pointer hover:text-orange-400"}`}
            >
              &#8249;
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex()}
              aria-label="Next slide"
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-[rgba(0,0,0,0.1)_3px_0px_3px_0px_inset] text-3xl font-cinzel z-10 transition-all duration-200 hover:shadow-[rgba(0,0,0,0.15)_0px_0px_6px_0px] ${currentIndex >= maxIndex() ? "opacity-40 cursor-default" : "cursor-pointer hover:text-orange-400"}`}
            >
              &#8250;
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2.5 mt-[45px]">
            {CATEGORIES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-[rgb(119,119,119)_0px_1px_1px_0px_inset] ${idx === currentIndex ? "bg-orange-400 scale-110" : "bg-black/10 hover:bg-black/25"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
