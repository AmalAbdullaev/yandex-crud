import {GameModel} from '../model/game.model';
import {renderGames} from '../view/render.view';
import initEditModalController from './edit-modal.controller';
import initAddModalController from './add-modal.controller';
import VanillaModal from '../lib/vanila-modal';


module.exports = function initListeneres() {
  let gameModel = new GameModel();
  let modal = new VanillaModal();
  let searchButton = document.querySelector('.site-header__search-button');
  let input = document.querySelector('.site-header__search-input');
  let contentGameList = document.querySelector('.content__game-all-list');
  let clearSearchButton = document.querySelector('.site-header__clear-button');
  let macPlatformFilter = document.querySelector('.modal__platform--mac');
  let windowsPlatformFilter = document.querySelector('.modal__platform--windows');
  let steamPlatformFilter = document.querySelector('.modal__platform--steam');
  let psPlatformFilter = document.querySelector('.modal__platform--ps');
  let xboxPlatformFilter = document.querySelector('.modal__platform--xbox');
  let descFilter = document.querySelector('.content__filter-ico--up');
  let ascFilter = document.querySelector('.content__filter-ico--down');
  let refresh = document.querySelector('.content__filter-ico--refresh');
  //init add modal 
  initAddModalController(modal);
  


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

    if(event.target.className === 'content__edit-game fas fa-pen') {
      console.log('frf');
      initEditModalController(modal);
    }

  };

  macPlatformFilter.onclick = function() {
    gameModel.getListOfGames().then(games => {
      renderGames('.content__game-all-list', desc(asc(platformFilter(games))));
    });
  };

  windowsPlatformFilter.onclick = function() {
    gameModel.getListOfGames().then(games => {
      renderGames('.content__game-all-list', desc(asc(platformFilter(games))));
    });
  };
  steamPlatformFilter.onclick = function() {
    gameModel.getListOfGames().then(games => {
      renderGames('.content__game-all-list', desc(asc(platformFilter(games))));
    });
  };
  psPlatformFilter.onclick = function() {
    gameModel.getListOfGames().then(games => {
      renderGames('.content__game-all-list', desc(asc(platformFilter(games))));
    });
  };
  xboxPlatformFilter.onclick = function() {
    gameModel.getListOfGames().then(games => {
      renderGames('.content__game-all-list', desc(asc(platformFilter(games))));
    });
  };

  function platformFilter(games) {
    let result = [];
    if(xboxPlatformFilter.checked)
      games.filter(e => e.platform.includes('Xbox')).forEach(e => result.push(e));
    if(windowsPlatformFilter.checked)
      games.filter(e => e.platform.includes('Windows')).forEach(e => result.push(e));
    if(macPlatformFilter.checked)
      games.filter(e => e.platform.includes('MacOs')).forEach(e => result.push(e));
    if(psPlatformFilter.checked)
      games.filter(e => e.platform.includes('PlayStation')).forEach(e => result.push(e));
    if(steamPlatformFilter.checked)
      games.filter(e => e.platform.includes('SteamOS')).forEach(e => result.push(e));

    if(result.length === 0)
      result = games;
    return result;
  }

  ascFilter.onclick = function() {
    gameModel.getListOfGames().then(games => {
      descFilter.checked = false;
      renderGames('.content__game-all-list', asc(platformFilter(games)));
    });
  };

  descFilter.onclick = function() {
    gameModel.getListOfGames().then(games => {
      ascFilter.checked = false;
      renderGames('.content__game-all-list', desc(platformFilter(games)));
    });
  };

  function desc(games) {
    if(descFilter.checked) 
      return games.sort((a,b) => b.rating - a.rating);
    else return games;
  }

  function asc(games) {
    if(ascFilter.checked)
      return games.sort((a,b) => a.rating - b.rating );
    else return games;
  }
 
  refresh.onclick = function() {
    gameModel.getListOfGames().then(games => {
      refresh.checked = false;
      macPlatformFilter.checked = false;
      windowsPlatformFilter.checked = false;
      steamPlatformFilter.checked = false;
      psPlatformFilter.checked = false;
      xboxPlatformFilter.checked = false;
      descFilter.checked = false;
      ascFilter.checked = false;
      renderGames('.content__game-all-list', games);
    });
  };
};
