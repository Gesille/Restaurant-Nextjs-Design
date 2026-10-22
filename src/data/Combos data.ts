/* ===== Paste this into src/data/site.ts (anywhere after the menu data) ===== */

export type Combo = {
  name: string;
  /** What's included, one entry per line */
  includes: string[];
  /** Combo price in dollars */
  price: number;
  /** Price if bought separately. Used to show the "Save $X" tag. Optional. */
  regular?: number;
  /** File inside public/images/, e.g. "menu/burger-hamburger.jpg" */
  image: string;
  /** Small tag on the card, e.g. "Best seller" */
  badge?: string;
};

// NOTE: these are example combos built from your menu prices.
// Change the names, items and prices to your real offers.
export const combos: Combo[] = [
  {
    name: "Burger Combo",
    includes: ["Hamburger", "Fries"],
    price: 17,
    regular: 19,
    image: "menu/burger-hamburger.jpg",
  },
  {
    name: "Mishoo Special",
    includes: ["Mishoo Burger", "Potato Wedges"],
    price: 27,
    regular: 30,
    image: "menu/burger-mishoo.jpg",
    badge: "Best seller",
  },
  {
    name: "Shawarma & Fries",
    includes: ["Chicken Shawarma", "Fries"],
    price: 19,
    regular: 21,
    image: "menu/shawarma-chicken.jpg",
  },
  {
    name: "Pizza Night",
    includes: ['12" Pepperoni Pizza', "Fries"],
    price: 33,
    regular: 35,
    image: "menu/pizza-pepperoni.jpg",
  },
];