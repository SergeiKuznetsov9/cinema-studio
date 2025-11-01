import { ParallaxSection } from "@/shared/ParallaxSection";
import projectorTheatreImg from "@/assets/img/backgrounds/view-black-white-light-projector-theatre-1.jpg";

export const Contacts = () => (
  <ParallaxSection
    backgroundImage={`url(${projectorTheatreImg})`}
    scrollingContent={<div>КОНТЕНТ НА ФОНЕ</div>}
    textSectionContent={<div>КОНТЕНТ НА ТЕКСТОВОЙ ОБЛАСТИ</div>}
  />
);
