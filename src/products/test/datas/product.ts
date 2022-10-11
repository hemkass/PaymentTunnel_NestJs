export let productPushedOnCart = {
  id: '9c961f33-3ef7-4798-b914-19288c9d8dc9',
  ref: '1E3ERR5BDKMT24375',
  title: 'Computer ',
  description:
    'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals ',
  price: 105,
  pictures: {
    src: 'https://loremflickr.com/1234/2345/fashion?9735',
  },
};

export let productOnCartOutput = {
  id: 38,
  cartId: 'f392fa42-4cea-47be-8aca-3f5d977aba1e',
  productId: '9c961f33-3ef7-4798-b914-19288c9d8dc9',
  assignedAt: '2022-10-09T09:47:12.784Z',
  quantityInCart: 1,
  product: {
    id: '9c961f33-3ef7-4798-b914-19288c9d8dc9',
    price: 105,
    title: 'computer ',
    pictures: { src: 'https://loremflickr.com/1234/2345/fashion?9735' },
  },
};

export let cartExample = {
  id: 'f392fa42-4cea-47be-8aca-3f5d977aba1e',
  created_at: '2022-10-09T09:47:01.493Z',

  status: 'PENDING',
  delivery_fees: 0,
  total: 450,
  ownerId: null,
  error_Messages: [],
  products: [
    {
      id: 35,
      cartId: 'f392fa42-4cea-47be-8aca-3f5d977aba1e',
      productId: 'a6b44dbc-6bd6-4524-a2ff-35c2d4395006',
      assignedAt: '2022-10-09T09:47:12.784Z',
      quantityInCart: 3,
      product: {
        id: 'a6b44dbc-6bd6-4524-a2ff-35c2d4395006',
        price: 115,
        title: 'Mouse ',
        pictures: { src: 'https://loremflickr.com/1234/2345/fashion?9735' },
      },
    },
    {
      id: 38,
      cartId: 'f392fa42-4cea-47be-8aca-3f5d977aba1e',
      productId: '9c961f33-3ef7-4798-b914-19288c9d8dc9',
      assignedAt: '2022-10-09T09:47:12.784Z',
      quantityInCart: 1,
      product: {
        id: '9c961f33-3ef7-4798-b914-19288c9d8dc9',
        price: 105,
        title: 'computer ',
        pictures: { src: 'https://loremflickr.com/1234/2345/fashion?9735' },
      },
    },
  ],
};
