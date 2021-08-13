export default class Form{
  constructor(form, url, method){
    this.form = document.querySelector(form);
    this.url = url;
    this.method = method;
    this.inputs = this.form.querySelectorAll('input');
  }

  initMask() {
    let setCursorPosition = (pos, elem) => {
      elem.focus();
      
      if (elem.setSelectionRange) {
          elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
          let range = elem.createTextRange();

          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
      }
  };

  function createMask(event) {
      let matrix = '+1 (___) ___-____',
          i = 0,
          def = matrix.replace(/\D/g, ''),
          val = this.value.replace(/\D/g, '');

      if (def.length >= val.length) {
          val = def;
      }

      this.value = matrix.replace(/./g, function(a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });

      if (event.type === 'blur') {
          if (this.value.length == 2) {
              this.value = '';
          }
      } else {
          setCursorPosition(this.value.length, this);
      }
  }

  let inputs = document.querySelectorAll('[name="phone"]');

  inputs.forEach(input => {
      input.addEventListener('input', createMask);
      input.addEventListener('focus', createMask);
      input.addEventListener('blur', createMask);
  });
  }

  checkMailInputs() {
    const mailInputs = document.querySelectorAll('[type="email"]');

    mailInputs.forEach(mail => {
      mail.addEventListener('keypress', (e) => {
        if(e.key.match(/[^a-z 0-9 @ \.]/ig)){
          e.preventDefault();
        }
      });
    });
  }

  async postData(form){
    const res = await fetch(this.url, {
      method: this.method,
      body: form
    });
    return await res.text();
  }

  init(){
    this.initMask();
    this.checkMailInputs();

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.style.cssText = 
        `
          margin-top: 15px;
          font-size: 18px;
          color: grey;
        `;

      this.form.parentNode.appendChild(statusMessage);
      statusMessage.textContent = 'Loading...';

      const formData = new FormData(this.form);


      this.postData(formData)
        .then(res => {
          console.log(res);
          statusMessage.textContent = 'Succes!';
        })
        .catch((e) => {
          console.log(e);
          statusMessage.textContent = 'Error';
        })
        .finally(() => {
          this.form.reset();
          setTimeout(() => {
            statusMessage.remove();
          }, 3000);
        });

    });
  }

}