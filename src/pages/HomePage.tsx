import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import BestSellerSection from '../components/home/BestSellerSection';
import DealsSection from '../components/home/DealsSection';
import Layout from '../components/layout/Layout';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <div className="bg-[#1A1A1A] rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">View Our Menu</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Order Now for Pickup or Delivery
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="px-8 py-3 bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white rounded-lg font-medium hover:shadow-lg hover:brightness-110 transition-all duration-300"
          >
            Milanos Pizza Manukau
          </a>
          <a
            href="/menu"
            className="px-8 py-3 bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white rounded-lg font-medium hover:shadow-lg hover:brightness-110 transition-all duration-300"
          >
            Milanos Curry Place
          </a>
        </div>
      </div>
      <AboutSection />
      <BestSellerSection />
      <DealsSection />
    </Layout>
  );
};

export default HomePage;
