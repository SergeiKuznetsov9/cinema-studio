import { Button } from "@/shared/Button";
import { actorsParallaxSection } from "@/assets/data/actors";
import styles from "./ActorsParallaxSection.module.scss";

export const ActorsParallaxSection = () => {
  const { header, text } = actorsParallaxSection;
  return (
    <div className={styles.ActorsParallaxSection}>
      <div className={styles.actorsContent}>
        <h2 className={styles.header}>{header}</h2>
        <p className={styles.paragraph}>{text}</p>
        <Button title="Актеры" />
      </div>
    </div>
  );
};
