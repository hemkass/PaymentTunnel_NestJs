import { PrismaClient } from '@prisma/client';
import { getRandomIntInclusive } from '../utils/utils';
import { ProductFactory } from './factories/product-factory';

const prisma = new PrismaClient();

async function main() {
  let num = 30;
  let numOfRecords = 10;

  // 2)Seed with Products
  for (let i = 0; i < numOfRecords; i++) {
    let random = getRandomIntInclusive(0, num);
    const newProduct = ProductFactory();

    let product = await prisma.product.create({
      data: newProduct,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
