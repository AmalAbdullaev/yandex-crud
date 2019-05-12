
import {glide} from './lib/glide';
import {ratingStars} from './lib/rating-stars';
import {GameAPI} from './gameAPI';
import {renderGames} from './render';

import { addCover } from './lib/add-cover';


let gameAPI = new GameAPI();
// popular games slider
glide();

// 5stars rating
ratingStars();
// get all games 
getListOfGames();

addCover();

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
