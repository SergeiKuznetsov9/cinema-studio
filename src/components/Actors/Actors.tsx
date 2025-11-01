import { ParallaxSection } from "@/shared/ParallaxSection";
import stageImg from "@/assets/img/backgrounds/stage.png";

export const Actors = () => (
  <ParallaxSection
    backgroundImage={`url(${stageImg})`}
    scrollingContent={<div>КОНТЕНТ НА ФОНЕ</div>}
    textSectionContent={<div>КОНТЕНТ НА ТЕКСТОВОЙ ОБЛАСТИ</div>}
  />
);
