import { actorsBackgroundSection } from "@/assets/data/actors";
import { ExpandedSticker } from "@/shared/ExpandedSticker/ExpandedSticker";
import styles from "./ActorsBackgroundSection.module.scss";

export const ActorsBackgroundSection = () => {
  const { expandedStickers } = actorsBackgroundSection;
  return (
    <div className={styles.ActorsBackgroundSection}>
      {expandedStickers.map(({ title, description, points }, index) => (
        <ExpandedSticker
          title={title}
          description={description}
          points={points}
          key={index}
          className={styles.sticker}
        />
      ))}
    </div>
  );
};
