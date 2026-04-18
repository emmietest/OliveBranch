import { useState } from "react";
import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { NavbarActions } from "@/sections/Navbar/components/NavbarActions";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] bg-neutral-900 text-xs box-border caret-transparent outline-[3px]">
      <div className="mx-auto flex h-[80px] max-w-[1400px] items-center justify-between gap-3 px-3 md:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navbar"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
          >
            <span className="sr-only">Toggle navigation menu</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          <NavbarLogo />
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <NavbarActions />
      </div>

      <div
        id="mobile-navbar"
        className={`md:hidden overflow-hidden bg-neutral-950/95 border-t border-white/10 transition-[max-height] duration-300 ${menuOpen ? "max-h-96 py-3" : "max-h-0 py-0"}`}
      >
        <nav className="space-y-2 px-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-white/90 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
