export const FooterNav = () => {
  return (
    <nav className="text-xs box-border caret-transparent leading-[18px] outline-[3px] md:text-sm md:leading-[21px]">
      <ul className="text-xs box-border caret-transparent gap-x-3 flex flex-wrap justify-center leading-[18px] list-none outline-[3px] gap-y-3 pl-0 md:text-sm md:leading-[21px]">
        <li className="text-xs box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-[21px]">
          <a
            href="https://cristiano.ukrdevs.com/restaurant/elementor/menu/"
            className="text-xs box-border caret-transparent leading-[18px] opacity-50 outline-[3px] md:text-sm md:leading-[21px] hover:underline"
          >
            Our Menu
          </a>
        </li>
        <li className="text-xs box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-[21px]">
          <a
            href="https://cristiano.ukrdevs.com/restaurant/elementor/shop/"
            className="text-xs box-border caret-transparent leading-[18px] opacity-50 outline-[3px] md:text-sm md:leading-[21px] hover:underline"
          >
            Online Ordering
          </a>
        </li>
        <li className="text-xs box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-[21px]">
          <a
            href="https://cristiano.ukrdevs.com/restaurant/elementor/locations/cristiano-pizzeria-valencia-spain/"
            className="text-xs box-border caret-transparent leading-[18px] opacity-50 outline-[3px] md:text-sm md:leading-[21px] hover:underline"
          >
            Book a Table
          </a>
        </li>
      </ul>
    </nav>
  );
};
