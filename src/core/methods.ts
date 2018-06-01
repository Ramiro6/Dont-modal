import ImethodList from '../interfaces/methodList';

class Method {
  switchMethod(switchTermino: any) {
    const elementMehotd = switchTermino.type.toUpperCase();
    switch (elementMehotd) {
      case 'GET':
        this.methodGet(switchTermino);
        break;
      case 'DELETE':
        this.methodDelete(switchTermino);
        break;
    }
  }

  methodGet(takeElement: ImethodList) {
    console.log(takeElement);
  }

  private methodDelete(takeElement: ImethodList): void {
    const headers = new Headers({'X-Requested-With': 'XMLHttpRequest', 'X-CSRF-Token': takeElement.token});
    const url = takeElement.url;

    fetch(url, {
      method: 'DELETE',
      headers,
      credentials: 'same-origin',
    }).then((data) => {
      console.log(data);
      this.allResponse(data);
    });
  }

  allResponse(dataResponse: any) {
    console.log('hola desde data response');
    console.log(dataResponse);
    return 'asdjasdhkjdashjkads';
  }

}

export default Method;
