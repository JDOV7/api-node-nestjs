import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  // timestamps: true,
  _id:false
})
class Horarios {
  @Prop({
    type: Number,
    default: 0,
  })
  lunes: number;

  @Prop({
    type: Number,
    default: 0,
  })
  martes: number;
}

export const HorariosSchema = SchemaFactory.createForClass(Horarios);

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

  @Prop({
    type: HorariosSchema,
  })
  HorariosSemana: Horarios;
}

export const MateriaSchema = SchemaFactory.createForClass(Materia);
