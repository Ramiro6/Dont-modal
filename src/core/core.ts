class Core {
  closeModal(modalBase: any) {
    const takeCancelElement: any = document.querySelectorAll('#dont-modal-cancel');
    for (let obj of takeCancelElement) {
      obj.style.cursor = 'pointer';
      obj.addEventListener('click', () => {
        modalBase.remove();
      }, false);
    }
  }

  createContent(termino: string) {
    let takeElement = document.getElementsByClassName('dont-modal-body')[0];
    const createNewContent = document.createElement('p');
    createNewContent.textContent = termino;
    createNewContent.classList.add('dont-simple-body');
    takeElement.appendChild(createNewContent);
  }
}

export default Core;
