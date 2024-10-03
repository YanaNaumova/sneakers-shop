import Facebook from "../../assets/icons/facebook.svg";
import Snapchat from "../../assets/icons/snapchat.svg";
import Twitter from "../../assets/icons/twitter.svg";
import styles from "./styles.module.css";

function Contacts() {
  return (
    <div className={styles.contacts_container}>
      <div className={styles.contacts_header}>
        <h1 className={styles.header}>Контакты</h1>
        <div className={styles.contacts_daten}>
          <div>8 800 000 00 00</div>
          <div>emailexample@email.com</div>
        </div>
      </div>

      <div className={styles.contacts_container_info}>
        <form className={styles.form_container}>
          <div className={styles.info_container}>
            <input
              type="text"
              placeholder="Ваш email"
              className={styles.input_text}
            />
            <input
              type="text"
              placeholder="Ваше имя"
              className={styles.input_text}
            />
          </div>
          <input
            type="text"
            placeholder="Введите сообщение"
            className={styles.input_sms_text}
          />
          <div className={styles.btn_container}>
            <button type="submit" className={styles.btn}>
              Отправить
            </button>
          </div>
        </form>

        <div className={styles.about_uns}>
          <div>Найдите нас:</div>
          <div className={styles.image_container}>
            <img src={Facebook} alt="snapchat" className={styles.img} />
            <img src={Snapchat} alt="facebook" className={styles.img} />
            <img src={Twitter} alt="twiter" className={styles.img} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
