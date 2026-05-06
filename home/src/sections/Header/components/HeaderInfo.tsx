type HeaderInfoProps = {
  onMenuClick: () => void;
};

export const HeaderInfo = ({ onMenuClick }: HeaderInfoProps) => {
  return (
    <div className="text-sm box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
      {/* Desktop info */}
      <div className="text-sm box-border caret-transparent hidden leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px] md:block">
        <p className="text-sm box-border caret-transparent leading-[21px] outline-[3px] my-1 md:text-[15.8218px] md:leading-[23.7326px]">
          <a
            href="https://www.google.com/maps"
            className="text-sm box-border caret-transparent leading-[21px] opacity-85 outline-[3px] md:text-[15.8218px] md:leading-[23.7326px] hover:text-orange-400 transition-colors duration-200"
          >
            Via Monte Napoleone 10 20121 Milan, Italy
          </a>
        </p>
        <p className="text-sm box-border caret-transparent leading-[21px] outline-[3px] my-1 md:text-[15.8218px] md:leading-[23.7326px]">
          <a
            href="tel:+390298765432"
            className="text-sm box-border caret-transparent leading-[21px] opacity-85 outline-[3px] md:text-[15.8218px] md:leading-[23.7326px] hover:text-orange-400 transition-colors duration-200"
          >
            +39 02 98765432
          </a>
        </p>
      </div>
      {/* Hamburger button */}
      <button
        onClick={onMenuClick}
        aria-label="Open menu"
        className="relative flex flex-col justify-center gap-[5px] h-[25px] w-[21px] z-10 cursor-pointer bg-transparent border-0 p-0"
      >
        <span className="block h-[1.5px] w-full bg-white rounded transition-all duration-200" />
        <span className="block h-[1.5px] w-full bg-white rounded transition-all duration-200" />
        <span className="block h-[1.5px] w-full bg-white rounded transition-all duration-200" />
      </button>
    </div>
  );
};
