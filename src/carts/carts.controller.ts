import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  Session,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CartsService } from './carts.service';
import { ExistingCart } from './decorators/existing-cart';

@ApiTags('carts')
@Controller('carts')
export class CartsController {
  constructor(private cartService: CartsService) {}

  @Post('/create')
  async newCart(@Session() session: any, @Req() req) {
    let cart = await this.cartService.createCart();
    session.cartId = cart.id;
    return cart;
  }

  @Get('/:cartId')
  getCart(@Param('cartId') cartId: string, @ExistingCart() cart) {
    return cart;
  }

  @Delete('/delete/:cartId')
  deleteCart(@Param('cartId') cartId: string, @ExistingCart() cart) {
    return this.cartService.deleteCartById(cartId);
  }

  @Get('/get/abandonnedCart')
  AbandonnedCart() {
    console.log('hello');
    return this.cartService.getAbandonnedCarts();
  }

  @Get('/set/abandonnedCart')
  SetAbandonnedCart() {
    console.log('hello');
    return this.cartService.setAbandonnedCarts();
  }
}
