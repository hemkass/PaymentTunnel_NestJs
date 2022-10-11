import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaymentsService } from './payments.service';

@ApiTags('payments')
@Controller('payments')
export class PaymentsController {
  constructor(private paymentService: PaymentsService) {}

  /*   @Post('/create')
  createPayment(
    @Body() payment: BodyChargeDto,

    @CurrentCart() currentCart: Carts,
  ) {
    let datas = { paymentMethodId: payment.paymentMethodId, cart: currentCart };
    return this.paymentService.createPayment(datas);
  } */

  @Get()
  async getAllPayments() {
    return this.paymentService.allPayments();
  }
}
