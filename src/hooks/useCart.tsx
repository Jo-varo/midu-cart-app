import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function useCart() {
  const cartContext = useContext(CartContext);

  if (cartContext === null || cartContext === undefined) {
    throw new Error('Error at getting cart');
  }

  return cartContext;
}
