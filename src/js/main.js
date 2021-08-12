import MainSlider from "./modules/Slider/MainSlider";
import MiniSlider from "./modules/Slider/MiniSlider";
import VideoPlayer from "./modules/VideoPlayer";
import Difference from "./modules/Difference";

const slider = new MainSlider({container:'.page', btns: '.next'});
slider.render();

const showUpSlider = new MiniSlider({container: '.showup__content-slider', next: '.showup__next' ,prev: '.showup__prev', activeClass: 'card-active', animate: true});
showUpSlider.init();

const modelesSlider = new MiniSlider({container: '.modules__content-slider', next: '.modules__info-btns .slick-next', prev: '.modules__info-btns .slick-prev',  activeClass: 'card-active', animate: true, autoplay: true});
modelesSlider.init();

const feedSlider = new MiniSlider({container: '.feed__slider', next: '.feed__slider .slick-next', prev: '.feed__slider .slick-prev',  activeClass: 'feed__item-active'});
feedSlider.init();

const player = new VideoPlayer('.showup .play', '.overlay');
player.init();

const difference = new Difference('.officerold', '.officernew', '.officer__card-item');
difference.init();