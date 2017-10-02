import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Forms Module is needed to use [(ngModel)]
import { FormsModule } from '@angular/forms';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
