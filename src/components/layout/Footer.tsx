import { Link } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa';
import { NAV_LINKS, CONTACT_INFO } from '../../utils/constants';
import Container from '../ui/Container';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand Information */}
          <div>
            <Link to="/">
              <Logo />
            </Link>
            <p className="text-gray-400 mt-4 mb-6">
              Crafting authentic pizzas with the freshest ingredients and time-honored recipes since 1995.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] p-2 rounded-full text-gray-400 hover:text-[#FF4500] transition-colors"
              >
                <FaFacebook size={18} />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] p-2 rounded-full text-gray-400 hover:text-[#FF4500] transition-colors"
              >
                <FaTwitter size={18} />
              </a> */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] p-2 rounded-full text-gray-400 hover:text-[#FF4500] transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              {/* <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] p-2 rounded-full text-gray-400 hover:text-[#FF4500] transition-colors"
              >
                <FaYoutube size={18} />
              </a> */}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#FF4500] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-[#FF4500] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-gray-400 hover:text-[#FF4500] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <FaMapMarkerAlt className="text-[#FF4500] mt-1 mr-3" />
                <span className="text-gray-400">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex">
                <FaPhone className="text-[#FF4500] mt-1 mr-3" />
                <span className="text-gray-400">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex">
                <FaEnvelope className="text-[#FF4500] mt-1 mr-3" />
                <span className="text-gray-400">{CONTACT_INFO.email}</span>
              </li>
              <li className="flex">
                <FaClock className="text-[#FF4500] mt-1 mr-3" />
                <span className="text-gray-400">
                  Mon-Fri: 11:00 AM - Midnight
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h3 className="text-white text-lg font-bold mb-6">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Get updates on special promotions and seasonal menu items.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-[#1A1A1A] border border-[#333] py-2 px-4 rounded-lg text-white focus:outline-none focus:border-[#FF4500]"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white py-2 px-4 rounded-lg font-medium hover:brightness-110 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        <div className="border-t border-[#333] mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Pizza Store. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
