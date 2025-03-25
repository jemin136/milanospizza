// Menu item and category definitions as JavaScript objects
// No TypeScript interface syntax in JS files

// Pizza menu data
export const CLASSIC_PIZZA = [
    {
      name: 'Chicken Pizza',
      description: 'Pizza Sauce, Chicken, Onion, Cheese',
      isPopular: true
    },
    {
      name: 'Vegetarian Pizza',
      description: 'Pizza Sauce, Onion, Pineapple, Olives, Mushroom',
      isVegetarian: true,
    },
    {
      name: 'Cheese Pizza',
      description: 'Pizza Sauce, Cheese',
      isVegetarian: true,
      isPopular: true
    },
    {
      name: 'Hawaiian Pizza',
      description: 'Pizza Sauce, Pineapple, Chicken, Cheese',
      isPopular: true
    },
    {
      name: 'Margherita Pizza',
      description: 'Pizza Sauce, Tomatoes, Cheese',
      isVegetarian: true,
    },
    {
      name: 'Beef Pizza',
      description: 'Pizza Sauce, Onion, Beef, Cheese',
    },
    {
      name: 'Peperoncino Pizza',
      description: 'Pizza Sauce, Peperoncino, Cheese',
    }
  ];
  
  export const TRADITIONAL_PIZZA = [
    {
      name: 'Apricot Chicken Pizza',
      description: 'Pizza Sauce, Onion, Pineapple, Chicken, Olives, Mushroom, Capsicum, Cheese',
      isNew: true
    },
    {
      name: 'BBQ Chicken Pizza',
      description: 'Pizza Sauce, Onion, Chicken, Pineapple, Capsicum, BBQ Sauce, Cheese',
      isPopular: true
    },
    {
      name: 'Tandoori Chicken Pizza',
      description: 'Pizza Sauce, Onion, Chicken, Tomatoes, Satay Sauce, Cheese',
    },
    {
      name: 'Butter Chicken Pizza',
      description: 'Butter Chicken Sauce, Chicken, Onion, Cheese',
      isPopular: true
    },
    {
      name: 'Chilli Chicken Pizza',
      description: 'Pizza Sauce, Chicken, Onion, Capsicum, Chilli Sauce, Cheese',
      isSpicy: true,
    },
    {
      name: 'Bombay Chicken Pizza',
      description: 'Pizza Sauce, Chicken, Tomatoes, Coriander, Onion, Cheese',
    },
    {
      name: 'Tabasco Chicken Pizza',
      description: 'Pizza Sauce, Onion, Capsicum, Olives, Tabasco Sauce, Hot Chicken, Garlic Sauce, Cheese',
      isSpicy: true,
    },
    {
      name: 'Chicken Cranberry Pizza',
      description: 'Smoked Chicken, Cranberry Base Sauce, Cheese',
    },
    {
      name: 'Chicken Supreme Pizza',
      description: 'Pizza Sauce, Chicken, Capsicum, Pineapple, Mushroom, Coriander, Cheese',
    },
    {
      name: 'Milanos Smoked Chicken Pizza',
      description: 'Pizza Sauce, Smoked Chicken, Capsicum, Cranberry Base Sauce, Cheese',
    }
  ];
  
  export const GOURMET_PIZZA = [
    {
      name: 'Chicken HotShot Pizza',
      description: 'Pizza Sauce, Onion, Chicken, Capsicum, Pineapple, Ginger, Hot Chilies, Coriander, Onion, Garlic Sauce, Butter Sauce',
      isSpicy: true,
      isPopular: true
    },
    {
      name: 'Chicken Mushroom Pizza',
      description: 'Pizza Sauce, Chicken, Mayonnaise, Fresh Mushroom, Onion, Garlic Sauce, Cheese',
    },
    {
      name: 'Volcano Pizza',
      description: 'Pizza Sauce, Onion, Pineapple, Chicken, Capsicum, Jalapeno, Hot Chilli Sauce, Cheese',
      isSpicy: true,
      isPopular: true,
      isNew: true
    },
    {
      name: 'Rare Chicken Pizza',
      description: 'Rare Sauce, Chilli Flakes, Onion, Capsicum, Chicken, Cheese',
      isSpicy: true,
    },
    {
      name: 'PeriPeri Chicken Pizza',
      description: 'Pizza Sauce, Onion, Chicken, Capsicum, PeriPeri Sauce, Cheese',
      isSpicy: true,
    },
    {
      name: 'Tandoori Chicken Hot Pizza',
      description: 'Pizza Sauce, Chicken Tikka, Onion, Fresh Coriander, Hot Chillies, Cheese',
      isSpicy: true,
    },
    {
      name: 'Peri Peri Beef Pizza',
      description: 'Pizza Sauce, Onion, Beef, Capsicum, PeriPeri Sauce, Cheese',
      isSpicy: true,
    },
    {
      name: 'Meal Buster Pizza',
      description: 'Pizza Sauce, Capsicum, Onion, Mushroom, Tomatoes, Olives, Salami, Lamb Sausage, Pineapple, Chicken, Beef, Cheese',
      isPopular: true
    },
    {
      name: 'Tropical Pizza',
      description: 'Butter Chicken Sauce, Chicken, Pineapple, Coriander, Cheese',
    },
    {
      name: 'Mexican Pizza',
      description: 'Pizza Sauce, Capsicum, Onion, Coriander, Mexican Chilli Beans, Chicken, Jalapenos, Cheese',
      isVegetarian: true,
      isSpicy: true,
    },
    {
      name: 'Milanos Works Pizza',
      description: 'Pizza Sauce,Capsicum, Onion, Mushroom, Tomatoes, Olives, Salami, Lamb Sausage, Cheese',
    }
  ];
  
  export const MEAT_PIZZA = [
    {
      name: 'Meat Lover Pizza',
      description: 'Pizza Sauce, Lamb Sausage, Lamb Salami, Chicken, Mayonnaise, Cheese',
      isPopular: true
    },
    {
      name: 'Lamb Pizza',
      description: 'Pizza Sauce, Lamb Steak, Onion, Capsicum, Mint Sauce, Cheese',
    },
    {
      name: 'Meat Loader Pizza',
      description: 'Pizza Sauce, Salami, Beef, Sausage, Chicken, Cheese, Aioli Sauce On Top',
      isPopular: true
    },
    {
      name: 'Hot & Spicy Beef Pizza',
      description: 'Pizza Sauce, Onions, Beef steak, Jalapenos, Hot Spices',
      isSpicy: true,
      isNew: true
    },
    {
      name: 'Beef Buster Pizza',
      description: 'Pizza Sauce, Beef, Capsicum, Onion, BBQ Sauce, Cheese',
    },
    {
      name: 'Hot & Spicy Meat Mix',
      description: 'Pizza Sauce, Lamb, Lamb Salami, Paneer, Fresh Hot Chilli, Chicken, Tomatoes, Garlic Sauce, BBQ sauce, Cheese',
      isSpicy: true,
    }
  ];
  
  export const VEGETARIAN_PIZZA = [
    {
      name: 'Veggie Tomato',
      description: 'Pizza Sauce, Onion, Capsicum, Feta Cheese, Tomatoes, Cheese',
      isVegetarian: true,
      isPopular: true
    },
    {
      name: 'Cheese Lover Pizza',
      description: 'Pizza Sauce, Double Cheese, Oregano',
      isVegetarian: true,
      isPopular: true
    },
    {
      name: 'Vegetarian HotShot',
      description: 'Pizza Sauce, Mushroom, Capsicum, Pineapple, Ginger, Special Sauce, Onion, Cheese',
      isVegetarian: true,
      isSpicy: true,
    },
    {
      name: 'Rare Paneer Pizza',
      description: 'Rare Sauce, Chilli Flakes, Onion, Capsicum, Paneer',
      isVegetarian: true,
      isSpicy: true,
      isNew: true
    },
    {
      name: 'Chilli Paneer Pizza',
      description: 'Pizza Sauce, Paneer, Capsicum, Onion, Coriander, Chilli Sauce, Cheese',
      isVegetarian: true,
      isSpicy: true,
    },
    {
      name: 'Veggie Mexican Pizza',
      description: 'Pizza Sauce, Onion, Capsicum, Jalapenos, Coriander, Chilli, Mexican Garlic Sauce, Cheese',
      isVegetarian: true,
      isSpicy: true,
    },
    {
      name: 'Butter Paneer Masala',
      description: 'Butter Sauce, Onion, Capsicum, Paneer, Cheese',
      isVegetarian: true,
    },
    {
      name: 'Vegetarian Supreme',
      description: 'Pizza Sauce, Onion, Pineapple, Cheese, Mushroom, Tomatoes, Capsicum, Special Sauce',
      isVegetarian: true,
    }
  ];
  
  export const SEAFOOD_PIZZA = [
    {
      name: 'Garlic Shrimp Pizza',
      description: 'Pizza Sauce, Garlic Shrimp, Onion, Capsicum, Cheese',
      isPopular: true
    },
    {
      name: 'Mixed Seafood Pizza',
      description: 'Pizza Sauce, Garlic Shrimp, Mussels, Onion, Capsicum, Cheese',
      isNew: true
    }
  ];
  
  export const BURGERS = [
    {
      name: 'Chicken Burger',
      price: 8.99,
      description: 'Juicy chicken patty with fresh toppings',
      isPopular: true
    },
    {
      name: 'Lamb Burger',
      price: 8.99,
      description: 'Premium lamb patty with special sauce'
    },
    {
      name: 'Fish Burger',
      price: 8.99,
      description: 'Crispy fish fillet with tartare sauce'
    },
    {
      name: 'Beef Burger',
      price: 8.99,
      description: 'Classic beef patty with cheese and fresh vegetables',
      isPopular: true
    },
    {
      name: 'Grilled PeriPeri Burger',
      price: 8.99,
      description: 'Grilled chicken with spicy PeriPeri sauce',
      isSpicy: true,
      isNew: true
    },
    {
      name: 'Vegetarian Burger',
      price: 8.99,
      description: 'Plant-based patty with all the fixings',
      isVegetarian: true
    }
  ];
  
  export const BURGER_COMBOS = [
    {
      name: 'Burger + Chips + Drinks',
      price: 14.99,
      description: 'Your choice of burger with chips and soft drink',
      isPopular: true
    }
  ];
  
  export const CURRIES = [
    {
      name: 'Chicken Curry & Rice',
      price: 12.99,
      description: 'Traditional chicken curry served with steamed rice'
    },
    {
      name: 'Lamb Curry & Rice',
      price: 12.99,
      description: 'Tender lamb curry served with steamed rice'
    },
    {
      name: 'Butter Chicken & Rice',
      price: 15.50,
      description: 'Creamy butter chicken served with steamed rice',
      isPopular: true,
      isNew: true
    }
  ];
  
  export const SPECIAL_DEALS = [
    {
      name: 'Pizza Deal',
      description: '1 Large Classic Pizza & 1.5L Drink',
      price: 17.99,
      isPopular: true
    },
    {
      name: 'Meal Deal',
      description: '2 Large Classic Pizza',
      price: 25.99
    },
    {
      name: 'Family Deal',
      description: '5pcs Chicken & Chips & Coleslaw & 1 Large Classic Pizza',
      price: 33.99,
      isPopular: true,
      isNew: true
    },
    {
      name: 'Meal Deal',
      description: '3 Large Classic Pizza',
      price: 38.99
    },
    {
      name: 'Meal Deal',
      description: '3 Large Classic or Traditional Pizza',
      price: 44.99
    },
    {
      name: 'Party Pack',
      description: '3 Large Classic Pizza & 5pcs Chicken, Chips, Coleslaw & Garlic Bread & 1.5L Drink',
      price: 64.99,
      isPopular: true
    }
  ];
  
  export const CHICKEN_DEALS = [
    {
      name: '10PC Nibbles & Chips (BBQ or HOT)',
      price: 14.99,
      description: '10 pieces of chicken nibbles with chips',
      isSpicy: true,
      isPopular: true
    },
    {
      name: '2PC Chicken + Chips or Potato Gravy',
      price: 9.50,
      description: '2 pieces of fried chicken with chips or potato gravy'
    },
    {
      name: '2PC Chicken + Chips + Coleslaw',
      price: 13.50,
      description: '2 pieces of fried chicken with chips and coleslaw'
    },
    {
      name: '3PC Chicken + Chips + Coleslaw',
      price: 16.50,
      description: '3 pieces of fried chicken with chips and coleslaw',
      isPopular: true
    },
    {
      name: '6PC Chicken + Chips + Coleslaw',
      price: 26.99,
      description: '6 pieces of fried chicken with chips and coleslaw'
    },
    {
      name: '10PC Chicken + Chips + Coleslaw',
      price: 40.99,
      description: '10 pieces of fried chicken with chips and coleslaw',
      isNew: true
    },
    {
      name: '15PC Chicken + Chips + Coleslaw',
      price: 59.99,
      description: '15 pieces of fried chicken with chips and coleslaw'
    },
    {
      name: '10PC Buffalo Wings + Sourcream + Salad',
      price: 16.50,
      description: '10 pieces of buffalo wings with sour cream and salad',
      isSpicy: true,
      isPopular: true
    },
    {
      name: 'Whole Grilled Chicken + Chips + Coleslaw',
      price: 26.99,
      description: 'Whole grilled chicken with chips and coleslaw'
    }
  ];
  
  export const BIG_FOOT_PIZZA = [
    {
      name: '1M Long Choose up to 5 Flavours',
      price: 79.99,
      description: '1 meter long pizza with up to 5 different flavors (excluding seafood)',
      isPopular: true
    },
    {
      name: '0.5M Long Choose up to 3 Flavours',
      price: 49.99,
      description: '0.5 meter long pizza with up to 3 different flavors (excluding seafood)',
      isNew: true
    }
  ];
  
  export const SIDES = [
    {
      name: 'Nacho Chips (Lamb/Veg)',
      price: 8.99,
      description: 'Crispy nacho chips with lamb or vegetable toppings',
      isPopular: true
    },
    {
      name: 'Garlic Bread',
      price: 7.50,
      description: 'Toasted bread with garlic butter',
      isPopular: true
    },
    {
      name: 'Coleslaw',
      price: 4.99,
      description: 'Fresh coleslaw salad'
    },
    {
      name: 'Potato Gravy',
      price: 6.50,
      description: 'Rich potato gravy'
    },
    {
      name: 'Regular Chips',
      price: 5.50,
      description: 'Regular portion of hot chips',
      isPopular: true
    },
    {
      name: 'Large Chips',
      price: 7.50,
      description: 'Large portion of hot chips'
    },
    {
      name: 'Sauce',
      price: 2.00,
      description: 'Choice of sauce'
    },
    {
      name: 'Wedges+Sourcream+Sauce',
      price: 8.50,
      description: 'Potato wedges with sour cream and sauce',
      isPopular: true,
      isNew: true
    }
  ];
  
  export const SEAFOOD_DEALS = [
    {
      name: 'Fish & Chips',
      price: 11.50,
      description: 'Battered fish with chips',
      isPopular: true
    }
  ];
  
  export const SHANK_CHOPS = [
    {
      name: 'Lamb Shank + Salad + Chips or Potato Gravy',
      price: 19.99,
      description: 'Slow-cooked lamb shank with salad and your choice of chips or potato gravy',
      isPopular: true,
      isNew: true
    },
    {
      name: 'BBQ Chops + Lamb Sausage + Chips + Salad',
      price: 12.99,
      description: 'BBQ lamb chops with lamb sausage, chips and salad'
    }
  ];
  