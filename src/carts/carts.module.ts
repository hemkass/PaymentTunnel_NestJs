import { PrismaService } from 'src/prisma/prisma.service';
import { CartsController } from './carts.controller';
import { CartsService } from './carts.service';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ExistingCartMiddleware } from './middleware/existing_cart.middleware';

@Module({
  controllers: [CartsController],
  providers: [CartsService, PrismaService],
})
export class CartsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ExistingCartMiddleware)
      .exclude(
        { path: 'carts', method: RequestMethod.POST },
        { path: 'carts', method: RequestMethod.GET },
      )
      .forRoutes(CartsController);
  }
}
