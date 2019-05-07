import browserJSEngine from './lib/engine';
import allGameTemplate from '../templates/game-all.template';

import {glide} from './lib/glide.js';
import {Game} from './game.js';
glide();

let game = [{},{},{}];


// game.getListOfGames().then(games => {
//   console.log(games);
// });

// let gameItem = document.querySelector('.content__game-all-list');
// gameItem.innerHTML += (dustyEngine(allGameTemplate()));


document.querySelector('.content__game-all-list').appendChild(
  browserJSEngine(game.map(allGameTemplate))
);
console.log(typeof browserJSEngine(game.map(allGameTemplate)));
