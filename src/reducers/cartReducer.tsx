import { removeItemFromCart } from '../helpers/functions';
import { Product, ProductCart } from '../types/types';

type CartAction =
  | { type: 'add'; product: Product }
  | { type: 'modify'; id: Product['id']; quantity: number }
  | { type: 'remove'; id: Product['id'] }
  | { type: 'removeAll' };

export function cartReducer(cart: ProductCart[], action: CartAction) {
  switch (action.type) {
    case 'add': {
      return [...cart, { ...action.product, quantity: 1 }];
    }
    case 'modify': {
      if (action.quantity <= 0) return removeItemFromCart(cart, action.id);

      return cart.map((product) =>
        product.id === action.id
          ? { ...product, quantity: action.quantity }
          : product
      );
    }
    case 'remove': {
      return removeItemFromCart(cart, action.id);
    }
    case 'removeAll': {
      return [];
    }
    default: {
      throw new Error('Unknown action');
    }
  }
}
