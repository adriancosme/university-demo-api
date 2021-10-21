import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

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
    return this.userRepository.createQueryBuilder().getMany();
  }
}
