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
## 2026-05-06 — Fix alignment & image issues
- `CategoryHero`: removed broken hard-coded parallax `translate-y` offsets; image now uses `object-cover` + dark overlay for correct full-bleed display
- `MenuItemCard`: fixed layout (flex, proper shrink-0 image, no blank gap without image), fixed price `$` duplication bug
- `MenuCategorySection`: wrapped bare `<MenuItemCard>` fragments in proper `<ul>` lists; added `id` anchors for tab nav; removed unused `imageClassName` prop
- `SpecialsSection`: changed grid to `grid-cols-1 sm:grid-cols-2` for responsive layout; cleaned up heading pseudo-element decorators
</changelog>
