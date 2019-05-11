import {glide} from './lib/glide';
import {ratingStars} from './lib/rating-stars';
import {GameAPI} from './gameAPI';
import {renderGames} from './render';


let gameAPI = new GameAPI();
// popular games slider
glide();

// 5stars rating
ratingStars();
// get all games 
getListOfGames();

function getListOfGames() {
  gameAPI.getListOfGames().then(games => {
    renderGames('.content__game-all-list',games);
  });
};

function getFavoriteGames() {
  gameAPI.getListOfGames().then(games => {
    games = games.filter(function(game) {
      return game.isFavorite === 'true';
    });
    // renderGames('.content__game-all-list',games);
    console.log(games);
  });
}


let searchButton = document.querySelector('.site-header__search-button');
let input = document.querySelector('.site-header__search-input');
let contentGameList = document.querySelector('.content__game-all-list');
let clearSearchButton = document.querySelector('.site-header__clear-button');

contentGameList.onclick = function(event) {
  if(event.target.className === 'content__bookmark') {
    gameAPI.getGame(event.target.name).then(g => {
      g.isFavorite = event.target.checked;
      gameAPI.editGame(g).then(g => {
        console.log(g || 'game not found' );
      });
    });
  }
};

// stars.onclick = function(event) {
//   console.log(event.target,'erferf');
//   if(event.target.className === 'fa-star') {
//     console.log(event.target,'er');
//   }
// };

searchButton.onclick = function() {
  let title = document.querySelector('.site-header__search-input').value;
  gameAPI.searchGame(title).then(games => {
    renderGames('.content__game-all-list',games);
  });
};

input.oninput = function() {
  if(input.value<=2) {
    gameAPI.getListOfGames().then(games => {
      renderGames('.content__game-all-list',games);
    });
  }
};

clearSearchButton.onclick = function() {
  gameAPI.getListOfGames().then(games => {
    renderGames('.content__game-all-list',games);
  });
};


contentGameList.onclick = function(event) {
  if(event.target.className === 'fas fa-star') {
    let id = event.target.parentNode.parentNode.parentNode.getAttribute('id');
    let starsCount = event.target.parentNode.getAttribute('data-value');


    gameAPI.voteGame(id,starsCount).then(g => {
      console.log(g);
    });
  }
};
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



