import React from "react";
import styles from "../styles/Page.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Welcome to E-Shop</h1>
      <p className={styles.content}>Explore our wide range of products!</p>
    </div>
  );
};

export default Home;
