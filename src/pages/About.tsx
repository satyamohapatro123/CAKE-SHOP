import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Heart, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            About <span className="text-pink-600">Cakechemist</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We blend the art of baking with the science of flavor to create customized cakes that
            make every celebration unforgettable.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/6210933/pexels-photo-6210933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Cakechemist bakery"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Cakechemist was born from a passion for creating not just delicious cakes, but
                personalized experiences. Our founder, Emma, started baking in her home kitchen,
                experimenting with flavors and designs to create custom cakes for friends and family.
              </p>
              <p className="text-gray-600 mb-4">
                What began as a hobby quickly grew into a beloved local business as word spread about
                Emma's ability to transform cake ideas into edible art. In 2023, Cakechemist opened
                its doors, bringing together a team of talented bakers and decorators who share
                Emma's vision.
              </p>
              <p className="text-gray-600">
                Today, we continue to push the boundaries of cake design and flavor, offering
                innovative customization options that allow our customers to create truly unique
                cakes for their special occasions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Passion</h3>
              <p className="text-gray-600">
                We pour our hearts into every cake we create, treating each one as a unique work of
                art that deserves our full attention and creativity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Beaker className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Innovation</h3>
              <p className="text-gray-600">
                We constantly experiment with new flavors, techniques, and designs to push the
                boundaries of what's possible in cake creation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Quality</h3>
              <p className="text-gray-600">
                We use only the finest ingredients and never compromise on taste or presentation,
                ensuring every cake is as delicious as it is beautiful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto">
                <img
                  src="https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Emma Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Emma Johnson</h3>
              <p className="text-pink-600">Founder & Head Baker</p>
            </div>
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto">
                <img
                  src="https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Michael Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Michael Chen</h3>
              <p className="text-pink-600">Executive Pastry Chef</p>
            </div>
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto">
                <img
                  src="https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Sophia Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Sophia Rodriguez</h3>
              <p className="text-pink-600">Cake Designer</p>
            </div>
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto">
                <img
                  src="https://images.pexels.com/photos/8107191/pexels-photo-8107191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="David Thompson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">David Thompson</h3>
              <p className="text-pink-600">Customer Experience</p>
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

export default About;