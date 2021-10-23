import { Profile } from '../../../profile/entities/profile.entity';
import { User } from '../../../user/entities/user.entity';

const users: User[] = [
  {
    username: 'jperez',
    password: 'admin',
    roles: ['ADMIN'],
    profile: {
      id: 1,
    } as Profile,
  } as User,
  {
    username: 'jmarrufo',
    password: 'cashier',
    roles: ['CASHIER'],
    profile: {
      id: 2,
    } as Profile,
  } as User,
].map((data) => {
  const user = new User();
  Object.assign(user, data);
  return user;
});

export default users;
