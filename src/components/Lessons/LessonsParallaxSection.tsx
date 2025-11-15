import styles from "./LessonsParallaxSection.module.scss";
import { lessonsParallaxSection } from "@/assets/data/lessons";

export const LessonsParallaxSection = () => {
  const { header, text, points } = lessonsParallaxSection;
  return (
    <div className={styles.LessonsParallaxSection}>
      <div className={styles.lessonsContent}>
        <h2 className={styles.header}>{header}</h2>
        <p className={styles.paragraph}>{text}</p>
        <ul className={styles.points}>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
