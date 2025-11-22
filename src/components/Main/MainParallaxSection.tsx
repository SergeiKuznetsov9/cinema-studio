import { Button } from "@/shared/Button";
import { mainParalaxSection } from "@/assets/data/main";
import gogolPhoto from "@/assets/img/photos/p5.png";
import foundersPhoto from "@/assets/img/photos/p0.png";

import styles from "./MainParallaxSection.module.scss";

export const MainParallaxSection = () => {
  return (
    <>
      <div className={styles.Main}>
        <div className={styles.gogolPhoto}>
          <img src={gogolPhoto} alt="Gogol N.V." />
        </div>
        <div className={styles.quoteContainer}>
          <p className={styles.quote}>
            Что есть жизнь? Это разрушение мечты действительностью...
          </p>
          <p className={styles.line} />
          <p className={styles.authorName}>Николай Васильевич Гоголь</p>
        </div>
      </div>
      <div className={styles.titleSection}>
        <h1>{mainParalaxSection.mainHeader}</h1>
        <div>{mainParalaxSection.aim}</div>
      </div>
      <div className={styles.description}>
        <h2>{mainParalaxSection.subHeader}</h2>
        <div className={styles.descriptionContent}>
          <p>
            {mainParalaxSection.present}{" "}
            <strong>{mainParalaxSection.founders}</strong>
          </p>
          <div className={styles.proportionalBox}>
            <img src={foundersPhoto} alt="founders" />
          </div>
          <p>
            <i>{mainParalaxSection.credo}</i>
          </p>
        </div>
        <div className={styles.descriptionButtons}>
          <Button title="Подробнее о нас" className={styles.button} />
        </div>
      </div>
    </>
  );
};
