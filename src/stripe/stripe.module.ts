import { Module } from '@nestjs/common';
import { PaymentsService } from 'src/payments/payments.service';
import { CartsService } from '../carts/carts.service';

import { PrismaService } from '../prisma/prisma.service';
import { ProductsService } from '../products/products.service';
import { UsersService } from '../users/users.service';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';

@Module({
  controllers: [StripeController],
  providers: [
    StripeService,
    UsersService,
    PrismaService,
    CartsService,
    PrismaService,
    CartsService,
    ProductsService,
    PaymentsService,
  ],
})
export class StripeModule {}
