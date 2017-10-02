import { Injectable } from '@angular/core';
import { tasks } from './data/task.data';
import { Task } from '../classes/Task';

// Marks the class as an injectable, in this case an injectable service.
@Injectable()

export class TaskService {
  private taskId: number = 2;
  
  getTasks(): Task[] {
    return tasks;
  }

  addTask( task: string ): void {
    tasks.push({ id: this.taskId, task });
    this.taskId++;
  }

  removeTask( id: number ): void {
    let removeIndex = tasks.findIndex( task => task.id === id );
    tasks.splice( removeIndex, 1 );
  }

  updateTask( id: number, task: string ): void {
    let taskIndex = tasks.findIndex( task => task.id === id );
    tasks[ taskIndex ].task = task;
  }
}