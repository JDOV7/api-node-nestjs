import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { CrearMateriaDTO } from './dto/entities/crearMateria.entity';
import { Response } from 'express';
import { MateriasService } from './materias.service';

@Controller('materias')
export class MateriasController {
  constructor(private materiasService: MateriasService) {}

  @Post('crear')
  async crearNuevaMateria(
    @Body() objBody: CrearMateriaDTO,
    @Res() objRes: Response,
  ) {
    try {
      console.log(objBody);
      const objRespuestaService =
        await this.materiasService.crearNuevaMateria(objBody);
      if (!objRespuestaService.result) {
        throw new Error(objRespuestaService.message);
      }
      return objRes.status(201).json({ ...objRespuestaService });
    } catch (error) {
      return objRes.status(500).json({
        result: false,
        message: error.message,
        data: {},
      });
    }
  }

  @Get('todas-las-materias')
  async todasLasMaterias(@Res() objRes: Response) {
    try {
      const objRespuestaService =
        await this.materiasService.obtenerTodasLasMaterias();
      if (!objRespuestaService.result) {
        throw new Error(objRespuestaService.message);
      }
      return objRes.status(200).json({ ...objRespuestaService });
    } catch (error) {
      return objRes.status(500).json({
        result: false,
        message: error.message,
        data: {},
      });
    }
  }

  @Get('cantidad-materias')
  async getCantidadMaterias(@Res() objRes: Response) {
    try {
      const objRespuestaService =
        await this.materiasService.obtenerCantidadMaterias();
      if (!objRespuestaService.result) {
        throw new Error(objRespuestaService.message);
      }
      return objRes.status(200).json({ ...objRespuestaService });
    } catch (error) {
      return objRes.status(500).json({
        result: false,
        message: error.message,
        data: {},
      });
    }
  }
}
