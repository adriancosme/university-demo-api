import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Configuration } from '../../../common/config/config.keys';
import { ConfigService } from '../../../common/config/config.service';
import { UserService } from '../../user/api/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private userService: UserService,
    private readonly config: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get(Configuration.APP_SECRET_KEY),
    });
  }

  async validate(payload: any) {
    const { sub: id } = payload;
    return await this.userService.getOne(id);
  }
}
