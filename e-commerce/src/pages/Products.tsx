import React from "react";
import styles from "../styles/Page.module.css";

const Products: React.FC = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Products Page</h1>
      <p className={styles.content}>Browse our wide range of products.</p>
    </div>
  );
};

export default Products;
