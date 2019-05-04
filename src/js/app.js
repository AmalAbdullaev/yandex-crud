// import sayHello from './lib/sayHello.js';

// sayHello();


import Glide from '@glidejs/glide';

new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 3.5,
  autoplay: 4000,
  hoverpause: true,
  keyboard: true,
  perTouch: 5,
  gap: 15,

}).mount();

