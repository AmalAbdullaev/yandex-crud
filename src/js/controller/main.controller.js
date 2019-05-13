import {GameModel} from '../model/game.model';
import {renderGames} from '../view/render.view';
import {renderPopularGames} from '../view/render.view';

let gameModel = new GameModel();

function getListOfGames() {
  gameModel.getListOfGames().then(games => {
    renderGames('.content__game-all-list',games);
  });
};

function getFavoriteGames() {
  gameModel.getListOfGames().then(games => {
    games = games.filter(function(game) {
      return game.isFavorite === 'true';
    });
    // renderGames('.content__game-all-list',games);
    console.log(games);
  });
}

function getPopularGames() {
  gameModel.getListOfGames().then(games => {
    let result = [];
    let randomElement;

    let filteredGames = games.filter(e => Math.round(e.rating) > 4);

    while(filteredGames.length > 0) {
      if (result.length === 5) break;
      randomElement = filteredGames[Math.floor(Math.random() * filteredGames.length)];
      result.push(randomElement);
      let index = filteredGames.indexOf(randomElement);
      if (index !== -1) filteredGames.splice(index, 1);
    }

    console.log(result);
    renderPopularGames('.content__game-popular',result);
  });
}

getPopularGames();

module.exports = { getListOfGames,getFavoriteGames};
