import { useState, type FC } from "react";
import styles from "./Slider.module.scss";
import { Bullets } from "./Bullets";
import rightSvg from "@/assets/img/icons/right.svg";

type SliderProps = {
  photos: string[];
};

const Direction = {
  RIGHT: "RIGHT",
  LEFT: "LEFT",
} as const;

export const Slider: FC<SliderProps> = ({ photos }) => {
  const [visiblePhoto, setVisiblePhoto] = useState(0);

  const setPhoto = (direction: keyof typeof Direction) => {
    const length = photos.length;
    const isLastPhoto = visiblePhoto === length - 1;
    const isFirstPhoto = visiblePhoto === 0;

    if (direction === Direction.RIGHT) {
      if (isLastPhoto) {
        setVisiblePhoto(0);
      } else {
        setVisiblePhoto(visiblePhoto + 1);
      }
    }

    if (direction === Direction.LEFT) {
      if (isFirstPhoto) {
        setVisiblePhoto(length - 1);
      } else {
        setVisiblePhoto(visiblePhoto - 1);
      }
    }
  };

  return (
    <div className={styles.Slider}>
      <h2 className={styles.title}>Наши моменты</h2>
      <p className={styles.description}>Фото за кулисами</p>

      <div className={styles.sliderImg}>
        <button
          onClick={() => setPhoto(Direction.LEFT)}
          className={styles.navButton}
        >
          <img src={rightSvg} alt="left" className={styles.rotate} />
        </button>
        <div className={styles.photoContainer}>
          <img src={photos[visiblePhoto]} alt="photo" />
        </div>
        <button
          onClick={() => setPhoto(Direction.RIGHT)}
          className={styles.navButton}
        >
          <img src={rightSvg} alt="right" />
        </button>
      </div>
      <Bullets
        length={photos.length}
        activeIndex={visiblePhoto}
        choosePhoto={setVisiblePhoto}
      />
    </div>
  );
};
