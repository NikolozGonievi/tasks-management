import { PartialType } from '@nestjs/mapped-types';
import { ETaskStatus } from '../models/task-status.enum';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  
  status: ETaskStatus;
}
