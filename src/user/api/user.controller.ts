import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { EditUserDto } from '../dto/editUser.dto';
import { CreateUserDto } from '../dto/createUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('get-users')
  async getUsers() {
    return this.userService.getAllUsers();
  }

  @Put(':id')
  async editUser(@Body() editUserDto: EditUserDto, @Param() params) {
    return this.userService.editUser(params.id, editUserDto);
  }

  @Post('/')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param() param) {
    return this.userService.delete(param.id);
  }
}
