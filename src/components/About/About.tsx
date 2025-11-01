import { ParallaxSection } from "@/shared/ParallaxSection";
import theatreStageImg from "@/assets/img/backgrounds/view-black-white-theatre-stage.jpg";

export const About = () => (
  <ParallaxSection
    backgroundImage={`url(${theatreStageImg})`}
    scrollingContent={<div>КОНТЕНТ НА ФОНЕ</div>}
    textSectionContent={<div>КОНТЕНТ НА ТЕКСТОВОЙ ОБЛАСТИ</div>}
  />
);
