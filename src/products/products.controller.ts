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
import { Response } from 'express';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CartsService } from '../carts/carts.service';
import { ExistingCart } from '../carts/decorators/existing-cart';

import { ExistingProduct } from './decorator/current-product.decorator';
import { addProductDTO } from './dtos/addProduct.dto';
import { addProductBodyDTO } from './dtos/addProduct_body.dto';
import { ProductsService } from './products.service';
import { ExistingProductOnCart } from './decorator/current-productOnCart.decorator';
import { Cart, Product } from '@prisma/client';
import { removeProductDTO } from './dtos/removeProduct.dto';
import { NotFoundError } from '@prisma/client/runtime';

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
  async AddProductToCart(
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
      console.log('product controller', this.productService.addProductToCart);
      return this.productService.addProductToCart(addProductData);
    }
  }

  @ApiBody({
    type: removeProductDTO,
    description: 'Remove product on cart, by default quantity to remove is one',
    required: false,
    examples: {
      quantityToAdd: {
        value: {
          quantity: 3,
        },
      },
    },
  })
  @Patch('remove/:productId/:cartId')
  async removeFromCart(
    @Param('productId') productId: string,
    @Param('cartId') cartId: string,
    @ExistingProductOnCart() productOncart,
    @ExistingProduct() product: Product,
    @ExistingCart() cart: Cart,
    @Res() response: Response,
    @Body('quantity') quantity?: number,
  ): Promise<any> {
    console.log('productOnCart', productOncart);
    if (productOncart) {
      let removeProductData: removeProductDTO = {
        product: product,
        cart: cart,
        productOncart,
      };

      if (quantity) {
        removeProductData.quantityRemoved = quantity;
      }
      let deletedFromCart = await this.productService.removeFromCart(
        removeProductData,
      );
      console.log('deleteproduct on Controller', deletedFromCart);
      if (deletedFromCart) {
        console.log('hello reps,', deletedFromCart);
        response.status(200).send({
          message: deletedFromCart,
        });
      } else {
        response.status(404).send({
          message: `product ${productId} not found on the cart ${cartId} `,
        });
      }
    } else {
      throw new NotFoundError('No product on Cart');
    }
  }

  @Delete('/:productId')
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
  }
}
