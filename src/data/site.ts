export const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "OUR STORY" },
    { href: "/menu", label: "MENU" },
  { href: "/experience", label: "Experience" },


  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "CONTACT" },
] as const;

export const contact = {
  phone: "+1 (268) 736-1661",
  phoneHref: "tel:+12687361661",
  email: "ashtarmishooo@gmail.com",
  address: "Near Caribbean Cinemas, Antigua",
  hours: "Every day / 11:00 AM - 11:00 PM",
  mapQuery: "17.134963,-61.834884",
  mapLink: "https://maps.app.goo.gl/LAUXcukaojW7Ab3p7",
};

export type MenuItem = {
  name: string;
  price: string;
  details: string;
  image: string;
  sizes?: string[];
  /** Small red tag next to the name, e.g. "Signature" */
  badge?: string;
};

export type MenuCategory = {
  title: string;
  items: MenuItem[];
  iconLeft: string;
  iconRight: string;
  /** Size labels, e.g. ['8"', '10"'] */
  sizeColumns?: string[];
  /** Show a header row with the size labels above the list */
  showSizeHeader?: boolean;
  /** Full-width card */
  wide?: boolean;
  /** Small note under the list */
  note?: string;
};

/**
 * Menu photos live in:  public/images/menu/
 * Pass the file name WITHOUT ".jpg", e.g. "pizza-cheese" -> menu/pizza-cheese.jpg
 */
const img = (file: string) => `menu/${file}.jpg`;

/** rows: [name, price, details, image file] */
const build = (rows: [string, string, string, string][]): MenuItem[] =>
  rows.map(([name, price, details, file]) => ({
    name,
    price,
    details,
    image: img(file),
  }));

/** Items that have several prices (one per size column). rows: [name, sizes, image file] */
const buildSized = (rows: [string, string[], string][]): MenuItem[] =>
  rows.map(([name, sizes, file]) => ({
    name,
    price: "",
    details: "",
    image: img(file),
    sizes,
  }));

const chickenItems = build([
  ["Fries", "$7", "Crispy golden fries", "chicken-fries"],
  ["Potato Wedges", "$10", "Seasoned potato wedges", "chicken-potato-wedges"],
  ["Fried Chicken", "", "", "chicken-fried-chicken"],
  ["Fried Chicken & Fries", "", "", "chicken-fried-chicken-fries"],
]).map((item) =>
  item.name.startsWith("Fried Chicken")
    ? { ...item, sizes: ["$12", "$17", "$22"] }
    : item,
);

export const menuCategories: MenuCategory[] = [
  {
    title: "Pizza",
    iconLeft: "flaticon-pizza",
    iconRight: "flaticon-chicken",
    wide: true,
    showSizeHeader: true,
    sizeColumns: ['8"', '10"', '12"', '16"'],
    note: "Extra topping $4 / $6 / $8 — Pineapple · Italian Sausage · Cheese · Corn · Pepperoni · Vegetables · Jalapeño",
    items: buildSized([
      ["Cheese", ["$11", "$15", "$25", "$45"], "pizza-cheese"],
      ["Pepperoni", ["$12", "$17", "$28", "$50"], "pizza-pepperoni"],
      ["Vegetarian", ["", "$19", "$30", "$55"], "pizza-vegetarian"],
      ["Shrimp", ["", "$20", "$33", "$58"], "pizza-shrimp"],
      ["Chicken", ["", "$22", "$35", "$60"], "pizza-chicken"],
      ["All American", ["", "$20", "$30", "$58"], "pizza-all-american"],
      ["Mexican", ["", "$25", "$38", "$65"], "pizza-mexican"],
      ["Lamb", ["", "$30", "$45", "$70"], "pizza-lamb"],
    ]),
  },
  {
    title: "Shawarma",
    iconLeft: "flaticon-bread",
    iconRight: "flaticon-breakfast",
    items: build([
      ["Steak & Cheese", "$22", "Shawarma", "shawarma-steak-cheese"],
      ["Lamb", "$22", "Shawarma", "shawarma-lamb"],
      ["Chicken", "$14", "Shawarma", "shawarma-chicken"],
      ["Mix", "$20", "Shawarma", "shawarma-mix"],
      ["Tuna", "$17", "Shawarma", "shawarma-tuna"],
      ["Veggie", "$17", "Shawarma", "shawarma-veggie"],
      ["Fish", "$20", "Shawarma", "shawarma-fish"],
    ]),
  },
  {
    title: "Chicken",
    iconLeft: "flaticon-chicken",
    iconRight: "flaticon-burger",
    sizeColumns: ["S", "M", "L"],
    items: chickenItems,
  },
  {
    title: "Meals",
    iconLeft: "flaticon-omelette",
    iconRight: "flaticon-burger",
    items: build([
      ["Lamb", "$30", "Meal", "meal-lamb"],
      ["Mix", "$30", "Meal", "meal-mix"],
      ["Fish", "$35", "Meal", "meal-fish"],
      ["Chicken", "$25", "Meal", "meal-chicken"],
    ]),
  },
  {
    title: "Burger",
    iconLeft: "flaticon-burger",
    iconRight: "flaticon-chicken",
    items: build([
      ["Hamburger", "$12", "Burger", "burger-hamburger"],
      ["Cheese Burger", "$13", "Burger", "burger-cheese"],
      ["Chicken Burger", "$14", "Burger", "burger-chicken"],
      ["Fish Burger", "$17", "Burger", "burger-fish"],
      ["Mishoo Burger", "$20", "Our signature burger", "burger-mishoo"],
    ]).map((item) =>
      item.name === "Mishoo Burger" ? { ...item, badge: "Signature" } : item,
    ),
  },
];

