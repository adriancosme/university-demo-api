import { Profile } from '../../../profile/entities/profile.entity';
import { User } from '../../../user/entities/user.entity';

const users: User[] = [
  {
    username: 'jperez',
    password: 'admin',
    roles: ['ADMIN'],
    profile: {
      name: 'Juan',
      lastname: 'Perez',
      email: 'jperez@mail.com',
    } as Profile,
  } as User,
  {
    username: 'jmarrufo',
    password: 'cashier',
    roles: ['CASHIER'],
    profile: {
      name: 'Javier',
      lastname: 'Marrufo',
      email: 'jmarrufo@mail.com',
    } as Profile,
  } as User,
].map((data) => {
  const user = new User();
  Object.assign(user, data);
  return user;
});

export default users;
