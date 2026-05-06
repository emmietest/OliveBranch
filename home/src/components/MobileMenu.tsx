import { X, ChevronDown } from "lucide-react";
import { useState } from "react";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NAV_ITEMS = [
  { label: "Home", href: "#" },
  {
    label: "Menu",
    href: "#",
    children: [{ label: "Menu Style 2", href: "#" }],
  },
  { label: "Gallery", href: "#" },
  { label: "Blog", href: "#" },
  {
    label: "Online Ordering",
    href: "#",
    children: [
      { label: "Dinner", href: "#" },
      { label: "Salads", href: "#" },
      { label: "Pizza", href: "#" },
      { label: "Sushi", href: "#" },
      { label: "Burgers", href: "#" },
    ],
  },
  {
    label: "Locations",
    href: "#",
    children: [
      { label: "Milan, Italy", href: "#" },
      { label: "Valencia, Spain", href: "#" },
      { label: "Alicante, Spain", href: "#" },
    ],
  },
  {
    label: "Reservation",
    href: "#",
    children: [{ label: "Open Table", href: "#" }],
  },
  { label: "Contact Us", href: "#" },
];

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (label: string) => {
    setOpenItem((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-[149] transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      <nav
        className={`fixed top-0 left-0 h-full w-[300px] bg-zinc-900 z-[150] flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="font-cinzel text-white tracking-[3px] text-lg">
            Cristiano
          </span>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <ul className="flex-1 overflow-y-auto py-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <>
                  <button
                    className="w-full flex items-center justify-between px-6 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors font-cinzel text-sm tracking-wide"
                    onClick={() => toggle(item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${openItem === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  <ul
                    className={`overflow-hidden transition-all duration-300 ${openItem === item.label ? "max-h-96" : "max-h-0"}`}
                  >
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-10 py-2.5 text-white/60 hover:text-orange-400 transition-colors text-sm"
                          onClick={onClose}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a
                  href={item.href}
                  className="block px-6 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors font-cinzel text-sm tracking-wide"
                  onClick={onClose}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="px-6 py-5 border-t border-white/10 text-white/40 text-xs">
          <p>Via Monte Napoleone 10, Milan, Italy</p>
          <p className="text-orange-400 mt-1">+39 02 98765432</p>
        </div>
      </nav>
    </>
  );
};
