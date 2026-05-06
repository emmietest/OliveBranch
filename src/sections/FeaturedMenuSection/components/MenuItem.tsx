import { useCart } from "@/context/CartContext";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";

export type MenuItemProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  price: string;
  description: string;
};

export const MenuItem = (props: MenuItemProps) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const priceNum = parseFloat(props.price);
  const id = props.title.toLowerCase().replace(/\s+/g, "-");

  const handleAdd = () => {
    addItem({ id, title: props.title, price: priceNum });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <li className="relative text-sm items-start box-border caret-transparent gap-x-4 flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 group md:text-[15.8218px] md:leading-[23.7326px]">
      <div className="relative text-sm box-border caret-transparent leading-[21px] min-h-[auto] min-w-20 outline-[3px] w-20 md:text-[15.8218px] md:leading-[23.7326px] after:accent-auto after:shadow-[rgba(255,255,255,0.25)_0px_0px_5px_0px_inset,rgba(0,0,0,0.25)_0px_1px_3px_0px] after:box-border after:caret-transparent after:text-zinc-900 after:block after:text-sm after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-[21px] after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:rounded-tl-[63%_50%] after:rounded-tr-[37%_45%] after:rounded-br-[30%_55%] after:rounded-bl-[70%_50%] after:border-separate after:inset-0.5 after:font-system_ui after:md:text-[15.8218px] after:md:leading-[23.7326px]">
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          className="text-sm aspect-[auto_150_/_150] box-border caret-transparent inline h-20 leading-[21px] max-w-full outline-[3px] align-top w-full rounded-tl-[63%_50%] rounded-tr-[37%_45%] rounded-br-[30%_55%] rounded-bl-[70%_50%] transition-transform duration-300 group-hover:scale-105 md:text-[15.8218px] md:leading-[23.7326px]"
        />
      </div>
      <div className="text-sm box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] flex-1 outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
        <div className="text-sm items-center box-border caret-transparent gap-x-1.5 grid grid-cols-[auto_1fr_auto] leading-[21px] outline-[3px] gap-y-1.5 md:text-[15.8218px] md:leading-[23.7326px]">
          <h3 className="relative text-[16.1854px] font-normal box-border caret-transparent leading-[24.278px] min-h-[auto] min-w-[auto] outline-[3px] font-cinzel md:text-[19.2352px] md:leading-[28.8528px]">
            {props.title}
          </h3>
          <hr className="text-zinc-500 text-sm border-b-zinc-500 border-l-zinc-100 border-r-zinc-100 border-t-zinc-100 box-border caret-transparent h-0 leading-[21px] min-h-[auto] min-w-[auto] opacity-25 outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]" />
          <span className="text-orange-400 text-xl box-border caret-transparent block leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] font-cinzel">
            <span className="box-border caret-transparent outline-[3px]">
              $
            </span>
            {props.price}
          </span>
        </div>
        <div className="text-sm box-border caret-transparent leading-[21px] opacity-75 outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
          <p className="text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
            {props.description}
          </p>
        </div>
        <button
          onClick={handleAdd}
          className={`flex items-center gap-1.5 mt-2 text-xs font-cinzel tracking-[0.5px] cursor-pointer border-0 bg-transparent p-0 transition-colors duration-200 ${added ? "text-green-600" : "text-zinc-400 hover:text-orange-400"}`}
        >
          {added ? (
            <>
              <Check className="w-3 h-3" />
              Added to cart!
            </>
          ) : (
            <>
              <ShoppingCart className="w-3 h-3" />
              Add to cart
            </>
          )}
        </button>
      </div>
    </li>
  );
};
