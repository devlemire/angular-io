import { Injectable } from '@angular/core';

// Classes
import { Task } from '../classes/Task';

// HTTP Calls
import { Http } from '@angular/http';

// RxJS Observables
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()

export class TaskService {
  private _tasks: BehaviorSubject<Task[]> = new BehaviorSubject([]);
  public readonly tasks: Observable<Task[]> = this._tasks.asObservable();

  constructor( private http: Http ) { }

  getTasks(): Observable<any> {
    return this.http.get('https://practiceapi.devmountain.com/api/angulario/tasks')
      .map( response => this._tasks.next( response.json() ) );
  }

  addTask( task: string ): Observable<any> {
    return this.http.post(`https://practiceapi.devmountain.com/api/angulario/tasks`, { task })
      .map( response => this._tasks.next( response.json() ) );
  }

  removeTask( id: number ): Observable<any> {
    return this.http.delete(`https://practiceapi.devmountain.com/api/angulario/tasks?id=${ id }`)
      .map( response => this._tasks.next( response.json() ) )
  }

  updateTask( id: number, task: string ): Observable<any> {
    return this.http.put(`https://practiceapi.devmountain.com/api/angulario/tasks?id=${ id }`, { task })
      .map( response => this._tasks.next( response.json() ) )
  }
}