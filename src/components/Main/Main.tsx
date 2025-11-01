import { ParallaxSection } from "@/shared/ParallaxSection";
import fogImg from "@/assets/img/backgrounds/fog.png";

export const Main = () => (
  <ParallaxSection
    backgroundImage={`url(${fogImg})`}
    scrollingContent={<div>КОНТЕНТ НА ФОНЕ</div>}
    textSectionContent={<div>КОНТЕНТ НА ТЕКСТОВОЙ ОБЛАСТИ</div>}
  />
);
