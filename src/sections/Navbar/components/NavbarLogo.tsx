export const NavbarLogo = () => {
  return (
    <div className="box-border caret-transparent px-2.5 md:px-5">
      <a href="/" className="block">
        <img
          src={`${import.meta.env.BASE_URL}assets/OLIVE.png`}
          alt="Olive Restaurant"
          className="h-16 w-auto object-contain"
        />
      </a>
    </div>
  );
};