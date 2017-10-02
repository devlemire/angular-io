import { Injectable } from '@angular/core';
import { Task } from '../classes/Task';

// HTTP Calls - Promises
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

// Marks the class as an injectable, in this case an injectable service.
@Injectable()

export class TaskService {
  // Constructor is used as an injection site for http
  constructor( private http: Http ) { }

  getTasks(): Promise<any> {
    return this.http.get('https://practiceapi.devmountain.com/api/angulario/tasks')
      .toPromise()
  }

  addTask( task: string ): Promise<any> {
    return this.http.post(`https://practiceapi.devmountain.com/api/angulario/tasks`, { task })
      .toPromise()
  }

  removeTask( id: number ): Promise<any> {
    return this.http.delete(`https://practiceapi.devmountain.com/api/angulario/tasks?id=${ id }`)
      .toPromise()
  }

  updateTask( id: number, task: string ): Promise<any> {
    return this.http.put(`https://practiceapi.devmountain.com/api/angulario/tasks?id=${ id }`, { task })
      .toPromise()
  }
}