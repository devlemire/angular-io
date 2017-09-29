import { Injectable } from '@angular/core';
import { tasks } from './data/task.data';

import Task from '../classes/Task';

// HTTP Calls
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class TaskService {
  taskId = 2;
  
  constructor( private http: Http ) { }

  getTasks(): Task[] {
    return tasks;
  }

  addTask( task ): void {
    tasks.push({ id: this.taskId, task });
    this.taskId++;
  }

  removeTask( id ): void {
    let removeIndex = tasks.findIndex( task => task.id === id );
    tasks.splice( removeIndex, 1 );
  }

  getTasksHTTP(): Promise<any> {
    return this.http.get('https://practiceapi.devmountain.com/api/angulario/tasks')
      .toPromise()
  }

  addTaskHTTP( task: object ): Promise<any> {
    return this.http.post(`https://practiceapi.devmountain.com/api/angulario/tasks`, { task })
      .toPromise()
  }

  removeTaskHTTP( id: number ): Promise<any> {
    return this.http.delete(`https://practiceapi.devmountain.com/api/angulario/tasks?id=${ id }`)
      .toPromise()
  }

  updateTaskHTTP( id: number, task: string ): Promise<any> {
    return this.http.put(`https://practiceapi.devmountain.com/api/angulario/tasks?id=${ id }`, { task })
      .toPromise()
  }

  handleError( error ) {
    console.log('Error htting API:', error);
    return Promise.reject( error.message || error );
  }
}