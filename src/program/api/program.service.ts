import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Program } from '../entities/program.entity';

@Injectable()
export class ProgramService {
  constructor(
    @InjectRepository(Program) private programRepository: Repository<Program>,
  ) {}
  getPrograms() {
    return this.programRepository
      .createQueryBuilder('program')
      .leftJoinAndSelect('program.programToStudent', 'programStudent')
      .leftJoinAndSelect('programStudent.student', 'student')
      .getMany();
  }
}
