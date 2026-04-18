import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { NavbarActions } from "@/sections/Navbar/components/NavbarActions";

export const Navbar = () => {
  return (
    <div className="text-xs bg-neutral-900 box-border caret-transparent h-[80px] leading-[80px] outline-[3px] z-[100] mb-px sticky top-0">
      <NavbarLogo />
      <NavbarActions />
    </div>
  );
};
