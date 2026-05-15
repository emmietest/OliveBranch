import { CategoryHero } from "@/pages/MenuPage/components/CategoryHero";
import { MenuItemCard } from "@/pages/MenuPage/components/MenuItemCard";

export const MenuCategorySection = () => {
  return (
    <div>
      <div id="appetizers" className="my-24">
        <div className="mb-[88px]">
          <CategoryHero
            title="Appetizers"
            imageUrl="/assets/menu1.png"
            imageAlt="Appetizers"
          />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-14 list-none pl-0 max-w-[1232px] mx-auto">
          <MenuItemCard
            title="Fattah Hummus"
            description="Creamy hummus mixed with pita and yogurt."
            price="10.99"
          />
          <MenuItemCard
            title="Meat Arayes"
            description="Grilled bread stuffed with spiced meat and toasted to perfection."
            price="8.99"
          />
          <MenuItemCard
            title="Cheese Arayes & Thyme"
            description="Grilled bread stuffed with melted cheese & fragrant thyme."
            price="6.99"
          />
          <MenuItemCard
            title="Falafel (8 PC)"
            description=""
            price="6.99"
          />
          <MenuItemCard
            title="Fried Kibbeh (4 PC)"
            description=""
            price="9.99"
          />
          <MenuItemCard
            title="Fried Cheese Rolls (4 PC)"
            description=""
            price="7.99"
          />
          <MenuItemCard
            title="Grape Leaves (8 PC)"
            description=""
            price="8.99"
          />
          <MenuItemCard
            title="Lentil Soup"
            description=""
            price="4.99"
          />
          <MenuItemCard
            title="Seasoned Fries"
            description=""
            price="4.99"
          /><MenuItemCard
            title="Fried Califlower"
            description=""
            price="6.99"
          /><MenuItemCard
            title="Fried Eggplant"
            description=""
            price="6.99"
          /><MenuItemCard
            title="Mixed Olives"
            description=""
            price="4.99"
          />
          <MenuItemCard
            title="Hummus"
            description="Add meat or chicken nuts +$3.99"
            price="6.49"
          />
          <MenuItemCard
            title="Baba Ganoush"
            description=""
            price="6.49"
          />
          <MenuItemCard
            title="Foul (Fava Beans)"
            description=""
            price="6.49"
          />
          <MenuItemCard
            title="Patata Harra"
            description=""
            price="6.99"
          />
          <MenuItemCard
            title="Qalayat Bandora"
            description="Add Meat +$3.99"
            price="8.99"
          />
          <MenuItemCard
            title="Musakhan Rolls"
            description=""
            price="9.99"
          />
          <MenuItemCard
            title="Chicken Tenders (4PC)"
            description=""
            price="7.99"
          />
          <MenuItemCard
            title="Chicken Nuggets"
            description=""
            price="7.99"
          /><MenuItemCard
            title="Chicken Quesadilla"
            description=""
            price="7.99"
          /><MenuItemCard
            title="Cheese Quesadilla"
            description=""
            price="6.99"
          /><MenuItemCard
            title="Mujadara"
            description="Brown lentils, bulger shells and fried onions."
            price="4.99"
          />
        </ul>
      </div>

      <div id="salads" className="my-24">
        <div className="mb-[88px]">
          <CategoryHero
            title="Salads"
            imageUrl="/assets/menu2.png"
            imageAlt="Salads"
          />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-14 list-none pl-0 max-w-[1232px] mx-auto">
          <MenuItemCard
            title="Fattoush"
            description=""
            price="7.99"
          />
          <MenuItemCard
            title="Tabbouleh"
            description=""
            price="7.99"
          />
          <MenuItemCard
            title="Greek Salad"
            description=""
            price="8.99"
          />
          <MenuItemCard
            title="Tahini Salad"
            description="Add Grilled chicken, Shawarma chicken or Zinger (Tender Chicken) +$3.99"
            price="6.99"
          />
        </ul>
      </div>

      <div id="burgers" className="my-24">
        <div className="mb-[88px]">
          <CategoryHero
            title="Burgers"
            imageUrl="/assets/menu3.png"
            imageAlt="Burgers"
          />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-14 list-none pl-0 max-w-[1232px] mx-auto">
          <MenuItemCard
            title="New Orleans Burger"
            description="Fresh burger meat with barbecue sauce on fresh dough, served with seasoned fries."
            price="11.99"
          />
        </ul>
      </div>

      <div id="loaded-fries" className="my-24">
        <div className="mb-[88px]">
          <CategoryHero
            title="Loaded Fries"
            imageUrl="/assets/menu4.png"
            imageAlt="Loaded Fries"
          />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-14 list-none pl-0 max-w-[1232px] mx-auto">
          <MenuItemCard
            title="Cheese Loaded Fries"
            description=""
            price="7.99"
          />
          <MenuItemCard
            title="Chicken Loaded Fries"
            description="(meat, chicken, Ketchup, mayo, special sauce, white sauce, parmesan cheese & cheddar cheese)"
            price="10.99"
          />
          <MenuItemCard
            title="Meat Loaded Fries"
            description="(meat, chicken, Ketchup, mayo, special sauce, white sauce, parmesan cheese & cheddar cheese)"
            price="10.99"
          />
        </ul>
      </div>

      <div id="bowls" className="my-24">
        <div className="mb-[88px]">
          <CategoryHero
            title="Bowls"
            imageUrl="/assets/menu5.png"
            imageAlt="Bowls"
          />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-14 list-none pl-0 max-w-[1232px] mx-auto">
          <MenuItemCard
            title="Falafel Bowl"
            description="Served with your choice of rice or mujadara, tomatoes, pickles, onions, garlic sauce, special sauce, & tahini sauce."
            price="12.99"
          />
          <MenuItemCard
            title="Chicken Shawarma Bowl"
            description="Served with your choice of rice or mujadara, tomatoes, pickles, onions, garlic sauce, special sauce, & tahini sauce."
            price="12.99"
          />
          <MenuItemCard
            title="Meat Shawarma Bowl"
            description="Served with your choice of rice or mujadara, tomatoes, pickles, onions, garlic sauce, special sauce, & tahini sauce."
            price="12.99"
          />
          <MenuItemCard
            title="Mixed Shawarma Bowl"
            description="Served with your choice of rice or mujadara, tomatoes, pickles, onions, garlic sauce, special sauce, & tahini sauce."
            price="12.99"
          />
        </ul>
      </div>

      <div id="plates" className="my-24">
        <div className="mb-[88px]">
          <CategoryHero
            title="Plates"
            imageUrl="/assets/menu6.png"
            imageAlt="Plates"
          />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-14 list-none pl-0 max-w-[1232px] mx-auto">
          <MenuItemCard
            title="Chicken Shawarma Plate"
            description="Served with salad & your choice of rice or mujadara, garlic sauce, tahini, & special sauce."
            price="15.99"
          />
          <MenuItemCard
            title="Meat Shawarma Plate"
            description="Served with salad & your choice of rice or mujadara, garlic sauce, tahini, & special sauce."
            price="16.99"
          />
          <MenuItemCard
            title="Mixed Shawarma Plate"
            description="Served with salad & your choice of rice or mujadara, garlic sauce, tahini, & special sauce."
            price="17.49"
          />
          <MenuItemCard
            title="Kufta Plate (3 Skewers)"
            description="Served with salad & your choice of rice or mujadara, garlic sauce, tahini, & special sauce."
            price="16.99"
          />
          <MenuItemCard
            title="Falafel Plate"
            description="Served with salad & your choice of rice or mujadara, garlic sauce, tahini, & special sauce."
            price="14.99"
          />
          <MenuItemCard
            title="Shish Kabob (3)"
            description="Served with salad & your choice of rice or mujadara, garlic sauce, tahini, & special sauce."
            price="16.99"
          />
          <MenuItemCard
            title="Shish Tawook Plate (3)"
            description="Served with salad & your choice of rice or mujadara, garlic sauce, tahini, & special sauce."
            price="17.99"
          />
          <MenuItemCard
            title="Kufta Tahini Plate (3)"
            description="Served with salad & your choice of rice or mujadara, garlic sauce, tahini, & special sauce."
            price="18.49"
          />
          <MenuItemCard
            title="Kufta Banadora"
            description="Served with salad & your choice of rice or mujadara, garlic sauce, tahini, & special sauce."
            price="18.49"
          />
          <MenuItemCard
            title="Crispy Chicken Plate"
            description="Served with salad & your choice of rice or mujadara, garlic sauce, tahini, & special sauce."
            price="15.99"
          />
          <MenuItemCard
            title="Mixed Grill Plate"
            description="(Meat kabab, kofta, shish tawook, rice) Served with salad & your choice of rice or mujadara, garlic sauce, tahini, & special sauce."
            price="20.99"
          />
          <MenuItemCard
            title="Grilled Chicken Plate"
            description="(Also served with vegetables) Served with salad & your choice of rice or mujadara, garlic sauce, tahini, & special sauce."
            price="14.99"
          />
          <MenuItemCard
            title="Family Platter (Serves 6-8)"
            description="4 beef kabob, 4 kufta, 4 shish tawook, 1lb chicken, 1lb meat shawarma, grilled onions, grilled tomatoes, hummus & fries"
            price="149.99"
          />
          <MenuItemCard
            title="Extra Side of Sauce"
            description="(Garlic, Special, Shawarma, etc.)"
            price="1.20"
          />
        </ul>
      </div>

      <div id="sandwiches" className="my-24">
        <div className="mb-[88px]">
          <CategoryHero
            title="Sandwiches"
            imageUrl="/assets/menu7.png"
            imageAlt="Sandwiches"
          />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-14 list-none pl-0 max-w-[1232px] mx-auto">
          <MenuItemCard
            title="Chicken Zinger (Tender Chicken)"
            description="(garlic, special sauce, tomatoes & lettuce)"
            price="10.99"
          />
          <MenuItemCard
            title="Spicy Chicken Shawarma"
            description="(Spicy sauce, cheese, pomegranate sauce, & garlic)"
            price="10.99"
          />
          <MenuItemCard
            title="Chicken Shawarma"
            description=""
            price="9.99"
          />
          <MenuItemCard
            title="Meat Shawarma"
            description=""
            price="10.99"
          />
          <MenuItemCard
            title="Meat Shawarma Spicy"
            description=""
            price="11.99"
          />
          <MenuItemCard
            title="Mixed Shawarma"
            description=""
            price="11.49"
          />
          <MenuItemCard
            title="Kofta Sandwich"
            description=""
            price="10.99"
          />
          <MenuItemCard
            title="Shish Kabob Sandwich"
            description="Make it a combo fries + drink (Cola, Sprite) +$3.99"
            price="11.99"
          />
        </ul>
      </div>

      <div id="veggie-sandwiches" className="my-24">
        <div className="mb-[88px]">
          <CategoryHero
            title="Veggie Sandwiches"
            imageUrl="/assets/menu8.png"
            imageAlt="Veggie Sandwiches"
          />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-14 list-none pl-0 max-w-[1232px] mx-auto">
          <MenuItemCard
            title="Falafel Sandwich"
            description=""
            price="8.99"
          />
          <MenuItemCard
            title="Grape Leaves Sandwich"
            description=""
            price="8.99"
          />
          <MenuItemCard
            title="Fries Sandwich"
            description="Add Tabouli +$2.99"
            price="7.99"
          />
        </ul>
      </div>

      <div id="deluxe-shawarma" className="my-24">
        <div className="mb-[88px]">
          <CategoryHero
            title="Deluxe Shawarma"
            imageUrl="/assets/menu9.png"
            imageAlt="Deluxe Shawarma"
          />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-14 list-none pl-0 max-w-[1232px] mx-auto">
          <MenuItemCard
            title="Chicken Deluxe Shawarma"
            description="(fully stuffed with cabbage, lettuce, hummus, garlic sauce, pickles & pomegranate molasses)"
            price="11.99"
          />
          <MenuItemCard
            title="Meat Deluxe Shawarma"
            description="(fully stuffed with cabbage, lettuce, hummus, garlic sauce, pickles & pomegranate molasses)"
            price="12.99"
          />
          <MenuItemCard
            title="Mixed Deluxe Shawarma"
            description="(fully stuffed with cabbage, lettuce, hummus, garlic sauce, pickles & pomegranate molasses)"
            price="13.49"
          />
          <MenuItemCard
            title="Falafel Deluxe"
            description="(fully stuffed with cabbage, lettuce, hummus, garlic sauce, pickles & pomegranate molasses)"
            price="10.99"
          />
        </ul>
      </div>

      <div id="breakfast" className="my-24">
        <div className="mb-[88px]">
          <CategoryHero
            title="Breakfast (Served Daily)"
            imageUrl="/assets/menu10.png"
            imageAlt="Breakfast"
          />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-14 list-none pl-0 max-w-[1232px] mx-auto">
          <MenuItemCard
            title="Falafel"
            description=""
            price="6.99"
          />
          <MenuItemCard
            title="Eggs"
            description=""
            price="8.99"
          />
          <MenuItemCard
            title="Chicken Liver"
            description=""
            price="10.99"
          />
          <MenuItemCard
            title="Cheese Arayes"
            description=""
            price="7.99"
          />
          <MenuItemCard
            title="Meat Arayes"
            description=""
            price="8.99"
          />
          <MenuItemCard
            title="Spicy Potatoes"
            description=""
            price="6.99"
          />
          <MenuItemCard
            title="Fried Cauliflower"
            description=""
            price="6.99"
          />
          <MenuItemCard
            title="Fried Eggplant"
            description=""
            price="6.99"
          />
          <MenuItemCard
            title="Halloumi Cheese"
            description=""
            price="8.99"
          />
          <MenuItemCard
            title="Labneh"
            description=""
            price="6.99"
          />
          <MenuItemCard
            title="Labneh Jerashiya"
            description=""
            price="6.99"
          />
          <MenuItemCard
            title="Pancakes"
            description=""
            price="4.99"
          />
          <MenuItemCard
            title="Mangosh Cheese & Turkey"
            description=""
            price="7.99"
          />
          <MenuItemCard
            title="Mangosh Cheese"
            description=""
            price="6.99"
          />
          <MenuItemCard
            title="Mangosh Zaatar"
            description=""
            price="6.99"
          />
          <MenuItemCard
            title="Eggs with Hashbrowns"
            description="All eggs cooked on fresh dough."
            price="9.99"
          />
          <MenuItemCard
            title="Shakshuka - SM"
            description="Poached eggs in a rich spicy tomato sauce, served with bread. Add Cheese +$1.49"
            price="8.99"
          />
          <MenuItemCard
            title="Shakshuka - LG"
            description="Poached eggs in a rich spicy tomato sauce, served with bread. Add Cheese +$1.49"
            price="14.99"
          />
        </ul>
      </div>

      <div id="weekend-breakfast" className="my-24">
        <div className="mb-[88px]">
          <CategoryHero
            title="Weekend Breakfast (Sat & Sun Only)"
            imageUrl="/assets/menu11.png"
            imageAlt="Weekend Breakfast"
          />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-14 list-none pl-0 max-w-[1232px] mx-auto">
          <MenuItemCard
            title="Breakfast for 2"
            description="A shared Middle Eastern breakfast plate includes: falafel, cheese arayes, eggs, hummus, labneh, labneh mudhabbara Jerashiya, chicken liver, olives, olive oil & zaatar, pita bread, pickles, vegetables, tea or coffee."
            price="25.99"
          />
          <MenuItemCard
            title="Breakfast for 4"
            description="A large family-style breakfast plate includes: falafel, cheese arayes, eggs, hummus, labneh, labneh mudhabbara Jerashiya, chicken liver, olives, olive oil & zaatar, pita bread, pickles, vegetables, tea or coffee."
            price="45.99"
          />
        </ul>
      </div>

      <div id="beverages" className="my-24">
        <div className="mb-[88px]">
          <CategoryHero
            title="Fresh Juices & Smoothies / Beverages"
            imageUrl="/assets/menu12.png"
            imageAlt="Beverages"
          />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-14 list-none pl-0 max-w-[1232px] mx-auto">
          <MenuItemCard
            title="Orange Juice"
            description=""
            price="5.99"
          />
          <MenuItemCard
            title="Lemon & Mint"
            description=""
            price="5.99"
          />
          <MenuItemCard
            title="Mango Smoothie"
            description=""
            price="6.99"
          />
          <MenuItemCard
            title="Strawberry Banana Smoothie"
            description=""
            price="6.99"
          />
          <MenuItemCard
            title="Berry Smoothie"
            description=""
            price="6.99"
          />
          <MenuItemCard
            title="Olive Branch Cocktail"
            description="Keshta arabic, almond, pistachio, fresh strawberry, fresh banana, & milk."
            price="10.99"
          />
          <MenuItemCard
            title="Lemonades (various)"
            description=""
            price="4.99"
          />
          <MenuItemCard
            title="American Coffee"
            description=""
            price="3.49"
          />
          <MenuItemCard
            title="Energy Drink"
            description=""
            price="4.49"
          />
          <MenuItemCard
            title="Palestinian Drink"
            description=""
            price="3.99"
          />
          <MenuItemCard
            title="Coke/Sprite"
            description=""
            price="2.99"
          />
          <MenuItemCard
            title="Cup of Tea"
            description=""
            price="2.99"
          /><MenuItemCard
            title="Tea pot for 3"
            description=""
            price="5.99"
          />
          <MenuItemCard
            title="Tea pot for 6"
            description=""
            price="9.99"
          />
        </ul>
      </div>


      <div id="desserts" className="my-24">
        <div className="mb-[88px]">
          <CategoryHero
            title="Desserts"
            imageUrl="/assets/menu12.png"
            imageAlt="Desserts"
          />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-14 list-none pl-0 max-w-[1232px] mx-auto">
          <MenuItemCard
            title="Baklava"
            description=""
            price="5.99"
          />
          <MenuItemCard
            title="Kunafa"
            description=""
            price="8.99"
          />
        </ul>
      </div>
    </div>
  );
};
