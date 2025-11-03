import { ParallaxSection } from "@/shared/ParallaxSection";
import fogImg from "@/assets/img/backgrounds/fog.png";
import gogolPhoto from "@/assets/img/photos/p5.png";
import cameraGif from "@/assets/img/icons/camera-move.gif";
import motorGif from "@/assets/img/icons/motor-move.gif";
import styles from "./Main.module.scss";
import { Button } from "@/shared/Button";

export const Main = () => (
  <ParallaxSection
    backgroundImage={`url(${fogImg})`}
    scrollingContent={
      <>
        <div className={styles.gogolContainer}>
          <div className={styles.gogolPhoto}>
            <img src={gogolPhoto} alt="Gogol N.V." />
          </div>
          <div className={styles.quoteContainer}>
            <p className={styles.quote}>
              Что есть жизнь? Это разрушение мечты действительность...
            </p>
            <p className={styles.line} />
            <p className={styles.authorName}>Николай Васильевич Гоголь</p>
          </div>
        </div>
        <div className={styles.description}>
          <h1 className={styles.descriptionTitle}>Студия театра и кино</h1>
          <div className={styles.descriptionContent}>
            Есть много вариантов Lorem Ipsum, но большинство из них имеет не
            всегда приемлемые модификации, например, юмористические вставки или
            слова, которые даже отдалённо не напоминают латынь. Если вам нужен
            Lorem Ipsum для серьёзного проекта, вы наверняка не хотите
            какой-нибудь шутки, скрытой в середине абзаца.
          </div>
          <div className={styles.descriptionButtons}>
            <Button title="о нас" />
            <Button title="контакты" />
          </div>
        </div>
      </>
    }
    textSectionContent={
      <div className={styles.textSectionContent}>
        <div className={styles.subSection}>
          <div className={styles.gifContainer}>
            <img src={cameraGif} alt="camera" />
          </div>
          <p>
            Давно выяснено, что при оценке дизайна и композиции читаемый текст
            мешает сосредоточиться.
          </p>
        </div>
        <div className={styles.subSection}>
          <div className={styles.gifContainer}>
            <img src={motorGif} alt="motor" />
          </div>
          <p>
            Давно выяснено, что при оценке дизайна и композиции читаемый текст
            мешает сосредоточиться.
          </p>
        </div>
      </div>
    }
  />
);
