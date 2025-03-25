// import { useState } from 'react';
// import Layout from '../components/layout/Layout';
// import { MENU_CATEGORIES } from '../utils/constants';
// const pizzaMenu = [
//   {
//     id: 'p1',
//     name: 'Classic Margherita',
//     description: 'Fresh mozzarella, tomatoes, basil, olive oil',
//     price: {
//       small: 10.99,
//       medium: 12.99,
//       large: 15.99,
//     },
//     isVegetarian: true,
//     isSpicy: false,
//   },
//   {
//     id: 'p2',
//     name: 'Pepperoni Supreme',
//     description: 'Pepperoni, mozzarella, tomato sauce',
//     price: {
//       small: 11.99,
//       medium: 14.99,
//       large: 17.99,
//     },
//     isVegetarian: false,
//     isSpicy: false,
//   },
//   {
//     id: 'p3',
//     name: 'Veggie Delight',
//     description: 'Bell peppers, mushrooms, onions, olives, tomatoes, whole wheat crust',
//     price: {
//       small: 11.99,
//       medium: 13.99,
//       large: 16.99,
//     },
//     isVegetarian: true,
//     isSpicy: false,
//   },
//   {
//     id: 'p4',
//     name: 'Meat Lover\'s Feast',
//     description: 'Pepperoni, sausage, bacon, ham, ground beef',
//     price: {
//       small: 13.99,
//       medium: 16.99,
//       large: 19.99,
//     },
//     isVegetarian: false,
//     isSpicy: false,
//   },
//   {
//     id: 'p5',
//     name: 'Buffalo Chicken',
//     description: 'Spicy buffalo chicken, blue cheese, mozzarella, ranch drizzle',
//     price: {
//       small: 12.99,
//       medium: 15.99,
//       large: 18.99,
//     },
//     isVegetarian: false,
//     isSpicy: true,
//   },
//   {
//     id: 'p6',
//     name: 'Mediterranean',
//     description: 'Feta cheese, olives, tomatoes, spinach, red onions, olive oil base',
//     price: {
//       small: 11.99,
//       medium: 14.99,
//       large: 17.99,
//     },
//     isVegetarian: true,
//     isSpicy: false,
//   },
// ];

