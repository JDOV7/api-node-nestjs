import { IsEnum, MinLength } from 'class-validator';
import { StorageClass } from '../enums/StorageClass.enum';

export class SubidaArchivoInput {
  @IsEnum(StorageClass, {
    message: 'StorageClass invalido',
  })
  StorageClass: StorageClass;

  @MinLength(1, {
    message: 'sBucket necesario',
  })
  sBucket: string;
}
