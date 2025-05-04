import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Chocolate Cake',
    description: 'Rich, moist chocolate cake with smooth chocolate ganache and chocolate shavings.',
    price: 2999,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'chocolate',
    customizable: true,
  },
  {
    id: '2',
    name: 'Vanilla Bean Delight',
    description: 'Light and fluffy vanilla cake with vanilla bean frosting and edible flowers.',
    price: 2799,
    image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'vanilla',
    customizable: true,
  },
  {
    id: '3',
    name: 'Red Velvet Dream',
    description: 'Velvety smooth red cake with cream cheese frosting and white chocolate decorations.',
    price: 3299,
    image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'specialty',
    customizable: true,
  },
  {
    id: '4',
    name: 'Strawberry Shortcake',
    description: 'Light sponge cake layered with fresh strawberries and whipped cream.',
    price: 2999,
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'fruit',
    customizable: true,
  },
  {
    id: '5',
    name: 'Lemon Blueberry Cake',
    description: 'Tangy lemon cake with fresh blueberries and lemon cream cheese frosting.',
    price: 3199,
    image: 'https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'fruit',
    customizable: true,
  },
  {
    id: '6',
    name: 'Tiramisu Cake',
    description: 'Coffee-soaked layers with mascarpone cream and cocoa dusting.',
    price: 3499,
    image: 'https://images.pexels.com/photos/6133305/pexels-photo-6133305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'specialty',
    customizable: true,
  },
  {
    id: '7',
    name: 'Carrot Cake',
    description: 'Spiced carrot cake with cream cheese frosting and candied walnuts.',
    price: 2899,
    image: 'https://images.pexels.com/photos/14705134/pexels-photo-14705134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'specialty',
    customizable: true,
  },
  {
    id: '8',
    name: 'Black Forest Gateau',
    description: 'Chocolate sponge with cherries, whipped cream, and chocolate shavings.',
    price: 3599,
    image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'chocolate',
    customizable: true,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};