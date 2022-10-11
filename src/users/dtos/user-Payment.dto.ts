import { IsEmail, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export interface USER_PAYMENT_TS {
       IsString()
      id: string;
  created_at?: string;
  update_at?: string;
  country?: string;
  fullname: string;
  adress?: string;
  city?: string;
  postCode?: string;
  email: string;
  phone: string;
}