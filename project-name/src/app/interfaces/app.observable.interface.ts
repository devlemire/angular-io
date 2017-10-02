// Classes
import { Task } from '../classes/Task';
import { Loading } from '../classes/Loading';
// Observables
import { Observable } from 'rxjs/Observable';

export interface AppObservableInterface {
  tasks: Task[];
  selectedTask: Task;
  showNew: Boolean;
  newTask: String;
  loading: Loading;
  newTaskString: string;
}