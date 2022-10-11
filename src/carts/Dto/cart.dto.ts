
import { StatusCart } from '@prisma/client';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsDateString,
  IsDecimal,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { PRODUCT_TS } from 'src/products/dtos/product.dto';

export class CART_TS {
  @IsString()
  id: string;


  created_at: string;
  update_at?: string;
  status: StatusCart;
  delivery_fees?: number;
  total: number;
  owner?: object;
  products?: PRODUCT_ON_CART_TS[];
  payment: object;
  error_Messages: object;
}

export interface PRODUCT_ON_CART_TS {
  assignedAt: string;
  cartId: string;
  id: number;
  product: PRODUCT_TS;
  productId: string;
  quantityInCart: number;
}

