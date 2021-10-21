import { Profile } from '../../../modules/profile/entities/profile.entity';
import { User } from '../../../modules/user/entities/user.entity';

const users: User[] = [
  {
    username: 'jperez',
    password: 'admin',
    roles: ['ADMIN'],
    profle: {
      name: 'Juan',
      lastname: 'Perez',
      email: 'jperez@mail.com',
    } as Profile,
  } as User,
  {
    username: 'jmarrufo',
    password: 'cashier',
    roles: ['CASHIER'],
    profle: {
      name: 'Javier',
      lastname: 'Marrufo',
      email: 'jmarrufo@mail.com',
    } as Profile,
  } as User,
];
