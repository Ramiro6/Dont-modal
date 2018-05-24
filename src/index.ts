import './modal/modal.css';
import New from './modal/modal.html';

class DontModal {
  constructor() {
    console.log('Init constructor')
    // document.addEventListener('DOMContentLoaded', () => {
    //   this.createModal();
    // }, false);
    this.createModal();
  }

  createModal() {
    console.log('modal on!');
    const modal = document.createElement('div');
    modal.innerHTML = New;
    document.body.appendChild(modal);
  }
}

// new DontModal();

export default DontModal;
