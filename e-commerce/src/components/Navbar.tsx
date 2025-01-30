import React from "react";
import { Link } from "react-router-dom";
import { Home, ShoppingCart, Info, Box } from "lucide-react";
import styles from "../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        E-Shop
      </Link>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link className={styles.link} to="/">
            <Home size={20} className={styles.icon} />
            Home
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} to="/products">
            <Box size={20} className={styles.icon} />
            Products
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} to="/about">
            <Info size={20} className={styles.icon} />
            About
          </Link>
        </li>
        <li className={`${styles.li} ${styles.cartIcon}`}>
          <Link className={styles.link} to="/cart">
            <ShoppingCart size={20} className={styles.icon} />
            <span className={styles.cartCount}>3</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
