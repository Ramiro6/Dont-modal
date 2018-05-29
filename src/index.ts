// import Core from '../src/core/core';
import Img from '../../../applab-intro.png';
import simpleConfirmation from './components/simple-confirmation/simpleConfirmation';
// import './modal/modal.css';
// import NewModal from './modal/modal.html';

// class DontModal extends Core {
//   constructor() {
//     super();
//     console.log('Init constructor');
//     // document.addEventListener('DOMContentLoaded', () => {
//     //   this.createModal();
//     // }, false);
//     this.createModal();
//   }

//   createModal() {
//     const modal = document.createElement('div');
//     modal.id = 'dont-box-modal';
//     modal.innerHTML = NewModal;
//     document.body.appendChild(modal);
//     this.closeModal(modal);
//   }
// }

const j = {
  btn: 'send',
  img: Img,
  title: 'lorem',
};

new simpleConfirmation(j);

// setTimeout(() => {
//   x.deleteDynamic();
// }, 3000);

export default simpleConfirmation;
