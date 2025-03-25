import { useState } from 'react';
import Layout from '../components/layout/Layout';
import {
  CLASSIC_PIZZA,
  TRADITIONAL_PIZZA,
  GOURMET_PIZZA,
  MEAT_PIZZA,
  VEGETARIAN_PIZZA,
  SEAFOOD_PIZZA,
  BURGERS,
  BURGER_COMBOS,
  CURRIES,
  SPECIAL_DEALS,
  CHICKEN_DEALS,
  BIG_FOOT_PIZZA,
  SIDES,
  SEAFOOD_DEALS,
  SHANK_CHOPS
} from '../utils/menuData.ts';
import { FaLeaf, FaFire, FaStar, FaPlus } from 'react-icons/fa';

// Define menu categories
const MENU_SECTIONS = [
  { id: 'pizza', name: 'Pizza' },
  { id: 'burgers', name: 'Burgers' },
  { id: 'curries', name: 'Curries' },
  { id: 'deals', name: 'Special Deals' },
  { id: 'chicken', name: 'Chicken Deals' },
  { id: 'sides', name: 'Sides & Extras' },
];

// Define category price headers
const PIZZA_PRICE_HEADERS: any = {
  classic: { small: 8.99, large: 14.99, xlarge: 23.99 },
  traditional: { small: 11.99, large: 16.99, xlarge: 28.99 },
  gourmet: { small: 12.99, large: 20.99, xlarge: 30.99 },
  meat: { small: 12.99, large: 19.99, xlarge: 30.99 },
  vegetarian: { small: 11.99, large: 17.99, xlarge: 30.99 },
  seafood: { small: 13.50, large: 21.99, xlarge: 30.99 },
};

// Popular badge component
const PopularBadge = () => (
  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-xs px-2 py-1 rounded-full font-bold flex items-center shadow-md">
    <FaStar />
  </div>
);

// New badge component
const NewBadge = () => (
  <div className="absolute -top-2 left-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full font-bold flex items-center shadow-md">
    <FaPlus className="mr-1" /> New
  </div>
);

