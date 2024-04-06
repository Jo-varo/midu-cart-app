import { useEffect, useState } from 'react';
import { filteredProducts } from '../helpers/functions';
import useCart from '../hooks/useCart';
import useFilters from '../hooks/useFilters';
import { getProducts } from '../services/api';
import { Product } from '../types/types';

export default function ProductList() {
  const { filters } = useFilters();
  const { cart, addToCart, removeFromCart } = useCart();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const requestProducts = async () => {
      const prods = await getProducts();
      setProducts(prods);
    };
    requestProducts();
  }, []);

  const filteredProds = filteredProducts(products, filters);

  const isInCart = (id: Product['id']) => {
    return cart.some((prod) => prod.id === id);
  };

  return (
    <div className="products">
      {filteredProds?.map((prod) => (
        <div key={prod.id} className="product">
          <img src={prod.image} alt={`Image of ${prod.name}`} />
          <h3>{prod.name}</h3>
          <span className="product-details">
            <i>{prod.category}</i>
            <b className="product-price">${prod.price.toFixed(2)}</b>
          </span>
          {isInCart(prod.id) ? (
            <button onClick={() => removeFromCart(prod.id)}>
              Remove from cart
            </button>
          ) : (
            <button onClick={() => addToCart(prod)}>Add to cart</button>
          )}
        </div>
      ))}
    </div>
  );
}
