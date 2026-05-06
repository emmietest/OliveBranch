import { HeaderTopBar } from "@/sections/Header/components/HeaderTopBar";

export const Header = () => {
  return (
    <header className="fixed text-white text-sm box-border caret-transparent leading-[21px] outline-[3px] w-full z-[99] top-0 md:text-[15.8218px] md:leading-[23.7326px]">
      <div className="text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px] after:accent-auto after:caret-transparent after:text-white after:block after:text-sm after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:z-[-1] after:border-separate after:inset-0 after:font-system_ui after:md:text-[15.8218px] after:md:leading-[23.7326px]">
        <HeaderTopBar />
      </div>
    </header>
  );
};
