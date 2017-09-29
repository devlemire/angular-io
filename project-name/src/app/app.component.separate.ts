import { Component } from '@angular/core';
// Services
import { TaskService } from './services/task.service';
// Interface
import { AppInterface } from './interfaces/app.separate.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponentSeparate implements AppInterface {
  tasks = null;
  selectedTask = null;
  showNew = false;
  newTask = '';

  constructor( private taskService: TaskService ) {
    this.tasks = taskService.getTasks();
  }

  addTask( task ) {
    this.taskService.addTask( task );

    this.showNew = !this.showNew;
    this.newTask = "";
  }

  removeTask( id ) {
    this.taskService.removeTask( id );
    
    this.selectedTask = null;
  }
}