import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExistingProductMiddleware } from './middleware/existing-product.middleware';
import { CartsService } from 'src/carts/carts.service';
import { ExistingCart } from 'src/carts/decorators/existing-cart';
import { ExistingCartMiddleware } from 'src/carts/middleware/existing_cart.middleware';
import { CheckingProductOnCartMiddleware } from './middleware/checking-productOnCart.middleware';

@Module({
  providers: [ProductsService, PrismaService, CartsService],
  controllers: [ProductsController],
})
export class ProductsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExistingProductMiddleware).forRoutes(ProductsController, {
      path: 'products/:productId',
      method: RequestMethod.GET,
    });
    consumer.apply(ExistingCartMiddleware).forRoutes(ProductsController, {
      path: 'products/add/cart/:productId',
      method: RequestMethod.GET,
    });
    consumer
      .apply(CheckingProductOnCartMiddleware)
      .forRoutes(ProductsController, {
        path: 'remove/:productId/:cartId',
        method: RequestMethod.PATCH,
      });
  }
}
