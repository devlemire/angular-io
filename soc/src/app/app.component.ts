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

  constructor( private taskService: TaskService ) {
    this.tasks = taskService.getTasks();
  }

  addTask( task: string ): void {
    this.taskService.addTask( task );
    this.showNew = !this.showNew;
    this.newTaskModel = "";
  }

  removeTask( id: number ): void {
    this.taskService.removeTask( id );
    this.selectedTask = null;
  }

  updateTask( id: number, task: string ): void {
    this.taskService.updateTask( id, task );
    this.selectedTask = null;
    this.updateTaskModel = '';
  }
}