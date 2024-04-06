import { Product, ProductCart } from '../types/types';
import { specialFilters } from './constants';

export const capitalizeFirstLetter = (word: string): string => {
  return word[0].toLocaleUpperCase() + word.slice(1);
};

export const filteredProducts = (
  products: Product[],
  filters: { maxPrice: number; category: string }
): Product[] => {
  return products.filter((product) => {
    return (
      (filters.category === product.category ||
        filters.category === specialFilters.ALL) &&
      filters.maxPrice >= product.price
    );
  });
};

export const removeItemFromCart = (cart: ProductCart[], id: Product['id']) => {
  return cart.filter((product) => product.id !== id);
};

export const saveCartInLocalStorage = (cart: ProductCart[]) => {
  window.localStorage.setItem('cart', JSON.stringify(cart));
};

export const getCartFromLocalStorage = (): ProductCart[] => {
  const cart = window.localStorage.getItem('cart');

  return cart ? JSON.parse(cart) : [];
};
