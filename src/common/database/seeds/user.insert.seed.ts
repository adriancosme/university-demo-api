import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { User } from '../../../user/entities/user.entity';
import users from '../data/users';

export default class UserInsertSeed implements Seeder {
  public async run(factory: Factory, connection: Connection) {
    await connection.getRepository(User).save(users);
  }
}
