import { Profile } from '../../profile/entities/profile.entity';

export class EditUserDto {
  id: number;
  username: string;
  password: string;
  profile: Profile;
  roles: string[];
}
