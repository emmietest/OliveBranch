import { CategoryTabs } from "@/sections/MenuPage/components/CategoryTabs";
import { SpecialsSection } from "@/sections/MenuPage/components/SpecialsSection";
import { MenuCategorySection } from "@/sections/MenuPage/components/MenuCategorySection";

export const MenuPage = () => {
  return (
    <div className="text-sm box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
      <div className="text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
        <main className="text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
          <div className="text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
            <div className="text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
              <div className="relative text-sm box-border caret-transparent flex flex-col leading-[21px] max-w-full outline-[3px] w-full mx-auto px-4 md:text-[15.8218px] md:leading-[23.7326px] md:px-[30px]">
                <div className="text-sm box-border caret-transparent gap-x-0 flex flex-col grow flex-wrap h-full leading-[21px] max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[45px] w-full mx-auto pb-[60px] md:text-[15.8218px] md:flex-nowrap md:leading-[23.7326px] md:pb-[90px]">
                  <div className="relative text-sm box-border caret-transparent gap-x-0 leading-[21px] max-w-full min-h-[auto] outline-[3px] gap-y-[45px] md:text-[15.8218px] md:leading-[23.7326px]">
                    <div className="text-sm box-border caret-transparent h-full leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
                      <CategoryTabs />
                      <SpecialsSection />
                      <MenuCategorySection />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