const MenuPage = () => {
  const [activeSection, setActiveSection] = useState(MENU_SECTIONS[0].id);

  // Function to render pizza size prices (now used at category level)
  const renderPizzaSizes = (sizes: any) => (
    <div className="flex justify-between text-sm mb-6 w-1/2 !important">
      <div>
        <div className="text-md text-gray-500 text-center">9" SMALL</div>
        <div className="text-2xl text-orange-500 font-bold text-center">${sizes.small.toFixed(2)}</div>
      </div>
      <div>
        <div className="text-md text-gray-500 text-center">12" LARGE</div>
        <div className="text-2xl text-yellow-500 font-bold text-center">${sizes.large.toFixed(2)}</div>
      </div>
      <div>
        <div className="text-md text-gray-500 text-center">18" X-LARGE</div>
        <div className="text-2xl text-amber-400 font-bold text-center">${sizes.xlarge.toFixed(2)}</div>
      </div>
    </div>
  );

  // Function to render a menu item without price (for pizza categories)
  const renderPizzaItem = (item: any) => (
    <div key={item.name} className="bg-[#1A1A1A] rounded-lg p-3 border border-[#333] hover:border-[#555] transition-all relative">
      {item.isPopular && <PopularBadge />}
      {item.isNew && <NewBadge />}
      <h3 className="text-white font-bold text-lg group flex items-center mt-1">
        {item.name}
        {item.isVegetarian && <FaLeaf className="ml-2 text-green-500" title="Vegetarian" />}
        {item.isSpicy && <FaFire className="ml-2 text-red-500" title="Spicy" />}
      </h3>
      <p className="text-gray-400 text-sm mt-1">{item.description}</p>
    </div>
  );

  // Function to render a standard menu item with price
  const renderMenuItem = (item: any) => (
    <div key={item.name} className="bg-[#1A1A1A] rounded-lg p-4 border border-[#333] hover:border-[#555] transition-all relative">
      {item.isPopular && <PopularBadge />}
      {item.isNew && <NewBadge />}
      <div className="flex justify-between items-start mt-1">
        <h3 className="text-white font-bold text-lg group flex items-center">
          {item.name}
          {item.isVegetarian && <FaLeaf className="ml-2 text-green-500" title="Vegetarian" />}
          {item.isSpicy && <FaFire className="ml-2 text-red-500" title="Spicy" />}
        </h3>
        <span className="text-[#FF4500] font-bold">
          ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
        </span>
      </div>
      <p className="text-gray-400 text-sm mt-1">{item.description}</p>
    </div>
  );

  // Function to render a pizza category section with prices at category level
  const renderPizzaCategory = (title: string, items: any, color: string, priceKey: any) => (
    <div className="mb-12">
      <div className="mb-4">
        {/* <h2 className={`text-2xl font-bold ${color} pt-4`}>{title}</h2> */}
        <div className="flex items-center justify-center mb-4">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#333]"></div>
          <h2 className={`text-3xl font-bold text-white px-4 ${color}`}>{title}</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-[#333] to-transparent"></div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {renderPizzaSizes(PIZZA_PRICE_HEADERS[priceKey])}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(renderPizzaItem)}
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="bg-[#121212] py-32">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">Milanos Pizza Menu</h1>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF4500] to-[#FFA500] mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our wide selection of handcrafted pizzas, burgers, sides, and special deals.
              All made with the freshest ingredients and full of flavor.
            </p>
            <div className="flex flex-wrap items-center justify-center mt-4 gap-4">
              <div className="flex items-center">
                <FaStar className="text-yellow-500 mr-1" />
                <span className="text-white">Customer Favorites</span>
              </div>
              <div className="flex items-center">
                <FaPlus className="text-green-500 mr-1" />
                <span className="text-white">New Items</span>
              </div>
              <div className="flex items-center">
                <FaLeaf className="text-green-500 mr-1" />
                <span className="text-white">Vegetarian</span>
              </div>
              <div className="flex items-center">
                <FaFire className="text-red-500 mr-1" />
                <span className="text-white">Spicy</span>
              </div>
            </div>
          </div>

          {/* Section Navigation */}
          <div className="flex pb-4 pt-4 mb-8 -mx-4 px-4 sm:px-0 hide-scrollbar">
            <div className="flex space-x-2 mx-auto flex-wrap items-center justify-center gap-4">
              {MENU_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${activeSection === section.id
                    ? 'bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white'
                    : 'bg-[#1E1E1E] text-gray-300 hover:bg-[#252525]'
                    }`}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pb-8">
            <a
              href="https://ordermeal.co.nz/milanos-pizza-manukau/"
              className="px-8 py-3 bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white rounded-lg font-medium hover:shadow-lg hover:brightness-110 transition-all duration-300 text-center"
            >
              Milanos Pizza Manukau
            </a>
            <a
              href="https://www.ordermeal.co.nz/milanos-curry-place/"
              className="px-8 py-3 bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white rounded-lg font-medium hover:shadow-lg hover:brightness-110 transition-all duration-300 text-center"
            >
              Milanos Curry Place
            </a>
          </div>

          {/* Pizza Menu */}
          {activeSection === 'pizza' && (
            <div className="animate-fadeIn">
              {/* <div className="flex items-center justify-center mb-8">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#333]"></div>
                <h2 className="text-3xl font-bold text-white px-4">Our Pizzas</h2>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-[#333] to-transparent"></div>
              </div> */}

              {renderPizzaCategory('CLASSIC PIZZA', CLASSIC_PIZZA, 'text-amber-500', 'classic')}
              {renderPizzaCategory('TRADITIONAL PIZZA', TRADITIONAL_PIZZA, 'text-red-500', 'traditional')}
              {renderPizzaCategory('GOURMET PIZZA', GOURMET_PIZZA, 'text-yellow-400', 'gourmet')}
              {renderPizzaCategory('MEAT PIZZA', MEAT_PIZZA, 'text-orange-600', 'meat')}
              {renderPizzaCategory('VEGETARIAN PIZZA', VEGETARIAN_PIZZA, 'text-green-500', 'vegetarian')}
              {renderPizzaCategory('SEAFOOD PIZZA', SEAFOOD_PIZZA, 'text-blue-400', 'seafood')}

              {/* Big Foot Pizza */}
              <div className="mt-16 mb-10">
                <div className="bg-[#171717] rounded-lg p-6 border border-[#333]">
                  <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">BIG FOOT PIZZA</h2>
                  <div className="flex flex-col md:flex-row items-center mb-6">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                      <img
                        src="/images/pizza2.jpg"
                        alt="Big Foot Pizza"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3 md:pl-6">
                      <div className="grid grid-cols-1 gap-4">
                        {BIG_FOOT_PIZZA.map(item => (
                          <div key={item.name} className="bg-[#1A1A1A] rounded-lg p-4 relative">
                            {item.isPopular && <PopularBadge />}
                            {item.isNew && <NewBadge />}
                            <div className="flex justify-between items-start mt-1">
                              <h3 className="text-white font-bold text-xl">{item.name}</h3>
                              <span className="text-[#FF4500] font-bold text-xl">${item.price.toFixed(2)}</span>
                            </div>
                            <p className="text-gray-400 mt-1">{item.description}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-gray-500 text-sm italic mt-3 text-right">EXCLUDING SEAFOOD PIZZA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Burgers Menu */}
          {activeSection === 'burgers' && (
            <div className="animate-fadeIn">
              <div className="flex items-center justify-center mb-6">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#333]"></div>
                <h2 className="text-3xl font-bold text-white px-4">BURGERS</h2>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-[#333] to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {BURGERS.map(renderMenuItem)}
              </div>

              <div className="flex items-center justify-center my-6">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#333]"></div>
                <h2 className="text-3xl font-bold text-white px-4">COMBOS</h2>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-[#333] to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {BURGER_COMBOS.map(renderMenuItem)}
              </div>
            </div>
          )}

          {/* Curries Menu */}
          {activeSection === 'curries' && (
            <div className="animate-fadeIn">
              <div className="flex items-center justify-center mb-6">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#333]"></div>
                <h2 className="text-3xl font-bold text-white px-4">CURRIES</h2>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-[#333] to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {CURRIES.map(renderMenuItem)}
              </div>
            </div>
          )}

          {/* Special Deals */}
          {activeSection === 'deals' && (
            <div className="animate-fadeIn">
              <div className="flex items-center justify-center mb-6">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#333]"></div>
                <h2 className="text-3xl font-bold text-red-500 px-4">MILANOS SPECIAL DEALS</h2>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-[#333] to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {SPECIAL_DEALS.map(item => (
                  <div key={item.name} className="bg-[#1A1A1A] rounded-lg p-5 border border-[#333] relative">
                    {item.isPopular && <PopularBadge />}
                    {item.isNew && <NewBadge />}
                    <div className="flex justify-between items-start mt-1">
                      <h3 className="text-white font-bold text-xl">{item.name}</h3>
                      <span className="text-red-500 font-bold text-xl">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-gray-400 mt-2 text-lg">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center my-6">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#333]"></div>
                <h2 className="text-3xl font-bold text-blue-400 px-4">SEAFOOD DEALS</h2>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-[#333] to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {SEAFOOD_DEALS.map(renderMenuItem)}
              </div>

              <div className="flex items-center justify-center my-6">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#333]"></div>
                <h2 className="text-3xl font-bold text-orange-500 px-4">SHANK & CHOPS</h2>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-[#333] to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SHANK_CHOPS.map(renderMenuItem)}
              </div>
            </div>
          )}

          {/* Chicken Deals */}
          {activeSection === 'chicken' && (
            <div className="animate-fadeIn">
              <div className="flex items-center justify-center mb-6">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#333]"></div>
                <h2 className="text-3xl font-bold text-yellow-500 px-4">MILANOS CHICKEN DEALS</h2>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-[#333] to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CHICKEN_DEALS.map(item => (
                  <div key={item.name} className="bg-[#1A1A1A] rounded-lg p-5 border border-[#333] relative">
                    {item.isPopular && <PopularBadge />}
                    {item.isNew && <NewBadge />}
                    <div className="flex justify-between items-start mt-1">
                      <h3 className="text-white font-bold text-xl group flex items-center">
                        {item.name}
                        {item.isSpicy && <FaFire className="ml-2 text-red-500" title="Spicy" />}
                      </h3>
                      <span className="text-yellow-500 font-bold text-xl">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-gray-400 mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sides & Extras */}
          {activeSection === 'sides' && (
            <div className="animate-fadeIn">
              <div className="flex items-center justify-center mb-6">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#333]"></div>
                <h2 className="text-3xl font-bold text-white px-4">SIDE ORDERS</h2>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-[#333] to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SIDES.map(renderMenuItem)}
              </div>
            </div>
          )}

          {/* Contact Info */}
          <div className="mt-16 text-center text-gray-400 border-t border-[#333] pt-6">
            <div className="mb-3">
              <p className="inline-block mx-1">DINE IN / TAKEAWAY</p>
              <p className="inline-block mx-1">5/726 GREAT SOUTH ROAD, MANUKAU</p>
              <p className="inline-block mx-1">CALL US - 09 262 4040</p>
            </div>
            <p className="text-xs">NO SUBSTITUTE TOPPINGS ALLOWED ON ANY DEAL. EXTRA CHARGES APPLY FOR ADDITIONAL TOPPINGS</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MenuPage;
