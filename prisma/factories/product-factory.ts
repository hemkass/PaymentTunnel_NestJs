import { faker } from '@faker-js/faker';
import { getRandomIntInclusive } from '../../utils/utils';

let date = new Date();

export let randomWordInPrismaEnum = (dataArr): any => {
  //   console.log('mes datas', dataArr);
  var RoleArray = Object.keys(dataArr).map(function (Role) {
    return Role;
  });
  let randomNumber = getRandomIntInclusive(0, RoleArray.length);
  return RoleArray[randomNumber];
};

export let randomPictures = () => {
  let maxIndex = getRandomIntInclusive(1, 10);
  let pictures: Object[] = [];
  let pictureObject;
  for (let index = 0; index <= maxIndex; index++) {
    pictureObject = {
      src: faker.image.fashion(1234, 2345, true),
    };
    pictures.push(pictureObject);
  }

  return pictures;
};

function getRandomDate(maxDate) {
  const timestamp = Math.floor(Math.random() * maxDate);
  return new Date(timestamp);
}

export function ProductFactory() {
  let product = {
    title: faker.commerce.product(),
    created_at: getRandomDate(Date.now()),

    description: faker.commerce.productDescription(),
    price: Number(faker.commerce.price(100, 200, 0)),
    ref: faker.vehicle.vin(),

    pictures: {
      createMany: { data: JSON.parse(JSON.stringify(randomPictures())) },
    },
  };

  return product;
}

/* let multiplesProduct = async () => {
  let newProducts;

  for (let i = 0; i < 4; i++) {
    const newProduct = ProductFactory();
    console.log('new Product', newProduct);

    await prisma.product.create({ data: newProduct });
  }
};
 */
