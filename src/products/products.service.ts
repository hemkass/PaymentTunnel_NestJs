import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsController } from './products.controller';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async allProducts() {
    return await this.prisma.$transaction(async () => {
      const count = await this.prisma.product.count();

      const products = await this.prisma.product.findMany();
      return { count: count, products: products };
    });
  }

  async isProduct(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id: id },
    });
    return product;
  }

  async isProductOnCart(quantityIncartDATA) {
    let { productId, cartId } = quantityIncartDATA;

    const isProduct = await this.prisma.productsOnCart.findFirst({
      select: { id: true, quantityInCart: true },
      where: {
        AND: [{ cartId: cartId }, { productId: productId }],
      },
    });

    return isProduct;
  }

  async calcultateTotal(datas) {
    let { total, price, quantityWanted } = datas;

    return Number(total) + Number(price) * Number(quantityWanted);
  }
  async addProductToCart(addProductData) {
    let { product, cart } = addProductData;

    let quantityWanted = 1;
    console.log('quantity', addProductData.quantityWanted, addProductData);
    if (addProductData.quantityWanted) {
      quantityWanted = addProductData.quantityWanted;
    }

    let quantityIncartDATA = { productId: product.id, cartId: cart.id };

    let isProductAlreadyOnCart = await this.isProductOnCart(quantityIncartDATA);

    // calculate new total cart with the product added
    let datas = { total: cart.total, price: product.price, quantityWanted };
    let newtotal = await this.calcultateTotal(datas);

    // Case 1 : Product is already on cart

    if (isProductAlreadyOnCart) {
      return this.prisma.cart.update({
        include: { products: { include: { product: true } } },
        where: { id: cart.id },
        data: {
          products: {
            update: {
              where: { id: isProductAlreadyOnCart.id },
              data: { quantityInCart: { increment: quantityWanted } },
            },
          },
          total: newtotal,
        },
      });
    }

    // Case 2 : Product is not on cart
    else {
      return await this.prisma.cart.update({
        where: { id: cart.id },
        include: { products: { include: { product: true } } },
        data: {
          products: {
            create: [
              {
                product: { connect: { id: product.id } },

                quantityInCart: quantityWanted,
              },
            ],
          },
          total: newtotal,
        },
      });
    }
  }
}
