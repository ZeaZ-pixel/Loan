export default class ShowInfo {
  constructor(triggers, msg) {
    this.btn = document.querySelectorAll(triggers);
    this.msg = document.querySelector(msg);
  }

  init() {
    this.btn.forEach(btn => {
      btn.addEventListener('click', () => {
        this.msg.classList.add('animated');
        if (window.getComputedStyle(this.msg).display === 'none'){
          this.msg.style.display = 'block';
          this.msg.classList.add('slideInDown');
        } else {
            this.msg.style.display = 'none';
        } 
      });
    });
  }
}