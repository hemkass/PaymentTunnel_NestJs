import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { Product, ProductsOnCart } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { CartsService } from 'src/carts/carts.service';
import { ProductsService } from '../products.service';

declare global {
  namespace Express {
    interface Request {
      existingProductOncart?: ProductsOnCart;
    }
  }
}

@Injectable()
export class CheckingProductOnCartMiddleware implements NestMiddleware {
  constructor(private productsService: ProductsService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    let productId;
    console.log('middleware product on cart');
    try {
      console.log('middleware', req.existingProduct, req.existingCart);
      let productOnCart;
      if (req.existingProduct && req.existingCart) {
        let quantityIncartDATA = {
          productId: req.existingProduct.id,
          cartId: req.existingCart.id,
        };

        productOnCart = await this.productsService.isProductOnCart(
          quantityIncartDATA,
        );

        if (productOnCart) {
          req.existingProductOncart = productOnCart;
        } else {
          console.log('error');
          throw new NotFoundException('no product on cart found');
        }
      }
      next();
    } catch (error) {
      res.json(error);
    }
  }
}
