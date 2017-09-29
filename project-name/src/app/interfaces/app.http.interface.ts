// Classes
import { Task } from '../classes/Task';

export interface AppInterface {
  tasks: Promise<Task[]>;
  selectedTask: Task;
  showNew: boolean;
  newTask: string;
  loading: {
    add: boolean;
    get: boolean;
    update: boolean;
    remove: boolean;
  };
  newTaskString: string;
}