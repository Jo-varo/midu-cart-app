import { useId } from 'react';
import useCart from '../hooks/useCart';

export default function Cart() {
  const inputID = useId();
  const { cart, modifyProductQuantity, removeFromCart, removeAllItems } =
    useCart();


  const totalCart = cart.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  ).toFixed(2)

  return (
    <div>
      <input type="checkbox" id={inputID} />
      <label htmlFor={inputID} className="open-cart">
        Show/hide cart
      </label>
      <div className="cart">
        {cart?.length === 0 && <h3>Add some products!</h3>}
        {cart?.map((product) => (
          <div className="product-on-cart" key={product.id}>
            <img src={product.image} alt={`${product.name} image`} />
            <h3>{product.name}</h3>
            <span>
              <p>${product.price}</p>
              <b>
                Qty:
                <input
                  type="number"
                  value={product.quantity}
                  min={1}
                  onChange={(e) =>
                    modifyProductQuantity(product.id, Number(e.target.value))
                  }
                />
              </b>
            </span>
            <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
            <button
              style={{ backgroundColor: '#efcccc' }}
              onClick={() => removeFromCart(product.id)}
            >
              Remove from cart
            </button>
          </div>
        ))}
        {cart?.length >= 2 && (
          <button onClick={() => removeAllItems()}>Remove all items</button>
        )}
        {cart.length > 0 && (
          <h3 className="total-cart">
            Total: {totalCart}
          </h3>
        )}
      </div>
    </div>
  );
}
