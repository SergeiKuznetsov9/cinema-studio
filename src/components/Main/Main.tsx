import { ParallaxSection } from "@/shared/ParallaxSection";
import fogImg from "@/assets/img/backgrounds/fog.png";
import gogolPhoto from "@/assets/img/photos/p5.png";
import cameraGif from "@/assets/img/icons/camera-move.gif";
import motorGif from "@/assets/img/icons/motor-move.gif";
import dynamicGif from "@/assets/img/icons/dynamic-move.gif";
import styles from "./Main.module.scss";
import { Button } from "@/shared/Button";
import { mainParalaxSection, mainTextSection } from "@/assets/data/main";

export const Main = () => (
  <ParallaxSection
    backgroundImage={`url(${fogImg})`}
    scrollingContent={
      <>
        <div className={styles.Main}>
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
            <p>
              <i>{mainParalaxSection.credo}</i>
            </p>
          </div>
          <div className={styles.descriptionButtons}>
            <Button title="Подробнее о нас" />
          </div>
        </div>
      </>
    }
    textSectionContent={
      <div className={styles.textSectionContent}>
        <h2>{mainTextSection.header}</h2>
        <p>{mainTextSection.description}</p>
        <div className={styles.points}>
          <div className={styles.subSection}>
            <div className={styles.gifContainer}>
              <img src={cameraGif} alt="camera" />
            </div>
            <p>{mainTextSection.point1}</p>
          </div>
          <div className={styles.subSection}>
            <div className={styles.gifContainer}>
              <img src={motorGif} alt="motor" />
            </div>
            <p>{mainTextSection.point2}</p>
          </div>
          <div className={styles.subSection}>
            <div className={styles.gifContainer}>
              <img src={dynamicGif} alt="dynamic" />
            </div>
            <p>{mainTextSection.point3}</p>
          </div>
        </div>
        <div className={styles.info}>
          <strong>{mainTextSection.infoGroups}</strong>
          <i>{mainTextSection.infoChild}</i>
        </div>
      </div>
    }
  />
);
