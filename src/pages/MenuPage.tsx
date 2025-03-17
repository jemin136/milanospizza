import { useState } from 'react';
import Layout from '../components/layout/Layout';
import { MENU_CATEGORIES } from '../utils/constants';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);

  return (
    <Layout>
      <div className="bg-[#121212] py-32">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Menu</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Explore our wide selection of handcrafted pizzas and sides, made with the freshest ingredients.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF4500] to-[#FFA500] mx-auto mt-6"></div>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white'
                    : 'bg-[#1E1E1E] text-gray-300 hover:bg-[#252525]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="animate-fadeIn">
            {MENU_CATEGORIES.map((category) => (
              <div key={category.id} className={activeCategory === category.id ? 'block' : 'hidden'}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <div key={item.id} className="bg-[#1A1A1A] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-[#333] group">
                      {('image' in item) && (
                        <div className="h-48 overflow-hidden">
                          <img
                            src={item.image as string}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-white text-xl font-bold">{item.name}</h3>
                          <span className="text-[#FF4500] font-bold">${item.price.toFixed(2)}</span>
                        </div>
                        <p className="text-gray-400 mb-4">{item.description}</p>
                        <button className="w-full py-2 bg-[#1E1E1E] border border-[#333] text-white rounded-lg font-medium hover:bg-gradient-to-r from-[#FF4500] to-[#FFA500] transition-all duration-300">
                          Order now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          {/* <div className="bg-[#1A1A1A] rounded-lg p-8 mt-16 text-center border border-[#333]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need a Custom Order?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Have specific dietary requirements or want to customize your pizza? We're happy to accommodate special requests!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white rounded-lg font-medium hover:shadow-lg hover:brightness-110 transition-all duration-300"
            >
              Contact Us
            </a>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default MenuPage;
