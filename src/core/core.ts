import Errors from '../Errors/handlerErros';
import IclassList from '../interfaces/classList';
import ImethodList from '../interfaces/methodList';
import Method from './methods';

class Core extends Method {
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

  createImg(imgTerm: any) {
    console.log(imgTerm);
    const takePather = document.getElementsByClassName('dont-modal-body')[0];
    const createNewImage = document.createElement('img');
    createNewImage.src = imgTerm;
    createNewImage.classList.add('dont-img-modal');
    takePather.appendChild(createNewImage);
  }

  createBtnCancel(terminoBtn: string) {
    let takeClassBtn = document.getElementsByClassName('dont-modal-footer')[0];
    const createNewBtn = document.createElement('button');
    createNewBtn.classList.add('dont-btn-cancel');
    createNewBtn.classList.add('dont-btn');
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

  addClassToClassList(classList: IclassList[]) {
    const replaceBtnCancel = (newItem: string) => {
      // control error
      const takeBtnCancel = document.getElementsByClassName('dont-btn')[0];
      let array: any = newItem.split(' ');
      takeBtnCancel.classList.remove('dont-btn-cancel');
      takeBtnCancel.classList.add(... array);
    };

    const elements: any = new Object(... classList);
    for (const key in elements) {
      if (elements.hasOwnProperty(key)) {
        // const signature = elements[key];
        if (key === 'btnSuccess') {
          console.log('si tiene');
        } else if (key === 'btnCancel') {
          elements[key].replace(/\s/g, '') === '' ? Errors.needAdd() : replaceBtnCancel(elements[key]);
        }
      }
    }
  }

  public deleteDynamic(): void {
    const deleteElement = document.getElementById(`${this.boxName}`);
    if (deleteElement) { deleteElement.remove(); }
  }

  validateMethods(allMethods: any) {
    const validator = () => {
      console.log('validador');
      console.log(allMethods);
    };

    const acceptContent: ImethodList = allMethods.method;
    acceptContent ? validator() : console.log('na');
  }
}

// saludo('dasdaskjdhkas');

export default Core;
