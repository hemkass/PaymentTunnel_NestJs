import { Injectable } from '@nestjs/common';
import { PaymentsService } from 'src/payments/payments.service';
import { StripeService } from 'src/stripe/stripe.service';
import { PrismaService } from '../prisma/prisma.service';
import { AddOwnerDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private stripeService: StripeService,
    private paymentService: PaymentsService,
  ) {}

  async addOwner(createUserData) {
    let { email, phone, fullname, adress_Delivery, cartId } = createUserData;
    let userData = {
      email: email,
      phone: phone,
      fullname: fullname,
      carts: { connect: { id: cartId } },
      adress_Delivery: { create: adress_Delivery },
    };

    let user = await this.prisma.user.create({ data: userData });

    const stripeCustomer = await this.stripeService.createStripeCustomer(
      fullname,
      email,
    );
    console.log('stripe', stripeCustomer);

    await this.prisma.user.update({
      where: { id: user.id },
      data: { stripeCustomerID: stripeCustomer.id },
    });

    return user;
  }
}
