module.exports = function gamePopularJSTemplate(game) {
  return {
    // item
    tag: 'li',
    cls: ['content__game-item', 'content__game-popular-item'],
    attrs: {
      id: game.id
    },
    content: [
      // cover
      {
        tag: 'div',
        cls: 'content__game-popular-item-cover-wrapper',
        content: {
          tag: 'img',
          cls: ['content__game-item-cover', 'content__game-popular-item-cover'],
          attrs: {
            src: './img/covers/' + game.id + '.jpg',
            alt: 'Обложка игры'
          }
        }
      },
      {
        tag: 'div',
        cls: ['content__game-item-info-wrapper', 'content__game-popular-item-info-wrapper'],
        // new / rating
        content: [{
          tag: 'div',
          cls: 'content__game-item-header',
          content: [
            {
              tag: 'div',
              cls: ['content__game-rating-stars', 'rating-stars'],
              attrs: {
                id: game.id,
              },
              content: {
                tag: 'ul',
                attrs: {
                  id: 'stars'
                },
                content: [{
                  tag: 'li',
                  cls: 'star',
                  attrs: {
                    'data-value': '1',
                  },
                  content: {
                    tag: 'i',
                    cls: ['fas', 'fa-star']
                  }
                },
                {
                  tag: 'li',
                  cls: 'star',
                  attrs: {
                    'data-value': '2'
                  },
                  content: {
                    tag: 'i',
                    cls: ['fas', 'fa-star']
                  }
                },
                {
                  tag: 'li',
                  cls: 'star',
                  attrs: {
                    'data-value': '3'
                  },
                  content: {
                    tag: 'i',
                    cls: ['fas', 'fa-star']
                  }
                },
                {
                  tag: 'li',
                  cls: 'star',
                  attrs: {
                    'data-value': '4'
                  },
                  content: {
                    tag: 'i',
                    cls: ['fas', 'fa-star']
                  }
                },
                {
                  tag: 'li',
                  cls: 'star',
                  attrs: {
                    'data-value': '5'
                  },
                  content: {
                    tag: 'i',
                    cls: ['fas', 'fa-star']
                  }
                }
                ]
              }
            },
            // bookmark
            {
              tag: 'input',
              cls: 'content__bookmark',
              attrs: {
                type: 'checkbox',
                title: 'Добавить игру в избранное',
                name: game.id
              }
            },
            // description
            {
              tag: 'div',
              cls: ['content__game-item-content', 'content__game-popular-item-content'],
              content: {
                tag: 'div',
                cls: 'content__game-item-description',
                content: [{
                  tag: 'h3',
                  cls: ['content__game-item-title', 'content__game-popular-item-title'],
                  content: game.title
                },
                {
                  tag: 'p',
                  cls: ['content__game-item-text', 'content__game-popular-item-text'],
                  content: game.description
                }
                ]
              }
            },
            // console / price
            {
              tag: 'div',
              cls: 'content__game-item-footer',
              content: [
                {
                  tag: 'div',
                  cls: 'content__console',
                  content: [{
                    tag: 'i',
                    cls: ['content__console-icon', 'fab', game.platform.find((p) => p === 'SteamOS') ? 'fa-steam-square' : '']
                  },
                  {
                    tag: 'i',
                    cls: ['content__console-icon', 'fab', game.platform.find((p) => p === 'PlayStation') ? 'fa-playstation' : '']
                  },
                  {
                    tag: 'i',
                    cls: ['content__console-icon', 'fab', game.platform.find((p) => p === 'Windows') ? 'fa-windows' : '']
                  },
                  {
                    tag: 'i',
                    cls: ['content__console-icon', 'fab', game.platform.find((p) => p === 'MacOs') ? 'fa-apple' : '']
                  },
                  {
                    tag: 'i',
                    cls: ['content__console-icon', 'fab', game.platform.find((p) => p === 'Xbox') ? 'fa-xbox' : '']
                  }
                  ]
                },
                {
                  tag: 'button',
                  cls: 'content__buy-game-button',
                  attrs: {
                    ariaLabel: 'Кнопка, купить игру'
                  },
                  content: {
                    tag: 'span',
                    cls: 'content__game-price',
                    content: game.price
                  }
                }
              ]
            }
          ]
        }]
      }
    ]
  };
};
