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
    console.log('Method on!');
  }

  methodDelete(takeElement: ImethodList) {
    console.log(takeElement);
    console.log('Method delete!');
    const headersType = new Headers({'X-Requested-With': 'XMLHttpRequest', 'X-CSRF-Token': takeElement.token});
    const url = takeElement.url;

    fetch(url, {
      method: 'DELETE',
      headers: headersType,
      credentials: 'same-origin',
    }).then((data) => {
      console.log(data);
    });
  }

}

export default Method;
