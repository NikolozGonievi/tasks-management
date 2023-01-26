import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ETaskStatus } from '../models/task-status.enum';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: ETaskStatus;
}
