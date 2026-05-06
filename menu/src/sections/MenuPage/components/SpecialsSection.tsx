import { MenuItemCard } from "@/sections/MenuPage/components/MenuItemCard";

export const SpecialsSection = () => {
  return (
    <div className="mb-24">
      {/* Section heading */}
      <div className="relative grid text-center mb-16">
        <p className="text-orange-400 text-xl md:text-[26px] font-allura tracking-[1px] leading-relaxed -order-1 z-10">
          Special Offers
        </p>
        <h2 className="relative text-[24px] md:text-[32px] font-normal font-cinzel leading-none mx-auto py-2 after:content-[''] after:absolute after:left-[-15%] after:right-[-15%] after:inset-y-0 after:border-y after:border-zinc-900 after:[mask-image:linear-gradient(90deg,transparent,white_40%,white_60%,transparent)]">
          Today Specials
        </h2>
      </div>

      {/* Items grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-14 list-none pl-0 max-w-[1232px] mx-auto">
        <MenuItemCard
          title="California Roll"
          description="Enjoy the fresh flavors of our California Roll, made with crab meat, avocado, and cucumber, wrapped in seaweed and rice, and garnished with tobiko (fish roe)."
          price="7.99"
          imageUrl="https://c.animaapp.com/motm2httyyOuCg/assets/product-sushi-4-150x150.jpg"
          imageAlt="California Roll"
        />
        <MenuItemCard
          title="Dragon Roll"
          description="Indulge in our Dragon Roll, featuring tempura shrimp and cucumber inside, topped with sliced avocado, eel sauce, and sesame seeds, creating a visually stunning and delicious roll."
          price="12.99"
          imageUrl="https://c.animaapp.com/motm2httyyOuCg/assets/product-sushi-2-150x150.jpg"
          imageAlt="Dragon Roll"
        />
        <MenuItemCard
          title="Spicy Tuna Roll"
          description="A classic favorite, our Spicy Tuna Roll features fresh tuna mixed with spicy mayo and cucumber, wrapped in seaweed and rice, and topped with a sprinkle of sesame seeds."
          price="8.89"
          imageUrl="https://c.animaapp.com/motm2httyyOuCg/assets/product-sushi-3-150x150.jpg"
          imageAlt="Spicy Tuna Roll"
        />
        <MenuItemCard
          title="Vegetable Roll"
          description="A delightful choice for vegetarians, our Vegetable Roll features a mix of fresh veggies, including avocado, cucumber, carrot, and bell pepper, wrapped in seaweed and rice, and sprinkled with sesame seeds."
          price="6.99"
          imageUrl="https://c.animaapp.com/motm2httyyOuCg/assets/product-sushi-1-150x150.jpg"
          imageAlt="Vegetable Roll"
        />
        <MenuItemCard
          title="Pizza BBQ"
          description="Savor our BBQ Pizza, topped with tender BBQ chicken, red onions, and mozzarella cheese, all on a crispy crust with a tangy BBQ sauce. Perfect for sharing or enjoying solo."
          price="18.99"
          imageUrl="https://c.animaapp.com/motm2httyyOuCg/assets/product-pizza-2-150x150.jpg"
          imageAlt="Pizza BBQ"
        />
        <MenuItemCard
          title="Fritti Di Mare"
          description="Delight in our Pizza Fritti Di Mare, topped with a medley of fresh seafood including shrimp, calamari, and mussels. Enhanced with garlic, cherry tomatoes, and mozzarella cheese on a thin, crispy crust, this pizza offers a taste of the ocean."
          price="22.99"
          imageUrl="https://c.animaapp.com/motm2httyyOuCg/assets/product-pizza-4-150x150.jpg"
          imageAlt="Fritti Di Mare"
        />
      </ul>
    </div>
  );
};
