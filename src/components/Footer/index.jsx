import styles from "./styles.module.css";
import Facebook from "../../assets/icons/facebook_outlined.svg";
import Twiter from "../../assets/icons/twitter_outlined.svg";
import Instagram from "../../assets/icons/instagram_outlined.svg";

function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.information_container}>
        <div className={styles.contacts_container}>
          <h3 className={styles.contacts_header}>Контакты</h3>
          <p>8 800 000 00 00</p>
          <p>emailexample@email.com</p>
        </div>
        <div className={styles.image_container}>
          <img src={Facebook} alt="facebook" className={styles.img} />
          <img src={Twiter} alt="twiter" className={styles.img} />
          <img src={Instagram} alt="instagram" className={styles.img} />
        </div>
      </div>
      <div className={styles.rules_container}>
        <p>2024 Сникер-магазин. Все права защищены</p>
        <input
          type="text"
          placeholder="Введите свой email:"
          className={styles.input_email}
        />
      </div>
    </div>
  );
}

export default Footer;
