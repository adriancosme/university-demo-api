import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from './api/student.controller';
import { StudentService } from './api/student.service';
import { Student } from './entities/student.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Student])],
    controllers: [StudentController],
    providers: [StudentService]
})
export class StudentModule {}
