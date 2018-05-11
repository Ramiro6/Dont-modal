// import Template from './modal.html';
import New from './modal.html';

class DontModal {
  constructor() {
    setTimeout(() => {
      this.takeData();
    }, 1);
  }

  takeData() {
    this.createModal();
  }

  createModal() {
    console.log('modal on!');
    const modal = document.createElement('div');
    modal.innerHTML = New;
    document.body.appendChild(modal);
  }
}




new DontModal()

export default DontModal;
