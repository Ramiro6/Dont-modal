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
    type: 'get',
    url: 'localhost:3000',
    token: 'mdjljasdjbasj',
  },
  classList: [{}],
  btnSuccess: 'send',
  btnCancel: 'cancel',
  title: 'lorem',
});

export { simpleConfirmation, MethodModal };
