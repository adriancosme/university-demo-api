import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/api/user.service';
import { User } from '../../user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByUserName(username);
    if (user && (await compare(pass, user.password))) {
      const { password, ...rest } = user;
      return rest;
    }
    return null;
  }

  login(user: User) {
    const { id } = user;
    const payload = { sub: id };

    return {
      user,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
