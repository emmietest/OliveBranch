export type CategoryHeroProps = {
  title: string;
  imageUrl: string;
  imageAlt: string;
};

export const CategoryHero = (props: CategoryHeroProps) => {
  return (
    <div className="relative flex items-center justify-center h-[450px] overflow-hidden -mx-4 md:-mx-[30px] mb-16">
      <img
        src={props.imageUrl}
        alt={props.imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40" />
      <h2
        className="relative z-10 text-white text-[31px] md:text-5xl font-normal font-cinzel text-center leading-tight px-6 py-5 backdrop-blur-[32px] shadow-[rgba(0,0,0,0.5)_0px_5px_15px_0px]"
        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
      >
        {props.title}
      </h2>
    </div>
  );
};
