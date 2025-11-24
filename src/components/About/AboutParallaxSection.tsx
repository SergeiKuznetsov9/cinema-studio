import { aboutParallaxSection } from "@/assets/data/about";
import styles from "./AboutParallaxSection.module.scss";
import { Button } from "@/shared/Button";
import { useNavigate } from "react-router-dom";

export const AboutParallaxSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/course");
  };

  return (
    <div className={styles.AboutParallaxSection}>
      <div className={styles.aboutContent}>
        <h2>{aboutParallaxSection.header}</h2>
        <p>{aboutParallaxSection.par1}</p>
        <p>{aboutParallaxSection.par2}</p>
        <div>
          <Button title="Подробнее о курсе" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};
