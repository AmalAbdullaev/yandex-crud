import {GameModel} from '../model/game.model';
import {renderGames} from '../view/render.view';

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

module.exports = { getListOfGames, getFavoriteGames };
