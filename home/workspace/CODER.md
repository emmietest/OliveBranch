<instructions>
This file will be automatically added to your context. 
It serves multiple purposes:
  1. Storing frequently used tools so you can use them without searching each time
  2. Recording the user's code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase structure and organization
  4. Remembering tricky quirks from this codebase

When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to this CODER.md file so you can remember it for next time.
Keep entries sorted in DESC order (newest first) so recent knowledge stays in prompt context if the file is truncated.
</instructions>

<coder>
# Project: Cristiano Restaurant Clone

## Stack
- React 18 + TypeScript + Vite + Tailwind CSS
- Fonts: Cinzel (serif headers), Allura (script), Icons (custom icon font)
- No external slider/carousel libs — all custom with useState + CSS transitions

## Path Aliases (vite.config.ts)
- `@/context` → `src/context`
- `@/components` → `src/components`
- `@/sections` → `src/sections`
- `@` → `src`

## Key Patterns
- Cart state lives in `src/context/CartContext.tsx` (React Context + useReducer-like useState)
- `CartDrawer` slide-in from right, backdrop click to close
- `MobileMenu` slide-in from left, accordion sub-menus
- Sliders: all use `currentIndex` + CSS `transform: translateX` + `transition-transform duration-500`
- Hero: auto-play with `setInterval` in `useEffect`, fade via opacity transition
- ProductCard/MenuItem: "Added!" confirmation via local `useState` + `setTimeout`
- Header: scroll-aware via `window.addEventListener('scroll')` in `useEffect`

## Fonts
- **Cinzel** + **Allura**: loaded via Google Fonts CDN (`<link>` in `index.html`), `@font-face` blocks removed from `tailwind.css`
- **Icons**: custom icon font, kept in `@font-face` in `tailwind.css` (no Google Fonts equivalent), `@FONTWARNING` comment stripped
- tailwind.config.js `fontFamily` keys (`cinzel`, `allura`, `icons`) remain unchanged — names still match

## Image Assets (hosted on animaapp CDN)
- Hero: `herro-slide-1.jpg`, `herro-slide-2.jpg`
- Categories: `cat-sushi-408x612.jpg`, `cat-burgers-408x612.jpg`, etc.
- Products: `product-dinner-4-408x272.jpg`, etc.
- Clients: `client-1.jpg` through `client-4.jpg`
- All from: `https://c.animaapp.com/motvxa6rie2GTp/assets/`

## Colors
- Primary accent: `orange-400` (#fb923c)
- Background dark: `zinc-900`
- Text: `zinc-900` (light mode)
</coder>
