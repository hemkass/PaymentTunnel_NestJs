import { Injectable } from '@nestjs/common';
import { StatusCart } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

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
}
