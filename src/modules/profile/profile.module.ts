import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileController } from './api/profile.controller';
import { ProfileService } from './api/profile.service';
import { Profile } from './entities/profile.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Profile])],
    controllers: [ProfileController],
    providers:[ProfileService]
})
export class ProfileModule {}
