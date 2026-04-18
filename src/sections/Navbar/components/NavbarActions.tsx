import { ShinyButton } from "@/components/ShinyButton";

export const NavbarActions = () => {
  return (
    <div className="flex items-center pr-2 md:pr-4">
      <div className="box-border caret-transparent inline-block px-2.5 md:px-5">
        <a
          href="https://order.toasttab.com/online/the-olive-branch-2269-ellsworth-rd"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <ShinyButton
            className="!bg-[#4CAF50] !text-black border-2 border-[#c9a96e] hover:!bg-[#4cd63a] !px-6 !py-2 !text-sm md:!text-base !leading-[25px]"
          >
            ORDER
          </ShinyButton>
        </a>
      </div>
    </div>
  );
};
