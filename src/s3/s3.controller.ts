import {
  Body,
  ConflictException,
  Controller,
  Get,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
import { S3Service } from './s3.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { SubidaArchivoInput } from './dto/SubidaArchivo.input';
import { ObtenerArchivoInput } from './dto/ObtenerArchivo.input';
import { RecuperarArchivoInput } from './dto/RecuperarArchivo.input';

@Controller('s3')
export class S3Controller {
  constructor(private readonly s3Service: S3Service) {}

  @Post('subida-archivo')
  @UseInterceptors(FileInterceptor('file'))
  async subirArchivo(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: SubidaArchivoInput,
    @Res() response: Response,
  ) {
    try {
      const respuestaService = await this.s3Service.subirArchivo(file, body);
      if (!respuestaService.result) {
        throw new ConflictException(respuestaService.message);
      }
      return response.status(201).json({
        result: false,
        message: 'subida exitosa',
        data: respuestaService.data,
      });
    } catch (error) {
      return response.status(500).json({
        result: false,
        message: error.message,
        data: {},
      });
    }
  }

  @Post('obtener-archivo')
  async obtenerArchivo(
    @Body() body: ObtenerArchivoInput,
    @Res() response: Response,
  ) {
    try {
      const respuestaService = await this.s3Service.obtenerArchivo(body);
      if (!respuestaService.result) {
        throw new ConflictException(respuestaService.message);
      }
      return response.status(201).json({
        result: false,
        message: 'subida exitosa',
        data: respuestaService.data,
      });
    } catch (error) {
      return response.status(500).json({
        result: false,
        message: error.message,
        data: {},
      });
    }
  }

  /**
   * Este endpoint sirve para clases como glacier y deep
   * **/
  @Post('recuperar-archivo')
  async recuperarArchivo(
    @Body() body: RecuperarArchivoInput,
    @Res() response: Response,
  ) {
    try {
      const respuestaService = await this.s3Service.recuperarArchivo(body);
      if (!respuestaService.result) {
        throw new ConflictException(respuestaService.message);
      }
      return response.status(201).json({
        result: false,
        message: 'subida exitosa',
        data: respuestaService.data,
      });
    } catch (error) {
      return response.status(500).json({
        result: false,
        message: error.message,
        data: {},
      });
    }
  }
}
