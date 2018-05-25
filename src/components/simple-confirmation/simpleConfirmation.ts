import Core from '../../core/core';
import './SimpleConfirmation.css';
import NewModal from './SimpleConfirmation.html';

class SimpleConfirmation extends Core {
  constructor(termino: string) {
    super();
    document.addEventListener('DOMContentLoaded', () => {
      this.createModal(termino);
    }, false);
    // this.createModal(termino);
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
