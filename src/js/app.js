import browserJSEngine from './lib/engine';
import allGameTemplate from '../templates/game-all.template';

import {glide} from './lib/glide.js';
import {Game} from './game.js';
glide();

<<<<<<< HEAD
let game = [{},{},{}];


=======
let game = new Game ();

// CRUD
>>>>>>> server
// game.getListOfGames().then(games => {
//   console.log(games);
// });

<<<<<<< HEAD
// let gameItem = document.querySelector('.content__game-all-list');
// gameItem.innerHTML += (dustyEngine(allGameTemplate()));
=======
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
>>>>>>> server


document.querySelector('.content__game-all-list').appendChild(
  browserJSEngine(game.map(allGameTemplate))
);
console.log(typeof browserJSEngine(game.map(allGameTemplate)));
