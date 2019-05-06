// import sayHello from './lib/sayHello.js';

// sayHello();

import  {glide}  from './lib/glide.js';
import {Game} from './game.js';
glide();

let game = new Game ();

// game.getListOfGames().then(games => {
//   console.log(games);
// });

// game.getGame(1).then(game => {
//   console.log(game);
// });

game.deleteGame(5).then(g => {
  console.log(g);
});
