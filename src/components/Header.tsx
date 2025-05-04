import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Beaker, ShoppingCart, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemCount = 0; // This will be replaced with actual cart state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-pink-50 to-purple-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Beaker className="h-8 w-8 text-pink-600" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
              Cakechemist
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-pink-600 transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-pink-600 transition-colors">
              Shop
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-pink-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-pink-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-pink-600 transition-colors" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-pink-600 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4 pb-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-pink-600 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block text-gray-700 hover:text-pink-600 transition-colors"
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-pink-600 transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-pink-600 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;