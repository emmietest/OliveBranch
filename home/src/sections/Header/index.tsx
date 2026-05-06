import { HeaderInfo } from "@/sections/Header/components/HeaderInfo";
import { Logo } from "@/components/Logo";
import { HeaderActions } from "@/sections/Header/components/HeaderActions";
import { MobileMenu } from "@/components/MobileMenu";
import { useState, useEffect } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed text-white text-sm leading-[21px] outline-[3px] w-full z-[99] top-0 transition-all duration-300 md:text-[15.8218px] md:leading-[23.7326px] ${
          scrolled
            ? "bg-zinc-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="relative text-sm leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
          <div className="text-sm items-center caret-transparent grid grid-cols-[1fr_auto_1fr] h-[75px] leading-[21px] max-w-[1508px] outline-[3px] mx-auto px-[21.5px] md:text-[15.8218px] md:h-[90px] md:leading-[23.7326px] md:px-8">
            <HeaderInfo onMenuClick={() => setMenuOpen(true)} />
            <Logo />
            <HeaderActions />
          </div>
        </div>
      </header>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};
