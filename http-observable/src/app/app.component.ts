import { Component } from '@angular/core';
// Services
import { TaskService } from './services/task.service';
// Interface
import { AppInterface } from './app.interface';
// Classes
import { Task } from './classes/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements AppInterface {
  tasks = [];
  selectedTask = null;
  showNew = false;
  newTaskModel = '';
  updateTaskModel = '';
  loading = {
    get: true,
    add: false,
    update: false,
    remove: false
  }

  constructor( private taskService: TaskService ) {
    this.getTasks();

    taskService.tasks.subscribe( data => {
      this.tasks = data;
    });
  }

  getTasks(): void {
    this.loading.get = true;

    this.taskService.getTasks().subscribe( () => {
      this.loading.get = false;
    }, this.handleError );
  }

  addTask( task: string ): void {
    this.loading.add = true;

    this.taskService.addTask( task ).subscribe( () => {
      this.showNew = !this.showNew;
      this.newTaskModel = "";
      this.loading.add = false;
    }, this.handleError );
  }

  removeTask( id: number ): void {
    this.loading.remove = true;

    this.taskService.removeTask( id ).subscribe( () => {
      this.selectedTask = null;
      this.loading.remove = false;
    }, this.handleError );
  }

  updateTask( id: number, task: string ): void {
    this.loading.update = true;

    this.taskService.updateTask( id, task ).subscribe( () => {
      this.selectedTask = null;
      this.updateTaskModel = '';
      this.loading.update = false;
    }, this.handleError );
  }

  handleError( error ): Promise<Error> {
    console.log('Error hitting API:', error);
    return Promise.reject( error.message || error );
  }
}