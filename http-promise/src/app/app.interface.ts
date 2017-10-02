// Classes
import { Task } from './classes/Task';
import { Loading } from './classes/Loading';

export interface AppInterface {
  tasks: Task[];
  selectedTask: Task;
  showNew: boolean;
  newTaskModel: string;
  updateTaskModel: string;
  loading: Loading;
}