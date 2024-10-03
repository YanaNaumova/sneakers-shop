import styles from "./styles.module.css";
import addtoCartItem from "../../assets/icons/btnAddtoCart.svg";
import { connect } from "react-redux";
import { addProduct } from "../../redux/actions";
import axios from "axios";

function ProductCard({ name, price, image, id, addProduct }) {
  const handleAddProduct = async () => {
    const newProduct = {
      image: image,
      name: name,
      price: price,
      id: id,
    };
    try {
      const response = await axios.post(
        `https://66f3c86577b5e8897096ce1a.mockapi.io/cartItem`,
        newProduct
      );
    } catch (error) {
      console.log(error);
    }
    addProduct(newProduct);
  };

  return (
    <div className={styles.product_container}>
      <img src={image} alt="product_img" className={styles.img_product} />
      <h3 className={styles.products_name}>{name}</h3>
      <div className={styles.price_container}>
        <div>
          <p className={styles.price_header}>Цена</p>
          <p className={styles.price}>{price}</p>
        </div>
        <img
          src={addtoCartItem}
          alt="add_icon"
          className={styles.img_add}
          onClick={handleAddProduct}
        />
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  addProduct,
};

export default connect(null, mapDispatchToProps)(ProductCard);
