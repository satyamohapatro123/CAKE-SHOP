import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag } from 'lucide-react';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven't added any cakes to your cart yet.</p>
        <Link
          to="/shop"
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md transition-colors font-medium inline-block"
        >
          Browse Our Cakes
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cartItems.map((item) => {
                  // Calculate item price with customizations
                  let itemBasePrice = item.product.price;
                  if (item.customizations) {
                    if (item.customizations.ingredients.eggless) itemBasePrice += 2;
                    if (item.customizations.ingredients.diabeticFriendly) itemBasePrice += 3;
                    if (item.customizations.personalizedText) itemBasePrice += 5;
                    if (item.customizations.uploadedImage) itemBasePrice += 10;
                  }
                  
                  const itemTotal = itemBasePrice * item.quantity;

                  return (
                    <tr key={item.product.id}>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="h-16 w-16 object-cover rounded"
                          />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {item.product.name}
                            </div>
                            {item.customizations && (
                              <div className="text-xs text-gray-500 mt-1">
                                {item.customizations.ingredients.eggless && (
                                  <span className="block">• Eggless</span>
                                )}
                                {item.customizations.ingredients.diabeticFriendly && (
                                  <span className="block">• Diabetic-Friendly</span>
                                )}
                                {item.customizations.personalizedText && (
                                  <span className="block">
                                    • Message: "{item.customizations.personalizedText}"
                                  </span>
                                )}
                                {item.customizations.designStyle && (
                                  <span className="block">
                                    • Style: {item.customizations.designStyle}
                                  </span>
                                )}
                                {item.customizations.uploadedImage && (
                                  <span className="block">• Custom Image</span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        ₹{itemBasePrice.toFixed(2)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <button
                            onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                            className="bg-gray-200 text-gray-600 px-2 py-1 rounded-l-md"
                          >
                            -
                          </button>
                          <span className="w-10 text-center border-t border-b border-gray-300 py-1">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="bg-gray-200 text-gray-600 px-2 py-1 rounded-r-md"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        ₹{itemTotal.toFixed(2)}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-800 font-medium">₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-800 font-medium">₹0.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tax</span>
                <span className="text-gray-800 font-medium">₹0.00</span>
              </div>
              <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between">
                <span className="text-lg font-bold text-gray-800">Total</span>
                <span className="text-lg font-bold text-pink-600">₹{totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-6">
              <Link
                to="/checkout"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-md transition-colors font-medium text-center block"
              >
                Proceed to Checkout
              </Link>
              <Link
                to="/shop"
                className="w-full border border-pink-600 text-pink-600 hover:bg-pink-50 py-3 rounded-md transition-colors font-medium text-center block mt-4"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;