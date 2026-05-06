import { CategoryHero } from "@/pages/MenuPage/components/CategoryHero";
import { MenuItemCard } from "@/pages/MenuPage/components/MenuItemCard";

export const MenuCategorySection = () => {
  return (
    <div>
      <div id="salads" className="my-24">
        <div className="mb-[88px]">
          <CategoryHero
            title="Salads"
            imageUrl="https://c.animaapp.com/motm2httyyOuCg/assets/heading-salads.jpg"
            imageAlt="Salads"
          />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-14 list-none pl-0 max-w-[1232px] mx-auto">
          <MenuItemCard
            title="Fattoush"
            description="A classic American salad, our Waldorf Salad features crisp apples, grapes, celery, and walnuts mixed with fresh lettuce and dressed in a light yogurt-based dressing."
            price="10.49"
          />
          <MenuItemCard
            title="Tuna Salad"
            description="Delight in our fresh Tuna Salad, featuring chunks of premium tuna mixed with crisp romaine lettuce, cherry tomatoes, cucumber, red onion, and Kalamata olives. Tossed in a light lemon vinaigrette and garnished with a sprinkle of capers for an extra burst of flavor."
            price="13.99"
          />
          <MenuItemCard
            title="Sea Salad"
            description="A healthy and satisfying option, our Quinoa Avocado Salad includes a blend of quinoa, diced avocado, cherry tomatoes, cucumber, red onion, and mixed greens, all tossed in a light lemon vinaigrette."
            price="10.99"
          />
          <MenuItemCard
            title="Grilled Caesar Salad"
            description="Enjoy a twist on a classic with our Grilled Caesar Salad. Crisp romaine hearts lightly charred on the grill, topped with shaved Parmesan, crunchy croutons, and drizzled with our house-made Caesar dressing. Add grilled chicken for an extra boost of flavor."
            price="11.99"
          />
          <MenuItemCard
            title="Greek Salad"
            description="Enjoy the fresh flavors of our Greek Salad, made with ripe tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese, all tossed in a tangy lemon-oregano dressing."
            price="9.99"
          />
        </ul>
      </div>

      <div id="pizza" className="my-24">
        <div className="mb-[88px]">
          <CategoryHero
            title="Pizza"
            imageUrl="https://c.animaapp.com/motm2httyyOuCg/assets/heading-pizza.jpg"
            imageAlt="Pizza"
          />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-14 list-none pl-0 max-w-[1232px] mx-auto">
          <MenuItemCard
            title="Four Cheese Pizza"
            description="Delight in our Four Cheese Pizza, featuring a rich blend of mozzarella, cheddar, gorgonzola, and Parmesan cheeses on a creamy garlic sauce base. Perfect for cheese enthusiasts."
            price="19.99"
            // imageUrl="https://c.animaapp.com/motm2httyyOuCg/assets/product-pizza-4-150x150.jpg"
            imageAlt="Four Cheese Pizza"
          />
        </ul>
      </div>

      <div id="burgers" className="my-24">
        <div className="mb-[88px]">
          <CategoryHero
            title="Burgers"
            imageUrl="https://c.animaapp.com/motm2httyyOuCg/assets/heading-burger.jpg"
            imageAlt="Burgers"
          />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-14 list-none pl-0 max-w-[1232px] mx-auto">
          <MenuItemCard
            title="Mushroom Swiss Burger"
            description="Enjoy the savory flavors of our Mushroom Swiss Burger. A juicy beef patty topped with sautéed mushrooms, melted Swiss cheese, caramelized onions, and garlic aioli, all served on a toasted brioche bun."
            price="11.99"
          />
        </ul>
      </div>

      <div id="sushi" className="my-24">
        <div className="mb-[88px]">
          <CategoryHero
            title="Sushi"
            imageUrl="https://c.animaapp.com/motm2httyyOuCg/assets/heading-sushi.jpg"
            imageAlt="Sushi"
          />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-14 list-none pl-0 max-w-[1232px] mx-auto">
          <MenuItemCard
            title="California Roll"
            description="Enjoy the fresh flavors of our California Roll, made with crab meat, avocado, and cucumber, wrapped in seaweed and rice, and garnished with tobiko (fish roe)."
            price="7.99"
            // imageUrl="https://c.animaapp.com/motm2httyyOuCg/assets/product-sushi-4-150x150.jpg"
            imageAlt="California Roll"
          />
        </ul>
      </div>

      <div id="dinner" className="my-24">
        <div className="mb-[88px]">
          <CategoryHero
            title="Dinner"
            imageUrl="https://c.animaapp.com/motm2httyyOuCg/assets/heading-dinner.jpg"
            imageAlt="Dinner"
          />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-14 list-none pl-0 max-w-[1232px] mx-auto">
          <MenuItemCard
            title="Vegetarian Stir-Fry"
            description="A healthy and flavorful option, our Vegetarian Stir-Fry includes a mix of fresh vegetables such as bell peppers, broccoli, snap peas, and carrots, stir-fried in a savory soy-ginger sauce and served over jasmine rice."
            price="12.49"
          />
          <MenuItemCard
            title="Beef Stroganoff"
            description="Enjoy the comfort of our Beef Stroganoff, featuring tender strips of beef cooked in a creamy mushroom sauce, served over egg noodles and garnished with fresh parsley."
            price="9.99"
          />
          <MenuItemCard
            title="Spicy Salmon Spaghetti"
            description="Experience a flavorful kick with our Spicy Salmon Spaghetti. Al dente spaghetti tossed in a zesty tomato-based sauce with chili flakes, garlic, and herbs, topped with tender pieces of grilled salmon. A perfect blend of spice and savory seafood."
            price="21.99"
          />
          <MenuItemCard
            title="Lemon Herb Grilled Salmon"
            description="Enjoy our tender grilled salmon, marinated in a zesty lemon herb sauce and served with wild rice and a side of sautéed spinach."
            price="24.99"
          />
          <MenuItemCard
            title="Foie Gras with Vegetable Salad"
            description="Savor our pan-seared Foie Gras served with a fresh vegetable salad, featuring baby greens, cherry tomatoes, and a light balsamic vinaigrette."
            price="16.99"
          />
          <MenuItemCard
            title="Creamy Meatball Soup"
            description="Warm up with our Creamy Meatball Soup, featuring tender meatballs, cauliflower florets, baby peas, and carrots, all simmered in a rich, creamy broth. A hearty and comforting choice for any meal."
            price="18.99"
          />
          <MenuItemCard
            title="Baked Chicken With Asparagus Herbs"
            description="Enjoy our juicy Baked Chicken, garnished with fresh asparagus and fragrant herbs. A delightful, healthy option that’s full of flavor."
            price="18.99"
          />
        </ul>
      </div>
    </div>
  );
};
