import { ParallaxSection } from "@/shared/ParallaxSection";
import theatreStageImg from "@/assets/img/backgrounds/view-black-white-theatre-stage.jpg";
import p0Photo from "@/assets/img/photos/p0.png";
import p1Photo from "@/assets/img/photos/p1.png";
import p2Photo from "@/assets/img/photos/p2.png";
import p3Photo from "@/assets/img/photos/p3.png";
import p4Photo from "@/assets/img/photos/p4.png";
import styles from "./About.module.scss";
import { Button } from "@/shared/Button";
import { Slider } from "@/shared/Slider";

export const About = () => (
  <ParallaxSection
    backgroundImage={`url(${theatreStageImg})`}
    scrollingContent={
      <div className={styles.About}>
        <div className={styles.aboutContent}>
          <h2>Что такое Lorem Ipsum?</h2>
          <p>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem
            Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
            без заметных изменений пять веков, но и перешагнул в электронный
            дизайн.
          </p>
          <div className={styles.buttonContainer}>
            <Button title="О нас" />
          </div>
        </div>
      </div>
    }
    textSectionContent={
      <div className={styles.sliderContainer}>
        <Slider photos={[p0Photo, p1Photo, p2Photo, p3Photo, p4Photo]} />
      </div>
    }
  />
);
