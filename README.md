# Taste.it – Next.js

The Colorlib "Taste.it" restaurant template, rebuilt with Next.js (App Router, TypeScript).
The original CSS is used as-is, so the design is unchanged.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

```
src/app/            routes: /, /about, /chef, /menu, /reservation, /blog, /blog/[slug], /contact, 404
src/components/     Navbar, HeroSlider, OwlCarousel, Reveal, Counter, forms, sections ...
src/data/site.ts    menu, chefs, posts, opening hours ... (edit content here)
src/styles/         original template CSS + enhancements.css (additions only)
public/images/      all template images
```

## What replaced the jQuery plugins

| Original                          | Now                                                     |
| --------------------------------- | ------------------------------------------------------- |
| Owl Carousel                      | `OwlCarousel.tsx` (same class names, so same CSS)       |
| Waypoints + animate.css           | `Reveal.tsx` (Framer Motion)                            |
| animateNumber                     | `Counter.tsx` (counts up when scrolled into view)       |
| Stellar / Scrollax parallax       | `ParallaxBackground.tsx`                                |
| Bootstrap JS (navbar collapse)    | React state in `Navbar.tsx`                             |
| datepicker / timepicker           | native date and time inputs in `BookingForm.tsx`        |
| Google Maps JS (hard-coded key)   | Google Maps embed iframe on the contact page            |

## Added animation

Hero text stagger + slow zoom, scroll-reveal with staggering, count-up numbers, parallax banners,
page fade-in on every route change, scroll progress bar, back-to-top button, animated nav underline,
card / image hover polish. All of it respects `prefers-reduced-motion`.

## Things to wire up

The booking, contact, comment and newsletter forms only show a confirmation on screen (like the
original, they don't send anything). Search for `TODO` in `src/components/*Form.tsx` to connect them
to your backend or an email service.

The Colorlib credit in the footer must stay unless you have bought the license.
