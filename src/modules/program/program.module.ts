import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramController } from './api/program.controller';
import { ProgramService } from './api/program.service';
import { Program } from './entities/program.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Program])],
    controllers: [ProgramController],
    providers: [ProgramService]
})
export class ProgramModule {}
