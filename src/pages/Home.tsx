import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Cake, Gift, Star } from 'lucide-react';
import { products } from '../data/products';

const Home: React.FC = () => {
  // Get featured products (first 4)
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Artisanal Cakes <span className="text-pink-600">Crafted</span> with Love
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover the perfect blend of science and art in every cake we create. Customize your
              cake for any occasion and make your celebrations unforgettable.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/shop"
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md transition-colors font-medium"
              >
                Shop Now
              </Link>
              <Link
                to="/about"
                className="border border-pink-600 text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-md transition-colors font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Cakechemist featured cake"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose <span className="text-pink-600">Cakechemist</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-pink-50 p-8 rounded-lg text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cake className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Premium Ingredients</h3>
              <p className="text-gray-600">
                We use only the finest ingredients to ensure every cake is a masterpiece of flavor
                and texture.
              </p>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Beaker className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Custom Creations</h3>
              <p className="text-gray-600">
                Personalize your cake with our innovative customization options to make it uniquely
                yours.
              </p>
            </div>
            <div className="bg-pink-50 p-8 rounded-lg text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Perfect for Occasions</h3>
              <p className="text-gray-600">
                From birthdays to weddings, our cakes are designed to make every celebration special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Featured Cakes</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our most popular creations, each one a perfect blend of artistry and flavor.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-pink-600 font-medium mt-2">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/shop"
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md transition-colors font-medium inline-block"
            >
              View All Cakes
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
              </div>
              <p className="text-gray-600 mb-4">
                "The customization options were amazing! I was able to create the perfect cake for my
                daughter's birthday with her favorite colors and a photo of her pet."
              </p>
              <p className="font-semibold text-gray-800">- Sarah Johnson</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
              </div>
              <p className="text-gray-600 mb-4">
                "As someone with diabetes, I was thrilled to find a bakery that offers sugar-free
                options without compromising on taste. The cake was delicious!"
              </p>
              <p className="font-semibold text-gray-800">- Michael Thompson</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
              </div>
              <p className="text-gray-600 mb-4">
                "Our wedding cake was absolutely stunning! The design was exactly what we wanted, and
                the taste was even better. Highly recommend Cakechemist!"
              </p>
              <p className="font-semibold text-gray-800">- Emily & David</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Perfect Cake?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Start customizing your dream cake today and make your next celebration unforgettable.
          </p>
          <Link
            to="/shop"
            className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-md transition-colors font-medium inline-block"
          >
            Order Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;