import Nav from "../Nav";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header_container}>
      <div>
        <h1 className={styles.headerText}>Сникер - магазин</h1>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
