import { Profile } from '../../../profile/entities/profile.entity';

const profiles: Profile[] = [
  {
    id: 1,
    name: 'Juan Perez',
    email: 'jperez@mail.com',
  } as Profile,
  {
    id: 2,
    name: 'Javier Marrufo',
    email: 'jmarrufo@mail.com',
  } as Profile,
].map((data) => {
  const profile = new Profile();
  Object.assign(profile, data);
  return profile;
});
export default profiles;
