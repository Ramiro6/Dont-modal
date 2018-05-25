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
}

export default Core;
