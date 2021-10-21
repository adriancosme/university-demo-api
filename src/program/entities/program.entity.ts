import { Student } from '../../student/entities/student.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProgramToStudent } from '../../program-student/entities/program-student.entity';

@Entity('program')
export class Program {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    () => ProgramToStudent,
    (programToStudent) => programToStudent.program,
    { cascade: true },
  )
  programToStudent: ProgramToStudent[];
}
