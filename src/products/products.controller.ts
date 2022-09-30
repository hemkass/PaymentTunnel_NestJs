import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getAllProduct() {
    return this.productService.allProducts();
  }

  @Get('/:productId')
  getProductById(@Param('productId') id: string) {
    return this.productService.isProduct(id);
  }
}
