import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Students } from './dto/students.schema';
import { CrearStudentDTO } from './dto/entities/crearStudent.entity';
import { ObtenerEstudiantes } from './dto/entities/obtenerEstudiantes.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel('Students')
    private studentModel: Model<Students>,
  ) {}

  async crearEstudiante(objStudent: CrearStudentDTO) {
    return await this.studentModel.create({
      ...objStudent,
    });
  }

  async obtenenerEstudiantes(objData: ObtenerEstudiantes) {
    try {
      const { iLimit, iPage, sNombre } = objData;
      const offset = (iPage - 1) * iLimit;
      const arrEstudiantes = await this.studentModel
        .find({
          sNombre,
        })
        .sort({
          createdAt: -1,
        })
        .skip(offset)
        .limit(iLimit);
      return {
        result: true,
        message: 'Data obtenida',
        data: arrEstudiantes,
      };
    } catch (error) {
      return {
        result: false,
        message: error.message,
        data: {},
      };
    }
  }
}
