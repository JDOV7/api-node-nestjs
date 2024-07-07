import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class Students {
  @Prop()
  sNombre: string;

  @Prop()
  sApellidoPaterno: string;

  @Prop()
  sApellidoMaterno: string;

  @Prop()
  dFechaNacimiento: Date;

  @Prop()
  sMatricula: string;

  @Prop()
  iGrado: number;

  @Prop()
  sGrupo: string;

  // @Prop()
  // arrMaterias: Materia[];

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const StudentsSchema = SchemaFactory.createForClass(Students);
