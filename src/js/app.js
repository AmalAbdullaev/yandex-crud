import {glide} from './lib/glide';
import {ratingStars} from './lib/rating-stars';
import initListeners from './controller/listeners.controller';
import {getListOfGames, getPopularGames} from './controller/main.controller';
import { addCover } from './lib/add-cover';
import { pureSlider } from './lib/pure-slider';
import { goTop } from './lib/go-top';

(function main() {
  // popular games slider
  // glide();
  // 5stars rating
  ratingStars();
  // get all games 
  getListOfGames();
  // getFavoriteGames();
  // popular games
  getPopularGames();
  //call listeners
  initListeners();
  pureSlider();
  goTop();
  addCover();
})();


// gameAPI.getGame(2).then(gameAPI => {
//   console.log(gameAPI || 'gameAPI not found' );
// });

// gameAPI.deleteGame(5).then(gameAPI => {
//   console.log(gameAPI || 'gameAPI is not deleted');
// });

// gameAPI.addGame('God of War','Windows',500,'lol','img_path').then(gameAPI => {
//   console.log(gameAPI || 'gameAPI not found' );
// });

// gameAPI.editGame(12,'Watch Dogs','Windows',700,'lol','img_path').then(gameAPI => {
//   console.log(gameAPI || 'gameAPI not found' );
// });

// gameAPI.voteGame(12,4).then(gameAPI => {
//   console.log(gameAPI || 'gameAPI not found' );
// });
