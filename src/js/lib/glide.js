import Glide from '@glidejs/glide';

export function glide() {
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
};
