import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional,} from 'class-validator';

export class addProductBodyDTO { 
  @ApiPropertyOptional({ description: 'quantity wanted, by default 1' })
  @IsOptional()
  @IsNumber()
  quantity?: number;

 
}
