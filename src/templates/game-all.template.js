// module.exports = function photoJSTemplate(photo) {
//     return {
//         tag: 'article',
//         cls: 'photo',
//         attrs: { style: `background-image: url(${photo.urls.small})` },
//         content: {
//             tag: 'footer',
//             content: [
//                 {
//                     tag: 'span',
//                     cls: 'avatar',
//                     content: {
//                         tag: 'img',
//                         attrs: { src: photo.user.profile_image.medium }
//                     }
//                 },
//                 { tag: 'h2', content: photo.user.name },
//                 photo.user.instagram_username && {
//                     tag: 'a',
//                     cls: 'social',
//                     href: `https://www.instagram.com/${photo.user.instagram_username}`,
//                     content: { tag: 'i', cls: ['fab', 'fa-instagram'] }
//                 },
//                 {
//                     tag: 'span',
//                     cls: 'rating',
//                     content: [
//                         {
//                             tag: 'i',
//                             cls: ['fa', 'fa-heart']
//                         },
//                         ' ',
//                         photo.likes
//                     ]
//                 }
//             ]
//         }
//     }
// };
// module.exports = function photoJSTemplate(photo) {
module.exports = function gameAllJSTemplate(game) {
  return {
    // item
    tag: 'li',
    cls: ['content__game-item', 'content__game-all-item'],
    content: [
      // cover
      {
        tag: 'div',
        cls: 'content__game-item-cover-wrapper',
        content: [{
          tag: 'div',
          cls: 'content__bookmark-wrapper',
          content: {
            tag: 'input',
            cls: 'content__bookmark',
            attrs: {
              type: 'checkbox',
              title: 'Добавить игру в избранное'
            },
          }
        },
        {
          tag: 'img',
          cls: ['content__game-item-cover', 'content__game-all-item-cover'],
          src: './img/covers/cover.jpg',
          attrs: {
            alt: 'Обложка игры'
          }
        }
        ]
      },
      {
        tag: 'div',
        cls: 'content__game-item-info-wrapper',
        // new / rating
        content: [{
          tag: 'div',
          cls: 'content__game-item-header',
          content: [{
            tag: 'div',
            cls: 'content__game-rating-stars',
            content: {
              tag: 'div',
              cls: 'game-rating'
            }
          },
          {
            tag: 'div',
            cls: 'content__game-rating',
            content: [{
              tag: 'span',
              cls: 'content__game-rating-votes',
              content: {
                tag: 'span',
                cls: 'content__game-rating-votes-count',
                content: '245'
              }
            },
            {
              tag: 'span',
              cls: 'content__game-rating-avg',
              content: '8,9'
            }
            ]
          }
          ]
        },
          // description
        {
          tag: 'div',
          cls: 'content__game-item-content',
          content: {
            tag: 'div',
            cls: 'content__game-item-description',
            content: [{
              tag: 'h3',
              cls: 'content__game-item-title',
              content: 'Mortal Kombat 11'
            },
            {
              tag: 'p',
              cls: ['content__game-item-text', 'content__game-all-item-text'],
              content: 'Так же, как и предшественник, представляет собой файтинг, выполненный в стиле 2.5D. Наряду с вернувшимися добиваниями'
            }
            ]
          }
        },
          // console / price
        {
          tag: 'div',
          cls: 'content__game-item-footer',
          content: [{
            tag: 'div',
            cls: 'content__console',
            content: [{
              tag: 'i',
              cls: ['content__console-icon', 'fab', 'fa-steam-square']
            },
            {
              tag: 'i',
              cls: ['content__console-icon', 'fab', 'fa-playstation']
            },
            {
              tag: 'i',
              cls: ['content__console-icon', 'fab', 'fa-xbox']
            },
            {
              tag: 'i',
              cls: ['content__console-icon', 'fab', 'fa-nintendo-switch']
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
              content: '5 799'
            }
          }
          ]
        }
        ]
      },
    ]
  };
};
