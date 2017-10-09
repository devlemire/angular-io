import { Component } from '@angular/core';
// Services
import { TaskService } from '../services/task.service';
// Classes
import { Task } from '../classes/Task';

@Component({
  selector: 'view-2',
  templateUrl: './view2.template.html'
})

export class View2 {
  private tasks: Task[];

  constructor( private taskService: TaskService ) { 
    taskService.tasks.subscribe( data => {
      this.tasks = data;
    });
  }
}