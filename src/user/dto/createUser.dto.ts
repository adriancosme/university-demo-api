import { Profile } from '../../profile/entities/profile.entity';

export class CreateUserDto {
  id: number;
  username: string;
  password: string;
  profile: Profile;
  roles: string[];
}
