import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Student } from '../../../student/entities/student.entity';
import students from '../data/students';

export default class StudentInsertSeed implements Seeder {
  public async run(factory: Factory, connection: Connection) {
    await connection.getRepository(Student).save(students);
  }
}
