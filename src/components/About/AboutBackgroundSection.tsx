import { PhotoSwiper } from "@/shared/PhotoSwiper";
import styles from "./AboutBackgroundSection.module.scss";
import { aboutBackgroundSection, swiperPhotos } from "@/assets/data/about";

export const AboutBackgroundSection = () => {
  const photos = swiperPhotos.map((photo) => <img src={photo} alt="photo" />);

  return (
    <div className={styles.AboutBackgroundSection}>
      <h2 className={styles.header}>{aboutBackgroundSection.header}</h2>
      <p className={styles.paragraph}>{aboutBackgroundSection.text}</p>
      <PhotoSwiper photos={photos} />
    </div>
  );
};
