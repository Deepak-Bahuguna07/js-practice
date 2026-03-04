const getTypesForPokemon = (types) => {
  const template = types.map(type =>
    ['span', { class: `type ${type}` }, type]);

  return template;
}

const createHTMLElement = (element, attrs) => {
  const htmlElement = document.createElement(element);
  for (const [key, val] of Object.entries(attrs)) {
    htmlElement.setAttribute(key, val);
  }
  return htmlElement;
}

const renderFragment = ([element, attrs, ...content]) => {
  const htmlElement = createHTMLElement(element, attrs);
  if (content.length === 1 && (typeof content[0] !== "object")) {
    htmlElement.textContent = content;
    return htmlElement;
  }

  const children = content.map(renderFragment);
  htmlElement.append(...children);
  return htmlElement;
}

export const generateCard = (pokemon) => {
  const dom = [
    'div', { class: 'card' },
    [
      'div', { class: 'img' },
      ['img', { src: pokemon.img, alt: pokemon.name }, '']
    ],
    [
      'div', { class: 'info' },
      [
        'div', { class: 'overview' },
        ['div', { class: "name" }, pokemon.name],
        ['div', { class: "types" }, ...getTypesForPokemon(pokemon.types)]
      ],

      [
        'div', { class: "details" },
        ['table', {},
          [
            "tbody", {},
            ['tr', {},
              ['td', { class: "stat" }, 'Weight'],
              ['td', { class: "value" }, pokemon.weight]
            ],
            ['tr', {},
              ['td', { class: "stat" }, 'Base XP'],
              ['td', { class: "value" }, pokemon["base-xp"]]
            ],
            ['tr', {},
              ['td', { class: "stat" }, 'HP'],
              ['td', { class: "value" }, pokemon.stats.hp]
            ],
            ['tr', {},
              ['td', { class: "stat" }, 'Attack'],
              ['td', { class: "value" }, pokemon.stats.attack]
            ],
            ['tr', {},
              ['td', { class: "stat" }, 'Defense'],
              ['td', { class: "value" }, pokemon.stats.defense]
            ],
            ['tr', {},
              ['td', { class: "stat" }, 'Speed'],
              ['td', { class: "value" }, pokemon.stats.speed]
            ]
          ]
        ]
      ]
    ]
  ];

  return renderFragment(dom);
}

