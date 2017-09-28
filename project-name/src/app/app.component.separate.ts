import { Component } from '@angular/core';
// Classes
import Task from './classes/Task';
// Services
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponentSeparate {
  tasks: Task[];
  selectedTask: Task;
  showNew: boolean;
  newTask: string;

  constructor( private taskService: TaskService ) {
    this.tasks = taskService.getTasks();
    this.selectedTask = null;
    this.showNew = false;
    this.newTask = '';
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