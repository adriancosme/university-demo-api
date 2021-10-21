import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Program } from '../../program/entities/program.entity';
import { Student } from '../../student/entities/student.entity';

@Entity()
export class ProgramToStudent {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, (student) => student.programToStudent)
  student: Student;

  @ManyToOne(() => Program, (program) => program.programToStudent)
  program: Program;

  @Column()
  inscriptionDate: Date;
}
