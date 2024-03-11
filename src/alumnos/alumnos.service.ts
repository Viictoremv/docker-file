import { Injectable } from '@nestjs/common';
import { Alumno } from './entities/alumno.entity';

@Injectable()
export class AlumnosService {
  private alumnosArray: Alumno[] = [
    { id: 1, nombre: 'Victor Mendoza', matricula: '20214442' },
  ];

  findAll(): Alumno[] {
    return this.alumnosArray;
  }

  findOne(id: number): Alumno {
    return this.alumnosArray.find((alumno) => alumno.id === id);
  }

  create(alumno: Alumno): void {
    this.alumnosArray.push(alumno);
  }

  update(id: number, alumno: Alumno): void {
    const index = this.alumnosArray.findIndex(
      (alumnoTemp) => alumnoTemp.id === id,
    );
    if (index !== -1) {
      this.alumnosArray[index] = alumno;
    }
  }

  delete(id: number): void {
    this.alumnosArray = this.alumnosArray.filter((alumno) => alumno.id !== id);
  }
}
