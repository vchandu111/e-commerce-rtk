import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { removeFromCart } from "../features/cartSlice";
import styles from "../styles/Cart.module.css";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Your cart is empty.</p>
          <a href="/products" className={styles.continueShoppingLink}>
            Continue Shopping
          </a>
        </div>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemDetails}>
                  <h3>{item.title}</h3>
                  <p className={styles.itemPrice}>${item.price}</p>
                  <div className={styles.quantityControls}>
                    <span>Quantity: {item.quantity}</span>
                  </div>
                </div>
                <div className={styles.itemActions}>
                  <p className={styles.itemSubtotal}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    className={styles.removeButton}
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.cartSummary}>
            <div className={styles.summaryRow}>
              <span>Subtotal:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className={styles.checkoutButton}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;