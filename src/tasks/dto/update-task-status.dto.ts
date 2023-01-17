import { IsEnum } from 'class-validator';
import { ETaskStatus } from '../models/task.model';

export class UpdateTaskStatusDTO {
  @IsEnum(ETaskStatus)
  status: ETaskStatus;
}
