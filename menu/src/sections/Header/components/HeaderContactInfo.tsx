export type HeaderContactInfoProps = {
  addressText: string;
  addressHref: string;
  phoneText: string;
  phoneHref: string;
  statusText: string;
  facebookHref: string;
  instagramHref: string;
  tripadvisorHref: string;
  showAddressPhone: string;
  showStatusSocials: string;
};

export const HeaderContactInfo = (props: HeaderContactInfoProps) => {
  return (
    <div className="text-sm box-border caret-transparent hidden leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
      {props.showAddressPhone === "true" ? (
        <>
          <p className="text-sm box-border caret-transparent leading-[21px] outline-[3px] my-1 md:text-[15.8218px] md:leading-[23.7326px] before:accent-auto before:caret-transparent before:text-white before:inline-block before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-3 before:mr-2 before:border-separate before:font-icons">
            <a
              href={props.addressHref}
              className="text-sm box-border caret-transparent leading-[21px] opacity-85 outline-[3px] md:text-[15.8218px] md:leading-[23.7326px] hover:text-orange-400 hover:border-orange-400"
            >
              {props.addressText}
            </a>
          </p>
          <p className="text-sm box-border caret-transparent leading-[21px] outline-[3px] my-1 md:text-[15.8218px] md:leading-[23.7326px] before:accent-auto before:caret-transparent before:text-white before:inline-block before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-3 before:mr-2 before:border-separate before:font-icons">
            <a
              href={props.phoneHref}
              className="text-sm box-border caret-transparent leading-[21px] opacity-85 outline-[3px] md:text-[15.8218px] md:leading-[23.7326px] hover:text-orange-400 hover:border-orange-400"
            >
              {props.phoneText}
            </a>
          </p>
        </>
      ) : null}

      {props.showStatusSocials === "true" ? (
        <>
          <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-white before:text-xs before:not-italic before:normal-nums before:tracking-[normal] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:no-underline before:indent-[0px] before:visible before:border-separate relative text-xs inline-block leading-3 uppercase mr-4 mt-6 px-3 py-1.5 before:block before:font-light before:h-[15px] before:opacity-50 before:absolute before:text-right before:uppercase before:w-[15px] before:z-[-2] before:border-r before:border-t before:border-white before:left-2/4 before:-top-3 before:font-system_ui after:accent-auto after:bg-white after:caret-transparent after:text-white after:block after:text-xs after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-3 after:list-outside after:list-disc after:opacity-15 after:outline-[3px] after:pointer-events-auto after:absolute after:text-right after:no-underline after:indent-[0px] after:uppercase after:visible after:z-[-1] after:border-separate after:inset-0 after:font-system_ui">
            {props.statusText}
          </p>
          <div className="text-sm items-center box-border caret-transparent gap-x-2 inline-flex justify-end leading-[21px] outline-[3px] gap-y-2 mt-3">
            <a
              href={props.facebookHref}
              className="bg-white/0 shadow-[rgba(0,0,0,0.25)_0px_1px_3px_0px] box-border caret-transparent block leading-[30px] opacity-85 outline-[3px] text-center w-[30px] rounded-[31px] before:accent-auto before:caret-transparent before:text-white before:inline-block before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-3.5 before:border-separate before:font-icons hover:text-orange-400 hover:border-orange-400"
            ></a>
            <a
              href={props.instagramHref}
              className="bg-white/0 shadow-[rgba(0,0,0,0.25)_0px_1px_3px_0px] box-border caret-transparent block leading-[30px] opacity-85 outline-[3px] text-center w-[30px] rounded-[31px] before:accent-auto before:caret-transparent before:text-white before:inline-block before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-3.5 before:border-separate before:font-icons hover:text-orange-400 hover:border-orange-400"
            ></a>
            <a
              href={props.tripadvisorHref}
              className="bg-white/0 shadow-[rgba(0,0,0,0.25)_0px_1px_3px_0px] box-border caret-transparent block leading-[30px] opacity-85 outline-[3px] text-center w-[30px] rounded-[31px] before:accent-auto before:caret-transparent before:text-white before:inline-block before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-3.5 before:border-separate before:font-icons hover:text-orange-400 hover:border-orange-400"
            ></a>
          </div>
        </>
      ) : null}
    </div>
  );
};
