// Classes
import { Task } from '../classes/Task';

export interface AppInterface {
  tasks: Task[];
  selectedTask: Task;
  showNew: boolean;
  newTask: string;
}