import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { StatusCart } from '@prisma/client';
import { PaymentsService } from 'src/payments/payments.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { cartExample } from 'src/products/test/datas/product';

import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor(
    private configService: ConfigService,
    private prismaService: PrismaService,
    private paymentService: PaymentsService,
  ) {
    // @ts-ignore
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2022-08-01',
    });
  }

  async createStripeCustomer(name: string, email: string) {
    return this.stripe.customers.create({
      name,
      email,
    });
  }

  public async charge(data) {
    let { paymentMethod, amount, customerId, cart } = data;

    let currency = 'EUR';

    let user = await this.prismaService.user.findUnique({
      where: { id: customerId },
    });

    let stripeCustomerId = user.stripeCustomerID;

    if (currency) {
      try {
        let stripePayment = await this.stripe.paymentIntents.create({
          amount,
          customer: stripeCustomerId,
          payment_method: 'pm_card_visa',
          currency: currency,
          confirm: true,
        });

        let newCart = await this.prismaService.cart.update({
          where: { id: cart.id },
          data: { status: StatusCart.PAID },
        });

        console.log('newCart with paid', newCart.status);
        let newPayment = await this.paymentService.createPayment({
          cartId: cart.id,
          userId: user.id,
        });

        return { stripe: stripePayment.status, paymentId: newPayment.id };
      } catch (error) {
        console.log('error', error);
      }
    } else throw new ForbiddenException('Need currency');
  }
}
