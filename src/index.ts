import Core from '../src/core/core';
import './modal/modal.css';
import NewModal from './modal/modal.html';

class DontModal extends Core {
  constructor() {
    super();
    console.log('Init constructor');
    document.addEventListener('DOMContentLoaded', () => {
      this.createModal();
    }, false);
    // this.createModal();
  }

  createModal() {
    const modal = document.createElement('div');
    modal.id = 'dont-box-modal';
    modal.innerHTML = NewModal;
    document.body.appendChild(modal);
    this.closeModal(modal);
  }
}

new DontModal();

export default DontModal;
