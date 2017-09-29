import { Component } from '@angular/core';
// Classes
import Task from './classes/Task';
// Services
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.http.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponentHTTP {
  tasks: Promise<Task[]>;
  selectedTask: Task;
  showNew: boolean;
  newTask: string;
  loading: {
    add: boolean;
    get: boolean;
    update: boolean;
    remove: boolean;
  };
  newTaskString: string;

  constructor( public taskService: TaskService ) {
    this.selectedTask = null;
    this.showNew = false;
    this.newTask = '';
    this.loading = {
      add: false,
      get: false,
      update: false,
      remove: false
    };
    this.newTaskString = '';
    
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