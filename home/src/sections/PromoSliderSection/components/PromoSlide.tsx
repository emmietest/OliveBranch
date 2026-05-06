export type PromoSlideProps = {
  ariaLabel: string;
  title: string;
  description: string;
  linkHref: string;
  linkText: string;
  previousButtonClassName: string;
  nextButtonClassName?: string;
  showNextButton?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  imageSizes?: string;
};

export const PromoSlide = (props: PromoSlideProps) => {
  return (
    <div
      role="group"
      aria-label={props.ariaLabel}
      className="relative text-sm items-center box-border caret-transparent grid shrink-0 h-full justify-center leading-[21px] min-h-[450px] min-w-[auto] outline-[3px] w-screen md:text-[15.8218px] md:leading-[23.7326px]"
    >
      <div className="relative text-sm caret-transparent leading-[21px] max-w-[720px] min-h-[auto] min-w-[auto] outline-[3px] px-[23.2259px] md:text-[15.8218px] md:leading-[23.7326px] md:px-20">
        <div className="relative text-sm backdrop-blur-[32px] backdrop-brightness-[1.15] bg-[color(srgb_1_1_1_/_0.85)] shadow-[rgba(255,255,255,0.25)_0px_0px_3px_0px_inset,rgba(0,0,0,0.25)_0px_3px_15px_0px] box-border caret-transparent leading-[21px] outline-[3px] z-20 mx-auto my-16 px-4 py-11 rounded-xl md:text-[15.8218px] md:leading-[23.7326px] md:px-20">
          <h2 className="relative text-2xl font-normal box-border caret-transparent inline-block leading-9 outline-[3px] font-cinzel md:text-[32px] md:leading-[48px]">
            {props.title}
          </h2>
          <div className="text-sm box-border caret-transparent leading-[21px] opacity-75 outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
            <p className="text-sm box-border caret-transparent leading-[21px] outline-[3px] mt-[21px] md:text-[15.8218px] md:leading-[23.7326px] md:mt-[23.7326px]">
              {props.description}
            </p>
          </div>
          <div className="text-sm box-border caret-transparent leading-[21px] outline-[3px] mt-6 md:text-[15.8218px] md:leading-[23.7326px]">
            <a
              href={props.linkHref}
              className="relative text-sm box-border caret-transparent inline-block tracking-[1px] leading-[44px] outline-[3px] px-8 font-cinzel md:text-[15.8218px] after:accent-auto after:border-b-orange-400 after:border-l-zinc-900 after:border-r-zinc-900 after:border-t-orange-400 after:box-border after:caret-transparent after:text-zinc-900 after:block after:text-sm after:not-italic after:normal-nums after:font-light after:tracking-[1px] after:leading-[44px] after:list-outside after:list-none after:[mask-image:linear-gradient(90deg,rgba(0,0,0,0),rgb(255,255,255)_40%,rgb(255,255,255)_60%,rgba(0,0,0,0))] after:outline-[3px] after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-b after:border-separate after:border-t after:inset-0 after:font-cinzel after:md:text-[15.8218px] hover:text-orange-400 hover:border-orange-400"
            >
              {props.linkText}
            </a>
          </div>
        </div>
        <div className="absolute text-sm box-border caret-transparent flex justify-between leading-[21px] outline-[3px] transform-none top-2/4 inset-x-0 md:text-[15.8218px] md:leading-[23.7326px] md:translate-y-[-50.0%]">
          <button
            aria-label="Previous slide"
            className={props.previousButtonClassName}
          >
            ‹
          </button>
          {props.showNextButton ? (
            <button
              aria-label="Next slide"
              className={props.nextButtonClassName || ""}
            >
              ›
            </button>
          ) : null}
        </div>
      </div>
      {props.imageSrc ? (
        <img
          src={props.imageSrc}
          alt={props.imageAlt || ""}
          sizes={props.imageSizes}
          className="absolute text-sm aspect-[auto_1620_/_1080] box-border caret-transparent h-[1000px] leading-[21px] max-w-full object-cover outline-[3px] translate-y-[-372px] align-top w-full z-[-1] bottom-0 inset-x-0 md:text-[15.8218px] md:leading-[23.7326px] md:translate-y-[-345px]"
        />
      ) : null}
    </div>
  );
};
