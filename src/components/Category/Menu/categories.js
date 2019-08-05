export default [
  {
    id: 1,
    name: 'Category 1',
    link: '#',
    subCategories: [],
  },
  {
    id: 2,
    name: 'Category 2',
    link: '#',
    subCategories: [
      {
        id: 21,
        name: 'Category 2-1',
        link: '#',
        subCategories: [],
      },
    ],
  },
  {
    id: 3,
    name: 'Category 3',
    link: '#',
    subCategories: [
      {
        id: 31,
        name: 'Category 3-1',
        link: '#',
        subCategories: [],
      },
      {
        id: 32,
        name: 'Category 3-2',
        link: '#',
        subCategories: [
          {
            id: 321,
            name: 'Category 3-2-1',
            link: '#',
            subCategories: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Category 4',
    link: '#',
    subCategories: [
      {
        id: 41,
        name: 'Category 4-1',
        link: '#',
        subCategories: [],
      },
      {
        id: 42,
        name: 'Category 4-2',
        link: '#',
        subCategories: [
          {
            id: 421,
            name: 'Category 4-2-1',
            link: '#',
            subCategories: [],
          },
          {
            id: 422,
            name: 'Category 4-2-2',
            link: '#',
            subCategories: [
              {
                id: 4211,
                name: 'Category 4-2-2-1',
                link: '#',
                subCategories: [],
              },
              {
                id: 4212,
                name: 'Category 4-2-2-2',
                link: '#',
                subCategories: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
