import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Materia } from './dto/materias.schema';
import { CrearMateriaDTO } from './dto/entities/crearMateria.entity';

@Injectable()
export class MateriasService {
  constructor(
    @InjectModel('Materia')
    private materiaModelo: Model<Materia>,
  ) {}

  async crearNuevaMateria(objData: CrearMateriaDTO) {
    try {
      const objRespuestaCrearMateria = await this.materiaModelo.create({
        ...objData,
        HorariosSemana: {
          lunes:60
        },
        traka:5
      });
      return {
        result: true,
        message: 'Materia creada',
        data: objRespuestaCrearMateria,
      };
    } catch (error) {
      return { result: false, message: error.message, data: {} };
    }
  }

  async obtenerTodasLasMaterias() {
    try {
      const arrMaterias = await this.materiaModelo.find();
      return { result: true, message: 'Todas las materias', data: arrMaterias };
    } catch (error) {
      return { result: false, message: error.message, data: {} };
    }
  }
  async obtenerCantidadMaterias() {
    try {
      const arrMaterias = (await this.materiaModelo.find()).length;
      return { result: true, message: 'Todas las materias', data: arrMaterias };
    } catch (error) {
      return { result: false, message: error.message, data: {} };
    }
  }
}
