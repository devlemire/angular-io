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
  tasks = null;
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
    taskService.getTasks().then( response => {
      this.tasks = response.json();
      this.loading.get = false;
    });
  }

  addTask( task: string ): void {
    this.loading.add = true;

    this.taskService.addTask( task ).then( response => {
      this.tasks = response.json();
      this.showNew = !this.showNew;
      this.newTaskModel = "";
      this.loading.add = false;
    });
  }

  removeTask( id: number ): void {
    this.loading.remove = true;

    this.taskService.removeTask( id ).then( response => {
      this.tasks = response.json();
      this.selectedTask = null;
      this.loading.remove = false;
    });
  }

  updateTask( id: number, task: string ): void {
    this.loading.update = true;

    this.taskService.updateTask( id, task ).then( response => {
      this.tasks = response.json();
      this.selectedTask = null;
      this.updateTaskModel = '';
      this.loading.update = false;
    });
  }
}