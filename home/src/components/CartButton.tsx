import { useCart } from "@/context/CartContext";

export const CartButton = () => {
  const { count, total, setIsOpen } = useCart();

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="text-[13.3333px] bg-transparent caret-transparent leading-[normal] min-h-[auto] min-w-[auto] outline-[3px] text-center p-0 cursor-pointer hover:text-orange-400 transition-colors duration-200"
      aria-label="Open cart"
    >
      <span className="relative text-[10px] items-center box-border caret-transparent flex flex-col outline-[3px] md:text-[13.3333px] md:flex-row md:gap-2">
        <span
          className={`absolute text-[8px] font-normal bg-orange-400 box-border caret-transparent flex items-center justify-center h-4 leading-4 outline-[3px] w-4 z-[99] rounded-[50%] right-0 top-[17px] transition-all duration-200 md:static md:text-[13.3333px] md:font-light md:bg-transparent md:h-auto md:leading-[normal] md:w-auto md:z-auto md:rounded-none ${count > 0 ? "scale-100" : "scale-75 opacity-70"}`}
        >
          {count > 0 ? count : ""}
        </span>
        <img
          src="https://c.animaapp.com/motvxa6rie2GTp/assets/icon-1.svg"
          alt="Icon"
          className="relative text-[10px] box-border caret-transparent h-8 outline-[3px] align-baseline w-8 z-50 md:text-[13.3333px]"
        />
        <span className="text-[10px] box-border caret-transparent hidden min-h-0 min-w-0 outline-[3px] md:text-[13.3333px] md:block md:min-h-[auto] md:min-w-[auto]">
          ${total.toFixed(2)}
        </span>
      </span>
    </button>
  );
};
