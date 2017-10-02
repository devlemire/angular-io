// Classes
import { Task } from './classes/Task';

export interface AppInterface {
  tasks: Task[];
  selectedTask: Task;
  showNew: boolean;
  newTaskModel: string;
  updateTaskModel: string;
}