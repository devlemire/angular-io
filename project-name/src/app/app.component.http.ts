import { Component } from '@angular/core';
// Services
import { TaskService } from './services/task.service';
// Interface
import { AppInterface } from './interfaces/app.http.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.http.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponentHTTP implements AppInterface {
  tasks = null;
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

  constructor( public taskService: TaskService ) {
    this.getTasks();
  }

  addTask( task ): void {
    this.loading.add = true;

    this.taskService.addTaskHTTP( task ).then( response => {
      this.tasks = response.json();

      this.showNew = !this.showNew;
      this.newTask = "";
      this.loading.add = false;
    }).catch( this.handleError );
  }

  getTasks(): void {
    this.loading.get = true;

    this.taskService.getTasksHTTP().then( response => {
      this.tasks = response.json();

      this.loading.get = false;
    }).catch( this.handleError );
  }

  updateTask( id, task ): void {
    this.loading.update = true;

    this.taskService.updateTaskHTTP( id, task ).then( response => {
      this.tasks = response.json();

      this.selectedTask = null;
      this.newTaskString = '';
      this.loading.update = false;
    }).catch( this.handleError );
  }

  removeTask( id ): void {
    this.loading.remove = true;

    this.taskService.removeTaskHTTP( id ).then( response => {
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