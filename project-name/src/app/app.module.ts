import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponentBasic } from './app.component.basic';
import { AppComponentSeparate } from './app.component.separate';

// Services
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponentBasic,
    AppComponentSeparate
  ],

  imports: [
    BrowserModule,
    FormsModule
  ],

  providers: [ TaskService ],

  bootstrap: [ AppComponentBasic ]
})

export class AppModule { }
