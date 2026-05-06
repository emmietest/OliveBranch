<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
## 2026-05-06 — Fix Font Warnings
- `index.html`: added Google Fonts CDN preconnect + link for Cinzel (400–700) and Allura
- `tailwind.css`: removed all local `@font-face` blocks for Cinzel and Allura; kept Icons @font-face with `@FONTWARNING` comment stripped
- Tailwind config font keys unchanged (Cinzel, Allura, Icons still resolve correctly)

## 2026-05-06 — Full Interactive Functionality Clone
- Added `CartContext` + `CartDrawer`: full add/remove/qty cart with slide-in drawer
- Added `MobileMenu`: hamburger nav with accordion sub-menus
- `HeroSection`: real auto-play slider (5s), fade transitions, prev/next arrows, dot nav
- `CategoryCarouselSection`: draggable/swipeable with prev/next, active dots, transform offset
- `PromoSliderSection`: two-slide switcher with animated transitions
- `TestimonialsSection`: draggable carousel with prev/next arrows and dots
- `MenuItem` + `ProductCard`: functional "Add to cart" with ✓ confirmation feedback
- `Header`: scroll-aware bg (transparent→dark), working hamburger, cart total live
- `DeliveryBanner`: improved with gradient overlay
- Fixed vite.config.ts path aliases for `@/context`
</changelog>
