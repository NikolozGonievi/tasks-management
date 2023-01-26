import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDTO } from './dto/update-task-status.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  // @Get()
  // getTasks(@Query() filterDTO:GetTasksFilterDTO ): Array<ITask> {
  //   if(Object.keys(filterDTO).length){
  //     return this.tasksService.getTasksWithFilters(filterDTO)
  //   }else{

  //     return this.tasksService.getAllTasks();
  //   }
  // }

  // @Get(':id')
  // getTaskById(@Param('id') id: string): ITask {
  //   return this.tasksService.getTaskById(id);
  // }

  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto): ITask {
  //   return this.tasksService.createTask(createTaskDto);
  // }

  // @Delete(':id')
  // deleteTask(@Param('id') id: string): void {
  //   return this.tasksService.deleteTask(id);
  // }

  // @Patch(':id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: UpdateTaskStatusDTO,
  // ) {
  //   return this.tasksService.updateTaskStatus(id, updateTaskStatusDto);
  // }
}
