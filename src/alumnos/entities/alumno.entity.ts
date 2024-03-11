import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Alumno' })
export class Alumno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  matricula: string;
}
