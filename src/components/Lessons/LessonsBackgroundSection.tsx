import styles from "./LessonsBackgroundSection.module.scss";
import { lessonsBackgroundSection } from "@/assets/data/lessons";

export const LessonsBackgroundSection = () => {
  const { header, price, payment, bonus } = lessonsBackgroundSection;
  return (
    <div className={styles.LessonsBackgroundSection}>
      <div className={styles.content}>
        <h2 className={styles.header}>{header}</h2>
        <p className={styles.price}>{price}</p>
        <p className={styles.payment}>{payment}</p>
        <p className={styles.bonus}>{bonus}</p>
      </div>
    </div>
  );
};
