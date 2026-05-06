import { ProductCard } from "@/components/ProductCard";

export const BestSellersSection = () => {
  return (
    <div className="relative text-sm box-border caret-transparent flex flex-col leading-[21px] max-w-full outline-[3px] w-full mx-auto px-4 md:text-[15.8218px] md:leading-[23.7326px] md:px-[30px]">
      <div className="text-sm box-border caret-transparent gap-x-0 flex flex-col grow flex-wrap h-full leading-[21px] max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[45px] w-full mx-auto pb-[60px] md:text-[15.8218px] md:flex-nowrap md:leading-[23.7326px] md:pb-[90px]">
        <div className="relative text-sm box-border caret-transparent gap-x-0 leading-[21px] max-w-full min-h-[auto] outline-[3px] gap-y-[45px] md:text-[15.8218px] md:leading-[23.7326px]">
          <div className="text-sm box-border caret-transparent h-full leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
            <div className="text-sm box-border caret-transparent grid leading-[21px] outline-[3px] text-center md:text-[15.8218px] md:leading-[23.7326px]">
              <h2 className="relative text-[24.4631px] font-normal box-border caret-transparent leading-[24.4631px] mt-[-8.56209px] min-h-[auto] min-w-[auto] outline-[3px] mx-auto py-2 font-cinzel md:text-[32.0832px] md:leading-[32.0832px] md:mt-[-11.2291px] after:accent-auto after:box-border after:caret-transparent after:text-zinc-900 after:block after:text-[24.4631px] after:not-italic after:normal-nums after:font-normal after:left-[-15%] after:tracking-[normal] after:leading-[24.4631px] after:list-outside after:list-disc after:[mask-image:linear-gradient(90deg,rgba(0,0,0,0),rgb(255,255,255)_40%,rgb(255,255,255)_60%,rgba(0,0,0,0))] after:outline-[3px] after:pointer-events-auto after:absolute after:right-[-15%] after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-zinc-900 after:border-b after:border-separate after:border-t after:inset-y-0 after:font-cinzel after:md:text-[32.0832px] after:md:leading-[32.0832px]">
                Favorite Delivery
              </h2>
              <p className="text-orange-400 text-xl box-border caret-transparent tracking-[1px] leading-[30px] min-h-[auto] min-w-[auto] -order-1 outline-[3px] z-[1] font-allura md:text-[26px] md:leading-[39px]">
                Best Sellers for Delivery
              </p>
            </div>
          </div>
        </div>
        <div className="relative text-sm box-border caret-transparent gap-x-0 leading-[21px] max-w-full min-h-[auto] outline-[3px] gap-y-[45px] md:text-[15.8218px] md:leading-[23.7326px]">
          <div className="text-sm box-border caret-transparent h-full leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
            <div className="text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-[15.8218px] md:leading-[23.7326px]">
              <ul className="text-sm box-border caret-transparent gap-x-8 grid grid-cols-[1fr] justify-center leading-[21px] list-none outline-[3px] gap-y-12 mb-16 pl-0 md:text-[15.8218px] md:grid-cols-[1fr_1fr_1fr] md:leading-[23.7326px]">
                <ProductCard
                  productUrl="https://cristiano.ukrdevs.com/restaurant/elementor/product/foie-gras-with-vegetable-salad/"
                  imageUrl="https://c.animaapp.com/motvxa6rie2GTp/assets/product-dinner-4-408x272.jpg"
                  imageAlt="Foie Gras with Vegetable Salad"
                  imageSizes="(max-width: 408px) 100vw, 408px"
                  title="Foie Gras with Vegetable Salad"
                  description="Savor our pan-seared Foie Gras served with a fresh vegetable salad, featuring baby greens, cherry tomatoes, and a light balsamic vinaigrette."
                  price="23,99"
                  originalPrice="29,99"
                  saleLabel="Sale!"
                  addToCartUrl="/restaurant/elementor/?add-to-cart=42"
                  addToCartLabel="Add to cart: “Foie Gras with Vegetable Salad”"
                  addToCartText="Add to cart"
                />
                <ProductCard
                  productUrl="https://cristiano.ukrdevs.com/restaurant/elementor/product/spicy-salmon-spaghetti/"
                  imageUrl="https://c.animaapp.com/motvxa6rie2GTp/assets/product-dinner-1-408x272.jpg"
                  imageAlt="Spicy Salmon Spaghetti"
                  imageSizes="(max-width: 408px) 100vw, 408px"
                  title="Spicy Salmon Spaghetti"
                  description="Experience a flavorful kick with our Spicy Salmon Spaghetti. Al dente spaghetti tossed in a zesty tomato-based sauce with chili flakes, garlic, and herbs, topped with tender pieces of grilled salmon. A perfect blend of spice and savory seafood."
                  price="21,99"
                  addToCartUrl="/restaurant/elementor/?add-to-cart=45"
                  addToCartLabel="Add to cart: “Spicy Salmon Spaghetti”"
                  addToCartText="Add to cart"
                />
                <ProductCard
                  productUrl="https://cristiano.ukrdevs.com/restaurant/elementor/product/creamy-meatball-soup/"
                  imageUrl="https://c.animaapp.com/motvxa6rie2GTp/assets/product-dinner-3-408x272.jpg"
                  imageAlt="Creamy Meatball Soup"
                  imageSizes="(max-width: 408px) 100vw, 408px"
                  title="Creamy Meatball Soup"
                  description="Warm up with our Creamy Meatball Soup, featuring tender meatballs, cauliflower florets, baby peas, and carrots, all simmered in a rich, creamy broth. A hearty and comforting choice for any meal."
                  price="8,99"
                  addToCartUrl="/restaurant/elementor/?add-to-cart=46"
                  addToCartLabel="Add to cart: “Creamy Meatball Soup”"
                  addToCartText="Add to cart"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
