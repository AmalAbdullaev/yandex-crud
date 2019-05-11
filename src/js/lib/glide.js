import Glide from '@glidejs/glide';

export function glide() {
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3.5,
    // autoplay: 4000,
    hoverpause: true,
    keyboard: true,
<<<<<<< HEAD
    perTouch: 3,
=======
    // perTouch: 5,
>>>>>>> server
    gap: 15,
    peek: {
      before: 100,
      after: 50
    }
  
  }).mount();     
};
