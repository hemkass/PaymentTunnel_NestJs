import { Module } from '@nestjs/common';
import { CartsService } from 'src/carts/carts.service';
import { PaymentsService } from 'src/payments/payments.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { StripeService } from 'src/stripe/stripe.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    StripeService,
    PaymentsService,
    CartsService,
  ],
})
export class UsersModule {}
