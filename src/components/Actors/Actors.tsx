import { ParallaxSection } from "@/shared/ParallaxSection";
import stageImg from "@/assets/img/backgrounds/stage.png";
import styles from "./Actors.module.scss";
import { Button } from "@/shared/Button";
import runGif from "@/assets/img/icons/run.gif";
import dynamicGif from "@/assets/img/icons/dynamic-move.gif";

export const Actors = () => (
  <ParallaxSection
    backgroundImage={`url(${stageImg})`}
    scrollingContent={
      <div className={styles.Actors}>
        <div className={styles.actorsContent}>
          <h2>Что такое Lorem Ipsum?</h2>
          <p>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem
            Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
            без заметных изменений пять веков, но и перешагнул в электронный
            дизайн.
          </p>
          <div className={styles.buttonContainer}>
            <Button title="О нас" />
          </div>
        </div>
      </div>
    }
    textSectionContent={
      <div className={styles.textSectionContent}>
        <div className={styles.subSection}>
          <div className={styles.gifContainer}>
            <img src={runGif} alt="run" />
          </div>
          <p>
            Давно выяснено, что при оценке дизайна и композиции читаемый текст
            мешает сосредоточиться.
          </p>
        </div>
        <div className={styles.subSection}>
          <div className={styles.gifContainer}>
            <img src={dynamicGif} alt="dynamic" />
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
