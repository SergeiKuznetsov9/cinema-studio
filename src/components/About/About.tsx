import { ParallaxSection } from "@/shared/ParallaxSection";
import stageImg from "@/assets/img/backgrounds/stage.png";
import styles from "./About.module.scss";
import { Button } from "@/shared/Button";
// import runGif from "@/assets/img/icons/run.gif";
// import dynamicGif from "@/assets/img/icons/dynamic-move.gif";
import { aboutParallaxSection } from "@/assets/data/about";

export const About = () => (
  <ParallaxSection
    backgroundImage={`url(${stageImg})`}
    scrollingContent={
      <div className={styles.Actors}>
        <div className={styles.actorsContent}>
          <h2>{aboutParallaxSection.header}</h2>
          <p>{aboutParallaxSection.par1}</p>
          <p>{aboutParallaxSection.par2}</p>
          <div className={styles.buttonContainer}>
            <Button title="Подробнее о курсе" />
          </div>
        </div>
      </div>
    }
    textSectionContent={
      "grdhg"
      // <div className={styles.textSectionContent}>
      //   <div className={styles.subSection}>
      //     <div className={styles.gifContainer}>
      //       <img src={runGif} alt="run" />
      //     </div>
      //     <p>
      //       Давно выяснено, что при оценке дизайна и композиции читаемый текст
      //       мешает сосредоточиться.
      //     </p>
      //   </div>
      //   <div className={styles.subSection}>
      //     <div className={styles.gifContainer}>
      //       <img src={dynamicGif} alt="dynamic" />
      //     </div>
      //     <p>
      //       Давно выяснено, что при оценке дизайна и композиции читаемый текст
      //       мешает сосредоточиться.
      //     </p>
      //   </div>
      // </div>
    }
  />
);
