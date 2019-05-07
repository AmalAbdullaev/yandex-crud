// import sayHello from './lib/sayHello.js';

// sayHello();

import  {glide}  from './lib/glide.js';
import {Game} from './game.js';
glide();

let game = new Game ();

// CRUD
// game.getListOfGames().then(games => {
//   console.log(games);
// });

// game.getGame(2).then(game => {
//   console.log(game || 'game not found' );
// });

// game.deleteGame(5).then(game => {
//   console.log(game || 'game is not deleted');
// });

// game.addGame('God of War','Windows',500,'lol','img_path').then(game => {
//   console.log(game || 'game not found' );
// });

// game.editGame(12,'Watch Dogs','Windows',700,'lol','img_path').then(game => {
//   console.log(game || 'game not found' );
// });

// game.voteGame(12,4).then(game => {
//   console.log(game || 'game not found' );
// });


