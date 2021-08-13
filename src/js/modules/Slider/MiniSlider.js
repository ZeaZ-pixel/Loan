import Slider from "./Slider";
export default class MiniSlider extends Slider{
  constructor(container, next, prev, activeClass, animate, autoplay){
    super(container, next, prev, activeClass, animate, autoplay);
    this.btns = 0;
  }

  decorizeSlide(){
    this.slides.forEach(slide => {
      slide.classList.remove(this.activeClass);
      if(this.animate){
        slide.querySelector('.card__title').style.opacity = '0.4';
        slide.querySelector('.card__controls-arrow').style.opacity = '0.4';
      }
    });
    this.slides[0].classList.add(this.activeClass);
    if(this.animate){
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }

  bindTriggers() {
    this.next.addEventListener('click', () => this.nextSlide());
    
    this.prev.addEventListener('click', () => {
      let active = this.slides[this.slides.length - (1 + this.btns)];
      this.container.insertBefore(active, this.slides[0]);
      this.decorizeSlide();
    });
  }

  nextSlide(){
    let active = this.slides[this.slides.length - (1 + this.btns)];
    this.container.insertBefore(this.slides[0], active.nextSibling);
    this.decorizeSlide();
  }

  checkBtnsInContainer(){
    this.slides.forEach(slide => {
      if(slide.tagName === 'BUTTON'){
        this.btns++;
      }
    });
  }

  init(){
    try{
      this.container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
      `;
      this.checkBtnsInContainer();  
      this.bindTriggers();
      this.decorizeSlide();

      if(this.autoplay){
        setInterval(() => this.nextSlide(), 5000);
      }
    }catch(e){}
  }
}