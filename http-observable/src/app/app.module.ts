import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Forms Module is needed to use [(ngModel)]
import { FormsModule } from '@angular/forms';

// Services - Needed for the providers array
import { TaskService } from './services/task.service';

// HTTP Module is needed to make $http calls
import { HttpModule } from '@angular/http';

// Component(s)
import { AppComponent } from './app.component';
import { View2 } from './view2/view2.component';

@NgModule({
  declarations: [
    AppComponent,
    View2
  ],
  imports: [
    BrowserModule,
    // Modules must be added to imports in order to be recognized
    FormsModule,
    HttpModule
  ],
  
  // Services must be added to the proivders array so they can be injected into components
  providers: [ TaskService ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
