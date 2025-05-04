export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  customizable: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  customizations?: ProductCustomization;
}

export interface ProductCustomization {
  ingredients: {
    eggless: boolean;
    diabeticFriendly: boolean;
  };
  personalizedText?: string;
  designStyle?: string;
  customDesignIdea?: string;
  uploadedImage?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  shippingAddress: Address;
  paymentMethod: string;
  createdAt: string;
}

export interface Address {
  fullName: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
}