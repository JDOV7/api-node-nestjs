import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { StudentsModule } from './students/students.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MateriasModule } from './materias/materias.module';
import { S3Module } from './s3/s3.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://jesusmarzo7:Keezmovie123_@cluster0.mquzthq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/pruebas/',
    ),
    TasksModule,
    ProjectsModule,
    AuthModule,
    UsersModule,
    StudentsModule,
    MateriasModule,
    S3Module,
  ],
  controllers: [HelloController],
})
export class AppModule {}
