import Errors from '../Errors/handlerErros';

class Core {
  public readonly boxName = 'dont-box-modal';

  public async closeModal(modalBase: any) {
    try {
      let waitParams = await modalBase;
      if (waitParams) {
        const takeCancelElement: any = document.querySelectorAll('#dont-modal-cancel');
        for (let obj of takeCancelElement) {
          obj.style.cursor = 'pointer';
          obj.addEventListener('click', () => {
            modalBase.remove();
          }, false);
        }
      }
    } catch (e) {
      console.error(e);
      Errors.errorIntern();
    }
  }

  createBtn(terminoBtn: string) {
    let takeClassBtn = document.getElementsByClassName('dont-modal-footer')[0];
    const createNewBtn = document.createElement('button');
    createNewBtn.classList.add('dont-btn-success');
    createNewBtn.id = 'dont-modal-cancel';
    createNewBtn.textContent = terminoBtn;
    takeClassBtn.appendChild(createNewBtn);
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
