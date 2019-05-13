
import {GameModel} from '../model/game.model';

module.exports = function initAddModalController(modal) {
  let gameModel = new GameModel();

  let addGameModal = document.querySelector('#add-game-modal');

  let addGameForm = addGameModal.querySelector('.modal__view');
  let formTitle =  addGameForm.querySelector('input[name=name]');
  let formPrice =  addGameForm.querySelector('input[name=price]');
  let formDescription =  addGameForm.querySelector('.modal__field-description');
  let formCover =  addGameForm.querySelector('input[name=cover]');

  let formPlatformSteam =  addGameForm.querySelector('.modal__platform--steam');
  let formPlatformXbox =  addGameForm.querySelector('.modal__platform--xbox');
  let formPlatformWindows =  addGameForm.querySelector('.modal__platform--windows');
  let formPlatformMac =  addGameForm.querySelector('.modal__platform--mac');
  let formPlatformPlayStation =  addGameForm.querySelector('.modal__platform--ps');
  

  addGameForm.onsubmit = function(event) {
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
};
