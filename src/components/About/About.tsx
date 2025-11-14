import { ParallaxSection } from "@/shared/ParallaxSection";
import stageImg from "@/assets/img/backgrounds/stage.png";
import { AboutParallaxSection } from "./AboutParallaxSection";
import { AboutBackgroundSection } from "./AboutBackgroundSection";

export const About = () => (
  <ParallaxSection
    backgroundImage={`url(${stageImg})`}
    scrollingContent={<AboutParallaxSection />}
    textSectionContent={<AboutBackgroundSection />}
  />
);
