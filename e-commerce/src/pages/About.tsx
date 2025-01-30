import React from "react";
import styles from "../styles/Page.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>About Page</h1>
      <p className={styles.content}>Learn more about our company.</p>
    </div>
  );
};

export default About;
