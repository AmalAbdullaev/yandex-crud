import browserJSEngine from './lib/engine';
import allGameTemplate from '../templates/game-all.template';
import popularGameTemplate from '../templates/game-popular.template';

function renderGames(classSelector, elementToRender) {
  document.querySelector(classSelector).innerHTML = '';
  elementToRender = Array.isArray(elementToRender) ? elementToRender : [elementToRender];

  document.querySelector(classSelector).appendChild(
    browserJSEngine(elementToRender.map(allGameTemplate))
  );
}

module.exports = { renderGames };
