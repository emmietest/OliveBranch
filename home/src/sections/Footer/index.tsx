import { FooterMain } from "@/sections/Footer/components/FooterMain";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="sticky text-white text-sm bg-zinc-900 box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] z-30 top-full md:text-[15.8218px] md:leading-[23.7326px]">
      <FooterMain />
      <FooterBottom />
    </footer>
  );
};
