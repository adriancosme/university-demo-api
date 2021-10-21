import { Student } from "../../../modules/student/entities/student.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('program')
export class Program {    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    inscriptionDate: Date;

    @ManyToMany(() => Student)
    students: Student[];
}