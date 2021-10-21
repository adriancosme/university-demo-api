import { Student } from '../../../student/entities/student.entity';
import { ProgramToStudent } from '../../../program-student/entities/program-student.entity';

const students: Student[] = [
  {
    id: 1,
    name: 'Jorge',
    lastName: 'Puerto',
    programToStudent: [
      {
        program: { id: 1 },
        student: { id: 1 },
        inscriptionDate: new Date('23/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 2,
    name: 'Stefan',
    lastName: 'Xu',
    programToStudent: [
      {
        program: { id: 1 },
        student: { id: 2 },
        inscriptionDate: new Date('23/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 3,
    name: 'González',
    lastName: 'Garcia',
    programToStudent: [
      {
        program: { id: 1 },
        student: { id: 3 },
        inscriptionDate: new Date('23/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 4,
    name: 'Rodríguez',
    lastName: 'Lopez',
    programToStudent: [
      {
        program: { id: 1 },
        student: { id: 4 },
        inscriptionDate: new Date('23/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 5,
    name: 'Juan',
    lastName: 'Albornoz',
    programToStudent: [
      {
        program: { id: 1 },
        student: { id: 5 },
        inscriptionDate: new Date('27/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 6,
    name: 'Ricardo',
    lastName: 'Perez',
    programToStudent: [
      {
        program: { id: 1 },
        student: { id: 6 },
        inscriptionDate: new Date('25/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 7,
    name: 'Alicia',
    lastName: 'Centeno',
    programToStudent: [
      {
        program: { id: 1 },
        student: { id: 7 },
        inscriptionDate: new Date('25/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 8,
    name: 'Juan',
    lastName: 'Ku',
    programToStudent: [
      {
        program: { id: 1 },
        student: { id: 8 },
        inscriptionDate: new Date('25/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 9,
    name: 'Maria',
    lastName: 'Delgado',
    programToStudent: [
      {
        program: { id: 1 },
        student: { id: 9 },
        inscriptionDate: new Date('27/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 10,
    name: 'Karen',
    lastName: 'Sarmiento',
    programToStudent: [
      {
        program: { id: 1 },
        student: { id: 10 },
        inscriptionDate: new Date('27/06/2021'),
      } as ProgramToStudent,
      {
        program: { id: 2 },
        student: { id: 10 },
        inscriptionDate: new Date('25/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 11,
    name: 'Juan',
    lastName: 'Ruiz',
    programToStudent: [
      {
        program: { id: 1 },
        student: { id: 11 },
        inscriptionDate: new Date('27/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 12,
    name: 'Manuel',
    lastName: 'Puga',
    programToStudent: [
      {
        program: { id: 2 },
        student: { id: 12 },
        inscriptionDate: new Date('25/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 13,
    name: 'Luis',
    lastName: 'Pech',
    programToStudent: [
      {
        program: { id: 2 },
        student: { id: 13 },
        inscriptionDate: new Date('25/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 14,
    name: 'Alejandro',
    lastName: 'Cantun',
    programToStudent: [
      {
        program: { id: 2 },
        student: { id: 14 },
        inscriptionDate: new Date('25/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 15,
    name: 'Ricardo',
    lastName: 'Ofarri',
    programToStudent: [
      {
        program: { id: 2 },
        student: { id: 15 },
        inscriptionDate: new Date('25/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 16,
    name: 'Manuel',
    lastName: 'Pech',
    programToStudent: [
      {
        program: { id: 2 },
        student: { id: 16 },
        inscriptionDate: new Date('25/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 17,
    name: 'Josue',
    lastName: 'Dominguez',
    programToStudent: [
      {
        program: { id: 2 },
        student: { id: 17 },
        inscriptionDate: new Date('25/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 18,
    name: 'Manuel',
    lastName: 'Delgado',
    programToStudent: [
      {
        program: { id: 2 },
        student: { id: 18 },
        inscriptionDate: new Date('25/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 19,
    name: 'Ricardo',
    lastName: 'Ruiz',
    programToStudent: [
      {
        program: { id: 2 },
        student: { id: 19 },
        inscriptionDate: new Date('27/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 20,
    name: 'Alicia',
    lastName: 'Ceballos',
    programToStudent: [
      {
        program: { id: 3 },
        student: { id: 20 },
        inscriptionDate: new Date('28/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 21,
    name: 'Juan',
    lastName: 'Uku',
    programToStudent: [
      {
        program: { id: 3 },
        student: { id: 21 },
        inscriptionDate: new Date('28/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 22,
    name: 'Marina',
    lastName: 'Gutierrez',
    programToStudent: [
      {
        program: { id: 3 },
        student: { id: 22 },
        inscriptionDate: new Date('28/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 23,
    name: 'Daniel',
    lastName: 'Perez',
    programToStudent: [
      {
        program: { id: 3 },
        student: { id: 23 },
        inscriptionDate: new Date('28/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 24,
    name: 'Maria',
    lastName: 'Gonzales',
    programToStudent: [
      {
        program: { id: 3 },
        student: { id: 24 },
        inscriptionDate: new Date('28/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
  {
    id: 25,
    name: 'Marisol',
    lastName: 'Hernandez',
    programToStudent: [
      {
        program: { id: 3 },
        student: { id: 25 },
        inscriptionDate: new Date('28/06/2021'),
      } as ProgramToStudent,
    ] as ProgramToStudent[],
  } as Student,
].map((data) => {
  const student = new Student();
  Object.assign(student, data);
  return student;
});

export default students;
