import { SocialLinks } from "@/components/navigation/SocialLinks";
import { CartButton } from "@/components/CartButton";

export const HeaderActions = () => {
  return (
    <div className="text-sm items-center box-border caret-transparent flex justify-end leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-right md:text-[15.8218px] md:leading-[23.7326px]">
      <SocialLinks />
      <CartButton />
    </div>
  );
};
