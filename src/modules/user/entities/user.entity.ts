import { Profile } from "../../profile/entities/profile.entity";
import { Role } from "../../role/entities/role.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToOne(() => Profile)
    @JoinColumn()
    profle: Profile;

    @ManyToOne(() => Role, (role) => role.users)
    role: Role;
}