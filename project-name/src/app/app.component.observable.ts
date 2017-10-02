import { Component } from '@angular/core';
// Services
import { TaskServiceObservable } from './services/task.observable.service';
// Interface
import { AppObservableInterface } from './interfaces/app.observable.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.http.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponentObservable implements AppObservableInterface {
  tasks = [];
  selectedTask = null;
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
    this.getTasks();

    taskService.tasks.subscribe( data => {
      this.tasks = data;
    });
  }

  addTask( task: string ): void {
    this.loading.add = true;

    this.taskService.addTask( task ).subscribe( () => {
      this.showNew = !this.showNew;
      this.newTask = "";
      this.loading.add = false;
    }, this.handleError );
  }

  getTasks(): void {
    this.loading.get = true;

    this.taskService.getTasks().subscribe( () => {
      this.loading.get = false;
    }, this.handleError );
  }

  updateTask( id, task ): void {
    this.loading.update = true;

    this.taskService.updateTask( id, task ).subscribe( () => {
      this.selectedTask = null;
      this.newTaskString = '';
      this.loading.update = false;
    }, this.handleError );
  }

  removeTask( id ): void {
    this.loading.remove = true;

    this.taskService.removeTask( id ).subscribe( () => {
      this.selectedTask = null;
      this.loading.remove = false;
    }, this.handleError );
  }

  handleError( error ): Promise<Error> {
    console.log('Error hitting API:', error);
    return Promise.reject( error.message || error );
  }
}