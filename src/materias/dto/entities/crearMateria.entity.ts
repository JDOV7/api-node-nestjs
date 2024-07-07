import { IsEnum, IsNumber, Length } from 'class-validator';
import { Salones } from '../enum/Salones.enum';

class CrearMateriaDTO {
  @Length(1, 35, {
    message: 'El nombre de la materia no es valido',
  })
  sNombre: string;

  @Length(1, 35, {
    message: 'El del docente no es valido',
  })
  sDocente: string;

  @IsNumber(
    {
      allowNaN: true,
    },
    { message: 'La hora de la materia no es valido' },
  )
  iHora: number;

  @IsEnum(Salones, {
    message: 'El salon no es valido',
  })
  sSalon: string;
}

export { CrearMateriaDTO };
