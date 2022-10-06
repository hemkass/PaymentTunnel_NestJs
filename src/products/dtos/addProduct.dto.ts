import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Product } from '@prisma/client';
export class addProductDTO {
  @ApiPropertyOptional({
    description: 'product quantity wanted, if empty, by default, it will be 1 ',
  })
  quantityWanted?:number;
  @ApiPropertyOptional({ description: 'product to put in cart' })
  @IsString()
  cart: string;

  @ApiProperty()
  product: Product;
}
