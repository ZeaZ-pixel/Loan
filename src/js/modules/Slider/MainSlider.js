import Slider from "./Slider";

export default class MainSlider extends Slider{
  constructor(btns){
    super(btns);
  }

  
  showSlide(n) {
    
    if(n > this.slides.length){
      this.slideIndex = 1;
    }

    if(n < 1){
      this.slideIndex = this.slides.length;
    }

    try{
      this.hanson.style.opacity = '0';
      if(n === 3){
        this.hanson.classList.add('animated');
        setTimeout(() => {
          this.hanson.style.opacity = '1';
          this.hanson.classList.add('slideInUp');
        }, 3000);
      } else {
        this.hanson.classList.remove('slideInUp');
      }
    } catch (e) {
      console.log(e);
    }


    this.slides.forEach(item => {
      item.style.display = "none";
    });

    this.slides[this.slideIndex-1].style.display = "block";
  }

  nextSlide(n) {
    this.showSlide(this.slideIndex += n);
  }

  bindTriggers(){
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.nextSlide(1);
      });

      btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault();

        this.slideIndex = 1;
        this.showSlide(this.slideIndex);
      });
    });

    document.querySelectorAll('.prevmodule').forEach(item => {
      item.addEventListener('click', () => {
        this.nextSlide(-1);
      });
    });

    document.querySelectorAll('.nextmodule').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.nextSlide(1);
      });
    });
  }


  render() {
    if(this.container){
      try{
        this.hanson = document.querySelector('.hanson');
      } catch(e) {
        console.log(e);
      }
  
      this.showSlide(this.slideIndex);
      this.bindTriggers();
    }
  } 
}