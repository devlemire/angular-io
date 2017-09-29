import { Component } from '@angular/core';
// Services
import { TaskServiceObservable } from './services/task.observable.service';
// Interface
import { AppInterface } from './interfaces/app.observable.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.http.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponentObservable implements AppInterface {
  tasks: null;
  selectedTask: null;
  showNew = false;
  newTask = '';
  loading = {
    add: false,
    get: false,
    update: false,
    remove: false
  };
  newTaskString = '';

  constructor( public taskService: TaskServiceObservable ) {
    this.taskService.getTasks().subscribe( data => {
      this.tasks = data;
    });
  }

  addTask( task: string ): void {
    this.loading.add = true;

    this.taskService.addTask( task ).subscribe( data => {
      this.tasks = data;

      this.showNew = !this.showNew;
      this.newTask = "";
      this.loading.add = false;
    }, this.handleError ).unsubscribe();
  }

  // getTasks(): void {
  //   this.loading.get = true;

  //   this.taskService.getTasks().then( response => {
  //     this.tasks = response.json();

  //     this.loading.get = false;
  //   }).catch( this.handleError );
  // }

  updateTask( id, task ): void {
    this.loading.update = true;

    this.taskService.updateTask( id, task ).then( response => {
      this.tasks = response.json();

      this.selectedTask = null;
      this.newTaskString = '';
      this.loading.update = false;
    }).catch( this.handleError );
  }

  removeTask( id ): void {
    this.loading.remove = true;

    this.taskService.removeTask( id ).then( response => {
      this.tasks = response.json();

      this.selectedTask = null;
      this.loading.remove = false;
    }).catch( this.handleError );
  }

  handleError( error ): Promise<Error> {
    console.log('Error hitting API:', error);
    return Promise.reject( error.message || error );
  }
}