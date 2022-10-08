import { Injectable } from '@nestjs/common';
import { CartsService } from 'src/carts/carts.service';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsController } from './products.controller';

@Injectable()
export class ProductsService {
  constructor(
    private prisma: PrismaService,
    private cartService: CartsService,
  ) {}

  async allProducts() {
    return await this.prisma.$transaction(async () => {
      const count = await this.prisma.product.count();

      const products = await this.prisma.product.findMany({
        include: { pictures: true },
      });
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
        include: {
          products: {
            include: {
              product: {
                select: {
                  id: true,
                  price: true,
                  title: true,
                  pictures: { select: { src: true } },
                },
              },
            },
          },
        },
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
        include: {
          products: {
            include: {
              product: {
                select: {
                  id: true,
                  price: true,
                  title: true,
                  pictures: { select: { src: true } },
                },
              },
            },
          },
        },
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

  async removeFromCart(removeProductData) {
    let quantityRemoved = 1;
    const { cart, productOncart, product } = removeProductData;
    if (removeProductData.quantityRemoved) {
      quantityRemoved = removeProductData.quantityRemoved;
    }
    let quantityInCart = productOncart.quantityInCart;
    // Case 2:quantity to remove is equal to the quantity's product in my cart'
    if (quantityRemoved >= quantityInCart) {
      let cartWithoutDeletedProduct = await this.prisma.cart.update({
        where: { id: cart.id },
        include: {
          products: {
            include: {
              product: {
                select: {
                  id: true,
                  price: true,
                  title: true,
                  pictures: { select: { src: true } },
                },
              },
            },
          },
        },
        data: {
          update_at: new Date(),
          products: {
            disconnect: [{ id: productOncart.id }],
          },
        },
      });
      // 2) delete ProductOnCart
      let ProductOnCartDeleted = await this.prisma.productsOnCart.delete({
        where: { id: productOncart.id },
      });
      // update Total price
      let updatedprice = await this.cartService.updateTotalCart(
        cartWithoutDeletedProduct.id,
      );
      cartWithoutDeletedProduct.total = updatedprice;
      return cartWithoutDeletedProduct;
    } else {
      // Case 2 : i only want to remove a part of the quantity's product from my cart but not all
      let newCart = await this.prisma.cart.update({
        where: { id: cart.id },
        include: {
          products: {
            include: {
              product: {
                select: {
                  id: true,
                  price: true,
                  title: true,
                  pictures: { select: { src: true } },
                },
              },
            },
          },
        },
        data: {
          update_at: new Date(),
          products: {
            update: {
              where: { id: productOncart.id },
              data: {
                quantityInCart: { decrement: quantityRemoved },
              },
            },
          },
        },
      });
      // update Total price

      let updatedTotal = await this.cartService.updateTotalCart(newCart.id);

      newCart.total = updatedTotal;
      return newCart;
    }
  }

  async deleteProduct(product) {
    return this.prisma.product.delete({ where: { id: product.id } });
  }
}
