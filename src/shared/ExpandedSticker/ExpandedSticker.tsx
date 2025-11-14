import { useState, type FC } from "react";
import styles from "./ExpandedSticker.module.scss";
import classNames from "classnames";

type ExpandedStickerProps = {
  title: string;
  description: string[];
  points: string[];
  className?: string;
};

export const ExpandedSticker: FC<ExpandedStickerProps> = ({
  title,
  description,
  points,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={classNames(styles.ExpandedSticker, className, {
        [styles.inverted]: isExpanded,
      })}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <header className={styles.header}>
        <h3>{title}</h3>
        <p className={styles.toggle}>{isExpanded ? "-" : "+"}</p>
      </header>
      <div
        className={classNames(styles.content, {
          [styles.expanded]: isExpanded,
        })}
      >
        <div className={styles.contentWrapper}>
          <div className={styles.description}>
            {description.map((descriptionPoint, index) => (
              <p key={index}>{descriptionPoint}</p>
            ))}
          </div>
          <div className={styles.points}>
            <ul>
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
