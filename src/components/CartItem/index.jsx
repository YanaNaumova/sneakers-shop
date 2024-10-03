import styles from "./styles.module.css";
import deleteProductImg from "../../assets/icons/basket.svg";
import { connect } from "react-redux";
import { deleteProduct } from "../../redux/actions";
import axios from "axios";

function CartItem({ name, price, image, id, deleteProduct }) {
  const handelDeleteProduct = async () => {
    try {
      await axios.delete(
        `https://66f3c86577b5e8897096ce1a.mockapi.io/cartItem/${id}`
      );
      deleteProduct(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.cartItem_container}>
      <div className={styles.cartItem_description}>
        <img src={image} alt="product_img" className={styles.img_product} />
        <h3 className={styles.product_name}>{name}</h3>
        <div className={styles.price_container}>
          <p className={styles.price_header}>Цена</p>
          <p className={styles.price}>{price}</p>
        </div>
      </div>
      <img
        src={deleteProductImg}
        alt="icon"
        className={styles.img_delete}
        onClick={handelDeleteProduct}
      />
    </div>
  );
}

const mapDispatchToProps = {
  deleteProduct,
};

export default connect(null, mapDispatchToProps)(CartItem);
