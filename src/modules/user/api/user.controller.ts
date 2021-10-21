import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('users')
  async getUsers() {
    return this.userService.getAllUsers();
  }
}
