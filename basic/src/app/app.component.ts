import { Component } from '@angular/core';

// Increment this after every new task is added to prevent a task having the same id as another task.
let taskId: number = 2;

// In typescript, it is good practice to define your data types. If your editor supports typescript, you'll receive errors
// without having to compile your code.
class Task { id: number; task: string; }

@Component({
  selector: 'app-root',
  template:
  `
    <div class="parent">
      <div class="child">
        <ul>
          <li *ngFor="let task of tasks" (click)="selectedTask = task; showNew = false;">{{ task.task }}</li>
        </ul>

        <button class="Task__btn-create" (click)="showNew = true; selectedTask = null;">+</button>

        <div *ngIf="selectedTask">
          <p>{{ selectedTask.id }}</p>
          <p>{{ selectedTask.task }}</p>
          <span>Update Task: </span><input [(ngModel)]="selectedTask.task" />
          <button (click)="removeTask( selectedTask.id )">Remove Task</button>
          <button (click)="selectedTask = null">Close</button>
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
        align-items: flex-start;
        box-sizing: border-box;
      }

      .child {
        width: auto;
        min-width: 380px;
        box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.75);
        background-color: #F2F2F2;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: auto;
        padding: 10px 10px 15px 10px;
      }

      .child ul {
        list-style: none;
        padding: 0px;
        margin: 0px;
        width: 100%;
        margin-bottom: 10px;
      }

      .child ul > li {
        margin: 5px 0px 10px 0px;
        background-color: #FFF;
        padding: 5px;
        box-shadow: 0px 1px 0.3px 0px rgba(0,0,0,0.75);
        cursor: pointer;
      }

      .Task__btn-create {
        border-radius: 10px;
        border: none;
        font-size: 21px;
        padding: 4px 20px;
        box-shadow: 0px 1px 0.3px 0px rgba(0,0,0,0.75)
      }
  `]
})

export class AppComponent {
  private tasks: Task[] = [ { id: 0, task: 'Take out the trash' }, { id: 1, task: 'Walk the dog' } ];
  private selectedTask: Task = null;
  private showNew: Boolean = false;
  private newTask: String = '';

  addTask( task: string ): void {
    this.tasks.push({ id: taskId, task });
    taskId++;
  
    this.showNew = !this.showNew;
    this.newTask = "";
  }

  removeTask( id: number ): void {
    let removeIndex = this.tasks.findIndex( task => task.id === id );
    this.tasks.splice( removeIndex, 1 );
    
    this.selectedTask = null;
    this.showNew = false;
  }
}