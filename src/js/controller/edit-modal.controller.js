
import {GameModel} from '../model/game.model';
import {renderGames} from '../view/render.view';


module.exports = function initEditModalController(modal,gameId) {

  let gameModel = new GameModel();
  let editGameModal = document.querySelector('#edit-game-modal');

  let editGameForm = editGameModal.querySelector('.modal__view');
  let formTitle =  editGameForm.querySelector('input[name=name]');
  let formPrice =  editGameForm.querySelector('input[name=price]');
  let formDescription =  editGameForm.querySelector('.modal__field-description');
  let formCover =  editGameForm.querySelector('input[name=cover]');

  let formPlatformSteam =  editGameForm.querySelector('.modal__platform--steam');
  let formPlatformXbox =  editGameForm.querySelector('.modal__platform--xbox');
  let formPlatformWindows =  editGameForm.querySelector('.modal__platform--windows');
  let formPlatformMac =  editGameForm.querySelector('.modal__platform--mac');
  let formPlatformPlayStation =  editGameForm.querySelector('.modal__platform--ps');


  gameModel.getGame(gameId).then(g => {
    formTitle.value = g.title;
    if(g.platform.includes('Windows'))
      formPlatformWindows.checked = true;
    if(g.platform.includes('PlayStation'))
      formPlatformPlayStation.checked = true;
    if(g.platform.includes('Xbox'))
      formPlatformXbox.checked = true;
    if(g.platform.includes('MacOs'))
      formPlatformMac.checked = true;
    if(g.platform.includes('SteamOS'))
      formPlatformSteam.checked = true;
    formPrice.value = g.price;
    formDescription.value = g.description;
  });


  editGameForm.onsubmit = function(event) {

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


    let game = {
      id: gameId,
      name: formTitle.value,
      platform: formPlatform,
      price: formPrice.value,
      description: formDescription.value
    };

    gameModel.editGame(game).then(result => {
      console.log(result);
      gameModel.getListOfGames().then(games => {
        renderGames('.content__game-all-list',games);
      });
    });
    modal.close();
  };
};
