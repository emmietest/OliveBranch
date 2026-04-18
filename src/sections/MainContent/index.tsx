import { useState, useEffect } from "react";
import { ShinyButton } from "@/components/ShinyButton";

const MENU_CATEGORIES = [
  { id: "starters", label: "Starters" },
  { id: "pasta", label: "Pasta" },
  { id: "pizza", label: "Pizza" },
  { id: "mains", label: "Main Dishes" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
];

const MENU_ITEMS: Record<string, { name: string; description: string; price: string; image: string }[]> = {
  starters: [
    { name: "Bruschetta al Pomodoro", description: "Toasted bread topped with fresh tomatoes, garlic, basil and extra virgin olive oil", price: "$9.00", image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80" },
    { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef with rocket, capers, parmesan and lemon dressing", price: "$14.00", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80" },
    { name: "Insalata Caprese", description: "Buffalo mozzarella, heirloom tomatoes, fresh basil, aged balsamic glaze", price: "$12.00", image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&q=80" },
    { name: "Zuppa di Cozze", description: "Fresh mussels in a white wine, garlic and cherry tomato broth", price: "$16.00", image: "https://images.unsplash.com/photo-1559742811-822873691df8?w=400&q=80" },
  ],
  pasta: [
    { name: "Spaghetti Carbonara", description: "Spaghetti with guanciale, egg yolk, pecorino romano and black pepper", price: "$18.00", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80" },
    { name: "Tagliatelle al Ragù", description: "Hand-rolled tagliatelle with slow-cooked Bolognese meat sauce", price: "$20.00", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&q=80" },
    { name: "Penne all&#39;Arrabbiata", description: "Penne with spicy tomato sauce, garlic and fresh chilli", price: "$16.00", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80" },
    { name: "Risotto ai Funghi Porcini", description: "Creamy Arborio rice with wild porcini mushrooms, white wine and parmesan", price: "$22.00", image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80" },
  ],
  pizza: [
    { name: "Margherita Classica", description: "San Marzano tomato, fior di latte mozzarella, fresh basil, olive oil", price: "$15.00", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80" },
    { name: "Diavola", description: "Spicy salami, mozzarella, tomato sauce, dried chilli flakes", price: "$18.00", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80" },
    { name: "Quattro Stagioni", description: "Artichokes, ham, mushrooms, olives, mozzarella, tomato sauce", price: "$20.00", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80" },
    { name: "Tartufo e Funghi", description: "Black truffle cream, mixed mushrooms, mozzarella, fresh thyme", price: "$26.00", image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&q=80" },
  ],
  mains: [
    { name: "Branzino al Forno", description: "Whole baked sea bass with herbs, capers, cherry tomatoes and white wine", price: "$32.00", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80" },
    { name: "Filetto di Manzo", description: "Grilled beef fillet with rosemary jus, roasted potatoes and seasonal veg", price: "$42.00", image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=400&q=80" },
    { name: "Pollo alla Parmigiana", description: "Pan-fried chicken breast with tomato sauce, mozzarella and parmesan", price: "$26.00", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&q=80" },
    { name: "Agnello alla Griglia", description: "Grilled rack of lamb with mint gremolata, polenta and grilled asparagus", price: "$38.00", image: "https://images.unsplash.com/photo-1544025162-d76538891b53?w=400&q=80" },
  ],
  desserts: [
    { name: "Tiramisù", description: "Classic Italian dessert with mascarpone, espresso-soaked ladyfingers and cocoa", price: "$10.00", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80" },
    { name: "Panna Cotta", description: "Vanilla bean panna cotta with seasonal berry compote", price: "$9.00", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80" },
    { name: "Cannoli Siciliani", description: "Crispy pastry shells filled with sweet ricotta, candied peel and pistachios", price: "$8.00", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80" },
    { name: "Gelato Artigianale", description: "Three scoops of artisan gelato — ask your waiter for today&#39;s flavours", price: "$8.00", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80" },
  ],
  drinks: [
    { name: "Chianti Classico DOCG", description: "Full-bodied Tuscan red wine with cherry, spice and earthy notes — glass / bottle", price: "$12 / $52", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80" },
    { name: "Prosecco DOC", description: "Refreshing sparkling wine from Veneto with green apple and peach notes", price: "$10 / $44", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
    { name: "Espresso Italiano", description: "Double shot of our house blend — rich, smooth and aromatic", price: "$4.00", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80" },
    { name: "Limonata Fresca", description: "House-made lemonade with fresh lemons, mint and sparkling water", price: "$6.00", image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&q=80" },
  ],
};

const TESTIMONIALS = [
  { name: "Sophie M.", text: "An unforgettable dining experience. The pasta is the best I&#39;ve had outside of Italy — silky, perfectly seasoned and made with real love.", stars: 5 },
  { name: "James R.", text: "Cristiano never disappoints. The ambience is warm and romantic, the wine list is exceptional, and the service is always impeccable.", stars: 5 },
  { name: "Elena V.", text: "We had our anniversary dinner here and it was magical. The truffle pizza alone is worth the trip. Highly recommended!", stars: 5 },
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
  "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=80",
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
  "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&q=80",
];

export const MainContent = () => {
  const [activeCategory, setActiveCategory] = useState("starters");
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const HERO_SLIDES = [
    {
      image: `${import.meta.env.BASE_URL}assets/OliveBranch/assets/hero11.jpeg`,
      address: "2269 Ellsworth Rd, Ypsilanti, MI 48197",
      title: "THE OLIVE BRANCH RESTAURANT",
      subtitle: "Welcome to The Olive Branch! Discover a world of culinary delights and indulge in an unforgettable experience. Our full online order experience is coming soon, until then, our kitchen is still open.",
      menuText: "OUR MENU",
    },
    {
      image: `${import.meta.env.BASE_URL}assets/OliveBranch/assets/hero22.jpg`,
      address: "2269 Ellsworth Rd, Ypsilanti, MI 48197",
      title: "THE OLIVE BRANCH RESTAURANT",
      subtitle: "Experience authentic Italian cuisine crafted with passion and the finest ingredients. Join us for an unforgettable journey through the flavors of Italy.",
      menuText: "OUR MENU",
    },
    {
      image: `${import.meta.env.BASE_URL}assets/OliveBranch/assets/hero33.jpg`,
      address: "2269 Ellsworth Rd, Ypsilanti, MI 48197",
      title: "THE OLIVE BRANCH RESTAURANT",
      subtitle: "From traditional recipes passed down through generations to innovative creations, every dish tells a story of Italian culinary heritage.",
      menuText: "OUR MENU",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [HERO_SLIDES.length]);

  return (
    <main>
      <section
        id="home"
        className="hero-slider relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      >
        {HERO_SLIDES.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className={`slide absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${index === currentSlide ? 'active opacity-100 z-10' : 'opacity-0 z-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-black/15" />
        <div className="overlay relative z-20 text-center px-4 max-w-4xl mx-auto text-white backdrop-blur-sm bg-white/5 rounded-lg p-8">
          <p
            className="text-[#f1d89a] mb-4 text-sm md:text-lg tracking-wide font-semibold"
            style={{ fontFamily: "'Cinzel', serif", fontSize: "1.1rem", letterSpacing: "0.1em", textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)" }}
          >
            {HERO_SLIDES[0].address}
          </p>

          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-4"></div>
          
          <h1
            className="text-white text-4xl md:text-6xl mb-4"
            style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.05em", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
          >
            {HERO_SLIDES[0].title}
          </h1>

          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-4"></div>

          <p 
            className="text-white text-sm md:text-lg mb-12 leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)" }}
          >
            Welcome to The Olive Branch! Discover a world of culinary delights and indulge in an unforgettable experience.
            <br />
            <span className="font-bold text-[#c9a96e] text-base md:text-xl mt-4 block" style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.9)" }}>
              Our full online order experience is coming soon, until then, our kitchen is still open.
            </span>
          </p>
          <div className="border-t border-[#c9a96e]/30 w-24 mx-auto mb-4"></div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <a
              href="https://order.toasttab.com/online/the-olive-branch-2269-ellsworth-rd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#c9a96e] px-8 py-3 text-sm font-semibold text-black uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-[#b8935a]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Order online
            </a>
            <a
              href="tel:+17349617452"
              className="inline-flex items-center justify-center rounded-full border border-[#c9a96e] px-8 py-3 text-sm font-semibold text-[#c9a96e] uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-white/10"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Call to order
            </a>
          </div>
          <div className="border-b border-[#c9a96e]/30 w-24 mx-auto mt-4"></div>
        </div>

      </section>
{/*
      <section className="bg-[#111] py-12 border-y border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: "🍷", title: "Finest Ingredients", desc: "We source only the freshest seasonal produce and authentic Italian imports." },
            { icon: "👨‍🍳", title: "Expert Chefs", desc: "Our chefs trained in Naples and Florence bring decades of passion to every plate." },
            { icon: "🕯️", title: "Intimate Ambience", desc: "Warm candlelit dining rooms perfect for every occasion — from date nights to celebrations." },
          ].map((item) => (
            <div key={item.title} className="px-4">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-[#c9a96e] uppercase tracking-widest text-sm mb-3" style={{ fontFamily: "'Cinzel', serif" }}>{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="py-24 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] mb-2" style={{ fontFamily: "'Allura', cursive", fontSize: "2rem" }}>Explore Our</p>
            <h2 className="text-white text-4xl md:text-5xl uppercase tracking-widest mb-4" style={{ fontFamily: "'Cinzel', serif" }}>Menu</h2>
            <div className="w-16 h-px bg-[#c9a96e] mx-auto" />
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {MENU_CATEGORIES.map((cat) => (
              <ShinyButton
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`!px-6 !py-2 !text-xs !border !transition-all !duration-300 ${
                  activeCategory === cat.id
                    ? "!bg-[#c9a96e] !border-[#c9a96e] !text-black"
                    : "!border-[#3a3a3a] !text-gray-400 hover:!border-[#c9a96e] hover:!text-[#c9a96e] !bg-transparent"
                }`}
              >
                {cat.label}
              </ShinyButton>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MENU_ITEMS[activeCategory].map((item) => (
              <div key={item.name} className="flex gap-5 bg-[#111] border border-[#2a2a2a] p-5 hover:border-[#c9a96e]/40 transition-all duration-300 group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <h4 className="text-white text-sm uppercase tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>{item.name}</h4>
                    <span className="text-[#c9a96e] text-sm font-semibold whitespace-nowrap" style={{ fontFamily: "'Cinzel', serif" }}>{item.price}</span>
                  </div>
                  <div className="w-full h-px bg-[#2a2a2a] my-2 group-hover:bg-[#c9a96e]/20 transition-colors" />
                  <p className="text-gray-500 text-xs leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=700&q=80"
              alt="Restaurant interior"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block border-4 border-[#c9a96e] w-48 h-48 -z-10" />
          </div>
          <div>
            <p className="text-[#c9a96e] mb-2" style={{ fontFamily: "'Allura', cursive", fontSize: "2rem" }}>Our Story</p>
            <h2 className="text-white text-4xl uppercase tracking-widest mb-6" style={{ fontFamily: "'Cinzel', serif" }}>About Cristiano</h2>
            <div className="w-12 h-px bg-[#c9a96e] mb-8" />
            <p className="text-gray-400 leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Founded in 2008, Cristiano has been a cornerstone of authentic Italian dining in the city for over a decade. Named after the founder&#39;s grandfather — a humble Neapolitan cook who believed food was love made visible — our restaurant is built on the simple principle that great ingredients, prepared with care, need nothing more.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              From our hand-rolled pastas to our wood-fired pizzas, every dish on our menu tells a story. We import our tomatoes from San Marzano, our olive oil from Puglia, and our cheeses from small artisan producers across Italy. Come taste the difference.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[{ num: "15+", label: "Years of Excellence" }, { num: "80+", label: "Menu Items" }, { num: "12", label: "Expert Chefs" }, { num: "4.9★", label: "Average Rating" }].map((s) => (
                <div key={s.label}>
                  <p className="text-[#c9a96e] text-3xl font-bold" style={{ fontFamily: "'Cinzel', serif" }}>{s.num}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24 relative"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1600&q=80)", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <p className="text-[#c9a96e] mb-2" style={{ fontFamily: "'Allura', cursive", fontSize: "2rem" }}>Special Offer</p>
          <h2 className="text-white text-4xl md:text-5xl uppercase tracking-widest mb-6" style={{ fontFamily: "'Cinzel', serif" }}>Today&#39;s Special</h2>
          <div className="w-16 h-px bg-[#c9a96e] mx-auto mb-8" />
          <p className="text-gray-300 text-lg mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
             Every Thursday evening enjoy our four-course Chef&#39;s Tasting Menu with paired wines for just <span className="text-[#c9a96e] font-semibold">$65 per person</span>. Limited seats available — reservation required.
          </p>
          <ShinyButton
            onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
            className="!bg-[#c9a96e] !text-black hover:!bg-[#b8935a] !px-10 !py-4 !text-sm"
          >
            Book Your Seat
          </ShinyButton>
        </div>
      </section>

      <section id="reservation" className="py-24 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] mb-2" style={{ fontFamily: "'Allura', cursive", fontSize: "2rem" }}>Make a</p>
            <h2 className="text-white text-4xl md:text-5xl uppercase tracking-widest mb-4" style={{ fontFamily: "'Cinzel', serif" }}>Reservation</h2>
            <div className="w-16 h-px bg-[#c9a96e] mx-auto mb-4" />
            <p className="text-gray-400 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Reserve your table online or call us at <span className="text-[#c9a96e]">+1 (212) 555-0198</span></p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
            {[
              { label: "Full Name", type: "text", placeholder: "John Smith", colSpan: false },
              { label: "Email Address", type: "email", placeholder: "john@example.com", colSpan: false },
              { label: "Phone Number", type: "tel", placeholder: "+1 (212) 555-0000", colSpan: false },
              { label: "Number of Guests", type: "number", placeholder: "2", colSpan: false },
              { label: "Date", type: "date", placeholder: "", colSpan: false },
              { label: "Time", type: "time", placeholder: "", colSpan: false },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Cinzel', serif" }}>{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full bg-[#111] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>
            ))}
            <div className="md:col-span-2">
              <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Special Requests</label>
              <textarea
                rows={4}
                placeholder="Allergies, dietary requirements, special occasions..."
                className="w-full bg-[#111] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors resize-none"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              />
            </div>
            <div className="md:col-span-2 text-center">
              <ShinyButton
                type="submit"
                className="!bg-[#c9a96e] !text-black hover:!bg-[#b8935a] !px-14 !py-4 !text-sm"
              >
                Confirm Reservation
              </ShinyButton>
            </div>
          </form>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] mb-2" style={{ fontFamily: "'Allura', cursive", fontSize: "2rem" }}>A Glimpse of</p>
            <h2 className="text-white text-4xl md:text-5xl uppercase tracking-widest mb-4" style={{ fontFamily: "'Cinzel', serif" }}>Our World</h2>
            <div className="w-16 h-px bg-[#c9a96e] mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY_IMAGES.map((src, i) => (
              <div key={i} className="overflow-hidden group aspect-square">
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#c9a96e] mb-2" style={{ fontFamily: "'Allura', cursive", fontSize: "2rem" }}>What Our Guests</p>
          <h2 className="text-white text-4xl md:text-5xl uppercase tracking-widest mb-4" style={{ fontFamily: "'Cinzel', serif" }}>Are Saying</h2>
          <div className="w-16 h-px bg-[#c9a96e] mx-auto mb-14" />
          <div className="relative">
            <p className="text-[#c9a96e] text-6xl leading-none mb-6" style={{ fontFamily: "'Allura', cursive" }}>&quot;</p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {TESTIMONIALS[testimonialIdx].text}
            </p>
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: TESTIMONIALS[testimonialIdx].stars }).map((_, i) => (
                <span key={i} className="text-[#c9a96e]">★</span>
              ))}
            </div>
             <p className="text-[#c9a96e] uppercase tracking-widest text-sm" style={{ fontFamily: "'Cinzel', serif" }}>{TESTIMONIALS[testimonialIdx].name}</p>
          </div>
          <div className="flex justify-center gap-3 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIdx(i)}
                className={`w-2.5 h-2.5 rounded-full border border-[#c9a96e] transition-all ${i === testimonialIdx ? "bg-[#c9a96e]" : "bg-transparent"}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-[#c9a96e] uppercase tracking-widest text-sm mb-6" style={{ fontFamily: "'Cinzel', serif" }}>Opening Hours</h3>
            <div className="w-10 h-px bg-[#c9a96e] mb-6" />
            <table className="w-full text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <tbody>
                {[
                  ["Mon – Tue", "Closed"],
                  ["Wed – Thu", "5:00 pm – 10:00 pm"],
                  ["Friday", "5:00 pm – 11:00 pm"],
                  ["Saturday", "12:00 pm – 11:00 pm"],
                  ["Sunday", "12:00 pm – 9:00 pm"],
                ].map(([day, hours]) => (
                  <tr key={day} className="border-b border-[#2a2a2a]">
                    <td className="py-2.5 text-gray-400">{day}</td>
                    <td className={`py-2.5 text-right ${hours === "Closed" ? "text-red-400" : "text-white"}`}>{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="text-[#c9a96e] uppercase tracking-widest text-sm mb-6" style={{ fontFamily: "'Cinzel', serif" }}>Contact Us</h3>
            <div className="w-10 h-px bg-[#c9a96e] mb-6" />
            <div className="space-y-4 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Address</p>
                <p className="text-gray-300">142 Via Condotti, Suite 4<br />New York, NY 10012</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Phone</p>
                <p className="text-gray-300">+1 (212) 555-0198</p>
              </div>
                <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Email</p>
                <p className="text-gray-300">hello@cristiano-restaurant.com</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[#c9a96e] uppercase tracking-widest text-sm mb-6" style={{ fontFamily: "'Cinzel', serif" }}>Stay Connected</h3>
            <div className="w-10 h-px bg-[#c9a96e] mb-6" />
            <p className="text-gray-400 text-sm mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>Subscribe to our newsletter for seasonal menus, events and exclusive offers.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] border-r-0 text-white px-4 py-2.5 text-xs focus:outline-none focus:border-[#c9a96e]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              />
              <ShinyButton
                type="submit"
                className="!bg-[#c9a96e] !text-black hover:!bg-[#b8935a] !px-4 !py-2.5 !text-xs"
              >
                Join
              </ShinyButton>
            </form>
            <div className="flex gap-4 mt-8">
              {["Facebook", "Instagram", "Twitter", "TripAdvisor"].map((s) => (
                <button key={s} className="text-gray-500 hover:text-[#c9a96e] text-xs uppercase tracking-widest transition-colors" style={{ fontFamily: "'Cinzel', serif" }}>
                  {s.slice(0, 2)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0a0a] border-t border-[#1f1f1f] py-8 text-center">
        <p className="text-[#c9a96e] text-2xl mb-1" style={{ fontFamily: "'Allura', cursive" }}>Cristiano</p>
        <p className="text-gray-600 text-xs uppercase tracking-widest" style={{ fontFamily: "'Cinzel', serif" }}>
          © {new Date().getFullYear()} Cristiano Restaurant. All Rights Reserved.
        </p>
      </footer>
    
*/}

    </main>
  );
};
