import CartItem from "../CartItem";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { setCartItems } from "../../redux/actions";
import { connect } from "react-redux";

function CartList({ cartItems, setCartItems }) {
  async function getCartItems() {
    try {
      const respons = await axios.get(
        `https://66f3c86577b5e8897096ce1a.mockapi.io/cartItem`
      );
      setCartItems(respons.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <div>
      {cartItems.length === 0 ? (
        <h2> Ваша корзина пуста</h2>
      ) : (
        <div className={styles.carts_container}>
          {cartItems.map((cart) => {
            return <CartItem {...cart} key={cart.id} />;
          })}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state,
});

const mapDispatchToProps = {
  setCartItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
