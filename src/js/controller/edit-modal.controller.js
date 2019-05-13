
import {GameModel} from '../model/game.model';


module.exports = function initEditModalController(modal) {
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
    gameModel.addGame(formTitle.value,formPlatform,formPrice.value,formDescription.value).then(result => {
      console.log(result);
    });
    modal.close();
  };
};
