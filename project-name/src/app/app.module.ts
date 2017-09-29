import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
// Components
import { AppComponentBasic } from './app.component.basic';
import { AppComponentSeparate } from './app.component.separate';
import { AppComponentHTTP } from './app.component.http';
import { Route1 } from './route1/route1.component';
import { Route2 } from './route2/route2.component';
import { Route3 } from './route3/route3.component';
// Services
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponentBasic,
    AppComponentSeparate,
    AppComponentHTTP,
    Route1,
    Route2,
    Route3
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'route1',
        component: Route1
      },
      {
        path: 'route2',
        component: Route2
      },
      {
        path: 'route3',
        component: Route3
      }
    ])
  ],

  providers: [ TaskService ],

  bootstrap: [ AppComponentHTTP ]
})

export class AppModule { }
