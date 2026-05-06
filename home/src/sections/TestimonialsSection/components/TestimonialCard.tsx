export type TestimonialCardProps = {
  imageUrl: string;
  imageAlt: string;
  name: string;
  testimonial: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <li className="relative text-sm bg-zinc-500/10 shadow-[rgba(0,0,0,0.1)_0px_3px_16px_0px] box-border caret-transparent block shrink-0 h-full leading-[21px] min-h-[auto] min-w-[auto] outline-zinc-500/20 outline outline-1 w-[334.122px] mr-[21px] p-8 rounded-[9px] md:text-[15.8218px] md:leading-[23.7326px] md:w-[386.667px] md:mr-[30px]">
      <div className="text-sm box-border caret-transparent gap-x-3.5 flex leading-[21px] outline-[3px] gap-y-3.5 mb-[15px] md:text-[15.8218px] md:gap-x-[15.8218px] md:leading-[23.7326px] md:gap-y-[15.8218px]">
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          className="text-sm aspect-[auto_150_/_150] box-border caret-transparent leading-[21px] max-w-16 min-h-[auto] min-w-[auto] outline-[3px] align-top w-[150px] rounded-[50%] md:text-[15.8218px] md:leading-[23.7326px]"
        />
        <div className="text-sm box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
          <h5 className="text-lg font-normal box-border caret-transparent leading-[27px] outline-[3px] indent-[3px] font-cinzel">
            {props.name}
          </h5>
          <div className="relative text-orange-400 text-[0px] box-border caret-transparent h-5 leading-[0px] outline-[3px] before:accent-auto before:box-border before:caret-transparent before:text-orange-400 before:flex before:text-xl before:not-italic before:normal-nums before:font-light before:tracking-[normal] before:leading-5 before:list-outside before:list-none before:opacity-30 before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-system_ui">
            <span className="absolute box-border caret-transparent block outline-[3px] w-full overflow-hidden inset-0 before:accent-auto before:box-border before:caret-transparent before:text-orange-400 before:flex before:text-xl before:not-italic before:normal-nums before:font-light before:tracking-[normal] before:leading-5 before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-system_ui"></span>
          </div>
        </div>
      </div>
      <div className="text-sm box-border caret-transparent leading-[21px] opacity-75 outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
        <p className="text-sm box-border caret-transparent leading-[21px] outline-[3px] mt-[21px] md:text-[15.8218px] md:leading-[23.7326px] md:mt-[23.7326px]">
          {props.testimonial}
        </p>
      </div>
    </li>
  );
};
