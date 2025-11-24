import { ParallaxSection } from "@/shared/ParallaxSection";
import styles from "./CourseDetails.module.scss";
import fogImg from "@/assets/img/backgrounds/fog.png";
import { courseDetails } from "@/assets/data/courseDetails";
import { Points } from "./Points";

export const CourseDetails = () => {
  const { header, description, program, studied, potential, masters } =
    courseDetails;

  return (
    <ParallaxSection
      backgroundImage={`url(${fogImg})`}
      scrollingContent={
        <div className={styles.CourseDetails}>
          <div className={styles.courseDetailsContent}>
            <h2 className={styles.header}>{header}</h2>
            <div className={styles.description}>
              <p>{description}</p>
            </div>
            <Points header={program.header} points={program.points} />
            <Points header={studied.header} points={studied.points} />
            <Points header={potential.header} points={potential.points} />
            <Points header={masters.header} description={masters.description} />
          </div>
        </div>
      }
    />
  );
};
