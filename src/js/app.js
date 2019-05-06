import dustyEngine from 'dusty-template-engine';
import allGameTemplate from '../templates/game-all.template';

import {
  glide
} from './lib/glide.js';
import {
  Game
} from './game.js';
glide();

let game = [2, 1];

// game.getListOfGames().then(games => {
//   console.log(games);
// });

// let gameItem = document.querySelector('.content__game-all-list');
// gameItem.innerHTML += (dustyEngine(allGameTemplate()));

document.querySelector('.content__game-all-list').appendChild(
  game.reduce(function(f, game) {
    // f.appendChild(dustyEngine(allGameTemplate(game)));
    console.log(dustyEngine(allGameTemplate()));
    return f;
  }, document.createDocumentFragment())
);
