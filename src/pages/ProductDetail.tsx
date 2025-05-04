import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductCustomization } from '../types';
import { ShoppingCart, Heart, Share2, Upload, X } from 'lucide-react';
import { toast } from 'react-toastify';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = id ? getProductById(id) : undefined;

  const [quantity, setQuantity] = useState(1);
  const [showCustomizationModal, setShowCustomizationModal] = useState(false);
  const [customizations, setCustomizations] = useState<ProductCustomization>({
    ingredients: {
      eggless: false,
      diabeticFriendly: false,
    },
    personalizedText: '',
    designStyle: 'modern',
    customDesignIdea: '',
    uploadedImage: '',
  });
  const [previewPrice, setPreviewPrice] = useState(product?.price || 0);

  useEffect(() => {
    if (!product) {
      navigate('/shop');
    }
  }, [product, navigate]);

  useEffect(() => {
    if (!product) return;
    
    let newPrice = product.price;
    
    if (customizations.ingredients.eggless) newPrice += 150;
    if (customizations.ingredients.diabeticFriendly) newPrice += 200;
    if (customizations.personalizedText) newPrice += 300;
    if (customizations.uploadedImage) newPrice += 500;
    
    setPreviewPrice(newPrice);
  }, [customizations, product]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleCustomizationChange = (
    field: keyof ProductCustomization,
    value: string | boolean | { eggless: boolean; diabeticFriendly: boolean }
  ) => {
    if (field === 'ingredients' && typeof value === 'boolean') {
      // Handle nested ingredient fields
      const ingredientField = Object.keys(customizations.ingredients).find(
        (key) => customizations.ingredients[key as keyof typeof customizations.ingredients] !== value
      );
      
      if (ingredientField) {
        setCustomizations({
          ...customizations,
          ingredients: {
            ...customizations.ingredients,
            [ingredientField]: value,
          },
        });
      }
    } else {
      setCustomizations({
        ...customizations,
        [field]: value,
      });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomizations({
          ...customizations,
          uploadedImage: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setCustomizations({
      ...customizations,
      uploadedImage: '',
    });
  };

  const handleAddToCart = () => {
    if (product) {
      // Only add customizations if the modal was shown
      const customizationsToAdd = showCustomizationModal ? customizations : undefined;
      addToCart(product, quantity, customizationsToAdd);
      toast.success('Added to cart!');
    }
  };

  if (!product) {
    return <div className="container mx-auto px-4 py-12">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Product Image */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-500 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 ml-2">(24 reviews)</span>
          </div>
          <p className="text-2xl font-bold text-pink-600 mb-4">₹{previewPrice.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quantity</h3>
            <div className="flex items-center">
              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="bg-gray-200 text-gray-600 px-3 py-1 rounded-l-md"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 text-center border-t border-b border-gray-300 py-1"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-gray-200 text-gray-600 px-3 py-1 rounded-r-md"
              >
                +
              </button>
            </div>
          </div>

          {product.customizable && (
            <div className="mb-6">
              <button
                onClick={() => setShowCustomizationModal(true)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md transition-colors mb-4"
              >
                Customize This Cake
              </button>
            </div>
          )}

          <div className="flex space-x-4 mb-8">
            <button
              onClick={handleAddToCart}
              className="flex-grow bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-md transition-colors flex items-center justify-center"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-md transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-md transition-colors">
              <Share2 className="h-5 w-5" />
            </button>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">Category:</span>
              <span className="capitalize">{product.category}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Customization Modal */}
      {showCustomizationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Customize Your Cake</h2>
                <button
                  onClick={() => setShowCustomizationModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Ingredient Options</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="eggless"
                        checked={customizations.ingredients.eggless}
                        onChange={(e) =>
                          handleCustomizationChange('ingredients', {
                            ...customizations.ingredients,
                            eggless: e.target.checked,
                          })
                        }
                        className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                      />
                      <label htmlFor="eggless" className="ml-2 text-gray-700">
                        Eggless Option (+₹150.00)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="diabeticFriendly"
                        checked={customizations.ingredients.diabeticFriendly}
                        onChange={(e) =>
                          handleCustomizationChange('ingredients', {
                            ...customizations.ingredients,
                            diabeticFriendly: e.target.checked,
                          })
                        }
                        className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                      />
                      <label htmlFor="diabeticFriendly" className="ml-2 text-gray-700">
                        Diabetic-Friendly (Sugar Substitute) (+₹200.00)
                      </label>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
                    Personalized Text & Design
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="personalizedText" className="block text-gray-700 mb-2">
                        Message on Cake (+₹300.00)
                      </label>
                      <input
                        type="text"
                        id="personalizedText"
                        value={customizations.personalizedText}
                        onChange={(e) =>
                          handleCustomizationChange('personalizedText', e.target.value)
                        }
                        placeholder="Happy Birthday, John!"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="designStyle" className="block text-gray-700 mb-2">
                        Design Style
                      </label>
                      <select
                        id="designStyle"
                        value={customizations.designStyle}
                        onChange={(e) => handleCustomizationChange('designStyle', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                      >
                        <option value="modern">Modern</option>
                        <option value="vintage">Vintage</option>
                        <option value="minimalist">Minimalist</option>
                        <option value="floral">Floral</option>
                        <option value="rustic">Rustic</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="customDesignIdea" className="block text-gray-700 mb-2">
                        Custom Design Idea (Optional)
                      </label>
                      <textarea
                        id="customDesignIdea"
                        value={customizations.customDesignIdea}
                        onChange={(e) =>
                          handleCustomizationChange('customDesignIdea', e.target.value)
                        }
                        placeholder="Describe your design idea here..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 h-24"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Image Upload (+₹500.00)
                  </h3>
                  {!customizations.uploadedImage ? (
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">
                        Upload an image to be printed on your cake
                      </p>
                      <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <label
                        htmlFor="imageUpload"
                        className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition-colors inline-block cursor-pointer"
                      >
                        Select Image
                      </label>
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={customizations.uploadedImage}
                        alt="Uploaded preview"
                        className="w-full h-auto rounded-md"
                      />
                      <button
                        onClick={handleRemoveImage}
                        className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}

                  <div className="mt-8 bg-gray-50 p-4 rounded-md">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Preview</h3>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Base Cake:</span> {product.name}
                      </p>
                      {customizations.ingredients.eggless && (
                        <p className="text-gray-700 mb-2">
                          <span className="font-semibold">Eggless Option:</span> Yes (+₹150.00)
                        </p>
                      )}
                      {customizations.ingredients.diabeticFriendly && (
                        <p className="text-gray-700 mb-2">
                          <span className="font-semibold">Diabetic-Friendly:</span> Yes (+₹200.00)
                        </p>
                      )}
                      {customizations.personalizedText && (
                        <p className="text-gray-700 mb-2">
                          <span className="font-semibold">Message:</span>{' '}
                          {customizations.personalizedText} (+₹300.00)
                        </p>
                      )}
                      <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Design Style:</span>{' '}
                        {customizations.designStyle.charAt(0).toUpperCase() +
                          customizations.designStyle.slice(1)}
                      </p>
                      {customizations.uploadedImage && (
                        <p className="text-gray-700 mb-2">
                          <span className="font-semibold">Custom Image:</span> Yes (+₹500.00)
                        </p>
                      )}
                      <p className="text-xl font-bold text-pink-600 mt-4">
                        Total: ₹{previewPrice.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end space-x-4">
                <button
                  onClick={() => setShowCustomizationModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowCustomizationModal(false);
                    handleAddToCart();
                  }}
                  className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-md transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;