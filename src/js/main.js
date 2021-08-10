import Slider from "./modules/Slider";
import VideoPlayer from "./modules/VideoPlayer";

const slider = new Slider('.page', '.next');
slider.render();

const player = new VideoPlayer('.showup .play', '.overlay');
player.init();
