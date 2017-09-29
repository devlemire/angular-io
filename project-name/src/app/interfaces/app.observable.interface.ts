// Classes
import { Task } from '../classes/Task';
// Observables
import { Observable } from 'rxjs/Observable';

export interface AppInterface {
  tasks: Observable<Task[]>;
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