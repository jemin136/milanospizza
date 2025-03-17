import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NAV_LINKS } from '../../utils/constants';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A] shadow-md py-3'
          : 'bg-transparent pb-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="z-50">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white font-medium hover:text-[#FF4500] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* <div className="flex items-center space-x-4">
              <Link to="/contact">
                <Button variant="primary" size="md">
                  Order Now
                </Button>
              </Link>
            </div> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#121212] flex flex-col justify-center items-center md:hidden transition-all duration-300 ${
          isMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 mb-8">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="text-xl text-white font-medium hover:text-[#FF4500] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col items-center space-y-4">
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            <Button variant="primary" size="lg">
              Milanos Pizza Manukau
            </Button>
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            <Button variant="primary" size="lg">
              Milanos Curry Place
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
