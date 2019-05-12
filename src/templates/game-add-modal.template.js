module.exports = function gameAddModalTemplate() {
  return {
    content: [{
      tag: 'h2',
      cls: 'modal__title',
      content: 'Добавить игру',
    },
    {
      tag: 'form',
      cls: 'modal__view',
      content: [
        // cover
        {
          tag: 'div',
          cls: 'modal__cover-wrapper',
          content: [{
            tag: 'label',
            cls: 'modal__cover-added',
            attrs: {
              for: 'pct',
            }
          },
          {
            tag: 'input',
            cls: 'modal__cover',
            attrs: {
              id: 'pct',
              name: 'cover',
              type: 'file'
            }
          }
          ]
        },
        // text
        {
          tag: 'div',
          cls: 'modal__text-wrapper',
          content: [
            // game name
            {
              tag: 'input',
              cls: 'modal__field',
              attrs: {
                id: 'name',
                name: 'name',
                placeholder: 'Название игры',
                value: '',
                required
              }
            },
            // modal footer
            {
              tag: 'div',
              cls: 'modal__footer',
              content: [
                //price
                {
                  tag: 'input',
                  cls: ['modal__field', 'modal__field-price'],
                  attrs: {
                    id: 'price',
                    type: 'number',
                    name: 'price',
                    placeholder: 'Цена',
                    value: '',
                    required
                  }
                },
                // platform
                {
                  tag: 'div',
                  cls: 'modal__field-platform-wrapper',
                  content: [{
                    tag: 'input',
                    cls: ['modal__platform', 'modal__platform--ps'],
                    attrs: {
                      type: 'checkbox',
                      name: 'playStation',
                      value: 'PlayStation',
                    }
                  },
                  {
                    tag: 'input',
                    cls: ['modal__platform', 'modal__platform--xbox'],
                    attrs: {
                      type: 'checkbox',
                      name: 'xbox',
                      value: 'Xbox',
                    }
                  },
                  {
                    tag: 'input',
                    cls: ['modal__platform', 'modal__platform--steam'],
                    attrs: {
                      type: 'checkbox',
                      name: 'steamOS',
                      value: 'SteamOS',
                    }
                  },
                  {
                    tag: 'input',
                    cls: ['modal__platform', 'modal__platform--windows'],
                    attrs: {
                      type: 'checkbox',
                      name: 'windows',
                      value: 'Windows',
                    }
                  },
                  {
                    tag: 'input',
                    cls: ['modal__platform', 'modal__platform--mac'],
                    attrs: {
                      type: 'checkbox',
                      name: 'macOs',
                      value: 'MacOs',
                    }
                  }
                  ]
                }
              ]
            },
            {
              tag: 'textarea',
              cls: ['modal__field', 'modal__field-description'],
              attrs: {
                id: 'description',
                name: 'description',
                placeholder: 'Описание игры',
                required
              },
            },
            {
              tag: 'div',
              cls: 'modal__add-game-wrapper',
              content: {
                tag: 'button',
                cls: 'modal__add-game-btn',
                attrs: {
                  type: 'submit'
                },
                content: 'Добавить'
              }
            }
          ]
        },
      ]
    }
    ]
  };
};
