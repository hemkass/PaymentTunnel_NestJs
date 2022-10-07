import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';

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
}
