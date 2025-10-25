This file provides design principles and component guidelines for AI coding tools. The goal is to replicate a modern, "Dark Mode SaaS" aesthetic, as seen in the inspiration files (Buildly, Glean, Aycast).

## 1. Design Philosophy

The aesthetic is **dark, spacious, and futuristic**. It combines deep, dark backgrounds with vibrant, glowing accents (primarily electric blue and purple) to create a high-contrast, tech-focused feel. Key elements include "frosted glass" effects, subtle glows, and clean, bold typography.

## 2. Core Color Palette

-   **Background (Primary):** A deep, dark navy or off-black.
    -   `#050812` (Deep Navy)
    -   `#000010` (Near Black)
-   **Text (Primary):** Bright, fully opaque white for headlines and key text.
    -   `#FFFFFF` or `#F0F4F8`
-   **Text (Secondary):** A muted, grayish-blue for subheadings, body copy, and labels.
    -   `#94a3b8` (Slate-400)
    -   `#A0AEC0` (Gray-400)
-   **Accent (Primary):** A vibrant, electric blue or indigo. Used for all primary CTAs, links, and glows.
    -   `#3b82f6` (Blue-500)
    -   `#4f46e5` (Indigo-600)
-   **Borders & Dividers:** A very subtle, semi-transparent white or gray.
    -   `rgba(255, 255, 255, 0.1)`
    -   `rgba(148, 163, 184, 0.2)`

## 3. Typography

-   **Font Family:** Use a modern, geometric sans-serif.
    -   **Recommended:** `Inter`, `Manrope`, `Figtree`, or `Poppins`.
-   **Headlines (H1, H2):**
    -   **Weight:** `700 (Bold)` or `800 (ExtraBold)`.
    -   **Color:** `Text (Primary)`.
-   **Body & Subtext:**
    -   **Weight:** `400 (Regular)` or `500 (Medium)`.
    * **Color:** `Text (Secondary)`.
-   **Labels & Microcopy:**
    -   **Weight:** `400 (Regular)`.
    -   **Color:** `Text (Secondary)`.
    -   May use `text-transform: uppercase;` and `letter-spacing: 0.05em;` for small labels.

## 4. Layout & Spacing

-   **Structure:** Use generous whitespace (or "darkspace"). Layouts should be clean and uncluttered.
-   **Container:** Content should be centered and constrained, typically to `max-width: 1100px` or `1280px`.
-   **Navigation:** A simple, floating top bar with `Logo` (left), `Links` (center or left), and `CTA Button` (right).
-   **Grid:** Use a standard 8px spacing scale (e.g., `0.5rem`, `1rem`, `1.5rem`, `2rem`).

## 5. Component Styles (Checklist)

Use this checklist to ensure components match the aesthetic.

### ☐ Buttons: Primary (CTA)
-   **Shape:** Pill-shaped (`border-radius: 9999px;`).
-   **Background:** Solid `Accent (Primary)` color.
-   **Text:** `Text (Primary)` color, `500 (Medium)` or `600 (SemiBold)` weight.
-   **Effects:** Add a `transition: all 0.3s ease;`.
-   **Hover:** On hover, brighten the background or add a subtle `box-shadow` glow with the `Accent (Primary)` color.

### ☐ Buttons: Secondary
-   **Shape:** Pill-shaped (`border-radius: 9999px;`).
-   **Background:** Transparent.
-   **Border:** `1px solid` using `Borders & Dividers` color (e.g., `rgba(255, 255, 255, 0.1)`).
-   **Text:** `Text (Primary)` or `Text (Secondary)` color.
-   **Hover:** On hover, the border brightens and/or the background becomes slightly opaque (e.g., `rgba(255, 255, 255, 0.05)`).

### ☐ Cards & Containers
-   **Background:** Semi-transparent dark color (e.g., `rgba(15, 23, 42, 0.5)`).
-   **Border:** `1px solid` using `Borders & Dividers` color.
-   **Radius:** Rounded corners (`border-radius: 0.75rem;` or `1rem;`).
-   **Frosted Glass Effect:** Must use `backdrop-filter: blur(12px);` to blur the content behind it.

### ☐ Input Fields
-   **Background:** Dark, semi-transparent (e.g., `rgba(0, 0, 0, 0.2)`).
-   **Border:** `1px solid` `Borders & Dividers`.
-   **Text:** `Text (Primary)` color.
-   **Focus:** On focus, the border color should change to `Accent (Primary)`.

## 6. Visual Effects & Polish

-   [ ] **Aura / Glows:** This is the most important effect. Place large, soft, non-obstructive `radial-gradient()` elements in the background (often using the `Accent (Primary)` color) to create an "aura" or "planet glow" effect behind hero content.
-   [ ] **Subtle Grids:** A very faint, subtle grid or dot pattern in the main background is acceptable.
-   [ ] **Transitions:** All interactive elements (links, buttons, cards) must have a smooth `transition: all 0.3s ease;` on hover/focus.
