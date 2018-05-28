import Errors from '../Errors/handlerErros';

class Core {
  public readonly boxName = 'dont-box-modal';

  closeModal(modalBase: any) {
    const takeCancelElement: any = document.querySelectorAll('#dont-modal-cancel');
    for (let obj of takeCancelElement) {
      obj.style.cursor = 'pointer';
      obj.addEventListener('click', () => {
        modalBase.remove();
      }, false);
    }
  }

  createBtn(termino: string) {
    console.log(termino);
  }

  createContent(termino: string) {
    const create = () => {
      let takeElement = document.getElementsByClassName('dont-modal-body')[0];
      const createNewContent = document.createElement('p');
      createNewContent.textContent = termino;
      createNewContent.classList.add('dont-simple-body');
      takeElement.appendChild(createNewContent);
    };

    termino ? create() : Errors.noContent();
  }

  public deleteDynamic(): void {
    const deleteElement = document.getElementById(`${this.boxName}`);
    if (deleteElement) { deleteElement.remove(); }
  }
}

export default Core;
