import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddOwnerDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async addOwner(createUserData) {
    let { email, phone, fullname, adress_Delivery, cartId } = createUserData;
    let userData = {
      email: email,
      phone: phone,
      fullname: fullname,

      carts: { connect: { id: cartId } },
      adress_Delivery: { create: adress_Delivery },
    };

    return await this.prisma.user.create({ data: userData });
  }
}
