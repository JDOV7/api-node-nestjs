import { IsEnum, IsPositive, MinLength } from 'class-validator';
import { StorageClass } from '../enums/StorageClass.enum';
import { TipoRecuperacionObjecto } from '../enums/TipoRecuperacionObjecto.enum';

export class RecuperarArchivoInput {
  @MinLength(1, {
    message: 'sBucket necesario',
  })
  sBucket: string;

  @MinLength(1, {
    message: 'sNombreArchivo necesario',
  })
  sNombreArchivo: string;

  @IsPositive({
    message: 'nDiasDisponibles no es valido',
  })
  nDiasDisponibles: number;

//   @IsEnum(TipoRecuperacionObjecto, {
//     message: 'sTipoRecuperacion invalid',
//   })
//   sTipoRecuperacion: string;
}
