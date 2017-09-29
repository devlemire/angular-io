import { Injectable } from '@angular/core';
import { tasks } from './data/task.data';

// HTTP Calls
import { Observable } from 'rxjs/Observable'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class TaskServiceObservable {
  taskId = 2;
  
  constructor( private http: Http ) { }

  getTasks(): Observable<any> {
    return this.http.get('https://practiceapi.devmountain.com/api/angulario/tasks')
      .map( response => response.json() );
  }

  addTask( task: string ): Observable<any> {
    return this.http.post(`https://practiceapi.devmountain.com/api/angulario/tasks`, { task })
      .map( response => response.json() )
  }

  removeTask( id: number ): Promise<any> {
    return this.http.delete(`https://practiceapi.devmountain.com/api/angulario/tasks?id=${ id }`)
      .toPromise()
  }

  updateTask( id: number, task: string ): Promise<any> {
    return this.http.put(`https://practiceapi.devmountain.com/api/angulario/tasks?id=${ id }`, { task })
      .toPromise()
  }

  handleError( error ) {
    console.log('Error htting API:', error);
    return Promise.reject( error.message || error );
  }
}