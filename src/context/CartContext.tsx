import { createContext, useEffect, useReducer } from 'react';
import { Product, ProductCart } from '../types/types';
import {
  getCartFromLocalStorage,
  saveCartInLocalStorage,
} from '../helpers/functions';
import { cartReducer } from '../reducers/cartReducer';

interface ICartContext {
  cart: ProductCart[];
  addToCart: (product: Product) => void;
  modifyProductQuantity: (id: Product['id'], quantity: number) => void;
  removeFromCart: (id: Product['id']) => void;
  removeAllItems: () => void;
}

const initialCart = getCartFromLocalStorage();

export const CartContext = createContext<ICartContext | null>(null);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  useEffect(() => {
    saveCartInLocalStorage(cart);
  }, [cart]);

  const addToCart = (product: Product) => dispatch({ type: 'add', product });

  const modifyProductQuantity = (id: Product['id'], quantity: number) =>
    dispatch({ type: 'modify', id, quantity });

  const removeFromCart = (id: Product['id']) =>
    dispatch({ type: 'remove', id });

  const removeAllItems = () => dispatch({ type: 'removeAll' });

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        modifyProductQuantity,
        removeFromCart,
        removeAllItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
