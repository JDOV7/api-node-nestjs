import { Transform } from 'class-transformer';
import { IsNumber, IsNumberString, IsString, Length } from 'class-validator';

export class ObtenerEstudiantes {
  @Length(1, 35, {
    message: 'El nombre del estudiante no es valido',
  })
  sNombre: string;

  @Transform(({ value }) => {
    const conversion = Number(value);
    return conversion && conversion > 0 ? conversion : '';
  })
  @IsNumber(
    { maxDecimalPlaces: 0 },
    {
      message: 'La pagina es necesaria',
    },
  )
  iPage: number;

  @Transform(({ value }) => {
    const conversion = Number(value);
    return conversion && conversion > 0 ? conversion : '';
  })
  @IsNumber(
    { maxDecimalPlaces: 0 },
    {
      message: 'El limite es necesario',
    },
  )
  iLimit: number;
}
