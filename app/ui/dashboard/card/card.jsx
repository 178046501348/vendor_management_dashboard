import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total engagements</span>
        <span className={styles.number}>100</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12% Increase YoY</span>
        </span>
      </div>
    </div>
  );
};

export default Card;