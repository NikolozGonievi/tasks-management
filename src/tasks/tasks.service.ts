import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ETaskStatus, ITask } from './models/task.model';
import { v4 as uuid } from 'uuid';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDTO } from './dto/update-task-status.dto';

@Injectable()
export class TasksService {
  private tasks: Array<ITask> = [];

  getAllTasks(): Array<ITask> {
    return this.tasks;
  }

  getTasksWithFilters(filterDTO: GetTasksFilterDTO): Array<ITask> {
    const { status, search } = filterDTO;

    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    if (search) {
      tasks = tasks.filter(
        (task) =>
          task.title.includes(search) || task.description.includes(search),
      );
    }

    return tasks;
  }

  getTaskById(id: string): ITask {
    const found = this.tasks.find((task) => task.id === id);

    if (!found) {
      throw new NotFoundException(`Task with ID:${id} not found`);
    }
    return found;
  }

  createTask(createTaskDto: CreateTaskDto): ITask {
    const { title, description } = createTaskDto;

    const task: ITask = {
      id: uuid(),
      title: title,
      description: description,
      status: ETaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  deleteTask(id: string): void {
    const found = this.getTaskById(id);
    this.tasks = this.tasks.filter((task) => task.id !== found.id);
  }

  updateTaskStatus(id: string, updateTaskStatusDto: UpdateTaskStatusDTO): ITask {
    const { status } = updateTaskStatusDto;
    let newTask = this.getTaskById(id);
    newTask = { ...newTask, status };
    this.tasks[this.tasks.findIndex((task) => task.id === newTask.id)] =
      newTask;
    return newTask;
  }
}
