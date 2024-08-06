import { IsEnum, MinLength } from 'class-validator';
import { StorageClass } from '../enums/StorageClass.enum';

export class ObtenerArchivoInput {
  @MinLength(1, {
    message: 'sBucket necesario',
  })
  sBucket: string;

  @MinLength(1, {
    message: 'sNombreArchivo necesario',
  })
  sNombreArchivo: string;
}
