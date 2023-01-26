import { IsEnum } from 'class-validator';
import { ETaskStatus } from '../models/task-status.enum';

export class UpdateTaskStatusDTO {
  @IsEnum(ETaskStatus)
  status: ETaskStatus;
}
