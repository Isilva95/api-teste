/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { Task } from './task';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {

  // Responsavel por fazer minha integração com o banco de dados.
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {

  }

  // Metodo que vou pegar todas as tarefas.
  async getAll() {
    return await this.taskModel.find().exec();
  }

  // Onde vou pegar uma tarefa pelo seu Id.
  async getById(id: string) {
    return await this.taskModel.findById(id).exec();
  }

  // Metodo onde vou criar uma tarefa.
  async create(task: Task) {
    const createdTask = new this.taskModel(task);
    return await createdTask.save();
  }

  // Metodo onde vou alterar uma tarefa.
  async update(id: string, task: Task) {
    await this.taskModel.updateOne({ _id: id }, task).exec();
    return this.getById(id);
  }

  // Metodo onde vou apagar uma tarefa atraves do Id.
  async delete(id: string) {
    return await this.taskModel.deleteOne({ _id: id}).exec();
  }
}
