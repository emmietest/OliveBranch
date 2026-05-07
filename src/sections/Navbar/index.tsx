import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { NavbarActions } from "@/sections/Navbar/components/NavbarActions";

const NAV_LINKS = [
  { to: "/#home", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/#about", label: "About" },
  { to: "/#gallery", label: "Gallery" },
  { to: "/#contact", label: "Contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-[100] w-full transition-all duration-300 ${
      scrolled ? "bg-neutral-950/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
    }`}>
      <div className="mx-auto grid h-[80px] max-w-[1500px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-3 text-white md:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navbar"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/15"
          >
            <span className="sr-only">Toggle navigation menu</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-white/80 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex justify-center">
          <NavbarLogo />
        </div>

        <div className="flex justify-end">
          <NavbarActions />
        </div>
      </div>

      <div
        id="mobile-navbar"
        className={`md:hidden overflow-hidden bg-neutral-950/95 border-t border-white/10 transition-[max-height] duration-300 ${menuOpen ? "max-h-96 py-3" : "max-h-0 py-0"}`}
      >
        <nav className="space-y-2 px-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-white/90 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
