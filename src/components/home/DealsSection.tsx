import { DEAL_ITEMS } from '../../utils/constants';
import Container from '../ui/Container';

const DealsSection = () => {
  return (
    <section className="py-16 bg-[#1A1A1A]">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Special Deals</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Check out our latest offers and save on your favorite pizzas
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF4500] to-[#FFA500] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEAL_ITEMS.map((deal) => (
            <div
              key={deal.id}
              className="bg-[#121212] rounded-lg overflow-hidden border border-[#333] hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 bg-[#FF4500] text-white px-3 py-1 rounded-bl-lg font-semibold">
                  Save {deal.savings}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">{deal.title}</h3>
                <p className="text-gray-400 mb-4">{deal.description}</p>
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 line-through">${deal.originalPrice.toFixed(2)}</span>
                    <span className="text-xl font-bold text-[#FF4500]">${deal.discountedPrice.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  {/* <div className="bg-[#1E1E1E] rounded px-2 py-1">
                    <span className="text-sm font-mono text-gray-300">Code: {deal.code}</span>
                  </div> */}
                  <button className="py-2 px-4 bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/milanospizza/menu"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white rounded-lg font-medium hover:brightness-110 transition-all duration-300"
          >
            View All Deals
          </a>
        </div>
      </Container>
    </section>
  );
};

export default DealsSection;
