import { Transform, Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsAlpha,
  IsArray,
  IsDateString,
  IsNumber,
  Length,
  ValidateNested,
} from 'class-validator';
import { CrearMateriaDTO } from 'src/materias/dto/entities/crearMateria.entity';
import { Salones } from 'src/materias/dto/enum/Salones.enum';

class CrearStudentDTO {
  @Length(1, 35, {
    message: 'El nombre del estudiante no es valido',
  })
  sNombre: string;

  @Length(1, 35, {
    message: 'El apellido paterno del estudiante no es valido',
  })
  sApellidoPaterno: string;

  @Length(1, 35, {
    message: 'El apellido materno del estudiante no es valido',
  })
  sApellidoMaterno: string;

  @IsDateString(
    {
      strict: true,
    },
    {
      message: 'La fecha de nacimiento del estudiante no es valido',
    },
  )
  dFechaNacimiento: Date;

  @Length(10, 10, {
    message: 'La matricula del estudiante no es valido',
  })
  sMatricula: string;

  @IsNumber(
    {
      allowNaN: true,
    },
    { message: 'El grado del estudiante no es valido' },
  )
  iGrado: number;

  @IsAlpha('es-ES', { message: 'El grupo del estudiante no es valido' })
  sGrupo: string;

  // @IsArray({ message: 'Las materias del estudiante no es valido' })
  // @ValidateNested({ each: true })
  // @ArrayMinSize(1, { message: 'La cantidad de materias no es valida' })
  // @Type(() => CrearMateriaDTO)
  // arrMaterias: CrearMateriaDTO[];

  //   @Transform(({ value }) => {
  //     try {
  //       console.log(value);
  //       return JSON.parse(value);

  //     } catch (error) {
  //       console.log(error);
  //       return [];
  //     }
  //   })
  //   @IsArray({ message: 'Las materias del estudiante no es valido2' })
  // @IsString()
  // text: string;
}

export { CrearStudentDTO };
