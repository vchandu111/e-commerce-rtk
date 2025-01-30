import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductDetails } from "../features/productsSlice";
import { addToCart } from "../features/cartSlice";
import { RootState, AppDispatch } from "../app/store";
import styles from "../styles/ProductDetails.module.css";

const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector(
    (state: RootState) => state.products.selectedProduct
  );
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }
  }, [id, dispatch]);

    const handleAddToCart = () => {
      console.log('cart')
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
        })
      );
    }
        alert("added to cart")
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className={styles.details}>
      {product && (
        <>
          <img src={product.thumbnail} alt={product.title} />
          <div className={styles["details-content"]}>
            <h1>{product.title}</h1>
            <div className={styles.rating}>
              <span>⭐</span>
              <span>{product.rating}</span>
            </div>
            <p>{product.description}</p>
            <p className={styles.price}>${product.price}</p>
            <p className={styles.discount}>{product.discountPercentage}% OFF</p>
            <button className={styles.button} onClick={handleAddToCart}>
              Add to Cart
            </button>
            <div className={styles.additionalInfo}>
              <p>
                <span>Brand:</span> {product.brand}
              </p>
              <p>
                <span>Category:</span> {product.category}
              </p>
              <p>
                <span>Stock:</span> {product.stock}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
