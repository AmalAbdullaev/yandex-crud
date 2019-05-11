import browserJSEngine from './lib/engine';
import allGameTemplate from '../templates/game-all.template';
import popularGameTemplate from '../templates/game-popular.template';


import {glide} from './lib/glide';
import {ratingStars} from './lib/rating-stars';
import {Game} from './game';

// popular games slider
glide();

// 5stars rating
ratingStars();

let game = new Game();

game.getListOfGames().then(games => {
  console.log(games);
  document.querySelector('.content__game-all-list').appendChild(
    browserJSEngine(games.map(allGameTemplate))
  );
//   document.querySelector('.glide__slides').appendChild(
//     browserJSEngine(games.map(popularGameTemplate))
//   );
});

let searchButton =document.querySelector('.site-header__search-button');
searchButton.onclick = function() {
  let title = document.querySelector('.site-header__search-input').value;
  game.searchGame(title).then(games => {
    console.log(games);
  });
};



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



