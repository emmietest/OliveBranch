export type CategoryCardProps = {
  groupAriaLabel: string;
  href: string;
  linkAriaLabel: string;
  imageSrc: string;
  imageAlt: string;
  imageSizes: string;
  title: string;
};

export const CategoryCard = (props: CategoryCardProps) => {
  return (
    <li
      role="group"
      aria-label={props.groupAriaLabel}
      className="relative text-sm box-border caret-transparent block shrink-0 h-full leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] w-[179.5px] mr-4 md:text-[15.8218px] md:leading-[23.7326px] md:w-[284.5px] md:mr-8"
    >
      <a
        aria-label={props.linkAriaLabel}
        href={props.href}
        className="relative text-sm box-border caret-transparent block leading-[21px] outline-[3px] overflow-hidden rounded-lg md:text-[15.8218px] md:leading-[23.7326px] before:accent-auto before:bg-[linear-gradient(to_top,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_100%)] before:box-border before:caret-transparent before:text-zinc-900 before:block before:text-sm before:not-italic before:normal-nums before:font-light before:h-[30%] before:tracking-[normal] before:leading-[21px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-[1] before:rounded-[10px] before:border-separate before:left-0 before:bottom-0 before:font-system_ui before:md:text-[15.8218px] before:md:leading-[23.7326px] after:accent-auto after:shadow-[rgba(255,255,255,0.25)_0px_0px_6px_0px_inset,rgba(0,0,0,0.25)_0px_0px_5px_0px] after:box-border after:caret-transparent after:text-zinc-900 after:block after:text-sm after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-[21px] after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:z-[11] after:rounded-md after:border-separate after:inset-0.5 after:font-system_ui after:md:text-[15.8218px] after:md:leading-[23.7326px]"
      >
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          sizes={props.imageSizes}
          className="text-sm aspect-[auto_600_/_600] box-border caret-transparent inline leading-[21px] max-w-full outline-[3px] align-top w-[600px] md:text-[15.8218px] md:leading-[23.7326px]"
        />
        <h2 className="absolute text-white text-xl font-normal box-border caret-transparent leading-[30px] outline-[3px] text-center w-full z-10 bottom-5 font-cinzel">
          {props.title}
        </h2>
      </a>
    </li>
  );
};
