import React from "react";
import styles from "../styles/Page.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.content}>Welcome to our e-commerce store!</p>
    </div>
  );
};

export default Home;
