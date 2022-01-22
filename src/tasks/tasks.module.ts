/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MongooseModule } from '@nestjs/mongoose';
import { TaskService } from './shared/task.service';
import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TaskSchema } from './schemas/task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])
  ],
  controllers: [TasksController],
  providers: [TaskService],
})
export class TasksModule {}
