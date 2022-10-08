
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class AddOwnerDto {
  @ApiProperty()
  @IsEmail()
  email: string;


  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsString()
  cartId?: string;

  @ApiPropertyOptional()
  @IsString()
  password?: string;

  @ApiProperty()
  @IsString()
  fullname: string;


  @ApiProperty()
  @IsOptional()
  adress_Delivery: Adress;

  @ApiPropertyOptional()
  @IsOptional()
  adress_Bill?: Adress;

}

export interface Adress {

  adress?: string;
  postcode: string;
  city: string;
  country?: string;
}
