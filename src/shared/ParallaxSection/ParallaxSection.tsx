/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC, ReactNode } from "react";
import styles from "./ParallaxSection.module.scss";

type ParallaxSectionProps = {
  backgroundImage: string;
  scrollingContent: ReactNode;
  textSectionContent: ReactNode;
};

export const ParallaxSection: FC<ParallaxSectionProps> = ({
  backgroundImage,
  scrollingContent,
  textSectionContent,
}) => {
  return (
    <>
      <section className={styles.ParallaxSection} style={{ backgroundImage }}>
        <div className={styles.scrollingContent}>{scrollingContent}</div>
      </section>
      <section className={styles.textSectionContent}>
        {textSectionContent}
      </section>
    </>
  );
};
