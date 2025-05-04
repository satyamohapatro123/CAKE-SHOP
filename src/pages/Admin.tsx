import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Package, Users, Settings, LogOut, Eye } from 'lucide-react';

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [activeTab, setActiveTab] = useState('orders');

  // Mock orders data
  const orders = [
    {
      id: 'ORD-001',
      customer: 'John Smith',
      date: '2023-05-15',
      total: 78.99,
      status: 'processing',
      items: [
        {
          name: 'Classic Chocolate Cake',
          customizations: 'Eggless, Custom Text: "Happy Birthday John!"',
          price: 39.99,
          quantity: 1,
        },
        {
          name: 'Vanilla Bean Delight',
          customizations: 'Diabetic-Friendly, Custom Image',
          price: 39.00,
          quantity: 1,
        },
      ],
    },
    {
      id: 'ORD-002',
      customer: 'Sarah Johnson',
      date: '2023-05-14',
      total: 35.99,
      status: 'completed',
      items: [
        {
          name: 'Red Velvet Dream',
          customizations: 'Standard Recipe, Custom Text: "Congratulations!"',
          price: 35.99,
          quantity: 1,
        },
      ],
    },
    {
      id: 'ORD-003',
      customer: 'Michael Brown',
      date: '2023-05-13',
      total: 112.97,
      status: 'pending',
      items: [
        {
          name: 'Strawberry Shortcake',
          customizations: 'Eggless, No custom text',
          price: 37.99,
          quantity: 3,
        },
      ],
    },
  ];

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would validate credentials against a database
    if (loginData.email === 'admin@cakechemist.com' && loginData.password === 'admin123') {
      setIsLoggedIn(true);
      toast.success('Logged in successfully!');
    } else {
      toast.error('Invalid credentials. Try admin@cakechemist.com / admin123');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.info('Logged out successfully!');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Admin Login
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Please sign in to access the admin dashboard
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={loginData.email}
                  onChange={handleLoginChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Sign in
              </button>
            </div>
            <div className="text-sm text-center text-gray-500">
              <p>Demo credentials:</p>
              <p>Email: admin@cakechemist.com</p>
              <p>Password: admin123</p>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 min-h-screen p-4">
          <div className="flex items-center justify-center mb-8">
            <h1 className="text-white text-xl font-bold">Cakechemist Admin</h1>
          </div>
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center px-4 py-2 rounded-md ${
                activeTab === 'orders'
                  ? 'bg-pink-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Package className="h-5 w-5 mr-3" />
              Orders
            </button>
            <button
              onClick={() => setActiveTab('customers')}
              className={`w-full flex items-center px-4 py-2 rounded-md ${
                activeTab === 'customers'
                  ? 'bg-pink-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Users className="h-5 w-5 mr-3" />
              Customers
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center px-4 py-2 rounded-md ${
                activeTab === 'settings'
                  ? 'bg-pink-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Settings className="h-5 w-5 mr-3" />
              Settings
            </button>
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'orders' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Order Management</h2>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.customer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ${order.total.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              order.status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : order.status === 'processing'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-pink-600 hover:text-pink-900 mr-3">
                            <Eye className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Order Details Section */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Order Details: {orders[0].id}</h3>
                <div className="bg-white shadow-md rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Customer Information</h4>
                      <p className="text-gray-600">
                        <span className="font-medium">Name:</span> {orders[0].customer}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Email:</span> john.smith@example.com
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Phone:</span> (123) 456-7890
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Shipping Address</h4>
                      <p className="text-gray-600">123 Main Street</p>
                      <p className="text-gray-600">Apt 4B</p>
                      <p className="text-gray-600">New York, NY 10001</p>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold mb-2">Order Items</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Product
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Customizations
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Quantity
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {orders[0].items.map((item, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {item.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              {item.customizations}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ${item.price.toFixed(2)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {item.quantity}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ${(item.price * item.quantity).toFixed(2)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 flex justify-between items-center">
                    <div>
                      <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                        Update Status
                      </label>
                      <select
                        id="status"
                        name="status"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
                        defaultValue="processing"
                      >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">
                        <span className="font-medium">Subtotal:</span> ${orders[0].total.toFixed(2)}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Shipping:</span> $0.00
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Tax:</span> $0.00
                      </p>
                      <p className="text-xl font-bold text-pink-600 mt-2">
                        <span className="font-medium">Total:</span> ${orders[0].total.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end space-x-4">
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                      Print Order
                    </button>
                    <button className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'customers' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Customer Management</h2>
              <p className="text-gray-600">
                This section would display customer information and order history.
              </p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Settings</h2>
              <p className="text-gray-600">
                This section would allow you to configure store settings, user accounts, and more.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;