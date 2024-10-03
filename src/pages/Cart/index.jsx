import styles from "./styles.module.css";
import CartList from "../../components/CartList";
import { connect } from "react-redux";

function Cart({ cartItems }) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );
  console.log(totalPrice);
  return (
    <div className={styles.cart_container}>
      <h1 className={styles.cart_header}>Корзина</h1>
      <div className={styles.cart_context_container}>
        <CartList />
        <div className={styles.cart_description}>
          <h1 className={styles.total_text}>Итого</h1>
          <div className={styles.cart_product_description}>
            {cartItems.map((item) => {
              return (
                <p className={styles.item_description} key={item.id}>
                  {item.name}
                </p>
              );
            })}
          </div>
          <div className={styles.cart_price_description}>
            <p className={styles.price_text}>цена:</p>
            <p className={styles.price}>{totalPrice !== 0 ? totalPrice : 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state,
});

export default connect(mapStateToProps)(Cart);
