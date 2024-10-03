import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function Nav() {
  return (
    <nav className={styles.nav_container}>
      <NavLink to="/" className={styles.link}>
        Главная
      </NavLink>
      <NavLink to="/cart" className={styles.link}>
        Корзина
      </NavLink>
      <NavLink to="/contacts" className={styles.link}>
        Контакты
      </NavLink>
    </nav>
  );
}

export default Nav;
