import Layout from '../components/layout/Layout';
import { CATERING_PACKAGES } from '../utils/constants';
import { FaDotCircle, FaCheck } from 'react-icons/fa';

const CateringPage = () => {
  return (
    <Layout>
      <div className="bg-[#121212] py-32">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Catering Services</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Perfect for office parties, family gatherings, corporate events, and special celebrations.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF4500] to-[#FFA500] mx-auto mt-6"></div>
          </div>

          {/* Introduction */}
          <div className="bg-[#1A1A1A] rounded-lg p-8 border border-[#333] mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Let Us Cater Your Next Event</h2>
                <p className="text-gray-300 mb-4">
                  Whether you're hosting a corporate event, birthday party, family reunion, or any special occasion, our catering team is ready to make it delicious and memorable.
                </p>
                <p className="text-gray-300 mb-4">
                  We offer a variety of catering packages designed to fit events of all sizes. Each package includes our signature pizzas, sides, and beverages, all prepared fresh for your event.
                </p>
                <p className="text-gray-300">
                  All packages can be customized to accommodate dietary restrictions and preferences. Contact us for more information!
                </p>
                <a
                  href="/milanospizza/contact"
                  className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white rounded-lg font-medium hover:shadow-lg hover:brightness-110 transition-all duration-300"
                >
                  Get a Quote
                </a>
              </div>
              <div className="h-[300px] rounded-lg overflow-hidden">
                <img
                  src="./images/pizza1.jpg"
                  alt="Catered Event"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Catering Packages */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-10">Our Catering Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CATERING_PACKAGES.map((pkg) => (
                <div key={pkg.id} className="bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#333] transition-transform duration-300 hover:transform hover:scale-105 flex flex-col">
                  <div className="p-8 flex-grow">
                    <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${pkg.id === 'custom' ? 'bg-[#333] text-white' : 'bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white'
                      }`}>
                      {pkg.name}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.description}</h3>
                    <div className="text-3xl font-bold text-[#FF4500] mb-6">
                      {typeof pkg.price === 'number' ? `$${pkg.price.toFixed(2)}` : pkg.price}
                      <span className="text-lg font-normal text-gray-300"> {pkg.priceDesc}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.includes.map((item: any, index) => (
                        <>
                          {item?.cource ?
                            <>
                              <li key={index} className="flex items-start">
                                <span className="bg-[#252525] p-1 rounded-full mr-3 mt-1">
                                  <FaCheck className="text-[#FF4500] text-xs" />
                                </span>
                                <span className="text-gray-300">{item.cource}</span>
                              </li>
                              <li>
                                <ul className="ml-6 space-y-2">
                                  {item.items.map((subItem: any, subIndex: number) => (
                                    <li key={subIndex} className="flex items-start">
                                      <span className="p-1 rounded-full mr-3 mt-1">
                                        <FaDotCircle className="text-[#FF4500] text-xs" />
                                      </span>
                                      <span className="text-gray-300">{subItem}</span>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            </>
                            :
                            <li key={index} className="flex items-start">
                              <span className="bg-[#252525] p-1 rounded-full mr-3 mt-1">
                                <FaCheck className="text-[#FF4500] text-xs" />
                              </span>
                              {item?.cource ? <>
                                <span className="text-gray-300">{item.cource}</span>
                              </>
                                :
                                <span className="text-gray-300">{item}</span>}
                            </li>}
                        </>

                      ))}
                    </ul>
                  </div>
                  <div className="px-8 pb-8">
                    <a
                      href="/milanospizza/contact"
                      className={`block w-full py-3 text-center rounded-lg font-medium transition-all duration-300 ${pkg.id === 'custom'
                        ? 'bg-[#252525] text-white border border-[#FF4500] hover:bg-[#FF4500] hover:text-white'
                        : 'bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white hover:brightness-110'
                        }`}
                    >
                      {pkg.id === 'custom' ? 'Contact Us' : 'Order Now'}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          {/* <div className="mt-20">
            <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1A1A1A] rounded-lg p-6 border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">How much advance notice do you need?</h3>
                <p className="text-gray-300">
                  We recommend booking at least 72 hours in advance for standard packages. For large events or custom orders, we appreciate a week's notice to ensure we can accommodate your needs perfectly.
                </p>
              </div>
              <div className="bg-[#1A1A1A] rounded-lg p-6 border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">Do you offer delivery for catering orders?</h3>
                <p className="text-gray-300">
                  Yes! We offer delivery within a 15-mile radius of our location. A delivery fee may apply depending on distance and order size. Our team will set everything up for you.
                </p>
              </div>
              <div className="bg-[#1A1A1A] rounded-lg p-6 border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">Can you accommodate dietary restrictions?</h3>
                <p className="text-gray-300">
                  Absolutely! We offer gluten-free, vegetarian, and vegan options. Please let us know about any dietary restrictions or allergies when placing your order.
                </p>
              </div>
              <div className="bg-[#1A1A1A] rounded-lg p-6 border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">Do you provide serving utensils and plates?</h3>
                <p className="text-gray-300">
                  Yes, we provide quality disposable plates, napkins, and utensils at no additional charge for all catering orders. If you need additional serving equipment, just let us know.
                </p>
              </div>
            </div>
          </div> */}

          {/* Call to Action */}
          <div className="mt-16 bg-[#1A1A1A] rounded-lg p-12 border border-[#333] text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Book Your Catering Order?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our catering team today to discuss your event needs and get a personalized quote. We're excited to help make your event delicious!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white rounded-lg font-medium hover:shadow-lg hover:brightness-110 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="/menu"
                className="px-8 py-3 bg-[#252525] text-white rounded-lg font-medium border border-[#333] hover:bg-[#333] transition-all duration-300"
              >
                View Our Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CateringPage;
