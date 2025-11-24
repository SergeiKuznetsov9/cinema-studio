import type { FC } from "react";
import styles from "./Points.module.scss";

type PointsProps = {
  header: string;
  description?: string;
  points?: string[];
};

export const Points: FC<PointsProps> = ({
  header,
  points = [],
  description,
}) => {
  return (
    <div className={styles.Points}>
      <h3 className={styles.header}>{header}</h3>
      {description && <div className={styles.description}>{description}</div>}
      <ul className={styles.ul}>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};
