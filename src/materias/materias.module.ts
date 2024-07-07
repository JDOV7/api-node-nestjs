import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MateriasController } from './materias.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Materia, MateriaSchema } from './dto/materias.schema';
import { MateriasService } from './materias.service';
import { MateriaAuthMiddleware } from './middlewares/validacacion.auth.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Materia.name,
        schema: MateriaSchema,
      },
    ]),
  ],
  providers: [MateriasService],
  controllers: [MateriasController],
})
export class MateriasModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MateriaAuthMiddleware).forRoutes({
      path: 'materias/*',
      method: RequestMethod.GET,
    });
  }
}
