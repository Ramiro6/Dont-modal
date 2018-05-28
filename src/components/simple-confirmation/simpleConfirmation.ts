import Core from '../../core/core';
import Errors from '../../Errors/handlerErros';
import './SimpleConfirmation.css';
import NewModal from './SimpleConfirmation.html';

class SimpleConfirmation extends Core {
  constructor(termino: object) {
    super();
    document.addEventListener('DOMContentLoaded', () => {
      // this.createModal(termino);
      this.validateSimpleModal(termino);
    }, false);
    // this.validateSimpleModal(termino);
  }

  validateSimpleModal(termino: any) {
    if (termino.title) {
      this.createModal();
      for (const key in termino) {
        if (termino.hasOwnProperty(key)) {
          // const element = termino[key];
          // console.log(element);
          switch (key) {
            case 'title':
              console.log('hay un title');
              console.log(termino[key]);
              this.createContent(termino[key]);
              break;
            case 'btn':
              console.log('hay un btn');
              this.createBtn(termino[key]);
              break;
            case 'img':
              console.log('hay un img');
              break;
            case 'svg':
              console.log('hay un svg');
              break;
          }
        }
      }

      console.log('Validado');
    } else {
      Errors.noTitle();
    }
    // if (condition) {
    //   this.createModal(termino);
    // }
  }
  // termino: string
  createModal() {
    console.log(this.boxName);
    const modal = document.createElement('div');
    modal.id = this.boxName;
    modal.innerHTML = NewModal;
    document.body.appendChild(modal);
    this.closeModal(modal);
    // this.createContent(termino);
  }
}

export default SimpleConfirmation;
