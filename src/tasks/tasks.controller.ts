/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { TaskService } from './shared/task.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Task } from './shared/task';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';

@Controller('tasks')
export class TasksController {

  constructor(
    private taskService: TaskService
  ) { }

  // Metodo que vou trazer todas as tarefas.
  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll() : Promise<Task[]> {
    return this.taskService.getAll();
  }

  // Metodo para acessar uma tarefa pelo seu Id.
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getById(@Param('id') id: string) : Promise<Task> {
    return this.taskService.getById(id);
  }

  // Metodo de criar tarefa.
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() task: Task): Promise<Task> {
    return this.taskService.create(task);
  }

  // Metodo de alterar ou atualizar uma tarefa.
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() task: Task): Promise<Task> {
    return this.taskService.update(id, task);
  }

  // Metodo de apagar ou deletar uma tarefa.
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.taskService.delete(id);
  }
}
