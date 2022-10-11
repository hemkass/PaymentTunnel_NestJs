import { Test, TestingModule } from '@nestjs/testing';
import { prisma } from '../../prisma/index';
import { CartsService } from '../carts/carts.service';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsService } from './products.service';
import { cartExample, productPushedOnCart } from './test/datas/product';
import { MockedProductAlreadyOnCart } from './test/datas/productOnCart-mock';

import { prismaMock } from '../../singleton';

let prismaService: PrismaService;
let service: ProductsService;
describe('ProductsService', () => {
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService, PrismaService, CartsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);

    prisma.cart.findUnique = jest.fn().mockResolvedValueOnce(cartExample);
  });
  afterEach(async () => {
    await prisma.$disconnect();
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should  calculate price', async () => {
    let price = 12;
    let quantityWanted = 3;
    let total = 125;
    let datas = { price: price, quantityWanted: quantityWanted, total: total };

    let newPrice = await service.calcultateTotal(datas);

    expect(newPrice).toBe(161);
  });
  describe('it should add product to cart', () => {
    /*   beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [ProductsService, PrismaService, CartsService],
      }).compile();

      service = module.get<ProductsService>(ProductsService);

      MockedProductAlreadyOnCart(service);
      service.prisma.cart.update = jest
        .fn()
        .mockImplementation((total, quantity) => {
          return new Promise((resolve, reject) => {
            let newCart = JSON.parse(JSON.stringify(cartExample));

            newCart.products[1].quantityOnCart += quantity;

            resolve(newCart);
          });
        });
    }); */

    it('if product is already in cart, it should just add quantity to quantityOnCart ', async () => {
      /*      let quantityWanted = 3;

      let cart = JSON.parse(JSON.stringify(cartExample));
      let product = JSON.parse(JSON.stringify(productPushedOnCart));
      let quantityInCart = cart.products[1].quantityInCart;
      let afilliatedCart = cart.products[1].cartId;

      let expected = quantityWanted + Number(quantityInCart);

      let quantityexpected = quantityWanted + quantityInCart;

      let datas = { product, cart, quantityWanted };
      let addProductFn = await service.addProductToCart(datas);

      expect(addProductFn.products[1].quantityInCart).toBe(expected); */
    });
  });
});
