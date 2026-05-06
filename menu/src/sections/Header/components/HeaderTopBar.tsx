import { HeaderContactInfo } from "@/sections/Header/components/HeaderContactInfo";
import { BrandLogo } from "@/components/BrandLogo";
import { CartButton } from "@/components/CartButton";

export const HeaderTopBar = () => {
  return (
    <div className="text-sm items-center caret-transparent grid grid-cols-[1fr_auto_1fr] h-[75px] leading-[21px] max-w-[1508px] outline-[3px] mx-auto px-[21.5px] md:text-[15.8218px] md:h-[90px] md:leading-[23.7326px] md:px-8">
      <div className="text-sm box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
        <HeaderContactInfo
          addressText="Via Monte Napoleone 10 20121 Milan, Italy"
          addressHref="https://cristiano.ukrdevs.com/restaurant/elementor/locations/cristiano-restaurant-berlin-deutschland/"
          phoneText="+39 02 98765432"
          phoneHref="tel://+39 02 98765432"
          statusText=""
          facebookHref=""
          instagramHref=""
          tripadvisorHref=""
          showAddressPhone="true"
          showStatusSocials="false"
        />
        <span className="relative text-sm box-border caret-transparent block h-[25px] leading-[21px] outline-[3px] w-[21px] z-10 md:text-[15.8218px] md:leading-[23.7326px] before:accent-auto before:caret-transparent before:text-white before:block before:text-sm before:not-italic before:normal-nums before:font-light before:tracking-[normal] before:leading-[21px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:border-t before:border-white before:top-2 before:inset-x-0 before:font-system_ui before:md:text-[15.8218px] before:md:leading-[23.7326px] after:accent-auto after:caret-transparent after:text-white after:block after:text-sm after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:border-t after:border-white after:bottom-2 after:inset-x-0 after:font-system_ui after:md:text-[15.8218px] after:md:leading-[23.7326px]"></span>
      </div>
      <BrandLogo
        containerVariant="items-center gap-x-[30px] flex gap-y-[30px]"
        href="https://cristiano.ukrdevs.com/restaurant/elementor/"
        linkVariant="text-center"
        title="Cristiano"
        titleVariant="text-[17.5px] leading-[17.5px] md:text-[19.7772px] md:leading-[19.7772px]"
        subtitle="Restaurant"
        subtitleVariant="after:text-white after:w-[0%]"
        showDetails={false}
        locationText=""
        locationHref="#"
        locationLinkVariant=""
        phoneText=""
        phoneHref="#"
        phoneLinkVariant=""
        statusText=""
      />
      <div className="text-sm items-center box-border caret-transparent flex justify-end leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-right md:text-[15.8218px] md:leading-[23.7326px]">
        <HeaderContactInfo
          addressText=""
          addressHref=""
          phoneText=""
          phoneHref=""
          statusText="Closed until 09:00"
          facebookHref="https://facebook.com/"
          instagramHref="https://instagram.com/"
          tripadvisorHref="https://www.tripadvisor.com/"
          showAddressPhone="false"
          showStatusSocials="true"
        />
        <CartButton />
      </div>
    </div>
  );
};
