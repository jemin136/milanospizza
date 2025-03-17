import { BEST_SELLERS } from '../../utils/constants';
import { FaStar } from 'react-icons/fa';
import Container from '../ui/Container';

const BestSellerSection = () => {
  return (
    <section className="py-16 bg-[#121212]">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Best Sellers</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Try our most popular pizzas, loved by customers across the city
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF4500] to-[#FFA500] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BEST_SELLERS.map((pizza) => (
            <div
              key={pizza.id}
              className="bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#333] hover:shadow-xl transition-all duration-300 h-full"
            >
              <div className="h-50 overflow-hidden">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-bold text-white">{pizza.name}</h3>
                  {/* <span className="bg-[#FF4500] text-white px-2 py-1 text-sm font-bold rounded-full">
                    ${pizza.price.toFixed(2)}
                  </span> */}
                </div>
                {/* <div className="flex items-center mb-3">
                  <div className="flex text-[#FFA500]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${i < Math.floor(pizza.rating) ? 'opacity-100' : 'opacity-30'} text-xs`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm ml-2">({pizza.reviewCount} reviews)</span>
                </div> */}
                <p className="text-gray-400 mb-4 text-sm">{pizza.description}</p>
                <button className="w-full py-2 bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300">
                  Order now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/menu"
            className="inline-block px-8 py-3 border-2 border-[#FF4500] text-[#FF4500] rounded-lg font-medium hover:bg-[#FF4500] hover:text-white transition-all duration-300"
          >
            View Full Menu
          </a>
        </div>
      </Container>
    </section>
  );
};

export default BestSellerSection;
