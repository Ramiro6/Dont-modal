import Core from '../../core/core';
import Errors from '../../Errors/handlerErros';
import './methodModal.css';
import NewModal from './methodModal.html';

class MethodModal extends Core {
  constructor(termino: object) {
    super();
    // document.addEventListener('DOMContentLoaded', () => {
    //   this.validateModal(termino);
    // }, false);
    this.validateModal(termino);
  }

  validateModal(termino: any) {
    // this.createModal();

    const passData = () => {
      this.createModal().then((res: any) => {
        if (res === true) {
          this.validateMethods(termino);
        }
      });
      for (const key in termino) {
        if (termino.hasOwnProperty(key)) {
          switch (key) {
            case 'title':
              this.createContent(termino[key]);
              break;
            case 'btnCancel':
              this.createBtnCancel(termino[key]);
              break;
            case 'btnSuccess':
              this.createBtn(termino[key]);
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
      passData();
      this.addClassToClassList(termino.classList);
    } else {
      Errors.noTitle();
    }
  }

  createModal() {
    const modal = document.createElement('div');
    modal.id = this.boxName;
    modal.innerHTML = NewModal;
    document.body.appendChild(modal);

    return new Promise((resolve: any) => {
      this.closeModal(modal).then((res: any) => {
        res ? resolve(res) : resolve(false);
      });
    });
    // this.createContent(termino);
  }

}

export default MethodModal;
