import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/HeroSection";
import { MenuPage } from "@/sections/MenuPage";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <body className="text-zinc-900 text-sm not-italic normal-nums font-light accent-auto bg-white box-border caret-transparent flex flex-col tracking-[normal] leading-[21px] list-outside list-disc min-h-[1000px] outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-system_ui md:text-[15.8218px] md:leading-[23.7326px]">
      <Header />
      <HeroSection />
      <MenuPage />
      <Footer />
    </body>
  );
};
