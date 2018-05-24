import './modal/modal.css';
import New from './modal/modal.html';

class DontModal {

  constructor() {
    console.log('Init constructor');
    document.addEventListener('DOMContentLoaded', () => {
      this.createModal();
    }, false);
    // this.createModal();
  }

  createModal() {
    const modal = document.createElement('div');
    modal.id = 'dont-box-modal';
    modal.innerHTML = New;
    document.body.appendChild(modal);
    this.closeModalHeader();
    this.closeModalCancel();
  }

  closeModalHeader() {
    const takeCancelElement = document.getElementById('dont-modal-cancel-header');
    takeCancelElement.style.cursor = 'pointer';
    takeCancelElement.addEventListener('click', () => {
      const takeAllModal = document.getElementById('dont-box-modal');
      takeAllModal.remove();
    }, false);
  }

  closeModalCancel() {
    const takeCancelElement = document.getElementById('dont-modal-cancel');
    takeCancelElement.style.cursor = 'pointer';
    takeCancelElement.addEventListener('click', () => {
      const takeAllModal = document.getElementById('dont-box-modal');
      takeAllModal.remove();
    }, false);
  }
}

new DontModal();

export default DontModal;
