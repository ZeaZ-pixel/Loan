export default class Difference {
  constructor(oldOfficer, newOfficer, items){
    this.oldOfficer = document.querySelector(oldOfficer);
    this.newOfficer = document.querySelector(newOfficer);
    this.oldItems = this.oldOfficer.querySelectorAll(items);
    this.newItems = this.newOfficer.querySelectorAll(items);
    this.oldCounter = 0;
    this.newCounter = 0;
  }

  hideElem(SomeItem) {
    SomeItem.forEach((item, i, arr) => {
      if(i !== arr.length - 1){
        item.style.display = 'none';
      }
    });
  }

  bindTriggers(container, items, counter){
    container.querySelector('.plus').addEventListener('click', () => {

      items[counter].classList.add('animated', 'slideInDown');
      items[items.length-1].classList.add('animated', 'slideInDown');
      
      if(counter !== items.length - 2){
        items[counter].style.display = 'flex';
        counter++;
      } else {
        items[counter].style.display = 'flex';
        items[items.length-1].remove();
      } 

    });
  }

  init(){
    this.hideElem(this.oldItems);
    this.hideElem(this.newItems);
    this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
    this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
  }
}