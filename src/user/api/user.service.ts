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
    return this.userRepository
      .createQueryBuilder('user')
      .where({ username })
      .leftJoinAndSelect('user.profile', 'profile')
      .getOne();
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

  async delete(id: number) {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new HttpException('User do not exist', HttpStatus.BAD_REQUEST);
    }
    return this.userRepository.delete(user.id);
  }
}
