import browserJSEngine from '../lib/engine';
import allGameTemplate from '../../templates/game-all.template';
import popularGameTemplate from '../../templates/game-popular.template';

function renderGames(classSelector, elementToRender) {
  document.querySelector(classSelector).innerHTML = '';
  elementToRender = Array.isArray(elementToRender) ? elementToRender : [elementToRender];

  let fragment = browserJSEngine(elementToRender.map(allGameTemplate));
  let inputArray = fragment.querySelectorAll('.content__bookmark');
  inputArray.forEach(node => {
    elementToRender.forEach(function(elem) {
      if(elem.id === +node.getAttribute('name')) {
        if(elem.isFavorite==='true') 
          node.setAttribute('checked',true); 
        else node.removeAttribute('checked');
      }
    });
    
  });
  document.querySelector(classSelector).appendChild(fragment);
}

module.exports = { renderGames };
