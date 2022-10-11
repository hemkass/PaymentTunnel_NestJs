import { Injectable, NotFoundException } from '@nestjs/common';
import { StatusCart } from '@prisma/client';
import { lastHour, lastWeek } from 'utils/utils';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CartsService {
  constructor(private prisma: PrismaService) {}

  async isCart(cartId: string) {
    return await this.prisma.cart.findUnique({
      where: { id: cartId },
      include: {
        products: {
          include: {
            product: {
              select: {
                id: true,
                price: true,
                title: true,
                pictures: { include: { productPictures: true } },
              },
            },
          },
        },
      },
    });
  }

  async createCart() {
    let newCart = {
      total: 0,
      status: StatusCart.PENDING,
    };

    return await this.prisma.cart.create({
      data: newCart,
    });
  }

  async calculateTotalCart(cartId) {
    const cart = await this.isCart(cartId);

    let total = 0;
    if (cart) {
      cart.products.map((products) => {
        total =
          total +
          Number(products?.product?.price) * Number(products.quantityInCart);
      });
    } else {
      throw new NotFoundException('no cart found');
    }

    return total;
  }

  async updateTotalCart(cartId: string) {
    // 2) Recalculate the new price and update it
    let newTotal = await this.calculateTotalCart(cartId);

    try {
      await this.prisma.cart.update({
        include: { products: true },
        data: {
          update_at: new Date(),

          total: newTotal,
        },
        where: { id: cartId },
      });

      return newTotal;
    } catch (error) {
      console.log('error update Total cart ', error);
    }
  }

  async getAbandonnedCarts() {
    let lastWeekDate = lastWeek();
    let lastHourDate = lastHour();
    let abandonnedCart = await this.prisma.$transaction(async () => {
      const count = await this.prisma.cart.count({
        where: {
          created_at: { lte: lastHourDate },
          status: StatusCart.PENDING,
        },
      });

      const carts = await this.prisma.cart.findMany({
        where: {
          created_at: { lte: lastHourDate },
          status: StatusCart.PENDING,
        },
      });
      return { count: count, abandonnedCarts: carts };
    });

    console.log('abandonnedCart', abandonnedCart);
    return abandonnedCart;
  }

  async setAbandonnedCarts() {
    let lastWeekDate = lastWeek();
    let lastHourDate = lastHour();

    let abandonnedCart = await this.prisma.$transaction(async () => {
      const carts = await this.prisma.cart.findMany({
        where: {
          created_at: { lte: lastHourDate },
          status: StatusCart.PENDING,
        },
      });
      let idsToUpdate = [];
      carts.map((cart) => {
        return idsToUpdate.push(cart.id);
      });
      await this.prisma.cart.updateMany({
        where: {
          id: { in: idsToUpdate },
        },
        data: { status: StatusCart.ABANDONED },
      });
    });
  }

  async deleteCartById(cartId) {
    return await this.prisma.cart.delete({ where: { id: cartId } });
  }
}
