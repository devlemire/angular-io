import { Component } from '@angular/core';

let taskId = 2;

class Task { id: number; task: string; }

let Tasks: Task[] = [
  { id: 0, task: 'Take out the trash' },
  { id: 1, task: 'Walk the dog' }
];

@Component({
  selector: 'app-root',
  template:
  `
    <div class="parent">
      <div class="child">
        <ul>
          <li *ngFor="let task of tasks" (click)="selectedTask = task">{{ task.task }}</li>
        </ul>

        <button (click)="showNew = true">Create new Task</button>

        <div *ngIf="selectedTask">
          <br />
          <p>{{ selectedTask.id }}</p>
          <p>{{ selectedTask.task }}</p>
          <span>Update Task: </span><input [(ngModel)]="selectedTask.task" />
          <button (click)="removeTask( selectedTask.id )">Remove Task</button>
        </div>

        <div *ngIf="showNew">
          <br />
          <span>Task: </span><input [(ngModel)]="newTask" />
          <button (click)="addTask( newTask )">Create</button>
          <button (click)="showNew = false">Cancel</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
      .parent {
        width: 100%;
        padding: 10px;
        height: auto;
        min-height: 300px;
        display: flex;
        justify-content: center;
      }

      .child {
        width: auto;
        min-width: 300px;
      }

      .child ul {
        margin: 0 0 10px 0;
        padding-left: 15px;
      }

      .child ul > li {
        margin: 5px;
      }
  `]
})

export class AppComponentBasic {
  tasks: Task[];
  selectedTask: Task;
  showNew: boolean;
  newTask: string;

  constructor() {
    this.tasks = Tasks;
    this.selectedTask = null;
    this.showNew = false;
    this.newTask = '';
  }

  addTask( task ) {
    this.tasks.push({ id: taskId, task });
    taskId++;
  
    this.showNew = !this.showNew;
    this.newTask = "";
  }

  removeTask( id ) {
    let removeIndex = this.tasks.findIndex( task => task.id === id );
    this.tasks.splice( removeIndex, 1 );
    
    this.selectedTask = null;
  }
}