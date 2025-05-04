import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, ProductCustomization } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number, customizations?: ProductCustomization) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  updateCustomizations: (productId: string, customizations: ProductCustomization) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product, quantity: number, customizations?: ProductCustomization) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => 
          item.product.id === product.id && 
          JSON.stringify(item.customizations) === JSON.stringify(customizations)
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        return [...prevItems, { product, quantity, customizations }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const updateCustomizations = (productId: string, customizations: ProductCustomization) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, customizations } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cartItems.reduce((total, item) => {
    let itemPrice = item.product.price * item.quantity;
    
    if (item.customizations) {
      if (item.customizations.ingredients.eggless) itemPrice += 150 * item.quantity;
      if (item.customizations.ingredients.diabeticFriendly) itemPrice += 200 * item.quantity;
      if (item.customizations.personalizedText) itemPrice += 300;
      if (item.customizations.uploadedImage) itemPrice += 500;
    }
    
    return total + itemPrice;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateCustomizations,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};