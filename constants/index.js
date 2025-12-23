const navLinks = [
  {
    id: "cocktails",
    title: "Cocktails",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "art",
    title: "The Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const cocktailLists = [
  {
    name: "Old Fashioned",
    country: "USA",
    detail: "Bourbon whiskey (60ml), sugar cube, aromatic bitters, orange peel",
    price: "₹650",
  },
  {
    name: "Margarita",
    country: "Mexico",
    detail: "Tequila (50ml), triple sec, fresh lime juice, salted rim",
    price: "₹550",
  },
  {
    name: "Mojito",
    country: "Cuba",
    detail: "White rum (50ml), fresh mint, lime juice, sugar, soda",
    price: "₹500",
  },
  {
    name: "Negroni",
    country: "Italy",
    detail: "Gin (30ml), Campari (30ml), sweet vermouth (30ml)",
    price: "₹600",
  },
  {
    name: "Espresso Martini",
    country: "UK",
    detail: "Vodka (45ml), coffee liqueur, freshly brewed espresso",
    price: "₹620",
  },
];

const mockTailLists = [
  {
    name: "Virgin Mojito",
    country: "Cuba",
    detail: "Fresh mint, lime juice, sugar syrup, soda (250ml)",
    price: "₹280",
  },
  {
    name: "Berry Blast Cooler",
    country: "International",
    detail: "Mixed berries, lemon juice, soda, crushed ice (300ml)",
    price: "₹320",
  },
  {
    name: "Mango Ginger Fizz",
    country: "India",
    detail: "Fresh mango puree, ginger syrup, lime, sparkling water (300ml)",
    price: "₹300",
  },
  {
    name: "Cucumber Mint Refresher",
    country: "Mediterranean",
    detail: "Cucumber juice, mint, lemon, tonic water (280ml)",
    price: "₹290",
  },
  {
    name: "Pineapple Basil Smash",
    country: "Tropical",
    detail: "Fresh pineapple juice, basil, lime, soda (300ml)",
    price: "₹310",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "Perfectly balanced blends",
  "Garnished to perfection",
  "Ice-cold every time",
  "Expertly shaken & stirred",
];

const goodLists = [
  "Handpicked ingredients",
  "Signature techniques",
  "Bartending artistry in action",
  "Freshly muddled flavors",
];

const storeInfo = {
  heading: "Where to Find Us",
  address:
    "Ground floor, Barons Club, North Ave, opposite Jogger's Park, Kalyani Nagar, Pune, Maharashtra 411006, India",
  contact: {
    phone: "(+91) 9325875685",
    email: "d",
  },
};

const openingHours = [
  { day: "Mon", time: "5:00pm - 11:55pm" },
  { day: "Tue - Sat", time: "12:00pm - 11:55pm" },
  { day: "Sun", time: "12:00pm - 4:30pm | 7pm - 11:55pm" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "https://www.instagram.com/cobblerandcrew/",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const allCocktails = [
  {
    id: 1,
    name: "Classic Mojito",
    image: "/images/drink1.png",
    title: "Fresh, Crisp, Perfectly Balanced",
    description:
      "A refreshing blend of lime juice, and sparkling soda. Light, cooling, and ideal for warm afternoons or relaxed evenings.",
  },
  {
    id: 2,
    name: "Raspberry Mojito",
    image: "/images/drink2.png",
    title: "A Fruity Twist on a Refreshing Favorite",
    description:
      "Delicately floral and lightly citrusy, this mocktail offers a smooth, aromatic experience with a refreshing sparkle.",
  },
  {
    id: 3,
    name: "Violet Breeze",
    image: "/images/drink3.png",
    title: "Floral Notes with a Cool Finish",
    description:
      "Juicy raspberries meet fresh mint and lime, finished with a gentle fizz. Sweet, tangy, and irresistibly refreshing.",
  },
  {
    id: 4,
    name: "Curacao Mojito",
    image: "/images/drink4.png",
    title: "Bright Citrus with a Refreshing Spark",
    description:
      "A vibrant blend of citrus flavors, fresh mint, and soda, delivering a bold yet balanced refreshment in every sip.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};
