// import sayHello from './lib/sayHello.js';

// sayHello();

import  {glide}  from './lib/glide.js';
import {Game} from './game.js';
glide();

let game = new Game ();
game.getListOfGames().then(games => {
  console.log(games);
});


