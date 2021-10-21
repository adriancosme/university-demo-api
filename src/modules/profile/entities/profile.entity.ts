import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('profile')
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    email: string;
}