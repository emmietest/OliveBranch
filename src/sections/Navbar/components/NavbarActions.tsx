import { ShinyButton } from "@/components/ShinyButton";

export const NavbarActions = () => {
  return (
    <div className="box-border caret-transparent float-right outline-[3px]">
      <div className="box-border caret-transparent inline-block outline-[3px] px-2.5 md:px-5">
        <a
          href="https://order.toasttab.com/online/the-olive-branch-2269-ellsworth-rd"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <ShinyButton
            className="!bg-[#c9a96e] !text-black hover:!bg-[#b8935a] !px-7 !py-2 !text-base !leading-[25px]"
          >
            Order
          </ShinyButton>
        </a>
      </div>
    </div>
  );
};
