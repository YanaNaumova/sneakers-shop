import styles from "./styles.module.css";
import News from "../../components/News";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard";

function Main() {
  const [products, setProducts] = useState([]);

  async function getProductItems() {
    try {
      const respons = await axios.get(
        `https://66f3c86577b5e8897096ce1a.mockapi.io/productData`
      );
      setProducts(respons.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductItems();
  }, []);

  return (
    <div className={styles.main_container}>
      <News />
      <h1 className={styles.products_header}>Товары</h1>
      <div className={styles.products_container}>
        {products.map((product) => {
          return <ProductCard {...product} key={product.id} />;
        })}
      </div>
    </div>
  );
}

export default Main;
