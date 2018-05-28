import Core from '../../core/core';
import Errors from '../../Errors/handlerErros';
import './SimpleConfirmation.css';
import NewModal from './SimpleConfirmation.html';

class SimpleConfirmation extends Core {
  constructor(termino: object) {
    super();
    // document.addEventListener('DOMContentLoaded', () => {
    //   this.createModal(termino);
    // }, false);
    this.validateSimpleModal(termino);
  }

  validateSimpleModal(termino: any) {
    if (termino.title) {
      for (const key in termino) {
        if (termino.hasOwnProperty(key)) {
          // const element = termino[key];
          // console.log(element);
          console.log(key);
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

  createModal(termino: string) {
    console.log(this.boxName);
    const modal = document.createElement('div');
    modal.id = this.boxName;
    modal.innerHTML = NewModal;
    document.body.appendChild(modal);
    this.closeModal(modal);
    this.createContent(termino);
  }
}

export default SimpleConfirmation;
