/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  description: String,
  completed: Boolean
})