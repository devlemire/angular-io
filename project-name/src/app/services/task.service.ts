import { Injectable } from '@angular/core';
import { tasks } from './data/task.data';

import Task from '../classes/Task';

@Injectable()

export class TaskService {
  taskId = 2;

  getTasks(): Task[] {
    return tasks;
  }

  addTask( task ) {
    tasks.push({ id: this.taskId, task });
    this.taskId++;
  }

  removeTask( id ) {
    let removeIndex = tasks.findIndex( task => task.id === id );
    tasks.splice( removeIndex, 1 );
  }
}