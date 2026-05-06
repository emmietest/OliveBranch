import { Link } from "react-router-dom";
import { CategoryTabs } from "@/pages/MenuPage/components/CategoryTabs";
import { SpecialsSection } from "@/pages/MenuPage/components/SpecialsSection";
import { MenuCategorySection } from "@/pages/MenuPage/components/MenuCategorySection";

export const MenuPage = () => {
  return (
    <main className="bg-white min-h-screen text-black">
      <section className="relative text-sm items-center bg-fixed bg-zinc-900 bg-[url('https://cristiano.ukrdevs.com/restaurant/elementor/wp-content/themes/cristiano/assets/images/noise.webp')] box-border caret-transparent grid h-[550px] justify-center leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-20 md:text-[15.8218px] md:leading-[23.7326px] after:accent-auto after:bg-[linear-gradient(rgb(0,0,0)_0%,rgba(0,0,0,0)_260px)] after:caret-transparent after:text-zinc-900 after:block after:text-sm after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:z-[1] after:border-separate after:inset-0 after:font-system_ui after:md:text-[15.8218px] after:md:leading-[23.7326px]">
        <div className="text-sm box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
          <h1 className="relative text-white text-[23.0312px] font-normal backdrop-blur-[32px] bg-black/20 shadow-[rgba(0,0,0,0.5)_0px_5px_15px_0px] box-border caret-transparent leading-[23.0312px] outline-[3px] text-center z-10 p-[13.8188px] font-cinzel md:text-[40px] md:leading-10 md:p-6 after:accent-auto after:shadow-[rgba(255,255,255,0.15)_0px_0px_6px_0px_inset,rgba(0,0,0,0.25)_0px_0px_5px_0px] after:caret-transparent after:text-white after:block after:text-[23.0312px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[23.0312px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:z-[11] after:border-separate after:inset-[3px] after:font-cinzel after:md:text-[40px] after:md:leading-10">
            Our Menu
          </h1>
        </div>
        <img
          src="https://c.animaapp.com/motm2httyyOuCg/assets/header.jpg"
          alt=""
          sizes="(max-width: 2560px) 100vw, 2560px"
          className="absolute text-sm aspect-[auto_2560_/_1747] box-border caret-transparent h-full leading-[21px] max-w-full object-cover outline-[3px] align-top w-full inset-0 md:text-[15.8218px] md:leading-[23.7326px]"
        />
      </section>

      <div className="mx-auto max-w-[1170px] px-4 md:px-[30px] pb-20">
        <CategoryTabs />
        <SpecialsSection />
        <MenuCategorySection />
      </div>
    </main>
  );
};
