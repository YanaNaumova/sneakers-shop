import banner from "../../assets/images/banner.png";
import styles from "./styles.module.css";

function News() {
  return (
    <div className={styles.container_news}>
      <img src={banner} alt="banner" className={styles.banner} />
    </div>
  );
}

export default News;
