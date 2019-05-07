import browserJSEngine from './lib/engine';
import allGameTemplate from '../templates/game-all.template';

import {glide} from './lib/glide.js';
import {Game} from './game.js';
glide();

let game = new Game();


game.getListOfGames().then(games => {
  console.log(games);
  

  document.querySelector('.content__game-all-list').appendChild(
    browserJSEngine(games.map(allGameTemplate))
  );
});

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




