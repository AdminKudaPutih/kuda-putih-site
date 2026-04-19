# Issue: Update Navigation Bar and Implement Brand Color Palette

## Context
We are building a Single Page Application (SPA) for a boarding house in Bali. To ensure brand consistency, we need to implement our specific color palette into the Tailwind CSS configuration and apply it to the entire website.

## Task Overview
As a junior developer, you will:
1.  **Configure Theme Colors:** Add our brand colors to the Tailwind CSS v4 theme.
2.  **Update NavBar Layout:** Organize the logo, links, and CTA.
3.  **Apply Brand Styling:** Use the newly configured color tokens to style the navbar components.

## Requirements

### 1. Brand Color Palette (Configuration)
Update `src/app/globals.css` to include the following color tokens in the `@theme` block:

| Token         | Hex       | Penggunaan                  |
|---------------|-----------|-----------------------------|
| `primary`     | `#2F6F4E` | Button utama, highlight     |
| `primarySoft` | `#3F8A63` | Hover state                 |
| `cream`       | `#F5EFE6` | Background utama            |
| `creamSoft`   | `#FAF7F2` | Background alternatif       |
| `dark`        | `#1F1F1F` | Heading, body text          |
| `darkSoft`    | `#4A4A4A` | Secondary text              |
| `accent`      | `#D96C3B` | CTA button, accent          |
| `accentSoft`  | `#E07A5F` | Hover accent                |

### 2. Fonts will be used
- `font-heading` → Playfair Display (via `--font-playfair`)
- `font-body` → Inter (via `--font-inter`)



### 3. Styling (Tailwind CSS)
- Use the configured theme tokens (e.g., `bg-brand-primary`, `text-brand-dark`).
- Ensure the CTA has a `brand-primary` background and `brand-soft` on hover.
- Ensure the component is fully responsive (hamburger menu for mobile).

## Technical Guidance
- **Tailwind v4:** Modify the `@theme inline { ... }` block in `src/app/globals.css`. Use the syntax `--color-brand-primary: #2F6F4E;` to make it available as `brand-primary`.
- **Fonts:** Implement specified fonts for this website.
- **Component:** Edit `src/app/ui/NavBar.tsx`.
- **State Management:** Use `useState` and `useEffect` with `window.scrollY` to track scroll direction and position.

## Definition of Done
- [ ] Brand colors are correctly defined in `globals.css`.
- [ ] `NavBar` uses brand tokens for all colors (background, text, buttons).
- [ ] Code is clean and responsive.
