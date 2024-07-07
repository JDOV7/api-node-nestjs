import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Materia {
  @Prop()
  sNombre: string;

  @Prop()
  sDocente: string;

  @Prop()
  iHora: number;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const MateriaSchema = SchemaFactory.createForClass(Materia);
