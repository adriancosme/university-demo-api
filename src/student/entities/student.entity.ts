import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProgramToStudent } from '../../program-student/entities/program-student.entity';

@Entity('student')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @OneToMany(
    () => ProgramToStudent,
    (programToStudent) => programToStudent.student,
    { cascade: true },
  )
  programToStudent: ProgramToStudent[];
}
