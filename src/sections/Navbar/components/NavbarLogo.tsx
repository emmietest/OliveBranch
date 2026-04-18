export const NavbarLogo = () => {
  return (
    <div className="box-border caret-transparent px-2.5 md:px-5">
      <a href="https://emmietest.github.io/OliveBranch/" className="block">
        <img
          src={`${import.meta.env.BASE_URL}assets/OLIVE.png`}
          alt="Cristiano Restaurant"
          className="h-16 w-auto object-contain"
        />
      </a>
    </div>
  );
};