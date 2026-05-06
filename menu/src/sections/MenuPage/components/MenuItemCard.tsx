export type MenuItemCardProps = {
  title: string;
  description: string;
  price?: string;
  imageUrl?: string;
  imageAlt?: string;
  sizeOptions?: {
    label: string;
    price: string;
  }[];
};

export const MenuItemCard = (props: MenuItemCardProps) => {
  return (
    <li className="flex items-start gap-4">
      {props.imageUrl && (
        <div className="relative flex-shrink-0 w-20 h-20">
          <img
            src={props.imageUrl}
            alt={props.imageAlt ?? ""}
            className="w-20 h-20 object-cover rounded-[63%_37%_30%_70%_/_50%_45%_55%_50%] shadow-[rgba(0,0,0,0.25)_0px_1px_3px_0px]"
          />
        </div>
      )}

      <div className="flex-1 min-w-0">
        {/* Title + price row */}
        <div className="grid grid-cols-[1fr_auto] items-center gap-x-2 gap-y-1 mb-1">
          <h3 className="text-[16px] md:text-[19px] font-normal font-cinzel leading-snug">
            {props.title}
          </h3>
          {props.price && (
            <span className="text-orange-400 text-xl font-cinzel leading-none whitespace-nowrap">
              {props.price.split(" / ").map((part, i) => (
                <span key={i}>
                  {i > 0 && " / "}${part}
                </span>
              ))}
            </span>
          )}
        </div>

        {/* Divider */}
        <hr className="border-t border-zinc-300 opacity-40 mb-2" />

        {/* Size options */}
        {props.sizeOptions && props.sizeOptions.length > 0 && (
          <ul className="flex flex-wrap gap-x-3 gap-y-1 mb-1 pl-0 list-none font-cinzel text-sm">
            {props.sizeOptions.map((option, i) => (
              <li key={i}>
                <span className="opacity-80">{option.label}</span>
                {" - "}
                <span className="text-orange-400">${option.price}</span>
              </li>
            ))}
          </ul>
        )}

        <p className="text-sm md:text-[15.8px] leading-relaxed opacity-75">
          {props.description}
        </p>
      </div>
    </li>
  );
};
