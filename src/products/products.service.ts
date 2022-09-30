import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsController } from './products.controller';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async allProducts() {
    return await this.prisma.$transaction(async () => {
      const count = await this.prisma.product.count();

      const products = await this.prisma.product.findMany();
      return { count: count, products: products };
    });
  }

  async isProduct(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id: id },
    });
    return product;
  }
}
