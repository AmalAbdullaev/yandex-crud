import Glide from '@glidejs/glide';

export function glide() {
  new Glide('.glide', {
    type: 'carousel',
    perView: 3.5,
    autoplay: 2000,
    hoverpause: true,
    keyboard: true,
    perTouch: 5,
    gap: 15,
    peek: {
      before: 100,
      after: 50
    }
  
  }).mount();     
};
