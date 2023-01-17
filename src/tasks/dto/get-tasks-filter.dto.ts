import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ETaskStatus } from '../models/task.model';

export class GetTasksFilterDTO {
  @IsOptional()
  @IsEnum(ETaskStatus)
  status: ETaskStatus;

  @IsOptional()
  @IsString()
  search: string;
}
