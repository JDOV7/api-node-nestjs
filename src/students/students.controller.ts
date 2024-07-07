import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CrearStudentDTO } from './dto/entities/crearStudent.entity';
import { Response } from 'express';
import { plainToClass } from 'class-transformer';
import { CrearMateriaDTO } from 'src/materias/dto/entities/crearMateria.entity';
import { validate } from 'class-validator';
import { ObtenerEstudiantes } from './dto/entities/obtenerEstudiantes.entity';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}

  @Post('crear')
  async crearStudent(
    @Body() crearStudentBody: CrearStudentDTO,
    @Res() response: Response,
  ) {
    try {
      const objRespuestaCrearStudent =
        await this.studentService.crearEstudiante(crearStudentBody);

      //   console.log(JSON.stringify(crearStudentBody.arrMaterias));
      // console.log('===============CONTROLLER=================');
      // console.log(crearStudentBody);
      // console.log(crearStudentBody.text);
      // const arrMaterias = JSON.parse(crearStudentBody.text);
      // for (const objMateria of arrMaterias) {
      //   console.log(objMateria);
      //   const conversion = plainToClass(CrearMateriaDTO, objMateria);
      //   console.log(conversion);
      //   const validacion = await validate(conversion);
      //   console.log(validacion);
      // }
      // //   console.log(JSON.parse(crearStudentBody.text));
      return response.status(201).json({
        result: true,
        message: 'Estudiante creado',
        data: {
          //   json: JSON.parse(crearStudentBody['text']),
          //   text: JSON.stringify(crearStudentBody.arrMaterias),
          objRespuestaCrearStudent,
        },
      });
    } catch (error) {
      return response.status(500).json({
        result: false,
        message: error.message,
        data: {},
      });
    }
  }

  @Get('obtener-estudiantes')
  async obtenenerEstudiantes(
    @Query() objQuery: ObtenerEstudiantes,
    @Res() objResponse: Response,
  ) {
    // console.log(objQuery);
    try {
      const arrRespuestaServicio =
        await this.studentService.obtenenerEstudiantes(objQuery);
      if (!arrRespuestaServicio.result) {
        throw new Error(arrRespuestaServicio.message);
      }
      return objResponse.status(200).json({ ...arrRespuestaServicio });
    } catch (error) {
      return objResponse
        .status(500)
        .json({ result: false, message: error.message, data: {} });
    }
  }
}
