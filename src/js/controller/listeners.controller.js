import {GameModel} from '../model/game.model';
import {renderGames} from '../view/render.view';
import VanillaModal from '../lib/vanila-modal';

module.exports = function listeneres() {
  let gameModel = new GameModel();
  let searchButton = document.querySelector('.site-header__search-button');
  let input = document.querySelector('.site-header__search-input');
  let contentGameList = document.querySelector('.content__game-all-list');
  let clearSearchButton = document.querySelector('.site-header__clear-button');

  let modal = new VanillaModal();


  let form = document.querySelector('.modal__view');
  let formTitle = document.querySelector('input[name=name]');
  let formPrice = document.querySelector('input[name=price]');
  let formDescription = document.querySelector('.modal__field-description');
  let formCover = document.querySelector('input[name=cover]');

  let formPlatformSteam = document.querySelector('.modal__platform--steam');
  let formPlatformXbox = document.querySelector('.modal__platform--xbox');
  let formPlatformWindows = document.querySelector('.modal__platform--windows');
  let formPlatformMac = document.querySelector('.modal__platform--mac');
  let formPlatformPlayStation = document.querySelector('.modal__platform--ps');


  form.onsubmit = function(event) {
    event.preventDefault();

    let formPlatform = [];
    if(formPlatformMac.checked)
      formPlatform.push(formPlatformMac.value);
    if(formPlatformWindows.checked)
      formPlatform.push(formPlatformWindows.value);
    if(formPlatformXbox.checked)
      formPlatform.push(formPlatformXbox.value);
    if(formPlatformPlayStation.checked)
      formPlatform.push(formPlatformPlayStation.value);
    if(formPlatformSteam.checked)
      formPlatform.push(formPlatformSteam.value);

    // console.log(formTitle.value,formPlatform,formPrice.value,formDescription.value);
    gameModel.addGame(formTitle.value,formPlatform,formPrice.value,formDescription.value).then(result => {
      console.log(result);
    });
    modal.close();
  };

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
    // if(event.target.className === 'content__buy-game-button') {
    //   modal.open(); 
    // }
  };
};
