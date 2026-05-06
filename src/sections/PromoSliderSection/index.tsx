import { useState } from "react";

const SLIDES = [
  {
    title: "Weekday Lunch Delight",
    description:
      "Take a break with our Weekday Lunch Delight! Enjoy a two-course meal at a special price, Monday to Friday, 11 AM to 3 PM. Treat yourself to a delightful lunch today!",
    linkHref: "#menu",
    linkText: "Our Menu",
    imageSrc: null,
  },
  {
    title: "Family Feast Special",
    description:
      "Bring your loved ones for our Family Feast Special! Enjoy a complimentary dessert for tables of four or more. Book now and make memories over a delicious meal!",
    linkHref: "#reservation",
    linkText: "Book a Table",
    imageSrc:
      "https://c.animaapp.com/motvxa6rie2GTp/assets/herro-slide-1-1620x1080.jpg",
  },
];

export const PromoSliderSection = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (idx: number) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  };

  const slide = SLIDES[current];

  return (
    <div className="relative text-sm box-border caret-transparent flex flex-col leading-[21px] max-w-full outline-[3px] w-full mx-auto px-4 md:text-[15.8218px] md:leading-[23.7326px] md:px-[30px]">
      <div className="text-sm box-border caret-transparent gap-x-0 flex flex-col grow flex-wrap h-full leading-[21px] max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[45px] w-full mx-auto pb-[60px] md:text-[15.8218px] md:flex-nowrap md:leading-[23.7326px] md:pb-[90px]">
        <div className="relative text-sm box-border caret-transparent leading-[21px] max-w-full min-h-[auto] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
          <div className="relative overflow-hidden rounded-xl min-h-[300px] md:min-h-[450px] bg-zinc-900 bg-[url('https://c.animaapp.com/motvxa6rie2GTp/assets/noise.webp')]">
            {/* Background image */}
            {slide.imageSrc && (
              <img
                src={slide.imageSrc}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${animating ? "opacity-0" : "opacity-100"}`}
              />
            )}
            {/* Dark overlay when image is present */}
            {slide.imageSrc && (
              <div className="absolute inset-0 bg-black/40 z-[1]" />
            )}

            {/* Content */}
            <div
              className={`relative z-20 flex items-center justify-center min-h-[300px] md:min-h-[450px] px-6 md:px-20 transition-opacity duration-400 ${animating ? "opacity-0" : "opacity-100"}`}
            >
              <div className="relative backdrop-blur-[32px] backdrop-brightness-[1.15] bg-white/85 shadow-[rgba(255,255,255,0.25)_0px_0px_3px_0px_inset,rgba(0,0,0,0.25)_0px_3px_15px_0px] max-w-[520px] w-full mx-auto my-12 px-6 py-10 rounded-xl md:px-16">
                <h2 className="relative text-2xl font-normal leading-9 font-cinzel md:text-[32px] md:leading-[48px]">
                  {slide.title}
                </h2>
                <div className="opacity-75 mt-5">
                  <p className="text-sm md:text-[15.8px] leading-relaxed">
                    {slide.description}
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href={slide.linkHref}
                    className="relative inline-block tracking-[1px] leading-[44px] px-8 font-cinzel text-sm md:text-[15.8px] hover:text-orange-400 transition-colors duration-200 after:content-[''] after:absolute after:inset-0 after:[mask-image:linear-gradient(90deg,rgba(0,0,0,0),rgb(255,255,255)_40%,rgb(255,255,255)_60%,rgba(0,0,0,0))] after:border-t after:border-b after:border-t-orange-400 after:border-b-orange-400"
                  >
                    {slide.linkText}
                  </a>
                </div>

                {/* Nav buttons inside card */}
                <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 flex justify-between px-3 md:px-4 pointer-events-none">
                  <button
                    onClick={() => goTo(0)}
                    disabled={current === 0}
                    aria-label="Previous slide"
                    className={`pointer-events-auto hidden md:flex items-center justify-center w-[52px] h-[52px] text-[40px] backdrop-blur-lg bg-white/60 shadow-[rgba(0,0,0,0.25)_0px_0px_3px_0px] rounded-tl-[63%_50%] rounded-tr-[37%_45%] rounded-br-[30%_55%] rounded-bl-[70%_50%] font-cinzel transition-all duration-200 hover:bg-white/80 ${current === 0 ? "opacity-30 cursor-default" : "cursor-pointer"}`}
                  >
                    &#8249;
                  </button>
                  <button
                    onClick={() => goTo(1)}
                    disabled={current === SLIDES.length - 1}
                    aria-label="Next slide"
                    className={`pointer-events-auto hidden md:flex items-center justify-center w-[52px] h-[52px] text-[40px] backdrop-blur-lg bg-white/60 shadow-[rgba(0,0,0,0.25)_0px_0px_3px_0px] rounded-tl-[30%_50%] rounded-tr-[70%_45%] rounded-br-[63%_55%] rounded-bl-[37%_50%] font-cinzel transition-all duration-200 hover:bg-white/80 ${current === SLIDES.length - 1 ? "opacity-30 cursor-default" : "cursor-pointer"}`}
                  >
                    &#8250;
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile swipe dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:hidden">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === current ? "bg-orange-400 w-4" : "bg-white/60"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
