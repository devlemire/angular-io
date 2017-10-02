import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Router Module
import { RouterModule } from '@angular/router';

// Components
import { Route1 } from './route1/route1.component';
import { Route2 } from './route2/route2.component';
import { Route3 } from './route3/route3.component';

@NgModule({
  declarations: [
    AppComponent,
    Route1,
    Route2,
    Route3
  ],

  imports: [
    BrowserModule,
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

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
