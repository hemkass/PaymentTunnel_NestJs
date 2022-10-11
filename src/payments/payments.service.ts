import { Injectable } from '@nestjs/common';
import { CartsService } from 'src/carts/carts.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaymentData } from './dto/paymentData.dto';

@Injectable()
export class PaymentsService {
  constructor(
    private prisma: PrismaService,
    private cartService: CartsService,
  ) {}

  async createPayment(datas: PaymentData) {
    let { cartId, userId } = datas;

    let payment = await this.prisma.payment.create({
      data: {
        owner: { connect: { id: userId } },
        affiliateCart: { connect: { id: cartId } },
      },
    });
    console.log('from payment service', payment);
    return payment;
  }

  async allPayments() {
    return await this.prisma.$transaction(async () => {
      const count = await this.prisma.payment.count();

      const payments = await this.prisma.payment.findMany({
        include: { owner: true, affiliateCart: true },
      });
      return { count: count, payments: payments };
    });
  }
}
