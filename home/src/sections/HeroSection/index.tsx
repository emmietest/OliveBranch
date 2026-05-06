import { useState, useEffect, useCallback } from "react";

const SLIDES = [
  {
    src: "https://c.animaapp.com/motvxa6rie2GTp/assets/herro-slide-1.jpg",
    label: "1 / 2",
  },
  {
    src: "https://c.animaapp.com/motvxa6rie2GTp/assets/herro-slide-2.jpg",
    label: "2 / 2",
  },
];

export const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
      setAnimating(false);
    }, 600);
  }, [animating]);

  const goTo = (idx: number) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 600);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative text-sm box-border caret-transparent flex flex-col leading-[21px] max-w-full outline-[3px] w-full mx-auto md:text-[15.8218px] md:leading-[23.7326px]">
      <div className="relative bg-black h-[100svh] min-h-[600px] max-h-[1000px] overflow-hidden">
        {/* Slides */}
        {SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === current ? "opacity-100 z-[1]" : "opacity-0 z-0"}`}
          >
            <img
              src={slide.src}
              alt=""
              className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-linear ${idx === current ? "scale-110" : "scale-100"}`}
            />
          </div>
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/70 via-black/30 to-black/60" />
        <span className="absolute inset-0 z-[2] bg-[radial-gradient(circle,rgba(0,0,0,0.5)_30%,rgba(0,0,0,0)_65%)] opacity-75" />

        {/* Content */}
        <div className="relative text-white content-center z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="mt-[-50px]">
            <div className="flex flex-col-reverse items-center">
              <h1 className="relative text-[40px] font-normal leading-tight min-h-[auto] min-w-[auto] px-4 py-[9px] font-cinzel md:text-[61px] md:leading-[61px] after:content-[''] after:block after:absolute after:inset-y-0 after:left-[-6%] after:right-[-6%] after:[mask-image:linear-gradient(90deg,rgba(0,0,0,0),rgb(255,255,255)_40%,rgb(255,255,255)_60%,rgba(0,0,0,0))] after:border-t after:border-b after:border-white">
                Cristiano Restaurant
              </h1>
              <p className="text-orange-400 text-[13.2px] tracking-[1px] leading-[19.8px] mb-[9px] font-cinzel md:text-[22px] md:leading-[33px] brightness-125">
                123 Main Street, Uni 21, New York City
              </p>
            </div>
            <div className="relative max-w-[560px] mx-auto pt-[30px] text-[15.75px] md:text-[17.8px]">
              <p>
                Welcome to Cristiano! Discover a world of culinary delights and
                indulge in an unforgettable dining experience. Explore Our Menu
                and make a reservation today. Bon app&#233;tit!
              </p>
            </div>
            <a
              href="#menu"
              className="relative inline-block tracking-[1px] leading-[44px] mt-8 px-8 font-cinzel text-sm md:text-[15.8px] hover:text-orange-400 transition-colors duration-200 after:content-[''] after:absolute after:inset-0 after:[mask-image:linear-gradient(90deg,rgba(0,0,0,0),rgb(255,255,255)_40%,rgb(255,255,255)_60%,rgba(0,0,0,0))] after:border-t after:border-b after:border-t-orange-400 after:border-b-orange-400"
            >
              Our Menu
            </a>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === current ? "bg-orange-400 scale-110" : "bg-white/30 hover:bg-white/60"}`}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length)}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white text-3xl transition-all duration-200 font-cinzel"
        >
          &#8249;
        </button>
        <button
          onClick={() => next()}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white text-3xl transition-all duration-200 font-cinzel"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};
