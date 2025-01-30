import React from "react";
import styles from "../styles/Page.module.css";

const Cart: React.FC = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Cart Page</h1>
      <p className={styles.content}>Your selected items will appear here.</p>
    </div>
  );
};

export default Cart;
