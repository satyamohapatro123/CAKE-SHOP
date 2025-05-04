import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'react-toastify';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our cakes or need help with a custom order? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Location</h3>
              <p className="text-gray-600">
                123 Bakery Street
                <br />
                Cake City, CC 12345
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Phone</h3>
              <p className="text-gray-600">(123) 456-7890</p>
              <p className="text-gray-600">Toll-free: (800) 123-4567</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Email</h3>
              <p className="text-gray-600">info@cakechemist.com</p>
              <p className="text-gray-600">orders@cakechemist.com</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Hours</h3>
              <p className="text-gray-600">Mon-Fri: 9am - 6pm</p>
              <p className="text-gray-600">Sat: 10am - 4pm</p>
              <p className="text-gray-600">Sun: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="order">Order Inquiry</option>
                      <option value="custom">Custom Cake Request</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Find Us</h2>
              <div className="bg-white p-4 rounded-lg shadow-md h-[500px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="mb-4">Map would be displayed here in a real application.</p>
                  <p>123 Bakery Street, Cake City, CC 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                How far in advance should I order a custom cake?
              </h3>
              <p className="text-gray-600">
                We recommend placing your order at least 7-10 days in advance for standard custom
                cakes. For more elaborate designs or wedding cakes, we suggest 3-4 weeks notice.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Do you deliver cakes?
              </h3>
              <p className="text-gray-600">
                Yes, we offer delivery within a 25-mile radius of our bakery for a fee based on
                distance. You can also pick up your order at our store during business hours.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Can you accommodate dietary restrictions?
              </h3>
              <p className="text-gray-600">
                Absolutely! We offer eggless and diabetic-friendly options. Please note that while we
                take precautions, our kitchen does handle common allergens like nuts, dairy, and
                gluten.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                How do I care for my cake after purchase?
              </h3>
              <p className="text-gray-600">
                Store your cake in a cool, dry place away from direct sunlight. Refrigerate cakes
                with cream cheese, whipped cream, or custard fillings. For best taste, bring
                refrigerated cakes to room temperature 1-2 hours before serving.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;