// const curryMenu = [
//   {
//     id: 'c1',
//     name: 'Butter Chicken',
//     description: 'Tender chicken in a rich, creamy tomato sauce with aromatic spices',
//     price: 15.99,
//     isVegetarian: false,
//     isSpicy: false,
//   },
//   {
//     id: 'c2',
//     name: 'Paneer Tikka Masala',
//     description: 'Cubes of farmer cheese marinated and grilled, then simmered in a spiced tomato gravy',
//     price: 14.99,
//     isVegetarian: true,
//     isSpicy: false,
//   },
//   {
//     id: 'c3',
//     name: 'Chicken Vindaloo',
//     description: 'Fiery hot curry with tender chicken, potatoes, and a tangy vinegar-based sauce',
//     price: 16.99,
//     isVegetarian: false,
//     isSpicy: true,
//   },
//   {
//     id: 'c4',
//     name: 'Vegetable Korma',
//     description: 'Mixed vegetables in a mild, creamy sauce with cashews and raisins',
//     price: 13.99,
//     isVegetarian: true,
//     isSpicy: false,
//   },
//   {
//     id: 'c5',
//     name: 'Lamb Rogan Josh',
//     description: 'Tender lamb slow-cooked in a rich sauce with Kashmiri chiles and aromatic spices',
//     price: 17.99,
//     isVegetarian: false,
//     isSpicy: true,
//   },
//   {
//     id: 'c6',
//     name: 'Chana Masala',
//     description: 'Chickpeas simmered in a tangy tomato and onion sauce with Indian spices',
//     price: 12.99,
//     isVegetarian: true,
//     isSpicy: false,
//   },
// ];
// const appetizerMenu = [
//   {
//     id: 'a1',
//     name: 'Garlic Breadsticks',
//     description: 'Freshly baked breadsticks with garlic butter and parmesan',
//     price: 6.99,
//     isVegetarian: true,
//     isSpicy: false,
//   },
//   {
//     id: 'a2',
//     name: 'Mozzarella Sticks',
//     description: 'Golden-fried mozzarella sticks with marinara sauce',
//     price: 7.99,
//     isVegetarian: true,
//     isSpicy: false,
//   },
//   {
//     id: 'a3',
//     name: 'Samosas',
//     description: 'Crispy pastry filled with spiced potatoes and peas',
//     price: 6.99,
//     isVegetarian: true,
//     isSpicy: false,
//   },
//   {
//     id: 'a4',
//     name: 'Chicken Wings',
//     description: 'Choose from buffalo, BBQ, or honey sriracha',
//     price: 9.99,
//     isVegetarian: false,
//     isSpicy: true,
//   },
// ];
// const sidesMenu = [
//   {
//     id: 's1',
//     name: 'Garden Salad',
//     description: 'Mixed greens, tomatoes, cucumbers, carrots, choice of dressing',
//     price: 5.99,
//     isVegetarian: true,
//     isSpicy: false,
//   },
//   {
//     id: 's2',
//     name: 'Garlic Naan',
//     description: 'Traditional Indian bread with garlic and butter',
//     price: 3.99,
//     isVegetarian: true,
//     isSpicy: false,
//   },
//   {
//     id: 's3',
//     name: 'Basmati Rice',
//     description: 'Aromatic long-grain rice',
//     price: 3.99,
//     isVegetarian: true,
//     isSpicy: false,
//   },
//   {
//     id: 's4',
//     name: 'Caesar Salad',
//     description: 'Romaine lettuce, croutons, parmesan, caesar dressing',
//     price: 6.99,
//     isVegetarian: true,
//     isSpicy: false,
//   },
// ];
// const beveragesMenu = [
//   {
//     id: 'b1',
//     name: 'Soft Drinks',
//     description: 'Coke, Diet Coke, Sprite, Dr. Pepper, Lemonade',
//     price: 2.99,
//     isVegetarian: true,
//     isSpicy: false,
//   },
//   {
//     id: 'b2',
//     name: 'Mango Lassi',
//     description: 'Traditional Indian yogurt drink with mango',
//     price: 4.99,
//     isVegetarian: true,
//     isSpicy: false,
//   },
//   {
//     id: 'b3',
//     name: 'Iced Tea',
//     description: 'Sweetened or unsweetened',
//     price: 2.99,
//     isVegetarian: true,
//     isSpicy: false,
//   },
//   {
//     id: 'b4',
//     name: 'Masala Chai',
//     description: 'Spiced Indian tea with milk',
//     price: 3.99,
//     isVegetarian: true,
//     isSpicy: false,
//   },
// ];

// const MenuPage = () => {
//   const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);

//   return (
//     <Layout>
//       <div className="bg-[#121212] py-32">
//         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Menu</h1>
//             <p className="text-gray-300 text-lg max-w-3xl mx-auto">
//               Explore our wide selection of handcrafted pizzas and sides, made with the freshest ingredients.
//             </p>
//             <div className="w-24 h-1 bg-gradient-to-r from-[#FF4500] to-[#FFA500] mx-auto mt-6"></div>
//           </div>

