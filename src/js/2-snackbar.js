import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', message);

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();

  const delayInput = event.target.elements.delay.value;
  const state = event.target.elements.state.value;
  const delay = +delayInput;

  if (!delayInput || !state || isNaN(delay) || delay <= 0) {
    iziToast.warning({
      title: 'Caution',
      message: 'You forgot important data or entered an invalid delay',
      color: '#ffa000',
      position: 'topCenter',
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
      timeout: 3000,
    });
    return;
  }

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        title: '',
        titleColor: '#fff',
        message: `Fulfilled promise in ${delay}ms`,
        messageColor: `#fff`,
        color: 'green',
        position: 'topCenter',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        timeout: 3000,
      });
      event.target.reset();
    })
    .catch(delay => {
      iziToast.error({
        title: '',
        titleColor: '#fff',
        message: `Rejected promise in ${delay}ms`,
        messageColor: `#fff`,
        color: '#ef4040',
        position: 'topCenter',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        timeout: 3000,
      });
      event.target.reset();
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

function message() {
  iziToast.show({
    title: 'Hello',
    titleColor: '#fff',
    message: 'Welcome!',
    messageColor: '#fff',
    position: 'topCenter',
    color: '#09f',
    icon: 'fas fa-bell',
    timeout: 4000,
  });
}
