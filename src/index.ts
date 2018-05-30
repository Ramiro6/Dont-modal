// import Img from '../static/applab-intro.png';
import simpleConfirmation from './components/simple-confirmation/simpleConfirmation';

const j = {
  classList: [{
    btnCancel: 'btn',
  }],
  btn: 'send',
  title: 'lorem',
};

new simpleConfirmation(j);

// setTimeout(() => {
//   x.deleteDynamic();
// }, 3000);

export default simpleConfirmation;
