import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ETaskStatus } from '../models/task-status.enum';

export class GetTasksFilterDTO {
  @IsOptional()
  @IsEnum(ETaskStatus)
  status: ETaskStatus;

  @IsOptional()
  @IsString()
  search: string;
}
