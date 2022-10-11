import {
  Body,
  Controller,
  Session,
  Delete,
  Get,
  Query,
  Param,
  Patch,
  Post,
  Res,
  Req,
  Request,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { get } from 'http';
import { CartsService } from '../carts/carts.service';
import { ExistingCart } from '../carts/decorators/existing-cart';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import BodyChargeDto from './dtos/BodyCharge.dto';

import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(
    private readonly stripeService: StripeService,
    private userService: UsersService,
    private prisma: PrismaService,

    private cartService: CartsService,
  ) {}

  @Post('createCharge')
  async createCharge(
    @Body() charge: BodyChargeDto,
    @Request() req,

    @ExistingCart() cart,
  ) {
    let data = {
      paymentMethod: req.body.paymentMethode,
      amount: req.body.cart.total,
      currency: 'eur',
      description: `Paiement FLINK `,
      source: req.body.token,
      customerId: req.body.userId,
      cart: req.body.cart,
    };

    let chargeToSend = await this.stripeService.charge(data);
    console.log('from stripe controller', chargeToSend);
    return chargeToSend;
  }

  @Get('hello')
  hellfn() {
    return 'hello';
  }
}
