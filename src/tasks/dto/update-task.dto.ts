import { PartialType } from '@nestjs/mapped-types';
import { ETaskStatus } from '../models/task.model';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  
  status: ETaskStatus;
}
