import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export interface User {
  name: string;
  age: number;
}
@Injectable()
export class TasksService {
  private tasks = [];

  gerAllTasks() {
    // return ['task1', 'task2', 'task3'];
    return this.tasks;
  }

  getTask(id: number) {
    // return ['task1', 'task2', 'task3'];
    const tareaEncontra = this.tasks.find((task) => task.id == id);
    if (!tareaEncontra) {
      return new NotFoundException(`Tarea con id ${id} no encontrada`);
    }
    return tareaEncontra;
  }

  createTask(task: CreateTaskDto) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTask(task: UpdateTaskDto) {
    return 'actualizando tareas';
  }

  deteleTask() {
    return 'eliminando la tarea';
  }

  updateTaskStatus() {
    return 'actualizado  el estado de una tarea';
  }
}
