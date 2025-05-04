import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Beaker className="h-6 w-6 text-pink-400" />
              <span className="text-xl font-bold text-pink-400">Cakechemist</span>
            </div>
            <p className="text-gray-400">
              Crafting delicious memories with our artisanal cakes and pastries since 2023.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-pink-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Bakery Street</li>
              <li>Cake City, CC 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@cakechemist.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cakechemist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;