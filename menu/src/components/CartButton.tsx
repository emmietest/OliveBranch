export const CartButton = () => {
  return (
    <button className="text-[13.3333px] bg-transparent caret-transparent block leading-[normal] min-h-[auto] min-w-[auto] outline-[3px] text-center p-0">
      <span className="relative text-[10px] items-center box-border caret-transparent flex flex-col outline-[3px] md:text-[13.3333px] md:flex-row">
        <span className="absolute text-[8px] font-normal bg-orange-400 box-border caret-transparent block h-4 leading-4 outline-[3px] w-4 z-[99] rounded-[50%] right-0 top-[17px] md:static md:text-[13.3333px] md:font-light md:bg-transparent md:hidden md:h-auto md:leading-[normal] md:w-auto md:z-auto md:rounded-none md:right-auto md:top-auto">
          0
        </span>
        <img
          src="https://c.animaapp.com/motm2httyyOuCg/assets/icon-1.svg"
          alt="Icon"
          className="relative text-[10px] box-border caret-transparent h-8 outline-[3px] align-baseline w-8 z-50 md:text-[13.3333px]"
        />
        <span className="text-[10px] box-border caret-transparent hidden min-h-0 min-w-0 outline-[3px] md:text-[13.3333px] md:block md:min-h-[auto] md:min-w-[auto]">
          $0,00
        </span>
      </span>
    </button>
  );
};
