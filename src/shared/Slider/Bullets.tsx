import type { FC } from "react";
import styles from "./Bullets.module.scss";
import classNames from "classnames";

type BulletsProps = {
  length: number;
  activeIndex: number;
  choosePhoto: (index: number) => void;
};

export const Bullets: FC<BulletsProps> = ({
  length,
  activeIndex,
  choosePhoto,
}) => {
  return (
    <div className={styles.Bullets}>
      {new Array(length).fill(null).map((_, index) => (
        <button
          className={styles.bullet}
          key={index}
          onClick={() => choosePhoto(index)}
        >
          <div
            className={classNames({
              [styles.active]: index === activeIndex,
            })}
          />
        </button>
      ))}
    </div>
  );
};
