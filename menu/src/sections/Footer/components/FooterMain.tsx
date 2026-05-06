import { FooterPromo } from "@/sections/Footer/components/FooterPromo";
import { FooterBrandInfo } from "@/sections/Footer/components/FooterBrandInfo";
import { FooterSocial } from "@/sections/Footer/components/FooterSocial";

export const FooterMain = () => {
  return (
    <div className="text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
      <div className="text-sm caret-transparent leading-[21px] max-w-[1508px] outline-[3px] mx-auto px-8 md:text-[15.8218px] md:leading-[23.7326px]">
        <div className="text-sm box-border caret-transparent gap-x-10 grid leading-[21px] outline-[3px] gap-y-10 pt-[60px] pb-[30px] md:text-[15.8218px] md:leading-[23.7326px]">
          <FooterPromo />
          <FooterBrandInfo />
          <FooterSocial />
        </div>
      </div>
    </div>
  );
};
