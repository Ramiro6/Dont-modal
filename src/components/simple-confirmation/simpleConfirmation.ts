import Core from '../../core/core';
import Errors from '../../Errors/handlerErros';
import './SimpleConfirmation.css';
import NewModal from './SimpleConfirmation.html';

class SimpleConfirmation extends Core {
  constructor(termino: object) {
    super();
    // document.addEventListener('DOMContentLoaded', () => {
    //   // this.createModal(termino);
    //   this.validateSimpleModal(termino);
    // }, false);
    this.validateSimpleModal(termino);
  }

  validateSimpleModal(termino: any) {
    const passData = () => {
      this.createModal();
      for (const key in termino) {
        if (termino.hasOwnProperty(key)) {
          switch (key) {
            case 'title':
              this.createContent(termino[key]);
              break;
            case 'btn':
              this.createBtn(termino[key]);
              break;
            case 'svg' || 'img':
              Errors.oneElement();
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
    };

    termino.title ? passData() : Errors.noTitle();
  }
  // termino: string
  createModal() {
    const modal = document.createElement('div');
    modal.id = this.boxName;
    modal.innerHTML = NewModal;
    document.body.appendChild(modal);
    this.closeModal(modal);
    // this.createContent(termino);
  }
}

export default SimpleConfirmation;
