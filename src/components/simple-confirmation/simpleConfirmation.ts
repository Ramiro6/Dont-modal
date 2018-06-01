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
    // if (termino.classList) { this.addClassToClassList(termino.classList); }
    const passData = () => {
      this.createModal();
      for (const key in termino) {
        if (termino.hasOwnProperty(key)) {
          switch (key) {
            case 'title':
              this.createContent(termino[key]);
              break;
            case 'btnCancel':
              this.createBtnCancel(termino[key]);
              break;
            case 'svg' || 'img':
              Errors.oneElement();
              break;
            case 'img':
              // this.createImg(termino[key]);
              this.createImg(termino[key]);
              console.log('hay un img');
              break;
            case 'svg':
              console.log('hay un svg');
              break;
          }
        }
      }
    };

    if (termino.title) {
      passData(); this.addClassToClassList(termino.classList);
    } else {
      Errors.noTitle();
    }
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
