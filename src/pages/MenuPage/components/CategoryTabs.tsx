import { useState, useEffect } from "react";

export const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("salads");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("[id='salads'], [id='pizza'], [id='burgers'], [id='sushi'], [id='dinner']");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="sticky text-sm backdrop-blur-[32px] box-border caret-transparent flex justify-center leading-[21px] ml-[calc(50%_-_187.5px)] mr-[calc(50%_-_187.5px)] max-w-[375px] outline-[3px] overflow-x-hidden overflow-y-auto z-20 -mt-20 mb-20 top-[74px] md:text-[15.8218px] md:leading-[23.7326px] md:ml-[calc(50%_-_640px)] md:mr-[calc(50%_-_640px)] md:max-w-screen-xl md:top-[89px] after:accent-auto after:bg-white after:box-border after:caret-transparent after:text-zinc-900 after:block after:text-sm after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:[mask-image:linear-gradient(90deg,rgba(0,0,0,0),rgb(255,255,255),rgba(0,0,0,0))] after:opacity-75 after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:z-[-1] after:border after:border-zinc-500/50 after:border-separate after:border-solid after:inset-0 after:font-system_ui after:md:text-[15.8218px] after:md:leading-[23.7326px]">
      <ul className="text-[12.25px] box-border caret-transparent gap-x-[24.5px] grid grid-flow-col leading-[18.375px] list-none [mask-image:linear-gradient(90deg,rgba(0,0,0,0),rgb(255,255,255)_5%,rgb(255,255,255)_95%,rgba(0,0,0,0))] max-w-[1288px] min-h-[auto] min-w-[auto] outline-[3px] overscroll-x-contain gap-y-[24.5px] uppercase text-nowrap overflow-auto mx-auto px-[36.75px] py-[24.5px] font-cinzel md:text-[13.844px] md:gap-x-[27.6881px] md:leading-[20.7661px] md:gap-y-[27.6881px] md:snap-none md:px-[41.5321px] md:py-[27.6881px]">
        <li className="text-[12.25px] box-border caret-transparent leading-[18.375px] min-h-[auto] min-w-[auto] outline-[3px] snap-center text-nowrap md:text-[13.844px] md:leading-[20.7661px]">
          <a
            href="#salads"
            onClick={() => handleTabClick("salads")}
            className={`relative text-[12.25px] box-border caret-transparent block leading-[18.375px] outline-[3px] text-nowrap md:text-[13.844px] md:leading-[20.7661px] ${activeTab === "salads" ? "text-green-500" : "text-zinc-900"}`}
          >
            Salads
          </a>
        </li>
        <li className="text-[12.25px] box-border caret-transparent leading-[18.375px] min-h-[auto] min-w-[auto] outline-[3px] snap-center text-nowrap md:text-[13.844px] md:leading-[20.7661px]">
          <a
            href="#pizza"
            onClick={() => handleTabClick("pizza")}
            className={`relative text-[12.25px] box-border caret-transparent block leading-[18.375px] outline-[3px] text-nowrap md:text-[13.844px] md:leading-[20.7661px] ${activeTab === "pizza" ? "text-green-500" : "text-zinc-900"}`}
          >
            Pizza
          </a>
        </li>
        <li className="text-[12.25px] box-border caret-transparent leading-[18.375px] min-h-[auto] min-w-[auto] outline-[3px] snap-center text-nowrap md:text-[13.844px] md:leading-[20.7661px]">
          <a
            href="#burgers"
            onClick={() => handleTabClick("burgers")}
            className={`relative text-[12.25px] box-border caret-transparent block leading-[18.375px] outline-[3px] text-nowrap md:text-[13.844px] md:leading-[20.7661px] ${activeTab === "burgers" ? "text-green-500" : "text-zinc-900"}`}
          >
            Burgers
          </a>
        </li>
        <li className="text-[12.25px] box-border caret-transparent leading-[18.375px] min-h-[auto] min-w-[auto] outline-[3px] snap-center text-nowrap md:text-[13.844px] md:leading-[20.7661px]">
          <a
            href="#sushi"
            onClick={() => handleTabClick("sushi")}
            className={`relative text-[12.25px] box-border caret-transparent block leading-[18.375px] outline-[3px] text-nowrap md:text-[13.844px] md:leading-[20.7661px] ${activeTab === "sushi" ? "text-green-500" : "text-zinc-900"}`}
          >
            Sushi
          </a>
        </li>
        <li className="text-[12.25px] box-border caret-transparent leading-[18.375px] min-h-[auto] min-w-[auto] outline-[3px] snap-center text-nowrap md:text-[13.844px] md:leading-[20.7661px]">
          <a
            href="#dinner"
            onClick={() => handleTabClick("dinner")}
            className={`relative text-[12.25px] box-border caret-transparent block leading-[18.375px] outline-[3px] text-nowrap md:text-[13.844px] md:leading-[20.7661px] ${activeTab === "dinner" ? "text-green-500" : "text-zinc-900"}`}
          >
            Dinner
          </a>
        </li>
      </ul>
    </div>
  );
};
