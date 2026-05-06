import { useCart } from "@/context/CartContext";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";

export type ProductCardProps = {
  productUrl: string;
  imageUrl: string;
  imageAlt: string;
  imageSizes: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  saleLabel?: string;
  addToCartUrl: string;
  addToCartLabel: string;
  addToCartText: string;
};

export const ProductCard = (props: ProductCardProps) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const priceNum = parseFloat(props.price.replace(",", "."));
  const id = props.title.toLowerCase().replace(/\s+/g, "-");

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({ id, title: props.title, price: priceNum });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <li className="text-sm items-center box-border caret-transparent grid grid-cols-[1fr_3fr] grid-rows-[max-content] leading-[21px] min-h-[auto] min-w-[auto] outline-zinc-500/20 outline outline-1 overflow-hidden rounded-[9px] transition-shadow duration-200 hover:shadow-lg md:text-[15.8218px] md:[align-items:normal] md:grid-cols-none md:leading-[23.7326px]">
      <a
        href={props.productUrl}
        className="relative text-sm box-border caret-transparent block h-full leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-[15.8218px] md:h-auto md:leading-[23.7326px]"
      >
        {props.saleLabel ? (
          <span className="absolute text-white text-base items-center bg-red-500 shadow-[rgba(0,0,0,0.15)_0px_1px_3px_0px] box-border caret-transparent flex h-[50px] justify-center tracking-[1px] leading-6 min-w-[50px] outline-[3px] text-center z-10 rounded-tl-[63%_50%] rounded-tr-[37%_45%] rounded-br-[30%_55%] rounded-bl-[70%_50%] left-4 top-4 font-allura">
            {props.saleLabel}
          </span>
        ) : null}
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          sizes={props.imageSizes}
          className="text-sm aspect-[auto_408_/_272] box-border caret-transparent inline h-full leading-[21px] max-w-full object-cover outline-[3px] align-top w-full transition-transform duration-500 hover:scale-105 md:text-[15.8218px] md:h-auto md:leading-[23.7326px] md:object-fill"
        />
      </a>
      <div className="relative text-[13px] bg-[color(srgb_0.96_0.96_0.96)] box-border caret-transparent grid grid-rows-[auto_auto_1fr] leading-[19.5px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden px-5 py-4 md:text-[15.8218px] md:leading-[23.7326px] md:p-8">
        <h2 className="relative text-base font-normal box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px] font-cinzel md:text-xl md:leading-[30px]">
          <a
            href={props.productUrl}
            className="text-base box-border caret-transparent leading-6 outline-[3px] hover:text-orange-400 transition-colors duration-200 md:text-xl md:leading-[30px]"
          >
            {props.title}
          </a>
        </h2>
        <p className="text-[13px] box-border caret-transparent flow-root leading-[19.5px] min-h-[auto] min-w-[auto] opacity-75 outline-[3px] text-ellipsis overflow-hidden mt-[6.5px] md:text-[15.8218px] md:block md:leading-[23.7326px] md:text-clip md:overflow-visible md:mt-[7.91088px]">
          {props.description}
        </p>
        <div className="text-[13px] items-center self-end box-border caret-transparent flex justify-between leading-[19.5px] min-h-[auto] min-w-[auto] outline-[3px] mt-5 md:text-[15.8218px] md:leading-[23.7326px]">
          <p className="text-orange-400 text-[16.25px] box-border caret-transparent leading-[16.25px] min-h-[auto] min-w-[auto] opacity-75 outline-[3px] font-cinzel md:text-[19.7772px] md:leading-[19.7772px]">
            {props.originalPrice ? (
              <del className="text-[13px] box-border caret-transparent leading-[13px] opacity-75 outline-[3px] line-through md:text-[15.8218px] md:leading-[15.8218px]">
                <span className="text-[13px] box-border caret-transparent leading-[13px] outline-[3px] md:text-[15.8218px] md:leading-[15.8218px]">
                  <bdi className="text-[13px] box-border caret-transparent leading-[13px] outline-[3px] md:text-[15.8218px] md:leading-[15.8218px]">
                    <span className="text-[13px] box-border caret-transparent leading-[13px] outline-[3px] md:text-[15.8218px] md:leading-[15.8218px]">
                      $
                    </span>
                    {props.originalPrice}
                  </bdi>
                </span>
              </del>
            ) : null}
            <ins className="text-[16.25px] box-border caret-transparent leading-[16.25px] outline-[3px] md:text-[19.7772px] md:leading-[19.7772px]">
              <span className="text-[16.25px] box-border caret-transparent leading-[16.25px] outline-[3px] md:text-[19.7772px] md:leading-[19.7772px]">
                <bdi className="text-[16.25px] box-border caret-transparent leading-[16.25px] outline-[3px] md:text-[19.7772px] md:leading-[19.7772px]">
                  <span className="text-[16.25px] box-border caret-transparent leading-[16.25px] outline-[3px] md:text-[19.7772px] md:leading-[19.7772px]">
                    $
                  </span>
                  {props.price}
                </bdi>
              </span>
            </ins>
          </p>
          <button
            onClick={handleAddToCart}
            aria-label={props.addToCartLabel}
            className={`relative flex items-center gap-1.5 text-[11.375px] font-normal font-cinzel tracking-[0.6px] leading-[17px] cursor-pointer border-0 bg-transparent p-0 transition-colors duration-200 md:text-[13.844px] md:leading-[20px] ${added ? "text-green-600" : "text-zinc-900 hover:text-orange-400"}`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                Added!
              </>
            ) : (
              <>
                <ShoppingCart className="w-3.5 h-3.5 shrink-0" />
                {props.addToCartText}
              </>
            )}
          </button>
        </div>
      </div>
    </li>
  );
};