//           {/* Category Navigation */}
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {MENU_CATEGORIES.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
//                   ? 'bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white'
//                   : 'bg-[#1E1E1E] text-gray-300 hover:bg-[#252525]'
//                   }`}
//               >
//                 {category.name}
//               </button>
//             ))}
//           </div>

//           {/* Menu Items */}
//           <div className="animate-fadeIn">
//             {MENU_CATEGORIES.map((category) => (
//               <div key={category.id} className={activeCategory === category.id ? 'block' : 'hidden'}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {category.items.map((item) => (
//                     <div key={item.id} className="bg-[#1A1A1A] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-[#333] group">
//                       {('image' in item) && (
//                         <div className="h-48 overflow-hidden">
//                           <img
//                             src={item.image as string}
//                             alt={item.name}
//                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                           />
//                         </div>
//                       )}
//                       <div className="p-5">
//                         <div className="flex justify-between items-start mb-3">
//                           <h3 className="text-white text-xl font-bold">{item.name}</h3>
//                           <span className="text-[#FF4500] font-bold">${item.price.toFixed(2)}</span>
//                         </div>
//                         <p className="text-gray-400 mb-4">{item.description}</p>
//                         <button className="w-full py-2 bg-[#1E1E1E] border border-[#333] text-white rounded-lg font-medium hover:bg-gradient-to-r from-[#FF4500] to-[#FFA500] transition-all duration-300">
//                           Order now
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-[#1A1A1A] rounded-lg p-8 border border-[#333] mb-16">
//             <div className="grid grid-cols-1 gap-8 items-center">
//               <section id="pizza-section" className="mb-16">
//                 <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[var(--primary)]">
//                   Pizzas
//                 </h3>
//                 <p className="text-gray-600 italic mb-6">All pizzas are available in small (10"), medium (14"), and large (16") sizes.</p>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   {pizzaMenu.map((item) => (
//                     <div key={item.id} className="border-b border-gray-200 pb-4">
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <h4 className="text-lg font-bold">
//                             {item.name}
//                             {item.isVegetarian && <span className="inline-block w-3 h-3 bg-green-500 rounded-full ml-2"></span>}
//                             {item.isSpicy && <span className="inline-block w-3 h-3 bg-red-500 rounded-full ml-2"></span>}
//                           </h4>
//                           <p className="text-gray-600 text-sm mt-1">{item.description}</p>
//                         </div>
//                         <div className="text-right">
//                           <div className="text-sm">
//                             <span className="font-semibold">S: </span>
//                             <span className="text-[var(--primary)]">${item.price.small.toFixed(2)}</span>
//                           </div>
//                           <div className="text-sm">
//                             <span className="font-semibold">M: </span>
//                             <span className="text-[var(--primary)]">${item.price.medium.toFixed(2)}</span>
//                           </div>
//                           <div className="text-sm">
//                             <span className="font-semibold">L: </span>
//                             <span className="text-[var(--primary)]">${item.price.large.toFixed(2)}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             </div>
//           </div>

//           <div className="bg-[#1A1A1A] rounded-lg p-8 border border-[#333] mb-16">
//             <div className="grid grid-cols-1 gap-8 items-center">
//               {/* Add downalod icon below or open the menu in new tab */}
//               <section id="pizza-section">
//                   <img src="/images/Menu1.jpg" alt="Pizza" className="w-full  object-cover rounded-lg" />
//               </section>
//             </div>
//           </div>

//           <div className="bg-[#1A1A1A] rounded-lg p-8 border border-[#333] mb-16">
//             <div className="grid grid-cols-1 gap-8 items-center">
//               <section id="pizza-section">
//                   <img src="/images/Menu2.jpg" alt="Pizza" className="w-full  object-cover rounded-lg" />
//               </section>
//             </div>
//           </div>

//           {/* CTA Section */}
//           {/* <div className="bg-[#1A1A1A] rounded-lg p-8 mt-16 text-center border border-[#333]">
//             <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need a Custom Order?</h2>
//             <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
//               Have specific dietary requirements or want to customize your pizza? We're happy to accommodate special requests!
//             </p>
//             <a
//               href="/contact"
//               className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white rounded-lg font-medium hover:shadow-lg hover:brightness-110 transition-all duration-300"
//             >
//               Contact Us
//             </a>
//           </div> */}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default MenuPage;

// // const MenuPage = () => {
// //   // Menu data
// //   const pizzaMenu = [
// //     {
// //       id: 'p1',
// //       name: 'Classic Margherita',
// //       description: 'Fresh mozzarella, tomatoes, basil, olive oil',
// //       price: {
// //         small: 10.99,
// //         medium: 12.99,
// //         large: 15.99,
// //       },
// //       isVegetarian: true,
// //       isSpicy: false,
// //     },
// //     {
// //       id: 'p2',
// //       name: 'Pepperoni Supreme',
// //       description: 'Pepperoni, mozzarella, tomato sauce',
// //       price: {
// //         small: 11.99,
// //         medium: 14.99,
// //         large: 17.99,
// //       },
// //       isVegetarian: false,
// //       isSpicy: false,
// //     },
// //     {
// //       id: 'p3',
// //       name: 'Veggie Delight',
// //       description: 'Bell peppers, mushrooms, onions, olives, tomatoes, whole wheat crust',
// //       price: {
// //         small: 11.99,
// //         medium: 13.99,
// //         large: 16.99,
// //       },
// //       isVegetarian: true,
// //       isSpicy: false,
// //     },
// //     {
// //       id: 'p4',
// //       name: 'Meat Lover\'s Feast',
// //       description: 'Pepperoni, sausage, bacon, ham, ground beef',
// //       price: {
// //         small: 13.99,
// //         medium: 16.99,
// //         large: 19.99,
// //       },
// //       isVegetarian: false,
// //       isSpicy: false,
// //     },
// //     {
// //       id: 'p5',
// //       name: 'Buffalo Chicken',
// //       description: 'Spicy buffalo chicken, blue cheese, mozzarella, ranch drizzle',
// //       price: {
// //         small: 12.99,
// //         medium: 15.99,
// //         large: 18.99,
// //       },
// //       isVegetarian: false,
// //       isSpicy: true,
// //     },
// //     {
// //       id: 'p6',
// //       name: 'Mediterranean',
// //       description: 'Feta cheese, olives, tomatoes, spinach, red onions, olive oil base',
// //       price: {
// //         small: 11.99,
// //         medium: 14.99,
// //         large: 17.99,
// //       },
// //       isVegetarian: true,
// //       isSpicy: false,
// //     },
// //   ];

// //   const curryMenu = [
// //     {
// //       id: 'c1',
// //       name: 'Butter Chicken',
// //       description: 'Tender chicken in a rich, creamy tomato sauce with aromatic spices',
// //       price: 15.99,
// //       isVegetarian: false,
// //       isSpicy: false,
// //     },
// //     {
// //       id: 'c2',
// //       name: 'Paneer Tikka Masala',
// //       description: 'Cubes of farmer cheese marinated and grilled, then simmered in a spiced tomato gravy',
// //       price: 14.99,
// //       isVegetarian: true,
// //       isSpicy: false,
// //     },
// //     {
// //       id: 'c3',
// //       name: 'Chicken Vindaloo',
// //       description: 'Fiery hot curry with tender chicken, potatoes, and a tangy vinegar-based sauce',
// //       price: 16.99,
// //       isVegetarian: false,
// //       isSpicy: true,
// //     },
// //     {
// //       id: 'c4',
// //       name: 'Vegetable Korma',
// //       description: 'Mixed vegetables in a mild, creamy sauce with cashews and raisins',
// //       price: 13.99,
// //       isVegetarian: true,
// //       isSpicy: false,
// //     },
// //     {
// //       id: 'c5',
// //       name: 'Lamb Rogan Josh',
// //       description: 'Tender lamb slow-cooked in a rich sauce with Kashmiri chiles and aromatic spices',
// //       price: 17.99,
// //       isVegetarian: false,
// //       isSpicy: true,
// //     },
// //     {
// //       id: 'c6',
// //       name: 'Chana Masala',
// //       description: 'Chickpeas simmered in a tangy tomato and onion sauce with Indian spices',
// //       price: 12.99,
// //       isVegetarian: true,
// //       isSpicy: false,
// //     },
// //   ];

// //   const appetizerMenu = [
// //     {
// //       id: 'a1',
// //       name: 'Garlic Breadsticks',
// //       description: 'Freshly baked breadsticks with garlic butter and parmesan',
// //       price: 6.99,
// //       isVegetarian: true,
// //       isSpicy: false,
// //     },
// //     {
// //       id: 'a2',
// //       name: 'Mozzarella Sticks',
// //       description: 'Golden-fried mozzarella sticks with marinara sauce',
// //       price: 7.99,
// //       isVegetarian: true,
// //       isSpicy: false,
// //     },
// //     {
// //       id: 'a3',
// //       name: 'Samosas',
// //       description: 'Crispy pastry filled with spiced potatoes and peas',
// //       price: 6.99,
// //       isVegetarian: true,
// //       isSpicy: false,
// //     },
// //     {
// //       id: 'a4',
// //       name: 'Chicken Wings',
// //       description: 'Choose from buffalo, BBQ, or honey sriracha',
// //       price: 9.99,
// //       isVegetarian: false,
// //       isSpicy: true,
// //     },
// //   ];

// //   const sidesMenu = [
// //     {
// //       id: 's1',
// //       name: 'Garden Salad',
// //       description: 'Mixed greens, tomatoes, cucumbers, carrots, choice of dressing',
// //       price: 5.99,
// //       isVegetarian: true,
// //       isSpicy: false,
// //     },
// //     {
// //       id: 's2',
// //       name: 'Garlic Naan',
// //       description: 'Traditional Indian bread with garlic and butter',
// //       price: 3.99,
// //       isVegetarian: true,
// //       isSpicy: false,
// //     },
// //     {
// //       id: 's3',
// //       name: 'Basmati Rice',
// //       description: 'Aromatic long-grain rice',
// //       price: 3.99,
// //       isVegetarian: true,
// //       isSpicy: false,
// //     },
// //     {
// //       id: 's4',
// //       name: 'Caesar Salad',
// //       description: 'Romaine lettuce, croutons, parmesan, caesar dressing',
// //       price: 6.99,
// //       isVegetarian: true,
// //       isSpicy: false,
// //     },
// //   ];

// //   const beveragesMenu = [
// //     {
// //       id: 'b1',
// //       name: 'Soft Drinks',
// //       description: 'Coke, Diet Coke, Sprite, Dr. Pepper, Lemonade',
// //       price: 2.99,
// //       isVegetarian: true,
// //       isSpicy: false,
// //     },
// //     {
// //       id: 'b2',
// //       name: 'Mango Lassi',
// //       description: 'Traditional Indian yogurt drink with mango',
// //       price: 4.99,
// //       isVegetarian: true,
// //       isSpicy: false,
// //     },
// //     {
// //       id: 'b3',
// //       name: 'Iced Tea',
// //       description: 'Sweetened or unsweetened',
// //       price: 2.99,
// //       isVegetarian: true,
// //       isSpicy: false,
// //     },
// //     {
// //       id: 'b4',
// //       name: 'Masala Chai',
// //       description: 'Spiced Indian tea with milk',
// //       price: 3.99,
// //       isVegetarian: true,
// //       isSpicy: false,
// //     },
// //   ];

// //   return (
// //     <Layout>
// //       <div className="bg-[#121212] py-32">
// //         <div className="max-w-5xl mx-auto">
// //           <div className="text-center mb-12">
// //             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Catering Services</h1>
// //             <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-6"></div>
// //             <p className="max-w-3xl mx-auto">
// //               Enjoy our delicious selection of hand-crafted pizzas and authentic curry dishes.
// //               All items are prepared fresh with the highest quality ingredients.
// //             </p>
// //           </div>

// //           <div className="bg-[#1A1A1A] rounded-lg p-8 border border-[#333] mb-16">
// //             <div className="grid grid-cols-1 gap-8 items-center">
// //               <div className="mb-8 flex justify-center">
// //                 <div className="inline-flex bg-[var(--background-dark)] rounded-full p-1">
// //                   <a href="#pizza-section" className="px-4 py-2 rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors">
// //                     Pizzas
// //                   </a>
// //                   <a href="#curry-section" className="px-4 py-2 rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors">
// //                     Curries
// //                   </a>
// //                   <a href="#appetizer-section" className="px-4 py-2 rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors">
// //                     Appetizers
// //                   </a>
// //                   <a href="#sides-section" className="px-4 py-2 rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors">
// //                     Sides
// //                   </a>
// //                   <a href="#beverages-section" className="px-4 py-2 rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors">
// //                     Beverages
// //                   </a>
// //                 </div>
// //               </div>

// //               <div className="mb-12 flex items-center justify-center">
// //                 <div className="flex items-center mr-6">
// //                   <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
// //                   <span className="text-sm">Vegetarian</span>
// //                 </div>
// //                 <div className="flex items-center">
// //                   <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
// //                   <span className="text-sm">Spicy</span>
// //                 </div>
// //               </div>

// //               {/* Pizza Menu */}
// //               <section id="pizza-section" className="mb-16">
// //                 <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[var(--primary)]">
// //                   Pizzas
// //                 </h3>
// //                 <p className="text-gray-600 italic mb-6">All pizzas are available in small (10"), medium (14"), and large (16") sizes.</p>

// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //                   {pizzaMenu.map((item) => (
// //                     <div key={item.id} className="border-b border-gray-200 pb-4">
// //                       <div className="flex justify-between items-start">
// //                         <div>
// //                           <h4 className="text-lg font-bold">
// //                             {item.name}
// //                             {item.isVegetarian && <span className="inline-block w-3 h-3 bg-green-500 rounded-full ml-2"></span>}
// //                             {item.isSpicy && <span className="inline-block w-3 h-3 bg-red-500 rounded-full ml-2"></span>}
// //                           </h4>
// //                           <p className="text-gray-600 text-sm mt-1">{item.description}</p>
// //                         </div>
// //                         <div className="text-right">
// //                           <div className="text-sm">
// //                             <span className="font-semibold">S: </span>
// //                             <span className="text-[var(--primary)]">${item.price.small.toFixed(2)}</span>
// //                           </div>
// //                           <div className="text-sm">
// //                             <span className="font-semibold">M: </span>
// //                             <span className="text-[var(--primary)]">${item.price.medium.toFixed(2)}</span>
// //                           </div>
// //                           <div className="text-sm">
// //                             <span className="font-semibold">L: </span>
// //                             <span className="text-[var(--primary)]">${item.price.large.toFixed(2)}</span>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </section>

// //               {/* Curry Menu */}
// //               <section id="curry-section" className="mb-16">
// //                 <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[var(--secondary)]">
// //                   Curries
// //                 </h3>
// //                 <p className="text-gray-600 italic mb-6">All curries are served with your choice of rice or naan bread.</p>

// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //                   {curryMenu.map((item) => (
// //                     <div key={item.id} className="border-b border-gray-200 pb-4">
// //                       <div className="flex justify-between items-start">
// //                         <div>
// //                           <h4 className="text-lg font-bold">
// //                             {item.name}
// //                             {item.isVegetarian && <span className="inline-block w-3 h-3 bg-green-500 rounded-full ml-2"></span>}
// //                             {item.isSpicy && <span className="inline-block w-3 h-3 bg-red-500 rounded-full ml-2"></span>}
// //                           </h4>
// //                           <p className="text-gray-600 text-sm mt-1">{item.description}</p>
// //                         </div>
// //                         <div className="text-[var(--secondary)] font-bold">
// //                           ${item.price.toFixed(2)}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </section>

// //               {/* Appetizers Menu */}
// //               <section id="appetizer-section" className="mb-16">
// //                 <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[var(--accent)]">
// //                   Appetizers
// //                 </h3>

// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //                   {appetizerMenu.map((item) => (
// //                     <div key={item.id} className="border-b border-gray-200 pb-4">
// //                       <div className="flex justify-between items-start">
// //                         <div>
// //                           <h4 className="text-lg font-bold">
// //                             {item.name}
// //                             {item.isVegetarian && <span className="inline-block w-3 h-3 bg-green-500 rounded-full ml-2"></span>}
// //                             {item.isSpicy && <span className="inline-block w-3 h-3 bg-red-500 rounded-full ml-2"></span>}
// //                           </h4>
// //                           <p className="text-gray-600 text-sm mt-1">{item.description}</p>
// //                         </div>
// //                         <div className="text-[var(--primary)] font-bold">
// //                           ${item.price.toFixed(2)}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </section>

// //               {/* Sides Menu */}
// //               <section id="sides-section" className="mb-16">
// //                 <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[var(--accent)]">
// //                   Sides
// //                 </h3>

// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //                   {sidesMenu.map((item) => (
// //                     <div key={item.id} className="border-b border-gray-200 pb-4">
// //                       <div className="flex justify-between items-start">
// //                         <div>
// //                           <h4 className="text-lg font-bold">
// //                             {item.name}
// //                             {item.isVegetarian && <span className="inline-block w-3 h-3 bg-green-500 rounded-full ml-2"></span>}
// //                             {item.isSpicy && <span className="inline-block w-3 h-3 bg-red-500 rounded-full ml-2"></span>}
// //                           </h4>
// //                           <p className="text-gray-600 text-sm mt-1">{item.description}</p>
// //                         </div>
// //                         <div className="text-[var(--primary)] font-bold">
// //                           ${item.price.toFixed(2)}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </section>

// //               {/* Beverages Menu */}
// //               <section id="beverages-section" className="mb-16">
// //                 <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[var(--accent)]">
// //                   Beverages
// //                 </h3>

// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //                   {beveragesMenu.map((item) => (
// //                     <div key={item.id} className="border-b border-gray-200 pb-4">
// //                       <div className="flex justify-between items-start">
// //                         <div>
// //                           <h4 className="text-lg font-bold">
// //                             {item.name}
// //                           </h4>
// //                           <p className="text-gray-600 text-sm mt-1">{item.description}</p>
// //                         </div>
// //                         <div className="text-[var(--primary)] font-bold">
// //                           ${item.price.toFixed(2)}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </section>

// //               <div className="bg-[var(--background-dark)] p-6 rounded-lg mb-12">
// //                 <p className="text-center text-sm">
// //                   <strong>Allergies?</strong> Please inform our staff about any allergies or dietary restrictions.
// //                 </p>
// //                 <p className="text-center text-sm mt-2">
// //                   <strong>Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.</strong>
// //                 </p>
// //               </div>
// //             </div>

// //           </div>
// //         </div>
// //       </div>
// //     </Layout>
// //   );
// // };

// // export default MenuPage;
