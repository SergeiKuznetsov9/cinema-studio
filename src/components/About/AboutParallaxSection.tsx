import { aboutParallaxSection } from "@/assets/data/about";
import styles from "./AboutParallaxSection.module.scss";
import { Button } from "@/shared/Button";

export const AboutParallaxSection = () => (
  <div className={styles.AboutParallaxSection}>
    <div className={styles.aboutContent}>
      <h2>{aboutParallaxSection.header}</h2>
      <p>{aboutParallaxSection.par1}</p>
      <p>{aboutParallaxSection.par2}</p>
      <div>
        <Button title="Подробнее о курсе" />
      </div>
    </div>
  </div>
);
