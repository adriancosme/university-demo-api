import { Module } from '@nestjs/common';
import { Configuration } from '../common/config/config.keys';
import { ConfigModule } from '../common/config/config.module';
import { ConfigService } from '../common/config/config.service';
import { DatabaseModule } from '../common/database/database.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { ProgramModule } from './program/program.module';
import { RoleModule } from './role/role.module';
import { StudentModule } from './student/student.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    UserModule,
    ProfileModule,
    RoleModule,
    StudentModule,
    ProgramModule,
    AuthModule,
  ],
})
export class AppModule { 
  static PORT: number | string;
  static HTTP: string;
  static HOST: string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.PORT = this._configService.get(Configuration.APP_PORT);
    AppModule.HTTP = this._configService.get(Configuration.APP_HTTP_PROTOCOL);
    AppModule.HOST = this._configService.get(Configuration.APP_HOST);
  }
}
