import { mainTextSection } from "@/assets/data/main";
import cameraGif from "@/assets/img/icons/camera-move.gif";
import motorGif from "@/assets/img/icons/motor-move.gif";
import dynamicGif from "@/assets/img/icons/dynamic-move.gif";

import styles from "./MainBackgroundSection.module.scss";

export const MainBackgroundSection = () => {
  return (
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
  );
};
