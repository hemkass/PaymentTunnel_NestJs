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
} from '@nestjs/common';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CartsService } from 'src/carts/carts.service';
import { ExistingCart } from 'src/carts/decorators/existing-cart';

import { ExistingProduct } from './decorator/current-product.decorator';
import { addProductDTO } from './dtos/addProduct.dto';
import { addProductBodyDTO } from './dtos/addProduct_body.dto';
import { ProductsService } from './products.service';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(
    private productService: ProductsService,
    private cartService: CartsService,
  ) {}

  @Get()
  getAllProduct() {
    return this.productService.allProducts();
  }

  @Get('/:productId')
  getProductById(@Param('productId') id: string) {
    return this.productService.isProduct(id);
  }

  @ApiBody({
    type: addProductBodyDTO,
    description: 'add product on cart, by default quantity wanted is one',
    required: false,
    examples: {
      quantityToAdd: {
        value: {
          quantity: 3,
        },
      },
    },
  })
  @ApiQuery({
    name: 'cartId',
    type: String,
    description: 'A parameter. Optional',
    required: false,
  })
  @Post('add/cart/:productId')
  async newCart(
    @Param('productId') productId: string,

    @ExistingProduct() product,
    @ExistingCart() cart,
    @Session() session: any,
    @Req() req,
    @Body('quantity') quantity?: number,
    @Query('cartId') cartId?: string,
  ) {
    if (!cart) {
      cart = await this.cartService.createCart();
    }

    if (cart) {
      req.session.cartId = cart.id;
      session.cartId = cart.id;

      let addProductData: addProductDTO = { product: product, cart: cart };

      if (quantity) {
        addProductData.quantityWanted = quantity;
      }
      return this.productService.addProductToCart(addProductData);
    }
  }

  /*   @ApiBody({
    type: addProductDTO,
    examples: {
      products: {
        value: {
          quantity: 20,
          cartId: '15e4d1c0-2856-4da7-b9e9-cd4df194548c',
        },
      },
    },
  })
  @Patch('/addToCart/:productId')
  addToCart(
    @Param('productId') productId: string,
    @ExistingProduct() product,
    // @Param('cartId') cartId: string,
    @Body() body,
  ) {
    let quantity = Number(body.quantity);

    let addProductData: addProductDTO = {
      productId: productId,

      quantityWanted: quantity,
      product: product,
    };
    if (body.cartId) {
      addProductData.cartId = body.cartId;
    }
    return this.productService.addProductToCart(addProductData);
  } */

  /*  @Delete('/:productId')
  async deleteProduct(
    @Param('productId') id: string,
    @ExistingProduct() product,
    @Res() response: Response,
  ) {
    let productDeleted = await this.productService.deleteProduct(product);
    if (productDeleted) {
      response.status(200).send({
        message: `Your product ${productDeleted.id} been succesfully suppressed`,
      });
    }
  } */
}
