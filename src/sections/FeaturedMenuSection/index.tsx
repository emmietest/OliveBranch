import { MenuItem } from "@/sections/FeaturedMenuSection/components/MenuItem";

export const FeaturedMenuSection = () => {
  return (
    <div className="relative text-sm box-border caret-transparent flex flex-col leading-[21px] max-w-full outline-[3px] w-full mx-auto px-4 md:text-[15.8218px] md:leading-[23.7326px] md:px-[30px]">
      <div className="text-sm box-border caret-transparent gap-x-0 flex flex-col grow flex-wrap h-full leading-[21px] max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[45px] w-full mx-auto pb-[60px] md:text-[15.8218px] md:flex-nowrap md:leading-[23.7326px] md:pb-[90px]">
        <div className="relative text-sm box-border caret-transparent gap-x-0 leading-[21px] max-w-full min-h-[auto] outline-[3px] gap-y-[45px] md:text-[15.8218px] md:leading-[23.7326px]">
          <div className="text-sm box-border caret-transparent h-full leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
            <div className="text-sm box-border caret-transparent grid leading-[21px] outline-[3px] text-center md:text-[15.8218px] md:leading-[23.7326px]">
              <h2 className="relative text-[24.4631px] font-normal box-border caret-transparent leading-[24.4631px] mt-[-8.56209px] min-h-[auto] min-w-[auto] outline-[3px] mx-auto py-2 font-cinzel md:text-[32.0832px] md:leading-[32.0832px] md:mt-[-11.2291px] after:accent-auto after:box-border after:caret-transparent after:text-zinc-900 after:block after:text-[24.4631px] after:not-italic after:normal-nums after:font-normal after:left-[-15%] after:tracking-[normal] after:leading-[24.4631px] after:list-outside after:list-disc after:[mask-image:linear-gradient(90deg,rgba(0,0,0,0),rgb(255,255,255)_40%,rgb(255,255,255)_60%,rgba(0,0,0,0))] after:outline-[3px] after:pointer-events-auto after:absolute after:right-[-15%] after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-zinc-900 after:border-b after:border-separate after:border-t after:inset-y-0 after:font-cinzel after:md:text-[32.0832px] after:md:leading-[32.0832px]">
                Our Menu
              </h2>
              <p className="text-orange-400 text-xl box-border caret-transparent tracking-[1px] leading-[30px] min-h-[auto] min-w-[auto] -order-1 outline-[3px] z-[1] font-allura md:text-[26px] md:leading-[39px]">
                Featured Dishes
              </p>
            </div>
          </div>
        </div>
        <div className="relative text-sm box-border caret-transparent gap-x-0 leading-[21px] max-w-full min-h-[auto] outline-[3px] gap-y-[45px] md:text-[15.8218px] md:leading-[23.7326px]">
          <div className="text-sm box-border caret-transparent h-full leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
            <div className="text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
              <ul className="text-sm box-border caret-transparent gap-x-14 grid grid-cols-[minmax(320px,616px)] justify-center leading-[21px] list-none outline-[3px] gap-y-14 pl-0 md:text-[15.8218px] md:grid-cols-[1fr_1fr] md:justify-normal md:leading-[23.7326px]">
                <MenuItem
                  imageUrl="https://c.animaapp.com/motvxa6rie2GTp/assets/product-sushi-4-150x150.jpg"
                  imageAlt=""
                  title="California Roll"
                  price="7.99"
                  description="Enjoy the fresh flavors of our California Roll, made with crab meat, avocado, and cucumber, wrapped in seaweed and rice, and garnished with tobiko (fish roe)."
                />
                <MenuItem
                  imageUrl="https://c.animaapp.com/motvxa6rie2GTp/assets/product-sushi-2-150x150.jpg"
                  imageAlt=""
                  title="Dragon Roll"
                  price="12.99"
                  description="Indulge in our Dragon Roll, featuring tempura shrimp and cucumber inside, topped with sliced avocado, eel sauce, and sesame seeds, creating a visually stunning and delicious roll."
                />
                <MenuItem
                  imageUrl="https://c.animaapp.com/motvxa6rie2GTp/assets/product-sushi-3-150x150.jpg"
                  imageAlt=""
                  title="Spicy Tuna Roll"
                  price="8.89"
                  description="A classic favorite, our Spicy Tuna Roll features fresh tuna mixed with spicy mayo and cucumber, wrapped in seaweed and rice, and topped with a sprinkle of sesame seeds."
                />
                <MenuItem
                  imageUrl="https://c.animaapp.com/motvxa6rie2GTp/assets/product-sushi-1-150x150.jpg"
                  imageAlt=""
                  title="Vegetable Roll"
                  price="6.99"
                  description="A delightful choice for vegetarians, our Vegetable Roll features a mix of fresh veggies, including avocado, cucumber, carrot, and bell pepper, wrapped in seaweed and rice, and sprinkled with sesame seeds."
                />
                <MenuItem
                  imageUrl="https://c.animaapp.com/motvxa6rie2GTp/assets/product-pizza-2-150x150.jpg"
                  imageAlt=""
                  title="Pizza BBQ"
                  price="18.99"
                  description="Savor our BBQ Pizza, topped with tender BBQ chicken, red onions, and mozzarella cheese, all on a crispy crust with a tangy BBQ sauce. Perfect for sharing or enjoying solo."
                />
                <MenuItem
                  imageUrl="https://c.animaapp.com/motvxa6rie2GTp/assets/product-pizza-4-150x150.jpg"
                  imageAlt=""
                  title="Fritti Di Mare"
                  price="22.99"
                  description="Delight in our Pizza Fritti Di Mare, topped with a medley of fresh seafood including shrimp, calamari, and mussels. Enhanced with garlic, cherry tomatoes, and mozzarella cheese on a thin, crispy crust, this pizza offers a taste of the ocean."
                />
              </ul>
            </div>
          </div>
        </div>
        <div className="relative text-sm box-border caret-transparent gap-x-0 leading-[21px] max-w-full min-h-[auto] outline-[3px] gap-y-[45px] md:text-[15.8218px] md:leading-[23.7326px]">
          <div className="text-sm box-border caret-transparent h-full leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
            <div className="text-sm box-border caret-transparent leading-[21px] outline-[3px] text-center md:text-[15.8218px] md:leading-[23.7326px]">
              <a
                href="https://cristiano.ukrdevs.com/restaurant/elementor/menu-parallax"
                className="relative text-sm box-border caret-transparent inline-block tracking-[1px] leading-[44px] outline-[3px] px-8 font-cinzel md:text-[15.8218px] after:accent-auto after:border-b-orange-400 after:border-l-zinc-900 after:border-r-zinc-900 after:border-t-orange-400 after:box-border after:caret-transparent after:text-zinc-900 after:block after:text-sm after:not-italic after:normal-nums after:font-light after:tracking-[1px] after:leading-[44px] after:list-outside after:list-disc after:[mask-image:linear-gradient(90deg,rgba(0,0,0,0),rgb(255,255,255)_40%,rgb(255,255,255)_60%,rgba(0,0,0,0))] after:outline-[3px] after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-b after:border-separate after:border-t after:inset-0 after:font-cinzel after:md:text-[15.8218px] hover:text-orange-400 hover:border-orange-400"
              >
                View Full Menu{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
