import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Forms Module is needed to use [(ngModel)]
import { FormsModule } from '@angular/forms';

// Services - Needed for the providers array
import { TaskService } from './services/task.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Modules must be added to imports in order to be recognized
    FormsModule
  ],
  
  // Services must be added to the proivders array so they can be injected into components
  providers: [ TaskService ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
