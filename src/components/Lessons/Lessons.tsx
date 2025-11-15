import { ParallaxSection } from "@/shared/ParallaxSection";
import theatreStageImg from "@/assets/img/backgrounds/view-black-white-theatre-stage.jpg";
import { LessonsParallaxSection } from "./LessonsParallaxSection";
import { LessonsBackgroundSection } from "./LessonsBackgroundSection";

export const Lessons = () => (
  <ParallaxSection
    backgroundImage={`url(${theatreStageImg})`}
    scrollingContent={<LessonsParallaxSection />}
    textSectionContent={<LessonsBackgroundSection />}
  />
);
