import {GameModel} from '../model/game.model';
import {renderGames} from '../view/render.view';
import {renderPopularGames} from '../view/render.view';

let gameModel = new GameModel();
let favoritesBtn = document.querySelector('.site-header__favorite-wrapper');
let copyFavoritesBtn = favoritesBtn.cloneNode(true);

let siteContent = document.querySelector('.site-content-wrapper');

let contentGamePopular = document.querySelector('.content__game');

let contentSectionTitle = document.querySelectorAll('.content__section-title')[1];
let filters = document.querySelector('.content__filter');
let contentFilter = document.querySelector('.content__filter-wrapper');
let headerRightSide = document.querySelector('.site-header__right-side');

let isMainMode = true; 

function getListOfGames() {
  gameModel.getListOfGames().then(games => {
    renderGames('.content__game-all-list',games);
  });
};

function getPopularGames() {
  gameModel.getListOfGames().then(games => {
    let result = [];
    let randomElement;

    let filteredGames = games.filter(e => Math.round(e.rating) > 4);

    while(filteredGames.length > 0) {
      if (result.length === 3) break;
      randomElement = filteredGames[Math.floor(Math.random() * filteredGames.length)];
      result.push(randomElement);
      let index = filteredGames.indexOf(randomElement);
      if (index !== -1) filteredGames.splice(index, 1);
    }
    renderPopularGames('.content__game-popular',result);
  });


  favoritesBtn.onclick = getFavoiteGames;

  function getFavoiteGames() {

    if(isMainMode) {
      console.log('asdf');
      gameModel.getListOfGames().then(games => {
        games = games.filter(function(game) {
          return game.isFavorite === 'true';
        });
        contentSectionTitle.innerText = 'Избранное';
        favoritesBtn.innerText = 'Все игры';
        filters.remove();
        contentGamePopular.remove();
        // renderGames('.content__game-all-list',games);
        renderGames('.content__game-all-list',games);
        isMainMode = false;
        favoritesBtn.onclick = getFavoiteGames;
        copyFavoritesBtn.remove();
        headerRightSide.insertBefore(favoritesBtn,headerRightSide.firstChild);
      });
    }
    else {
      // favoritesBtn.remove();
      console.log('hello');
      contentSectionTitle.innerText = 'Все игры';
      getListOfGames();
      siteContent.insertBefore(contentGamePopular, siteContent.firstChild);
      contentFilter.appendChild(filters);

      copyFavoritesBtn.onclick = getFavoiteGames;
      favoritesBtn.remove();
      headerRightSide.insertBefore(copyFavoritesBtn,headerRightSide.firstChild);

      // headerRightSide.insertBefore(favoritesBtn,headerRightSide.firstChild);
      isMainMode = true;
    }
  };
}

module.exports = { getListOfGames,getPopularGames};
