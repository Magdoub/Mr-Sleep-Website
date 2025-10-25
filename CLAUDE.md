# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MR Sleep is a static marketing website for a mobile sleep cycle optimization app. The site is built with vanilla HTML, CSS, and JavaScript (no frameworks) and runs on a local MAMP server for development.

## Development Environment

- **Local Server**: MAMP (macOS Apache MySQL PHP)
- **Server Path**: `/Applications/MAMP/htdocs/Mr-Sleep-Website`
- **Access**: Likely served at `http://localhost:8888/Mr-Sleep-Website` or similar MAMP default port

To view the website during development, ensure MAMP is running and navigate to the appropriate localhost URL.

## Project Structure

This is a simple static website with the following key files:

- **index.html** - Main landing page with hero, features, how-it-works, and download sections
- **privacy-policy.html** - Privacy policy page
- **terms-conditions.html** - Terms and conditions page
- **style.css** - All styles including responsive design, animations, and page-specific styles
- **script.js** - All interactive functionality and animations
- **icons/** - Favicon and app icon assets
- **design-principles.md** - Comprehensive design system and component guidelines for maintaining visual consistency

## Design Guidelines

**Important**: Before making any design changes, consult `design-principles.md` for detailed component specifications, color palettes, and visual effect guidelines. This document defines the "Dark Mode SaaS" aesthetic with specific rules for buttons, cards, typography, and visual effects like glows and frosted glass.

## Architecture and Design Patterns

### CSS Architecture

The CSS uses a single-file approach with clearly defined sections:
- Base styles and CSS reset at the top
- Component-specific styles (header, hero, features, etc.)
- Reusable animations defined with `@keyframes`
- Responsive breakpoints at 968px, 768px, and 480px
- Privacy/Terms page styles share the same `.privacy-page` class structure

### JavaScript Architecture

All JavaScript lives in `script.js` and follows these patterns:

1. **DOM Ready Pattern**: All code wrapped in `DOMContentLoaded` event listener
2. **Intersection Observer**: Used for scroll-based animations on `.fade-in` and `.slide-up` elements
3. **Performance Optimization**: Throttled scroll events using `requestAnimationFrame`
4. **Inline Style Injection**: Ripple effect styles are injected via JavaScript in `style.textContent`

Key interactive features:
- Smooth scroll for anchor links
- Scroll-triggered animations via Intersection Observer
- Dynamic header background on scroll (transparent → opaque at 100px scroll)
- Card hover effects (feature cards, step cards)
- Button ripple effects on click
- Parallax effect on hero section
- Dynamic year in footer

### Design System

- **Primary Color**: `#fbbf24` (amber/yellow) - used for highlights and CTAs
- **Background**: Multi-stop gradient from `#0a0e27` to `#0f1b3c` with animated gradient shift
- **Typography**: Poppins font family from Google Fonts
- **Visual Effects**: Radial gradients overlay for depth, backdrop blur effects, card hover transforms

## Common Patterns

### Adding New Sections

When adding new sections to the landing page:
1. Create semantic HTML structure with appropriate section wrapper
2. Use `.container` class for max-width content constraint (1200px)
3. Add fade-in/slide-up animations by adding those classes to elements
4. Follow the card-based design pattern used in features and steps sections

### Styling Conventions

- Use rgba() for colors with transparency
- Border radius: `0.75rem` for cards, `9999px` for pill-shaped buttons
- Transitions: Standard `0.3s ease` for interactive elements
- Spacing: rem-based units for consistency

### Animation Pattern

Elements with `.fade-in` or `.slide-up` classes automatically get:
- Initial opacity: 0 and translateY offset
- Staggered animation delays based on index
- Intersection Observer triggering when scrolled into view

## Making Changes

Since this is a static site with no build process:
1. Edit HTML, CSS, or JS files directly
2. Refresh browser to see changes (hard refresh may be needed for CSS/JS: Cmd+Shift+R)
3. Test responsive design at breakpoints: 480px, 768px, 968px

## Important Notes

- No package.json or build tools - this is pure vanilla web development
- All assets are referenced with relative paths
- Support email: support@mrsleep.cc
- App status: "Coming Soon" on App Store
- Mobile-first design with desktop enhancements
