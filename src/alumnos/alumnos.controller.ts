import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { Alumno } from './entities/alumno.entity';
import { Response } from 'express';
import { error } from 'console';

@Controller('alumnos')
export class AlumnosController {
  constructor(private readonly alumnosService: AlumnosService) {}

  @Get()
  findAll(@Res() response: Response) {
    let alumnosArray: Alumno[] = [];
    try {
      alumnosArray = this.alumnosService.findAll();
      return response.status(HttpStatus.OK).json(alumnosArray);
    } catch (error) {
      return response.status(HttpStatus.NOT_FOUND).json(alumnosArray);
    }
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number, @Res() response: Response) {
    let alumno: Alumno;
    try {
      alumno = this.alumnosService.findOne(id);
      return response.status(HttpStatus.OK).json(alumno);
    } catch (error) {
      return response.status(HttpStatus.NOT_FOUND).json(alumno);
    }
  }

  @Post()
  createAlumno(@Body() alumno: Alumno, @Res() response: Response) {
    try {
      this.alumnosService.create(alumno);
      return response.status(HttpStatus.CREATED).json(alumno);
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json(alumno);
    }
  }

  @Put(':id')
  updateAlumno(
    @Param('id', ParseIntPipe) id: number,
    @Body() alumno: Alumno,
    @Res() response: Response,
  ) {
    try {
      this.alumnosService.update(id, alumno);
      return response.status(HttpStatus.OK).json(alumno);
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Delete(':id')
  deleteTodo(@Param('id', ParseIntPipe) id: number, @Res() response: Response) {
    try {
      this.alumnosService.delete(id);
      return response.status(HttpStatus.OK).json(error);
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
