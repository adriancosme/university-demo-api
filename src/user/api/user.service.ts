import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { EditUserDto } from '../dto/editUser.dto';
import { CreateUserDto } from '../dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findOneByUserName(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ username: username });
  }

  async getOne(id: number) {
    return this.userRepository.findOne(id);
  }

  async getAllUsers() {
    return this.userRepository
      .createQueryBuilder('user')
      .innerJoinAndSelect('user.profile', 'profile')
      .getMany();
  }

  async editUser(id: number, userEdit: EditUserDto) {
    const user = await this.getOne(id);
    if (!user) {
      throw new HttpException('User do not exist', HttpStatus.BAD_REQUEST);
    }
    const userEdited = Object.assign({}, userEdit);
    return this.userRepository.save(userEdited);
  }

  async create(user: CreateUserDto) {
    return this.userRepository.save(user);
  }
}
