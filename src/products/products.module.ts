import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExistingProductMiddleware } from './middleware/existing-product.middleware';

@Module({
  providers: [ProductsService, PrismaService],
  controllers: [ProductsController],
})
export class ProductsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExistingProductMiddleware).forRoutes(ProductsController, {
      path: 'products/:id',
      method: RequestMethod.GET,
    });
  }
}
