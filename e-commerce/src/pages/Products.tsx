import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../features/productsSlice";
import { RootState, AppDispatch } from "../app/store";
import styles from "../styles/Products.module.css";

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
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
                <button
                  className={styles.button}
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
