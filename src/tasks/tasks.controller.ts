import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller({
  path: '/tasks',
})
export class TasksController {
  tasksService: TasksService;
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  // @Get('/')
  // index() {
  //   return 'pagina inicial';
  // }

  @Get()
  gerAllTasks(@Query() query: any) {
    console.log(query);
    return this.tasksService.gerAllTasks();
  }

  @Get('/:id')
  getTask(@Param('id') id: number) {
    console.log(id);
    return this.tasksService.getTask(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  crearTask(@Body() task: CreateTaskDto) {
    // console.log(task);
    return this.tasksService.createTask(task);
  }

  @Put()
  updateTask(@Body() task: CreateTaskDto) {
    return this.tasksService.updateTask(task);
  }

  @Delete()
  deteleTask() {
    return this.tasksService.deteleTask();
  }

  @Patch()
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }
}