const range = (prefix: string, count: number) =>
  Array.from({ length: count }, (_, i) => `${prefix}-${i + 1}.jpg`);

/** Every dish in the template shares the same placeholder copy. */
export const dish = {
  name: "Beef Roast Source",
  price: "$29",
  ingredients: ["Meat", "Potatoes", "Rice", "Tomatoe"],
};

export type Testimonial = {
  quote: string;
  name: string;
  position: string;
  image: string;
};

/**
 * TODO: replace with real customer feedback before launch.
 * Images live in public/images/ (person_1.jpg ... person_4.jpg).
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "The Mishoo Burger is easily the best burger I've had in Antigua. Juicy, loaded, and worth every dollar.",
    name: "Kemar Joseph",
    position: "Regular Customer",
    image: "person_1.jpg",
  },
  {
    quote:
      "Their chicken shawarma is so fresh and full of flavour. I stop by after the movies at least twice a month!",
    name: "Shanice Williams",
    position: "Customer",
    image: "person_2.jpg",
  },
  {
    quote:
      "We ordered a large pepperoni pizza for a family night and it was gone in minutes. Hot, cheesy, and fast service.",
    name: "Andre Phillip",
    position: "Family Dinner",
    image: "person_3.jpg",
  },
  {
    quote:
      "The fried chicken and fries combo is crispy and seasoned perfectly. Friendly staff and open late, which is a big plus.",
    name: "Tamika Henry",
    position: "Customer",
    image: "person_4.jpg",
  },
  {
    quote:
      "Great spot near Caribbean Cinemas. The lamb meal was tender and filling, and the team made us feel welcome.",
    name: "Daniel Roberts",
    position: "Visitor",
    image: "person_1.jpg",
  },
];
export const counters = [
  { value: 100, label: "Menu Items" }, // count your real menu
  { value: 7, label: "Days a Week" }, // or your real opening days
  { value: 4000, label: "Dishes Served" }, // only if this is true
  { value: 15, label: "Pizza & Burger Combos" }, // e.g. number of combos you list
];

export const posts = Array.from({ length: 6 }, (_, i) => ({
  slug: `post-${i + 1}`,
  image: `image_${i + 1}.jpg`,
  title: "Even the all-powerful Pointing has no control about the blind texts",
  date: "August 3, 2020",
  author: "Admin",
  comments: 3,
}));

export type Post = (typeof posts)[number];

export const openHours = [
  ["Monday", "11:00 AM - 11:00 PM"],
  ["Tuesday", "11:00 AM - 11:00 PM"],
  ["Wednesday", "11:00 AM - 11:00 PM"],
  ["Thursday", "11:00 AM - 11:00 PM"],
  ["Friday", "11:00 AM - 11:00 PM"],
  ["Saturday", "11:00 AM - 11:00 PM"],
  ["Sunday", "11:00 AM - 11:00 PM"],
] as const;

export const instagram = Array.from(
  { length: 6 },
  (_, i) => `insta-${i + 1}.jpg`,
);

export const lorem = {
  short:
    "Welcome to Mishoo, your spot in Antigua for delicious food, great flavours, and friendly service.",

  about:
    "Welcome to Mishoo! Located near Caribbean Cinemas in Antigua, we're here to serve delicious food in a relaxed and welcoming atmosphere. Whether you're stopping by for a quick bite, meeting up with friends, or picking up a meal to enjoy with family, Mishoo is the place to satisfy your cravings. Come by, enjoy your favourites, and let us make your visit a tasty one.",

  ingredients:
    "At Mishoo, great food brings people together. From satisfying pizzas and juicy burgers to flavourful wraps and local favourites, we aim to serve tasty meals you'll love. Whether you're grabbing a quick lunch, enjoying dinner with friends, or taking food home to your family, we're here to make every meal enjoyable with delicious flavours and friendly service.",

  footer:
    "Mishoo is your neighbourhood food spot near Caribbean Cinemas in Antigua. Stop by for delicious food, friendly service, and a meal worth coming back for.",
};
