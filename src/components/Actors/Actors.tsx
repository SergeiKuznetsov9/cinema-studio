import { ParallaxSection } from "@/shared/ParallaxSection";
import projectorTheatreImg from "@/assets/img/backgrounds/view-black-white-light-projector-theatre-1.jpg";
import { ActorsBackgroundSection } from "./ActorsBackgroundSection";
import { ActorsParallaxSection } from "./ActorsParallaxSection";

export const Actors = () => (
  <ParallaxSection
    backgroundImage={`url(${projectorTheatreImg})`}
    scrollingContent={<ActorsParallaxSection />}
    textSectionContent={<ActorsBackgroundSection />}
  />
);
