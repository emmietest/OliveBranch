import { MapTileLayer } from "@/sections/MapSection/components/MapTileLayer";
import { MapMarkers } from "@/sections/MapSection/components/MapMarkers";
import { MapControls } from "@/sections/MapSection/components/MapControls";

export const MapSection = () => {
  return (
    <div className="relative text-sm box-border caret-transparent flex flex-col leading-[21px] max-w-full outline-[3px] w-full mx-auto px-4 md:text-[15.8218px] md:leading-[23.7326px] md:px-[30px]">
      <div className="text-sm box-border caret-transparent gap-x-0 flex flex-col grow flex-wrap h-full leading-[21px] max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[45px] w-full mx-auto md:text-[15.8218px] md:flex-nowrap md:leading-[23.7326px]">
        <div className="relative text-sm box-border caret-transparent gap-x-0 leading-[21px] max-w-full min-h-[auto] outline-[3px] gap-y-[45px] md:text-[15.8218px] md:leading-[23.7326px]">
          <div className="text-sm box-border caret-transparent h-full leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
            <div className="text-sm box-border caret-transparent h-[400px] leading-[21px] ml-[calc(50%_-_187.5px)] mr-[calc(50%_-_187.5px)] max-w-[375px] outline-[3px] overflow-x-hidden overflow-y-auto md:text-[15.8218px] md:leading-[23.7326px] md:ml-[calc(50%_-_640px)] md:mr-[calc(50%_-_640px)] md:max-w-screen-xl">
              <div className="relative text-xs bg-zinc-300 box-border caret-transparent h-full leading-[18px] outline-offset-1 outline-[3px] z-10 overflow-hidden font-helvetica_neue">
                <div className="absolute box-border caret-transparent outline-[3px] translate-x-[-212px] translate-y-20 z-[400] left-0 top-0 md:translate-x-60 md:translate-y-20">
                  <div className="absolute box-border caret-transparent outline-[3px] z-[200] left-0 top-0">
                    <div className="absolute box-border caret-transparent grayscale-[0.75] outline-[3px] z-[1] left-0 top-0">
                      <div className="absolute box-border caret-transparent outline-[3px] pointer-events-none origin-[0px_0px] z-[18] left-0 top-0">
                        <MapTileLayer
                          src="https://c.animaapp.com/motvxa6rie2GTp/assets/5.png"
                          className="translate-x-[130px] translate-y-[-118px]"
                          alt=""
                        />
                        <MapTileLayer
                          src="https://c.animaapp.com/motvxa6rie2GTp/assets/5-1.png"
                          className="absolute box-border caret-transparent h-64 mix-blend-plus-lighter outline-[3px] translate-x-[386px] translate-y-[-118px] align-top w-64 left-0 top-0"
                          alt=""
                        />
                        <MapTileLayer
                          src="https://c.animaapp.com/motvxa6rie2GTp/assets/6.png"
                          className="translate-x-[130px] translate-y-[138px]"
                          alt=""
                        />
                        <MapTileLayer
                          src="https://c.animaapp.com/motvxa6rie2GTp/assets/6-1.png"
                          className="translate-x-[386px] translate-y-[138px]"
                          alt=""
                        />
                        <MapTileLayer
                          src="https://c.animaapp.com/motvxa6rie2GTp/assets/5-2.png"
                          alt=""
                          className="translate-x-[-126px] translate-y-[-118px]"
                        />
                        <MapTileLayer
                          src="https://c.animaapp.com/motvxa6rie2GTp/assets/5-3.png"
                          className="translate-x-[642px] translate-y-[-118px]"
                          alt=""
                        />
                        <MapTileLayer
                          src="https://c.animaapp.com/motvxa6rie2GTp/assets/6-2.png"
                          className="absolute box-border caret-transparent h-64 mix-blend-plus-lighter outline-[3px] translate-x-[-126px] translate-y-[138px] align-top w-64 left-0 top-0"
                          alt=""
                        />
                        <MapTileLayer
                          src="https://c.animaapp.com/motvxa6rie2GTp/assets/6-3.png"
                          className="absolute box-border caret-transparent h-64 mix-blend-plus-lighter outline-[3px] translate-x-[642px] translate-y-[138px] align-top w-64 left-0 top-0"
                          alt=""
                        />
                        <MapTileLayer
                          src="https://c.animaapp.com/motvxa6rie2GTp/assets/5-4.png"
                          className="absolute box-border caret-transparent h-64 mix-blend-plus-lighter outline-[3px] translate-x-[-382px] translate-y-[-118px] align-top w-64 left-0 top-0"
                          alt=""
                        />
                        <MapTileLayer
                          src="https://c.animaapp.com/motvxa6rie2GTp/assets/5-5.png"
                          className="translate-x-[898px] translate-y-[-118px]"
                          alt=""
                        />
                        <MapTileLayer
                          src="https://c.animaapp.com/motvxa6rie2GTp/assets/6-4.png"
                          className="translate-x-[-382px] translate-y-[138px]"
                          alt=""
                        />
                        <MapTileLayer
                          src="https://c.animaapp.com/motvxa6rie2GTp/assets/6-5.png"
                          className="absolute box-border caret-transparent h-64 mix-blend-plus-lighter outline-[3px] translate-x-[898px] translate-y-[138px] align-top w-64 left-0 top-0"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute box-border caret-transparent outline-[3px] z-[400] left-0 top-0"></div>
                  <div className="absolute box-border caret-transparent outline-[3px] z-[500] left-0 top-0">
                    <MapMarkers
                      src="https://c.animaapp.com/motvxa6rie2GTp/assets/marker-shadow.png"
                      alt=""
                      className="pointer-events-none translate-x-[422px] translate-y-[62px] w-[41px]"
                      role=""
                    />
                    <MapMarkers
                      src="https://c.animaapp.com/motvxa6rie2GTp/assets/marker-shadow.png"
                      alt=""
                      role=""
                      className="pointer-events-none translate-x-[381px] translate-y-[161px] w-[41px]"
                    />
                    <MapMarkers
                      src="https://c.animaapp.com/motvxa6rie2GTp/assets/marker-shadow.png"
                      alt=""
                      className="absolute box-border caret-transparent h-[41px] mt-[-41px] outline-[3px] pointer-events-none translate-x-[378px] translate-y-[178px] origin-[0px_0px] align-top w-[41px] -ml-3 left-0 top-0"
                      role=""
                    />
                  </div>
                  <div className="absolute box-border caret-transparent outline-[3px] z-[600] left-0 top-0">
                    <MapMarkers
                      src="https://c.animaapp.com/motvxa6rie2GTp/assets/marker-icon.png"
                      alt="Marker"
                      className="absolute box-border caret-transparent sepia-[1] h-[41px] mt-[-41px] outline-[3px] translate-x-[422px] translate-y-[62px] origin-[0px_0px] align-top w-[25px] z-[62] -ml-3 left-0 top-0"
                      role="button"
                    />
                    <MapMarkers
                      src="https://c.animaapp.com/motvxa6rie2GTp/assets/marker-icon.png"
                      alt="Marker"
                      role="button"
                      className="absolute box-border caret-transparent sepia-[1] h-[41px] mt-[-41px] outline-[3px] translate-x-[381px] translate-y-[161px] origin-[0px_0px] align-top w-[25px] z-[161] -ml-3 left-0 top-0"
                    />
                    <MapMarkers
                      src="https://c.animaapp.com/motvxa6rie2GTp/assets/marker-icon.png"
                      alt="Marker"
                      role="button"
                      className="sepia-[1] translate-x-[378px] translate-y-[178px] w-[25px] z-[178]"
                    />
                  </div>
                  <div className="absolute box-border caret-transparent outline-[3px] z-[650] left-0 top-0"></div>
                  <div className="absolute box-border caret-transparent outline-[3px] z-[700] left-0 top-0"></div>
                  <div className="box-border caret-transparent outline-[3px] translate-x-[2061.5px] translate-y-[1518px] origin-[0px_0px] scale-[8] md:translate-x-[2062px] md:translate-y-[1518px] md:scale-[8]"></div>
                </div>
                <div className="box-border caret-transparent outline-[3px]">
                  <div className="absolute box-border caret-transparent outline-[3px] pointer-events-none z-[1000] left-0 top-0"></div>
                  <div className="absolute box-border caret-transparent outline-[3px] pointer-events-none z-[1000] right-0 top-0"></div>
                  <div className="absolute box-border caret-transparent outline-[3px] pointer-events-none z-[1000] left-0 bottom-0"></div>
                  <div className="absolute box-border caret-transparent outline-[3px] pointer-events-none z-[1000] right-0 bottom-0">
                    <MapControls
                      containerClassName="bg-clip-padding rounded-bl rounded-br rounded-tl rounded-tr border-2 border-solid border-black/20"
                      mode="zoom"
                      zoomInHref="#"
                      zoomInTitle="Zoom in"
                      zoomInAriaLabel="Zoom in"
                      zoomInClassName="text-black text-[22px] font-bold bg-white bg-no-repeat border-b-stone-300 box-border caret-transparent block h-[30px] leading-[30px] outline-[3px] text-center indent-px w-[30px] bg-center rounded-t-sm border-b font-lucida_console hover:bg-zinc-100"
                      zoomInText="+"
                      zoomOutHref="#"
                      zoomOutTitle="Zoom out"
                      zoomOutAriaLabel="Zoom out"
                      zoomOutClassName="text-black text-[22px] font-bold bg-white bg-no-repeat box-border caret-transparent block h-[30px] leading-[30px] outline-[3px] text-center indent-px w-[30px] bg-center rounded-b-sm font-lucida_console hover:bg-zinc-100"
                      zoomOutText="−"
                      attributionHref=""
                      attributionTitle=""
                      attributionClassName=""
                      attributionIconSrc=""
                      attributionIconAlt=""
                      attributionIconClassName=""
                      attributionText=""
                    />
                    <MapControls
                      containerClassName="text-zinc-800 bg-white/80 hidden leading-[16.8px] px-[5px]"
                      mode="attribution"
                      zoomInHref=""
                      zoomInTitle=""
                      zoomInAriaLabel=""
                      zoomInClassName=""
                      zoomInText=""
                      zoomOutHref=""
                      zoomOutTitle=""
                      zoomOutAriaLabel=""
                      zoomOutClassName=""
                      zoomOutText=""
                      attributionHref="https://leafletjs.com/"
                      attributionTitle="A JavaScript library for interactive maps"
                      attributionClassName="text-sky-700 hover:underline"
                      attributionIconSrc="https://c.animaapp.com/motvxa6rie2GTp/assets/icon-5.svg"
                      attributionIconAlt="Icon"
                      attributionIconClassName="box-border caret-transparent inline h-[8.0028px] outline-[3px] align-baseline w-3"
                      attributionText="Leaflet"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
