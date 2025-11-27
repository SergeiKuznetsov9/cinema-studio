import { ParallaxSection } from "@/shared/ParallaxSection";
import styles from "./AboutDetails.module.scss";
import fogImg from "@/assets/img/backgrounds/fog.png";
import dmitryPhoto from "@/assets/img/photos/p6-dmitry.png";
import lilyPhoto from "@/assets/img/photos/p7-lily.png";
import togetherPhoto from "@/assets/img/photos/p8-together.png";
import { aboutDetails } from "@/assets/data/aboutDetails";

export const AboutDetails = () => {
  const { header, dmitry, lily, together } = aboutDetails;

  return (
    <ParallaxSection
      backgroundImage={`url(${fogImg})`}
      scrollingContent={
        <div className={styles.AboutDetails}>
          <div className={styles.aboutDetailsContent}>
            <h2 className={styles.aboutDetailsHeader}>{header}</h2>
            <div className={styles.dmitry}>
              <div className={styles.dmitryPhotoContainer}>
                <div className={styles.dmitryPhoto}>
                  <img
                    src={dmitryPhoto}
                    alt="Dmitry Lisunenko"
                    className="white-shadow"
                  />
                </div>
              </div>
              <div className={styles.dmitryDescription}>
                <h3>{dmitry.header}</h3>
                <ul>
                  {dmitry.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.lily}>
              <div className={styles.lilyDescription}>
                <h3>{lily.header}</h3>
                <ul>
                  {lily.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.lilyPhotoContainer}>
                <div className={styles.lilyPhoto}>
                  <img
                    src={lilyPhoto}
                    alt="Lily Lisunenko"
                    className="white-shadow"
                  />
                </div>
              </div>
            </div>

            <div className={styles.together}>
              <div className={styles.togetherPhotoContainer}>
                <div className={styles.togetherPhoto}>
                  <img
                    src={togetherPhoto}
                    alt="Together"
                    className="white-shadow"
                  />
                </div>
              </div>
              <div className={styles.togetherDescription}>
                <ul>
                  {together.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};
