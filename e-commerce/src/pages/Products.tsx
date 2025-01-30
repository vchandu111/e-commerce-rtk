import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/productsSlice";
import { RootState, AppDispatch } from "../app/store";
import styles from "../styles/Products.module.css";
import { ShoppingCart } from "lucide-react";

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, status, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Our Products</h1>
      {status === "loading" && <p className={styles.loading}>Loading...</p>}
      {status === "failed" && <p className={styles.error}>Error: {error}</p>}
      {status === "succeeded" && (
        <div className={styles.products}>
          {products.map((product) => (
            <div key={product.id} className={styles.product}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p className={styles.price}>${product.price}</p>
              <div className={styles.actions}>
                <button className={styles.button}>View Details</button>
                <ShoppingCart className={styles.icon} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
