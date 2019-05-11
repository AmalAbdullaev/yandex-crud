import {glide} from './lib/glide';
import {ratingStars} from './lib/rating-stars';
import {Game} from './game';
import {renderGames} from './render';

// popular games slider
glide();

// 5stars rating
ratingStars();

let game = new Game();

game.getListOfGames().then(games => {
  renderGames('.content__game-all-list',games);
});

let searchButton = document.querySelector('.site-header__search-button');
let input = document.querySelector('.site-header__search-input');
let favorite = document.querySelector('.content__bookmark');

searchButton.onclick = function() {
  let title = document.querySelector('.site-header__search-input').value;
  game.searchGame(title).then(games => {
    renderGames('.content__game-all-list',games);
  });
};

input.oninput = function() {
  if(input.value<=2) {
    game.getListOfGames().then(games => {
      renderGames('.content__game-all-list',games);
    });
  }
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



