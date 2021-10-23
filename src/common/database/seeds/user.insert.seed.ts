import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { User } from '../../../user/entities/user.entity';
import users from '../data/users';
import { Profile } from '../../../profile/entities/profile.entity';
import profiles from '../data/profile';

export default class UserInsertSeed implements Seeder {
  public async run(factory: Factory, connection: Connection) {
    await connection.getRepository(Profile).save(profiles);
    await connection.getRepository(User).save(users);
  }
}
