export const DeliveryBanner = () => {
  return (
    <div className="relative text-sm box-border caret-transparent flex flex-col leading-[21px] max-w-full outline-[3px] w-full mx-auto px-4 md:text-[15.8218px] md:leading-[23.7326px] md:px-[30px]">
      <div className="text-sm box-border caret-transparent gap-x-0 flex flex-col grow flex-wrap h-full leading-[21px] max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[45px] w-full mx-auto pb-[60px] md:text-[15.8218px] md:flex-nowrap md:leading-[23.7326px] md:pb-[90px]">
        <div className="relative text-sm box-border caret-transparent leading-[21px] max-w-full min-h-[auto] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
          <div className="relative text-white items-center bg-zinc-900 grid h-[220px] justify-center tracking-[1px] text-center overflow-hidden min-h-[180px] ml-[calc(50%_-_187.5px)] mr-[calc(50%_-_187.5px)] max-w-[375px] md:ml-[calc(50%_-_640px)] md:mr-[calc(50%_-_640px)] md:max-w-screen-xl">
            <div className="absolute inset-0 bg-[url('https://c.animaapp.com/motvxa6rie2GTp/assets/noise.webp')] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900" />
            <h2 className="relative text-[32px] font-normal tracking-[2px] leading-[48px] min-h-[auto] min-w-[auto] z-[2] p-8 font-allura md:text-[40px] md:leading-[60px] md:p-10">
              Free Delivery on Order Over $59
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
