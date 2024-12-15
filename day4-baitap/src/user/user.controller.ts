import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDTO } from './dto/create-userdto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser() {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() body: createUserDTO) {
    return this.userService.createUser(body);
  }
}
