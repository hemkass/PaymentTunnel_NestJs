import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Cart, Product, ProductsOnCart } from '@prisma/client';
export class removeProductDTO {
  @ApiPropertyOptional({
    description: 'product quantity wanted, if empty, by default, it will be 1 ',
  })
  quantityRemoved?:number;
  @ApiPropertyOptional({ description: 'product to put in cart' })
  cart: Cart;

  @ApiProperty()
productOncart:ProductsOnCart;

  @ApiProperty()
  product: Product;
}