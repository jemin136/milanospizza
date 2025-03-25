export const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/menu", label: "Menu" },
  { path: "/catering", label: "Catering" },
  { path: "/feedback", label: "Feedback" },
  { path: "/contact", label: "Contact" },
];

export const CONTACT_INFO = {
  address: "4/726 Great South Road, Manukau City Centre, Auckland 2104",
  phone: "092624040",
  email: "contact@milanospizza.co.nz",
  hours: {
    monday: "11:00 AM - Midnight",
    tuesday: "11:00 AM - Midnight",
    wednesday: "11:00 AM - Midnight",
    thursday: "11:00 AM - Midnight",
    friday: "11:00 AM - Midnight",
    saturday: "11:00 AM - Midnight",
    sunday: "12:00 PM - Midnight",
  },
  socialMedia: {
    facebook: "https://www.facebook.com/milanosmanukau/",
    instagram: "https://www.instagram.com/milanospizzamanukau/",
  },
};

export const HERO_SLIDES = [
  {
    id: "slide1",
    title: "Authentic Pizza",
    description:
      "Handcrafted with fresh ingredients and baked to perfection in our stone oven.",
    ctaText: "Milanos Pizza Manukau",
    ctaLink: "https://ordermeal.co.nz/milanos-pizza-manukau/",
    ctaText1: "Milanos Curry Place",
    ctaLink1: "https://www.ordermeal.co.nz/milanos-curry-place",
    image: "./images/pizza1.jpg",
  },
  {
    id: "slide2",
    title: "Special Deals Every Day",
    description:
      "Check out our daily specials and combo offers to save on your favorite pizzas.",
    ctaText: "See Deals",
    ctaLink: "/menu",
    ctaText1: "",
    ctaLink1: "",
    image: "./images/pizza2.jpg",
  },
  {
    id: "slide3",
    title: "Catering For All Occasions",
    description:
      "Let us cater your next event with our delicious pizza packages.",
    ctaText: "Learn More",
    ctaLink: "/catering",
    ctaText1: "",
    ctaLink1: "",
    image: "./images/1.png",
  },
];

export const BEST_SELLERS = [
  {
    id: "pepperoni",
    name: "Tandoori chicken Pizza",
    image: "./images/best_seller/1.png",
    price: 14.99,
    description:
      "Pizza sauce, chicken tikka, onion, fresh coriander, hot chillies, hot chilli sauce and cheese.",
    rating: 4.9,
    reviewCount: 128,
  },
  {
    id: "margherita",
    name: "Vegetarian Supreme",
    image: "./images/best_seller/2.png",
    price: 12.99,
    description:
      "Pizza sauce, onion, pineapple, olive, mushroom, tomatoes, capsicum, spinach, and cheese",
    rating: 4.7,
    reviewCount: 103,
  },
  {
    id: "supreme",
    name: "Butter Paneer Masala",
    image: "./images/best_seller/3.png",
    price: 16.99,
    description: "Butter sauce, onion, capsicum, paneer & cheese",
    rating: 4.8,
    reviewCount: 95,
  },
  {
    id: "veggie",
    name: "Chicken Hot Shot",
    image: "./images/best_seller/4.png",
    price: 13.99,
    description:
      "Chicken, onion, capsicum, pineapple, ginger, special sauce, coriander, cheese, garlic sauce, and butter sauce.",
    rating: 4.6,
    reviewCount: 87,
  },
];

export const DEAL_ITEMS = [
  {
    id: "deal1",
    title: "Family Feast",
    description: "Two large pizzas, breadsticks, and a 2-liter soda",
    originalPrice: 42.99,
    discountedPrice: 34.99,
    image: "./images/pizza4.jpg",
    savings: "18%",
    expiry: "2025-05-31",
    code: "FAMILY18",
  },
  {
    id: "deal2",
    title: "Weekday Special",
    description: "Medium pizza and garlic knots for the perfect lunch",
    originalPrice: 21.99,
    discountedPrice: 15.99,
    image: "./images/cheese.jpg",
    savings: "27%",
    expiry: "2025-06-30",
    code: "WEEKDAY27",
  },
  {
    id: "deal3",
    title: "Game Day Bundle",
    description: "Three medium pizzas and two orders of wings",
    originalPrice: 49.99,
    discountedPrice: 39.99,
    image: "./images/1.png",
    savings: "20%",
    expiry: "2025-07-31",
    code: "GAMEDAY20",
  },
];

