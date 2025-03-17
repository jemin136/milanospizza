import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES } from '../../utils/constants';
import Container from '../ui/Container';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#121212] h-screen flex items-center overflow-hidden">
      {/* Background Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <Container className="relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 opacity-90">
            {HERO_SLIDES[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 opacity-90">
            {HERO_SLIDES[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={HERO_SLIDES[currentSlide].ctaLink}
              className="px-8 py-3 bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white rounded-lg font-medium hover:shadow-lg hover:brightness-110 transition-all duration-300"
            >
              {HERO_SLIDES[currentSlide].ctaText}
            </Link>
            <Link
              to="/menu"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-[#121212] transition-all duration-300"
            >
              View Menu
            </Link>
          </div>
        </div>
      </Container>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#FF4500] w-8' : 'bg-white opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
