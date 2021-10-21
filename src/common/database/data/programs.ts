import { Program } from '../../../program/entities/program.entity';

const programs: Program[] = [
  { id: 1, name: 'Primavera' } as Program,
  { id: 2, name: 'Canto' } as Program,
  { id: 3, name: 'Baile' } as Program,
].map((data) => {
  const program = new Program();
  Object.assign(program, data);
  return program;
});

export default programs;
