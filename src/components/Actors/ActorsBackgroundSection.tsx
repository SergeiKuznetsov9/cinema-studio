import { questionsSection } from "@/assets/data/questions";
import { ExpandedSticker } from "@/shared/ExpandedSticker/ExpandedSticker";
import styles from "./ActorsBackgroundSection.module.scss";

export const ActorsBackgroundSection = () => {
  const { header, text, expandedStickers } = questionsSection;
  return (
    <div className={styles.ActorsBackgroundSection}>
      <h2 className={styles.header}>{header}</h2>
      <p className={styles.paragraph}>{text}</p>
      <div className={styles.expandedStickers}>
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
    </div>
  );
};
