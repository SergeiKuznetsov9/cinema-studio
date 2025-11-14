import { ParallaxSection } from "@/shared/ParallaxSection";
import fogImg from "@/assets/img/backgrounds/fog.png";

import { MainParallaxSection } from "./MainParallaxSection";
import { MainBackgroundSection } from "./MainBackgroundSection";

export const Main = () => (
  <ParallaxSection
    backgroundImage={`url(${fogImg})`}
    scrollingContent={<MainParallaxSection />}
    textSectionContent={<MainBackgroundSection />}
  />
);
