import { ParallaxSection } from "../shared/ParallaxSection/ParallaxSection";
import fogImg from "@/assets/img/backgrounds/fog.png";
import stageImg from "@/assets/img/backgrounds/stage.png";
import theatreStageImg from "@/assets/img/backgrounds/view-black-white-theatre-stage.jpg";
import projectorTheatreImg from "@/assets/img/backgrounds/view-black-white-light-projector-theatre-1.jpg";

export const App = () => (
  <div>
    <ParallaxSection
      backgroundImage={`url(${fogImg})`}
      scrollingContent={<div>КОНТЕНТ НА ФОНЕ</div>}
      textSectionContent={<div>КОНТЕНТ НА ТЕКСТОВОЙ ОБЛАСТИ</div>}
    />
    <ParallaxSection
      backgroundImage={`url(${stageImg})`}
      scrollingContent={<div>КОНТЕНТ НА ФОНЕ</div>}
      textSectionContent={<div>КОНТЕНТ НА ТЕКСТОВОЙ ОБЛАСТИ</div>}
    />
    <ParallaxSection
      backgroundImage={`url(${theatreStageImg})`}
      scrollingContent={<div>КОНТЕНТ НА ФОНЕ</div>}
      textSectionContent={<div>КОНТЕНТ НА ТЕКСТОВОЙ ОБЛАСТИ</div>}
    />
    <ParallaxSection
      backgroundImage={`url(${projectorTheatreImg})`}
      scrollingContent={<div>КОНТЕНТ НА ФОНЕ</div>}
      textSectionContent={<div>КОНТЕНТ НА ТЕКСТОВОЙ ОБЛАСТИ</div>}
    />
  </div>
);
