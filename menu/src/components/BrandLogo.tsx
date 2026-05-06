export type BrandLogoProps = {
  containerVariant: string;
  href: string;
  linkVariant: string;
  title: string;
  titleVariant: string;
  subtitle: string;
  subtitleVariant: string;
  showDetails: boolean;
  locationText: string;
  locationHref: string;
  locationLinkVariant: string;
  phoneText: string;
  phoneHref: string;
  phoneLinkVariant: string;
  statusText: string;
};

export const BrandLogo = (props: BrandLogoProps) => {
  return (
    <div
      className={`text-sm box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px] ${props.containerVariant}`}
    >
      <a
        href={props.href}
        className={`relative text-sm box-border caret-transparent gap-x-[3px] flex flex-col leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[3px] z-50 font-cinzel md:text-[15.8218px] md:leading-[15.8218px] ${props.linkVariant}`}
      >
        <span
          className={`box-border caret-transparent block tracking-[3px] min-h-[auto] min-w-[auto] outline-[3px] ${props.titleVariant}`}
        >
          {props.title}
        </span>
        <span
          className={`relative text-[9px] box-border caret-transparent block tracking-[5px] leading-[9px] min-h-[auto] min-w-[auto] outline-[3px] indent-[7px] after:accent-auto after:bg-[radial-gradient(circle,rgb(209,160,84)_20%,rgba(0,0,0,0)_100%)] after:caret-transparent after:block after:text-[9px] after:not-italic after:normal-nums after:font-light after:tracking-[5px] after:leading-[9px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[7px] after:normal-case after:visible after:z-[-1] after:border-separate after:left-2/4 after:top-0 after:bottom-[0.5px] after:font-cinzel ${props.subtitleVariant}`}
        >
          {props.subtitle}
        </span>
      </a>

      {props.showDetails && (
        <>
          <br className="text-sm box-border caret-transparent block leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]" />
          <p className="text-sm box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] mt-[21px] md:text-[15.8218px] md:leading-[23.7326px] md:mt-[23.7326px]">
            <a href={props.locationHref} className={props.locationLinkVariant}>
              {props.locationText}
            </a>
          </p>
          <p className="text-orange-400 text-base font-normal box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px] mt-[9px] font-cinzel">
            <a href={props.phoneHref} className={props.phoneLinkVariant}>
              {props.phoneText}
            </a>
          </p>
          <span className="relative text-xs box-border caret-transparent block leading-3 min-h-[auto] min-w-[auto] outline-[3px] uppercase mt-6 px-3 py-1.5 before:accent-auto before:caret-transparent before:text-white before:block before:text-xs before:not-italic before:normal-nums before:font-light before:h-[15px] before:tracking-[normal] before:leading-3 before:list-outside before:list-disc before:opacity-50 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:uppercase before:-translate-x-2 before:visible before:w-[15px] before:z-[-2] before:border-separate before:border-r before:border-t before:border-white before:left-2/4 before:-top-3 before:font-system_ui after:accent-auto after:bg-white after:caret-transparent after:text-white after:block after:text-xs after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-3 after:list-outside after:list-disc after:opacity-15 after:outline-[3px] after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:uppercase after:visible after:z-[-1] after:border-separate after:inset-0 after:font-system_ui">
            {props.statusText}
          </span>
          <div className="text-sm box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]"></div>
        </>
      )}
    </div>
  );
};
