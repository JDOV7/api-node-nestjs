import { Injectable } from '@nestjs/common';
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  RestoreObjectCommand,
  Tier,
} from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import { ResponseGeneric } from 'src/helpers/Response';
import { SubidaArchivoInput } from './dto/SubidaArchivo.input';
import { ObtenerArchivoInput } from './dto/ObtenerArchivo.input';
import { createWriteStream, writeFileSync } from 'fs';
import { RecuperarArchivoInput } from './dto/RecuperarArchivo.input';
@Injectable()
export class S3Service {
  s3Cliente;
  constructor() {
    this.s3Cliente = new S3Client({
      region: 'us-east-1',
    });
  }

  async subirArchivo(
    file: Express.Multer.File,
    body: SubidaArchivoInput,
  ): Promise<ResponseGeneric<any>> {
    try {
      let myuuid = uuidv4();
      const sNombre = `archivo_${myuuid}.${file.originalname.substring(
        file.originalname.lastIndexOf('.') + 1,
      )}`;
      console.log(sNombre);
      const input = {
        Bucket: body.sBucket,
        Body: file.buffer,
        ContentType: file.mimetype,
        Key: sNombre,
        StorageClass: body.StorageClass,
      };
      const command = new PutObjectCommand(input);
      const response = await this.s3Cliente.send(command);
      return new ResponseGeneric(true, 'archivo subido', response);
    } catch (error) {
      return new ResponseGeneric(false, error.message, null);
    }
  }

  async obtenerArchivo(
    body: ObtenerArchivoInput,
  ): Promise<ResponseGeneric<any>> {
    try {
      const command = new GetObjectCommand({
        Bucket: body.sBucket,
        Key: body.sNombreArchivo,
      });
      const response = await this.s3Cliente.send(command);
      console.log(response);
      const writeStream = await createWriteStream(`./${body.sNombreArchivo}`);
      await response.Body.pipe(writeStream);
      return new ResponseGeneric(true, 'archivo subido', null);
    } catch (error) {
      return new ResponseGeneric(false, error.message, null);
    }
  }

  async recuperarArchivo(
    body: RecuperarArchivoInput,
  ): Promise<ResponseGeneric<any>> {
    try {
      const command = new RestoreObjectCommand({
        Bucket: body.sBucket,
        Key: body.sNombreArchivo,
        RestoreRequest: {
          Days: body.nDiasDisponibles,
          GlacierJobParameters: {
            Tier: Tier.Bulk,
          },
        },
      });
      const response = await this.s3Cliente.send(command);
      console.log(response);
      return new ResponseGeneric(true, 'archivo subido', response);
    } catch (error) {
      return new ResponseGeneric(false, error.message, null);
    }
  }
}
