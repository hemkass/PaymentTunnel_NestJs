import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { Product } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { ProductsService } from '../products.service';

declare global {
  namespace Express {
    interface Request {
      existingProduct?: Product;
    }
  }
}

@Injectable()
export class ExistingProductMiddleware implements NestMiddleware {
  constructor(private productsService: ProductsService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    let productId;
    console.log('middleware product');
    try {
      if (req.params.productId) {
        productId = req.params.productId;
      }
      if (req.body.productId) {
        productId = req.body.productId;
      }

      if (productId) {
        const product = await this.productsService.isProduct(productId);

        if (product) {
          req.existingProduct = product;
        } else {
          console.log('rjet middleware');
          throw new NotFoundException('no product found');
        }
      }
      next();
    } catch (error) {
      res.json(error);
    }
  }
}
