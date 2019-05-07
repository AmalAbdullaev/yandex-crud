module.exports = function browserJSEngine(block) {
  if ((block === undefined) || (block === null) || (block === false)) {
    return document.createTextNode('');
  }
  if ((typeof block === 'string') || (typeof block === 'number') || (block === true)) {
    return document.createTextNode(block.toString());
  }
  if (Array.isArray(block)) {
    return block.reduce(function(f, elem) {
      f.appendChild(browserJSEngine(elem));
      return f;
    }, document.createDocumentFragment());
  }
  var element = document.createElement(block.tag || 'div');

  element.classList.add(
    ...[].concat(block.cls).filter(Boolean)
  );

  if (block.attrs) {
    Object.keys(block.attrs).forEach(function(key) {
      element.setAttribute(key, block.attrs[key]);
    });
  }

  if (block.content) {
    element.appendChild(browserJSEngine(block.content));
  }

  return element;
};
