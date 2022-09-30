import { Controller, Get, Param, Post, Req, Session } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExistingProduct } from 'src/products/decorator/current-product.decorator';
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
}
