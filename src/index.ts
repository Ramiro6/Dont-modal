// import Img from '../static/applab-intro.png';
import MethodModal from './components/method-modal/methodModal';
import simpleConfirmation from './components/simple-confirmation/simpleConfirmation';

// const j = {
//   classList: [{
//     // btnCancel: 'btn',
//   }],
//   btn: 'send',
//   title: 'lorem',
// };

// new simpleConfirmation(j);

// setTimeout(() => {
//   x.deleteDynamic();
// }, 3000);

new MethodModal({
  method: {
    type: 'GET',
  },
  classList: [{}],
  btn: 'send',
  title: 'lorem',
});

export { simpleConfirmation, MethodModal };
