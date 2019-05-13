import browserJSEngine from '../lib/engine';
import allGameTemplate from '../../templates/game-all.template';
import popularGameTemplate from '../../templates/game-popular.template';

function renderGames(classSelector, elementToRender) {
  document.querySelector(classSelector).innerHTML = '';
  elementToRender = Array.isArray(elementToRender) ? elementToRender : [elementToRender];

  let fragment = browserJSEngine(elementToRender.map(allGameTemplate));
  // let inputArray = fragment.querySelectorAll('#');

  elementToRender.forEach(function(elem) {
    let favotite = fragment.querySelector("input[name='" +elem.id+"']");
    if(elem.isFavorite==='true') 
      favotite.setAttribute('checked',true);
    else favotite.removeAttribute('checked');

    let gameBlock = fragment.querySelector("[id='"+elem.id+"']");
    let stars = gameBlock.querySelector("[id='stars']");
    let star = stars.firstChild;
    for(let i = 1; i <= Math.round(elem.rating); i++) {
      star.classList.add('hover');
      star = star.nextSibling;
    }
  });

  document.querySelector(classSelector).appendChild(fragment);
}


function renderPopularGames(classSelector, elementToRender) {
  document.querySelector(classSelector).innerHTML = '';
  elementToRender = Array.isArray(elementToRender) ? elementToRender : [elementToRender];

  let fragment = browserJSEngine(elementToRender.map(popularGameTemplate));
  document.querySelector(classSelector).appendChild(fragment);
}

module.exports = { renderGames, renderPopularGames };
