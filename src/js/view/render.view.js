import browserJSEngine from '../lib/engine';
import allGameTemplate from '../../templates/game-all.template';
import popularGameTemplate from '../../templates/game-popular.template';

function renderGames(classSelector, elementToRender) {
  document.querySelector(classSelector).innerHTML = '';
  elementToRender = Array.isArray(elementToRender) ? elementToRender : [elementToRender];

  let fragment = browserJSEngine(elementToRender.map(allGameTemplate));
  // let inputArray = fragment.querySelectorAll('#');


  elementToRender.forEach(function(elem) {
    let gameCard = fragment.getElementById(elem.id);
    let favotite = gameCard.firstChild.firstChild.firstChild;
    if(elem.isFavorite==='true') 
      favotite.setAttribute('checked',true); 
    else favotite.removeAttribute('checked');

    let stars = gameCard.lastChild.firstChild.firstChild.firstChild;
    let star = stars.firstChild;
    for(let i = 1; i <= Math.round(elem.rating); i++) {
      star.classList.add('hover');
      star = star.nextSibling;
    }
  });

  document.querySelector(classSelector).appendChild(fragment);
}

module.exports = { renderGames };
