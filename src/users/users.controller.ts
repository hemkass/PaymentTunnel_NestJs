import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { AddOwnerDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiBody({
    type: AddOwnerDto,
    description:
      'only send field to update, all fields can be updated except pictures for now',
    examples: {
      user: {
        value: {
          email: 'nestor@test.fr',
          cartId: '08c00329-a7a7-460b-85c2-d35edb885203',
          fullname: 'fanny Martin',
          telephone: '0606060606',
          adress_Delivery: {
            adress: '24 rue du port',
            postcode: 59000,
            city: 'Lille',
            country: 'France',
          },
        },
      },
    },
  })
  @Post('/addOwner')
  addOwner(@Body() createUserData: AddOwnerDto) {
    return this.userService.addOwner(createUserData);
  }
}
