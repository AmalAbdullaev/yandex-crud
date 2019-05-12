import {GameModel} from '../model/game.model';
import {renderGames} from '../view/render.view';

module.exports = function listeneres() {
  let gameModel = new GameModel();
  let searchButton = document.querySelector('.site-header__search-button');
  let input = document.querySelector('.site-header__search-input');
  let contentGameList = document.querySelector('.content__game-all-list');
  let clearSearchButton = document.querySelector('.site-header__clear-button');


  searchButton.onclick = function() {
    let title = document.querySelector('.site-header__search-input').value;
    gameModel.searchGame(title).then(games => {
      renderGames('.content__game-all-list',games);
    });
  };

  input.oninput = function() {
    if(input.value<=2) {
      gameModel.getListOfGames().then(games => {
        renderGames('.content__game-all-list',games);
      });
    }
  };

  clearSearchButton.onclick = function() {
    input.value = '';
    gameModel.getListOfGames().then(games => {
      renderGames('.content__game-all-list',games);
    });
  };

  contentGameList.onclick = function(event) {
    if(event.target.className === 'fas fa-star') {
      let id = event.target.parentNode.parentNode.parentNode.getAttribute('id');
      let starsCount = event.target.parentNode.getAttribute('data-value');
      gameModel.voteGame(id,starsCount).then(g => {
        console.log(g);
      });
    }
    if(event.target.className === 'content__bookmark') {
      gameModel.getGame(event.target.name).then(g => {
        g.isFavorite = event.target.checked;
        gameModel.editGame(g).then(g => {
          console.log(g || 'game not found' );
        });
      });
    }
  };
};
