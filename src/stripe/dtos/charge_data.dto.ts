import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsNumber } from 'class-validator'
import { CART_TS } from 'src/carts/Dto/cart.dto'
import { USER_PAYMENT_TS } from 'src/users/dtos/user-Payment.dto'


export class DataChargeDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  paymentMethod: string

  user: USER_PAYMENT_TS

  currentCart: CART_TS
}

export default DataChargeDto
