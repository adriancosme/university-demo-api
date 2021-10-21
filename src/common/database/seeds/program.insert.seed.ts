import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Program } from '../../../program/entities/program.entity';
import programs from '../data/programs';

export default class ProgramInsertSeed implements Seeder {
  public async run(factory: Factory, connection: Connection) {
    await connection.getRepository(Program).save(programs);
  }
}
