import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { Cart, Product } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';

import { CartsService } from '../carts.service';

declare global {
  namespace Express {
    interface Request {
      existingCart?: Cart;
    }
  }
}

@Injectable()
export class ExistingCartMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      let cartId;
      if (req.params.cartId) {
        cartId = req.params.cartId;
      }
      if (req.body.cartId) {
        cartId = req.body.cartId;
      }
      if (req.query.cartId) {
        cartId = req.query.cartId;
      }
      // let productId = req.params[0].split('/').pop();

      if (cartId) {
        const cart = await this.prisma.cart.findUnique({
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

        if (cart) {
          req.existingCart = cart;
        } else {
          throw new NotFoundException('no cart found');
        }
      }

      next();
    } catch (error) {
      res.json(error);
    }
  }
}