export const MENU_CATEGORIES = [
  {
    id: "pizza",
    name: "Pizza",
    items: [
      {
        id: "classic_pepperoni",
        name: "Classic Pepperoni",
        description:
          "Our signature pepperoni pizza with mozzarella cheese and homemade sauce",
        price: 14.99,
        image: "./images/pepperoni.jpg",
      },
      {
        id: "margherita",
        name: "Margherita",
        description:
          "Simple and delicious - fresh tomatoes, mozzarella, and basil on olive oil base",
        price: 12.99,
        image: "./images/margherita.jpg",
      },
      {
        id: "supreme",
        name: "Supreme",
        description:
          "Loaded with pepperoni, sausage, bell peppers, onions, olives, and mushrooms",
        price: 16.99,
        image: "./images/supreme.jpg",
      },
      {
        id: "meat_lovers",
        name: "Meat Lovers",
        description:
          "For the carnivores - pepperoni, sausage, bacon, ham, and ground beef",
        price: 17.99,
        image: "./images/pepperoni.jpg",
      },
      {
        id: "veggie",
        name: "Veggie",
        description:
          "Fresh bell peppers, onions, mushrooms, tomatoes, olives, and spinach",
        price: 13.99,
        image: "./images/veggie.jpg",
      },
      {
        id: "bbq_chicken",
        name: "BBQ Chicken",
        description:
          "Grilled chicken, red onions, and cilantro on our tangy BBQ sauce base",
        price: 15.99,
        image: "./images/buffalo.jpg",
      },
    ],
  },
  {
    id: "sides",
    name: "Sides",
    items: [
      {
        id: "garlic_bread",
        name: "Garlic Bread",
        description: "Toasted bread with garlic butter and herbs",
        price: 4.99,
      },
      {
        id: "breadsticks",
        name: "Breadsticks",
        description:
          "Freshly baked breadsticks with garlic butter and parmesan",
        price: 5.99,
      },
      {
        id: "wings",
        name: "Chicken Wings",
        description: "Choose from Buffalo, BBQ, or Garlic Parmesan",
        price: 9.99,
      },
      {
        id: "cheese_sticks",
        name: "Cheese Sticks",
        description: "Mozzarella sticks with marinara dipping sauce",
        price: 6.99,
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      {
        id: "soda",
        name: "Soda (2-Liter)",
        description: "Coke, Diet Coke, Sprite, or Dr. Pepper",
        price: 3.49,
      },
      {
        id: "water",
        name: "Bottled Water",
        description: "Purified bottled water",
        price: 1.99,
      },
      {
        id: "beer",
        name: "Craft Beer",
        description: "Selection of local craft beers (21+ only)",
        price: 5.99,
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        id: "chocolate_cake",
        name: "Chocolate Cake",
        description: "Rich chocolate cake with fudge icing",
        price: 6.99,
      },
      {
        id: "cheesecake",
        name: "New York Cheesecake",
        description: "Classic creamy cheesecake with graham cracker crust",
        price: 6.99,
      },
      {
        id: "cookie",
        name: "Chocolate Chip Cookie",
        description: "Fresh-baked giant chocolate chip cookie",
        price: 4.99,
      },
    ],
  },
];

export const CATERING_PACKAGES = [
  {
    id: "small",
    name: "European Catering Menu",
    description: "Perfect for 10-15 people",
    price: 40,
    priceDesc: "per person",
    includes: [
      "Roast Chicken",
      "Roast Beef",
      "Roast Lamb",
      "Roast Kumra",
      "Garlic Bread",
      "Coleslaw",
      "Potato Salad",
      "Fry Fish",
      "Chicken Nibbles",
      "Pizza",
      "Chips",
    ],
  },
  {
    id: "small",
    name: "Conference Catering Menu 1",
    description: "Perfect for 10-15 people",
    price: 40,
    priceDesc: "per person",
    includes: [
      {
        cource: "Choice of 4",
        items: [
          "Club Sandwich",
          "savoury",
          "Fish Bites",
          "Chicken Nibbles",
          "Fresh Fruit Salad",
          "Cajun Potato",
          "Pizza bites",
        ],
      },
    ],
  },
  {
    id: "medium",
    name: "Conference Catering Menu vegetarian",
    description: "Perfect for 20-25 people",
    price: 20.00,
    priceDesc: "per person",
    includes: [
      {
        cource: "Choice of 4",
        items: [
          "Paneer Tikka",
          "Vege Savoury",
          "Fresh Fruit Salad",
          "Vege Pizza bites",
          "Cajun Potato"
        ],
      },
    ],
  },
  {
    id: "large",
    name: "Catering Curry Menu 1",
    description: "Perfect for 30-40 people",
    price: "$25",
    priceDesc: "per person",
    includes: [
      {
        cource: "Starters/Entrée(2 Choice Selection)",
        items: [
          "Lamb seek kebab",
          "Chicken tikka",
          "vege pakora",
          "Paneer tikka",
          "Lahori Fish",
          "Cajun Potato",
        ],
      },
      {
        cource: "Mains (3 Choice Selection---No selection of all Meat)",
        items: [
          "Butter chicken",
          "Goat curry",
          "Chicken curry",
          "Kadai Chicken",
          "Dal Makhani",
          "Mix veg",
          "Mutter paneer",
          "Mushroom Mutter",
          "Palak Paneer",
        ],
      },
      {
        cource: "Dessert (1 Choice Selection)",
        items: ["Gulab Jamun", "Chocolate Cake", "Carrot Cake", "Mango lassi"],
      },
      {
        cource: "Extras",
        items: ["Naan", "Rice"],
      },
      "Any additions on Extra Cost",
    ],
  },
  {
    id: "large",
    name: "Catering Curry Menu 1",
    description: "Perfect for 30-40 people",
    price: "$30",
    priceDesc: "per person",
    includes: [
      {
        cource: "Starters/Entrée (Selection of 3)",
        items: [
          "Lamb seek kebab",
          "Chicken tikka",
          "vege pakora",
          "Paneer tikka",
          "Lahori Fish",
          "Cajun Potato",
        ],
      },
      {
        cource: "Mains (Selection of 2 veg and 2 Non-veg)",
        items: [
          "Butter chicken",
          "Goat curry",
          "Chicken curry",
          "Kadai Chicken",
          "Dal Makhani",
          "Mix veg",
          "Mutter paneer",
          "Mushroom Mutter",
          "Palak Paneer",
        ],
      },
      {
        cource: "Dessert (2 Choice Selection)",
        items: ["Gulab Jamun", "Chocolate Cake", "Carrot Cake", "Mango lassi"],
      },
      {
        cource: "Extras",
        items: ["Naan", "Rice"],
      },
      "Any additions on Extra Cost",
    ],
  }
];
